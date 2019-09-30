import React from 'react'
import Skin from "../Skin";

const List = ({skins = [], sizeSkin, onClickSkin}) => (
    <div className="list">
        {skins.map((item, idx) => <Skin key={idx} {...{item, sizeSkin, onClick: onClickSkin}}/>)}
    </div>
)

export default List