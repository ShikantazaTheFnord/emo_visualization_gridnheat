import './ControllsContainer.css';


export function ControllsContainer({cVAV,cHeatV}) {

    return (
        <div className="ControllsContainer">
            <button className="ControllsButton">start</button>
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

            <button className="ControllsButton">stop</button>
        </div>
    );
}