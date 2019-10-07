import React from 'react'

const Withdraw = (props) => (
    <React.Fragment>
        <div>
            <p>Для более безопасного обмена вы можете использовать наше anti scam расширение</p>
            <button onClick={props.onTest}>test</button>
            <div className="check-box">
                <div>
                    <i className="fa fa-check-circle-o fa-2x text-success"/>
                    <span>Получение обмена</span>
                </div>
                <div>
                    <i className="fa fa-check-circle-o fa-2x text-success"/>
                    <span>Резервация предметов</span>
                </div>
            </div>
            <div className="list-box">
                <div>
                    <i className="fa fa-check-circle-o text-success"/>
                    <span>Bot #810</span>
                    <span>Зарегистрирован: 18.06.16</span>
                </div>
                <div>
                    <i className="fa fa-check-circle-o text-success"/>
                    <span>Bot #811</span>
                    <span>Зарегистрирован: 18.06.16</span>
                </div>
                <div>
                    <i className="fa fa-check-circle-o text-success"/>
                    <span>Bot #812</span>
                    <span>Зарегистрирован: 18.06.16</span>
                </div>
                <div>
                    <i className="fa fa-spinner fa-spin"/>
                    <span>Bot #821</span>
                    <a href="/">Подтвердить</a>
                </div>
                <div>
                    <i className="fa fa-spinner fa-spin"/>
                    <span>Bot #822</span>
                    <a href="/">Подтвердить</a>
                </div>
                <div>
                    <i className="fa fa-spinner fa-spin"/>
                    <span>Bot #823</span>
                    <a href="/">Подтвердить</a>
                </div>
            </div>
        </div>
    </React.Fragment>
)

export default Withdraw