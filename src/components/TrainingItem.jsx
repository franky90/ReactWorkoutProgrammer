import React from 'react'
import "./TrainingItem.css"



function TrainingItem({title, imageUrl}){
    return(
<div className="training-item">
<div className="background-image" />
    {/* // style={{backgroundImage: "url(../images/chest.jpg)"}} /> */}
    <div className="content">
    
                    <h1 className="title">{title.toUpperCase()}</h1>
                    <span className="subtitle">SHOP NOW</span>
                 </div>
</div>
    )
}

export default TrainingItem;