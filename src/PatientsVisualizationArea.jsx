import {VideoContainer} from "./VideoContainer";
import {ControllsContainer} from "./ControllsContainer";
import React, {useState} from "react";
import GridLayout from "react-grid-layout";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";
import "./ChartContainer.css";
import {VaSVG} from "./VaSVG";
import {HeatJS} from "./HeatJS";
import Webcam from "react-webcam";


export function PatientsVisualizationArea() {

    const [vaVisibility, setVaVisibility] = useState(false);
    const [heatVisibility, setHeatVisibility] = useState(false);
    const [biggestEmotion, setBiggestEmotion] = useState("happy");
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
    const [emoRank, setEmoRank] = useState([
        {name: 'happy', rank: 3},
        {name: 'anger', rank: 3},
        {name: 'contempt', rank: 3},
        {name: 'disgust', rank: 3},
        {name: 'fear', rank: 3},
        {name: 'neutral', rank: 3},
        {name: 'sad', rank: 3},
        {name: 'surprised', rank: 3}
    ])


    const [emoSeriesIndex, setEmoSeriesIndex] = useState(0)


    const layout = [
        {i: "vid", x: 0, y: 0, w: 6, h: 1},
        {i: "ctrl", x: 6, y: 0, w: 1, h: 1},
        {i: "va", x: 7, y: 0, w: 4, h: 1, isResizable: false},
        {i: "heat", x: 11, y: 0, w: 4, h: 1, isResizable: false}
    ];


    /*Anfang aus heatjs: mittels getEmoIndex aus Emotion
    * Index von extdata ermitteln,
    * wird in incrementExtdataValue genutzt
    * */

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
        let locExtdata = extdata
        let locEmoRank = emoRank
        let biggestEmoIndex = getEmoIndex()
        locEmoRank[biggestEmoIndex].rank = 3
        setEmoRank(locEmoRank)
        locExtdata[biggestEmoIndex].value += 1
        setExtdata(locExtdata)
    }

    //Ende aus heatjs **********************************


    //mock-data
    const emoSeries = [
        "sad", "sad", "sad", "sad",
        "disgust", "contempt", "anger", "anger",
        "anger", "neutral", "neutral", "neutral", "neutral", "neutral", "neutral", "neutral",
        "neutral", "neutral", "neutral", "neutral", "neutral", "neutral", "neutral", "neutral", "neutral",
        "neutral", "neutral", "neutral", "neutral", "neutral", "neutral", "neutral",
        "neutral", "neutral", "neutral", "neutral", "neutral", "neutral", "neutral", "neutral", "neutral",
        "neutral", "neutral", "neutral", "neutral", "neutral", "neutral", "neutral",
        "neutral", "neutral", "neutral", "neutral", "neutral", "neutral", "neutral", "neutral", "neutral",
        "neutral", "neutral", "neutral", "neutral", "neutral", "neutral", "neutral",
        "neutral", "neutral", "neutral", "neutral", "neutral", "neutral", "neutral", "neutral", "neutral",
        "neutral", "neutral", "neutral", "neutral", "neutral", "neutral", "neutral",
        "neutral", "neutral", "neutral", "neutral", "neutral", "neutral", "neutral", "neutral", "neutral",
        "neutral", "neutral", "neutral", "neutral", "neutral", "neutral", "neutral",
        "neutral", "neutral", "neutral", "neutral", "neutral", "neutral", "neutral", "neutral", "neutral",
    ]

    function decrementExtdataValue() {
        let speci = getEmoIndex()
        let locEmoRank = emoRank
        let locExtdata = extdata

        for (let i = 0; i < extdata.length; i++) {
            console.log("i...." + i)
            if (i !== speci) {

                switch (emoRank[i].rank) {
                    case 3:
                        locEmoRank[i].rank = locEmoRank[i].rank - 1
                        setEmoRank(locEmoRank)
                        break
                    case 2:
                        locEmoRank[i].rank = locEmoRank[i].rank - 1
                        setEmoRank(locEmoRank)
                        break
                    case 1:
                        if (locExtdata[i].value > -1) {
                            locExtdata[i].value = locExtdata[i].value - 1
                        }
                        setExtdata(locExtdata)
                        break
                }
            }
        }
        console.log(speci)
        console.log(extdata)
        console.log(emoRank)
    }


    /*    function randomEmotion() {
            let emos = ["sad", "disgust", "contempt", "anger", "fear", "surprised", "happy"]
            let z = Math.floor(Math.random() * 7)

            return emos[z]
        }*/

    function mockEmotion() {
        let outp
        (emoSeriesIndex < emoSeries.length) ? outp = emoSeries[emoSeriesIndex] : outp = emoSeries[0]
        let newMockIndex
        (emoSeriesIndex < emoSeries.length) ? newMockIndex = emoSeriesIndex + 1 : newMockIndex = 0
        setEmoSeriesIndex(newMockIndex)
        return outp
    }

    function changeBiggestEmotion(be) {
        incrementExtdataValue()
        decrementExtdataValue()
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
                <Webcam height={400} width={500}/>
            </div>

            <div key="ctrl">
                <ControllsContainer
                    cBE={() => changeBiggestEmotion(mockEmotion())}
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