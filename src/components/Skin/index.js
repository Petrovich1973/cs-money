import React from 'react'

const Skin = ({item, sizeSkin, onClick}) => (
    <div
        onClick={() => onClick(item)}
        className="skin bg-dark text-light" style={{width: sizeSkin, height: sizeSkin}}>
        {item}
    </div>
)

export default Skin