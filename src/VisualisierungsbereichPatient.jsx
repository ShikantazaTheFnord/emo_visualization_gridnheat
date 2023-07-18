import {VideoContainer} from "./VideoContainer";
import {ControllsContainer} from "./ControllsContainer";
import React, {useState} from "react";
import GridLayout from "react-grid-layout";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";
import "./ChartContainer.css";
import {VaSVG} from "./VaSVG";
import {HeatJS} from "./HeatJS";


export function VisualisierungsbereichPatient() {

    const [vaVisibility, setVaVisibility] = useState(false);
    const [heatVisibility, setHeatVisibility] = useState(false);
    const [biggestEmotion, setBiggestEmotion] = useState("neutral");

    const layout = [
        {i: "vid", x: 0, y: 0, w: 3, h: 1},
        {i: "ctrl", x: 3, y: 0, w: 1, h: 1},
        {i: "va", x: 4, y: 0, w: 4, h: 1, isResizable: false},
        {i: "heat", x: 8, y: 0, w: 4, h: 1, isResizable: false}
    ];


    function randomEmotion() {
        let emos = ["sad", "disgust", "contempt", "anger", "fear", "surprised", "happy"]
        let z = Math.floor(Math.random() * 7)
        return emos[z]
    }

    function changeBiggestEmotion(be) {
        console.log("in pvb......" + be)
        setBiggestEmotion(be)
    }

    function changeVaVisibility() {
        let newValue = (!vaVisibility);
        setVaVisibility(newValue)
    }

    function changeHeatVisibility() {
        let newValue = (!heatVisibility);
        setHeatVisibility(newValue)
    }

    return (
        <GridLayout
            className="layout"
            layout={layout}
            cols={16}
            rowHeight={400}
            width={1700}
        >
            <div key="vid">
                <VideoContainer/>
            </div>

            <div key="ctrl">
                <ControllsContainer
                    cBE={() => changeBiggestEmotion(randomEmotion())}
                    cVAV={() => changeVaVisibility()}
                    cHeatV={() => changeHeatVisibility()}
                    showRandom={()=>randomEmotion()}
                />
            </div>
            <div key="va" hidden={!vaVisibility}>
                <div className="ChartContainer">
                    <VaSVG emotion={biggestEmotion}/>
                </div>
            </div>
            <div key="heat" hidden={!heatVisibility}>
                <div className="ChartContainer">
                    <HeatJS emotion={biggestEmotion}/>
                </div>
            </div>
        </GridLayout>
    );
}