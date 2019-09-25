import React from 'react';
import {connect} from 'react-redux';

import Header from "./components/Header";
import Footer from "./components/Footer";
import Wizard from "./components/Wizard";

import {actionTypes as types, app_name} from './constants';

const App = (props) => {

    console.log(props)
    const handleChangeCurrent = () => {
        props.dispatch({
            type: types.APP_UPDATE,
            payload: {
                currentStep: 22222222
            }
        })
    }

    return (
        <React.Fragment>

            <Header/>

            <section id={'content'}>

                <Wizard>
                    <p>{app_name} — {props.app.currentStep}</p>
                    <button onClick={handleChangeCurrent}>action</button>
                </Wizard>

            </section>

            <Footer/>

        </React.Fragment>
    );
}

export default connect(store => {
    return {
        app: store.app,
    };
})(App);
