import React from 'react'
import "./TrainingItem.css"



function TrainingItem({title, imageUrl}){
    return(
<div className="training-item">
<div className="background-image" style={{backgroundImage: `url(${imageUrl})`}}/>
    <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
    </div>
</div>
    )
}

export default TrainingItem;