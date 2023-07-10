import {ChartContainer} from "./ChartContainer";
import './VisualisierungsbereichPatient.css';
import {VideoContainer} from "./VideoContainer";
import {ControllsContainer} from "./ControllsContainer";
import {useState} from "react";

export function VisualisierungsbereichPatient() {

    const [vaVisibility, setVaVisibility] = useState(false);
    const [heatVisibility, setHeatVisibility] = useState(false);

    function changeVaVisibility() {
        let newValue = (vaVisibility) ? false : true;
        setVaVisibility(newValue)
    }

    function changeHeatVisibility() {
        let newValue = (heatVisibility) ? false : true;
        setHeatVisibility(newValue)
    }

    return (
        <div className="VisualisierungsbereichPatient">
            <VideoContainer/>
            <ControllsContainer
                cVAV={() => changeVaVisibility()}
                cHeatV={() => changeHeatVisibility()}
            />
            <ChartContainer vaVisible={vaVisibility} heatVisible={heatVisibility}/>
        </div>

    );
}