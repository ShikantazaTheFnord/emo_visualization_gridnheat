import {VideoContainer} from "./VideoContainer";
import {ControllsContainer} from "./ControllsContainer";
import {useState} from "react";
import GridLayout from "react-grid-layout";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";
import "./ChartContainer.css";

export function VisualisierungsbereichPatient() {

    const layout = [
        {i: "vid", x: 0, y: 0, w: 3, h: 1},
        {i: "ctrl", x: 3, y: 0, w: 1, h: 1},
        {i: "va", x: 4, y: 0, w: 4, h: 1},
        {i: "heat", x: 8, y: 0, w: 6, h: 1}
    ];

    const [vaVisibility, setVaVisibility] = useState(false);
    const [heatVisibility, setHeatVisibility] = useState(false);

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
            rowHeight={300}
            width={1700}
        >
            <div key="vid">
                <VideoContainer/>
            </div>

            <div key="ctrl">
                <ControllsContainer
                    cVAV={() => changeVaVisibility()}
                    cHeatV={() => changeHeatVisibility()}
                />
            </div>
            <div key="va" hidden={!vaVisibility}>
                <div className="ChartContainer">
                    VA
                </div>
            </div>
            <div key="heat"  hidden={!heatVisibility}>
                <div className="ChartContainer">
                    Heat
                </div>
            </div>
        </GridLayout>
    );
}