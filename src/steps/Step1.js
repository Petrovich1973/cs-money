import React from 'react'

const Step1 = ({stepsNav: {label = 'empty'}}) => (
    <div className={'step step-simple'}>
        <h2>{label}</h2>
        <button className="btn btn-secondary">Авторизация через Steam</button>
    </div>
)

export default Step1