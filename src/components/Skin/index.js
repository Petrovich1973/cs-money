import React from 'react'

const Skin = ({item, sizeSkin, onClick}) => (
    <div
        onClick={() => onClick(item)}
        className="skin bg-dark text-light" style={{width: sizeSkin, height: sizeSkin}}>
        {item}
        <div className="popup">
            <p>Lorem text</p>
            <p>Lorem text</p>
            <p>Lorem text</p>
            <p>Lorem text</p>
            <p>Lorem text</p>
            <p>Lorem text</p>
            <p>Lorem text</p>
        </div>
    </div>
)

export default Skin