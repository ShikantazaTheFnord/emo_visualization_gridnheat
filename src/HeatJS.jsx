import h337 from "heatmap.js";
import {useEffect, useState} from "react";
import './HeatJS.css'

export function HeatJS(props) {

    const emoMap = new Map()
    emoMap.set('happy',0)
    emoMap.set('anger',1)
    emoMap.set('contempt',2)
    emoMap.set('disgust',3)
    emoMap.set('fear',4)
    emoMap.set('neutral',5)
    emoMap.set('sad',6)
    emoMap.set('surprised',7)

    var extdata = [
        {x: 350, y: 190, value: -1}, // happy
        {x: 90, y: 50, value: -1}, //anger
        {x: 50, y: 80, value: -1}, //contempt
        {x: 20, y: 120, value: -1}, //disgust
        {x: 170, y: 15, value: -1}, //fear
        {x: 200, y: 200, value: -1}, //neutral
        {x: 20, y: 250, value: -1}, //sad
        {x: 240, y: 40, value: -1} //surprised
    ]

    var heatmap;

    useEffect(()=>{

        heatmap = h337.create({
            container: document.querySelector('.heatmap')
        });

        var nuConfig = {
            radius: 20,
            maxOpacity: 5,
            minOpacity: 0,
            blur: .75
        }

        heatmap.configure(nuConfig);


        heatmap.setData({
            max: 15,
            data: extdata
        });

    })


    function showEmo() {
        console.log(props)
    }

    function incrementHappy() {
        extdata[0].value += 1
        heatmap.setData({
            max: 15,
            data: extdata
        });
    }

    function incrementSomething() {
        extdata[emoMap.get(props.emotion)].value += 1
        console.log(emoMap.get(props.emotion))
        heatmap.setData({
            max: 15,
            data: extdata
        });
    }


    return (
        <>
            <div className="heatmap" id="cc">
            </div>
            <button onClick={() => incrementSomething()}>increment something</button>
            <button onClick={() => showEmo()}>show</button>
        </>

    )
}
