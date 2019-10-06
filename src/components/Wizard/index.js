import React from 'react'
import ItemNav from './ItemNav'
import Step1 from "../../steps/Step1"
import Step2 from "../../steps/Step2"
import Step3 from "../../steps/Step3"
import Step4 from "../../steps/Step4"
import Step5 from "../../steps/Step5"
import Filter from "../Filter";
import List from "../List";

const Wizard = ({current = 0, stepsNav = {}, selectYou, selectBot, sizeSkin, onClick, onClickSkin, onWithdraw}) => {

    const steps = [
        Step1,
        Step2,
        Step3,
        Step4,
        Step5,
    ]

    const stepsNavList = Object.keys(stepsNav).map(el => ({...stepsNav[el], step: +el, current}))

    const visibleElementsSide = current === 2 || current === 3

    return (
        <div className={'wizard'}>
            <nav className="wizard-nav">
                {stepsNavList.map((item, idx) => <ItemNav key={idx} {...{...item, onClick: onClick}}/>)}
            </nav>
            <div className="content">
                {visibleElementsSide ? <Filter/> : null}
                {React.createElement(steps[current], {stepsNav: stepsNav[current], sizeSkin, onClickSkin})}
                {visibleElementsSide ? <div className="selected">
                    <div className="selected-you">
                        <h4>
                            <span>Выбранные скины твои</span>
                            <span className="controls-btn">
                                <button>Продать</button>
                                <button onClick={onWithdraw}>Вывести</button>
                            </span>
                        </h4>
                        <List {...{skins: selectYou, onClickSkin}}/>
                    </div>
                    <div className="selected-bot">
                        <h4>
                            <span>Выбранные скины бота</span>
                            <span className="controls-btn"><button>Купить</button><button>Обменять</button></span>
                        </h4>
                        <List {...{skins: selectBot, onClickSkin}}/>
                    </div>
                </div> : null}
            </div>
            <nav className="wizard-nav-bottom">
                {current > 0 ?
                    <div onClick={() => onClick(current - 1)} className="btn">
                        <i className="fa fa-angle-left fa-5x"/>
                    </div> : null}
                <div/>
                {current < stepsNavList.length - 1 ?
                    <div onClick={() => onClick(current + 1)} className="btn">
                        <i className="fa fa-angle-right fa-5x"/>
                    </div> : null}
            </nav>
        </div>
    )
}

export default Wizard