import React from 'react'

const Step5 = ({stepsNav: {label = 'empty'}}) => (
    <div className={'step step-simple'}>
        <h2>{label}</h2>
        <div>подтверждение</div>
    </div>
)

export default Step5