import {actionTypes as types,} from '../constants';

const arr = [...new Array(800).keys('')].map((el, i) => i)

const initialState = {

    stepsNav: {
        0: {
            label: 'Авторизуйтесь через Steam',
            nav: 'Войти через Steam',
            status: null
        },
        1: {
            label: 'Введите ссылку на обмен',
            nav: 'Ввести ссылку на обмен',
            status: null
        },
        2: {
            label: 'Выберите свои скины для обмена',
            nav: 'Выбрать свои скины',
            skins: [1,2,3,4,5],
            status: null
        },
        3: {
            label: 'Выберите скины бота для обмена',
            nav: 'Выбрать скины бота',
            skins: arr,
            status: null
        },
        4: {
            label: 'Подтверждение обмена',
            nav: 'Подтвердить обмен',
            status: null
        }
    },
    currentStep: 0,
    sizeSkin: 142,
    selectYou: [1,2,3,4,5,6],
    selectBot: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],

    modals: [],
    hideErrors: [],
    errors: [],
    spinner: false,
};

export default function reducer(state = initialState, action) {

    switch (action.type) {
        case types.APP_UPDATE: {
            return {
                ...state,
                ...action.payload,
            };
        }
        default:
            return state
    }
}