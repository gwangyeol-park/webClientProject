import React from 'react';
import '../assets/css/Reset.css';
import '../assets/css/CardItem.css';


const CardItem = (props) => {
  return (
    <>
      <div>
        <div className="card_img_div"><img className='card_img' src={require("../assets/img/360_F_245543965_Tk4wCBGUT8Qujg0jKAUfbzjEQQ52svIB.jpg")}></img></div>
        <h5 className='card_title'>{props.item.title}</h5>
        <p className='card_summary'>{props.item.content}</p>
      </div>
    </>
  )
}

export default CardItem