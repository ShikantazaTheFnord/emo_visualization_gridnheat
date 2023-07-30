import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import {PatientsVisualizationArea} from "../PatientsVisualizationArea";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/PatientsVisualizationArea">
                <PatientsVisualizationArea/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews