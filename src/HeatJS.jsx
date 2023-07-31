import h337 from "heatmap.js";
import {useEffect, useState} from "react";
import './HeatJS.css'

export function HeatJS(props) {

    // eslint-disable-next-line no-unused-vars
    const [locextdata, __] = useState(props.extdata)


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
                '.85': 'darkmagenta'*/
                '.05': 'white',
                '.2': 'green',
                '.3': 'yellow',
                '.6': 'red',
                '.85': 'darkmagenta'
            }
        }

        heatmap.configure(nuConfig);

        heatmap.setData({
            max: 5,
            min: 0,
            data: locextdata
        });

        console.log("console heatjs:")
        console.log(locextdata)

    })


    /*
    * aus dem useEffect:
    *         function logger() {
            console.log(locextdata)
        }

        logger()
    *
    * */

    return (
        <div className="heatmap">
        </div>
    )
}
