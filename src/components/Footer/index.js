import React from 'react'

const Footer = () => (
    <footer className="navbar navbar-expand navbar-light bg-light text-dark">
        <a className="navbar-brand mr-auto mr-lg-0" href="/">CS <span className="bg-danger dot"/> MONEY</a>
        <ul className="navbar-nav mr-auto links">
            <li className="nav-item">
                <a className="nav-link" href="/">Условия использования</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/">Bug bounty</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/">Политика приватности</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/">Сookie policy</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/">Вакансии</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/">Статистика</a>
            </li>
        </ul>
        <div className="form-inline my-2 my-lg-0">
            <ul className="navbar-right">
                <li className="nav-link pay">
                    <i className="fa fa-cc-mastercard"/>
                    <i className="fa fa-cc-visa"/>
                    <i className="fa fa-money"/>
                </li>
                <li className="nav-link social">
                    <i className="fa fa-instagram"/>
                    <i className="fa fa-twitter"/>
                    <i className="fa fa-vk"/>
                    <i className="fa fa-facebook"/>
                    <i className="fa fa-steam"/>
                </li>
            </ul>

        </div>
    </footer>
)

export default Footer