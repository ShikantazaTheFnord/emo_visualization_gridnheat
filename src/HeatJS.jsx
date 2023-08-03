import h337 from "heatmap.js";
import {useEffect} from "react";
import './HeatJS.css'

export function HeatJS(props) {

    const locextdata = props.extdata

    useEffect(() => {
        var heatmap = h337.create({
            container: document.querySelector('.heatmap')
        });


        var nuConfig = {
            radius: 15,
            maxOpacity: 0.5,
            minOpacity: 0,
            blur: 0.75,
            gradient: {
                // enter n keys between 0 and 1 here
                // for gradient color customization
                /*'.05': 'white',
                '.2': 'green',
                '.4': 'darkgreen',
                '.6': 'yellow',
                '.65': 'orange',
                '.8': 'red',
                '.85': 'darkmagenta'
                '.05': 'white',*/
                '.2': 'green',
                '.3': 'yellow',
                '.4': 'orange',
                '.6': 'red',
                '.85': 'darkmagenta'
            }
        }

        heatmap.configure(nuConfig);

        heatmap.setData({
            max: 8,
            min: 0,
            data: locextdata
        });


        return () => {
            let el = document.querySelector('.heatmap-canvas')
            el.remove()
        }

    });


    return (
        <div className="heatmap">
        </div>
    )
}
