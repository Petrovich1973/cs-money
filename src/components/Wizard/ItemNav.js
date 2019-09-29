import React from 'react'
import classNames from 'classnames'

const ItemNav = ({step = 0, nav = 'label step', current, onClick}) => {

    return (
        <div className={'nav-item'} onClick={() => onClick(step)}>
            <div className={classNames("nav-round", {'bg-dark text-light': current === step})}>{step + 1}</div>
            <div className="nav-description">{nav}</div>
        </div>
    )
}

export default ItemNav