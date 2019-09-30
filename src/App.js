import React from 'react'
import {connect} from 'react-redux'

import Header from "./components/Header"
import Footer from "./components/Footer"
import Wizard from "./components/Wizard"

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

    const {currentStep, stepsNav, sizeSkin, selectYou, selectBot} = props.app

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
                    onClickSkin: onClickSkin
                }}/>

            </main>

            <Footer/>

        </React.Fragment>
    );
}

export default connect(store => {
    return {
        app: store.app,
    }
})(App);
