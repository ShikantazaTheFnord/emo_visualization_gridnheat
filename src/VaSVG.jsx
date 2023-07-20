export function VaSVG(props) {

    const emoToCoordinatesMap = new Map();
    emoToCoordinatesMap.set("happy", [350, 190])
    emoToCoordinatesMap.set("anger", [90, 50])
    emoToCoordinatesMap.set("contempt", [50, 80])
    emoToCoordinatesMap.set("disgust", [20, 120])
    emoToCoordinatesMap.set("fear", [170, 15])
    emoToCoordinatesMap.set("neutral", [200, 200])
    emoToCoordinatesMap.set("sad", [20, 250])
    emoToCoordinatesMap.set("surprised", [240, 40])


    const indicatorPosX = emoToCoordinatesMap.get(props.emotion)[0]
    const indicatorPosY = emoToCoordinatesMap.get(props.emotion)[1]

    return (
        <>
            <svg width="400" height="400">
                <circle cx="200" cy="200" r="200" stroke="black" strokeWidth="1" fill="white"/>
                <line x1="200" y1="0" x2="200" y2="400" style={{stroke: 'black', strokeWidth: 1}}/>
                <line x1="0" y1="200" x2="400" y2="200" style={{stroke: 'black', strokeWidth: 1}}/>
                <text x="350" y="190">happy</text>
                <text x="90" y="50">anger</text>
                <text x="50" y="80">contempt</text>
                <text x="20" y="120">disgust</text>
                <text x="170" y="15">fear</text>
                <text x="200" y="200">neutral</text>
                <text x="20" y="250">sad</text>
                <text x="240" y="40">surprised</text>
                <circle id="indicator" cx={indicatorPosX} cy={indicatorPosY} r="10" stroke="red" strokeWidth="1"
                        fill="red"
                        fillOpacity="0.1"/>
            </svg>
        </>
    )
}