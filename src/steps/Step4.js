import React from 'react'
import List from "../components/List";

const Step4 = ({stepsNav: {label = 'empty', skins = []}, sizeSkin = 50, onClickSkin}) => {
    return (
        <div className={'step step-selected'}>
            <h2>{label}</h2>
            <List {...{skins, sizeSkin, onClickSkin}}/>
        </div>
    )
}

export default Step4