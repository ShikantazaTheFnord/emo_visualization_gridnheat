import './ControllsContainer.css';


export function ControllsContainer({cVAV,cHeatV,cBE}) {

    return (
        <div className="ControllsContainer">
            <button className="ControllsButton" onClick={cBE}>{"\u2BC8"}</button>
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
            <button className="ControllsButton">{"\u2BC0"}</button>
        </div>
    );
}