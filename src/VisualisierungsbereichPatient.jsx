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
    const [extdata, setExtdata] = useState([
        {x: 350, y: 190, value: -1}, // happy
        {x: 90, y: 50, value: -1}, //anger
        {x: 50, y: 80, value: -1}, //contempt
        {x: 20, y: 120, value: -1}, //disgust
        {x: 170, y: 15, value: -1}, //fear
        {x: 200, y: 200, value: -1}, //neutral
        {x: 20, y: 250, value: -1}, //sad
        {x: 240, y: 40, value: -1} //surprised
    ])


    const layout = [
        {i: "vid", x: 0, y: 0, w: 3, h: 1},
        {i: "ctrl", x: 3, y: 0, w: 1, h: 1},
        {i: "va", x: 4, y: 0, w: 4, h: 1, isResizable: false},
        {i: "heat", x: 8, y: 0, w: 4, h: 1, isResizable: false}
    ];


    /*Anfang aus heatjs*/
    const emoMap = new Map()
    emoMap.set('happy', 0)
    emoMap.set('anger', 1)
    emoMap.set('contempt', 2)
    emoMap.set('disgust', 3)
    emoMap.set('fear', 4)
    emoMap.set('neutral', 5)
    emoMap.set('sad', 6)
    emoMap.set('surprised', 7)


    const getEmoIndex = () => emoMap.get(biggestEmotion);

    function incrementExtdataValue() {

        let locExtdata = extdata;
        locExtdata[getEmoIndex()].value += 1
        setExtdata(locExtdata)
    }
    //Ende aus heatjs


    function randomEmotion() {
        let emos = ["sad", "disgust", "contempt", "anger", "fear", "surprised", "happy"]
        let z = Math.floor(Math.random() * 7)

        return emos[z]
    }

    function changeBiggestEmotion(be) {
        incrementExtdataValue()
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
                />
            </div>
            <div key="va" hidden={!vaVisibility}>
                <div className="ChartContainer">
                    <VaSVG emotion={biggestEmotion}/>
                </div>
            </div>
            <div key="heat" hidden={!heatVisibility}>
                <div className="ChartContainer">
                    <HeatJS extdata={extdata}/>
                </div>
            </div>
        </GridLayout>
    );
}