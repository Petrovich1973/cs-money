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

    const {currentStep, stepsNav} = props.app

    return (
        <React.Fragment>

            <Header/>

            <main>

                <Wizard {...{current: currentStep, stepsNav, onClcik: handleChangeCurrent}}/>

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
