import React, {useState} from 'react'
import ItemNav from './ItemNav'
import Step1 from "../../steps/Step1"
import Step2 from "../../steps/Step2"
import Step3 from "../../steps/Step3"
import Step4 from "../../steps/Step4"
import Step5 from "../../steps/Step5"

const Wizard = ({current = 0, stepsNav = {}, onClcik}) => {

    const steps = [
        <Step1/>,
        <Step2/>,
        <Step3/>,
        <Step4/>,
        <Step5/>,
    ]

    console.log()

    const stepsNavList = Object.keys(stepsNav).map(el => ({...stepsNav[el], step: +el, current}))

    return (
        <div className={'wizard'}>
            <nav className="wizard-nav">
                {stepsNavList.map((item, idx) => <ItemNav key={idx} {...{...item, onClick: onClcik}}/>)}
            </nav>
            {steps[current]}
        </div>
    )
}

export default Wizard