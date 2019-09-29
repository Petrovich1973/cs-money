import React from 'react'

const Step2 = () => (
    <div className={'step step-simple'}>
        <h2>Введите ссылку на обмен</h2>
        <div className="input-group mb-3" style={{maxWidth: '800px'}}>
            <div className="input-group-prepend">
                <span className="input-group-text">ссылка на обмен</span>
            </div>
            <input type="text" className="form-control" placeholder={'https://steamcommunity.com/tradeoffer/new/?partner=3865645647&token=Wk4u9PHw'}/>
        </div>
    </div>
)

export default Step2