import './ChartContainer.css';

export function ChartContainer({vaVisible, heatVisible}) {

    return (
        <>
            <div className="ChartContainer" hidden={!vaVisible}>
                VA
            </div>

            <div className="ChartContainer" hidden={!heatVisible}>
                Heat
            </div>
        </>
    );
}