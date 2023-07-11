import './ChartContainer.css';
import GridLayout from "react-grid-layout";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";

export function ChartContainer({vaVisible, heatVisible}) {

    const layout = [
        { i: "va", x: 0, y: 0, w: 4, h: 2 },
        { i: "heat", x: 5, y: 0, w: 8, h: 2 }
    ];

    return (
        <GridLayout
            className="layout"
            layout={layout}
            cols={14}
            rowHeight={200}
            width={1300}
        >
            <div className="ChartContainer" key="va" hidden={!vaVisible}>
                VA
            </div>

            <div className="ChartContainer" key="heat" hidden={!heatVisible}>
                Heat
            </div>
        </GridLayout>
    );
}