import './ControllsContainer.css';


export function ControllsContainer({cVAV, cHeatV, visStartInterval, visStopInterval}) {

    return (
        <div className="ControllsContainer">
            <button className="ControllsButton" onClick={() => visStartInterval()}>{"\u2BC8"}</button>
            <div className="ChartCheckbox">
                <label>
                    VA
                </label>
                <input type="checkbox" name="chartCheckbox" onChange={cVAV}/>
            </div>
            <div className="ChartCheckbox">
                <label>
                    Heat
                </label>
                <input type="checkbox" name="chartCheckbox" onChange={cHeatV}/>
            </div>
            <button className="ControllsButton" onClick={() => visStopInterval()}>{"\u2BC0"}</button>
        </div>
    );
}