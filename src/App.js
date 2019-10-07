import React from 'react'
import {connect} from 'react-redux'

import Header from "./components/Header"
import Footer from "./components/Footer"
import Wizard from "./components/Wizard"

import Dialog from "./components/Dialog";
import Withdraw from "./components/Withdraw";

import {actionTypes as types, app_name} from './constants'

const App = (props) => {

    const handleChangeCurrent = step => {
        props.dispatch({
            type: types.APP_UPDATE,
            payload: {
                currentStep: step
            }
        })
    }

    const onClickSkin = skin => {
        alert('еще не реализовано!')
        // props.dispatch({
        //     type: types.APP_UPDATE,
        //     payload: {
        //         currentStep: skin
        //     }
        // })
    }

    const onTest = () => {
        console.log('onTest')
    }

    const onWithdraw = () => {
        const {modals} = props.app
        const modal = {
            title: 'ОЖИДАНИЕ ОБМЕНА',
            content: <Withdraw onTest={onTest}/>
        }
        const newModals = modals.concat(modal)

        props.dispatch({
            type: types.APP_UPDATE,
            payload: {
                modals: newModals
            }
        })
    }

    const onCloseModal = (idx) => {
        const {modals} = props.app

        props.dispatch({
            type: types.APP_UPDATE,
            payload: {
                modals: modals.filter((el, i) => i !== idx)
            }
        })
    }

    const {currentStep, stepsNav, sizeSkin, selectYou, selectBot, modals} = props.app

    return (
        <React.Fragment>

            <Header title={app_name}/>

            <main>

                <Wizard {...{
                    current: currentStep,
                    sizeSkin,
                    selectYou,
                    selectBot,
                    stepsNav,
                    onClick: handleChangeCurrent,
                    onClickSkin: onClickSkin,
                    onWithdraw: onWithdraw
                }}/>

            </main>

            <Footer/>

            {modals.length
                ? <div style={{position: 'absolute', zIndex: 1000}}>
                    {modals.map((dialog, idx) => <Dialog
                        title={dialog.title}
                        key={idx}
                        idx={idx}
                    onCloseModal={onCloseModal}>
                        {dialog.content}
                    </Dialog>)}
                </div>
                : null}

        </React.Fragment>
    );
}

export default connect(store => {
    return {
        app: store.app,
    }
})(App);
