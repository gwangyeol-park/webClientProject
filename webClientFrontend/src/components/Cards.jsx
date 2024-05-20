import React, { useEffect, useState } from 'react'
import '../assets/css/Reset.css';
import '../assets/css/Cards.css';
import '../assets/css/CardItem.css';
import CardItem from './CardItem.jsx';
import ItemService from '../service/ItemService.js';
import UserService from '../service/UserService.js';

const Cards = () => {

  const [items, setItems] = useState([]);
  const [modal, setModal] = useState(false);
  const [item, setItem] = useState({title: "", content: "", author: ""});

  useEffect(() => {
      ItemService.getItems().then((res) => {
          setItems(res.data);
      });
  }, []);

  const openModal = (e) => {
      console.log(e.target);
      ItemService.getItemById(e.target.id).then((res) => (
        setItem(res.data)
      ))
      console.log(item);
      setModal(true);
  }

  const closeModal = () => {
      setModal(false);
  }

  const joinButtonHandle = async (e) => {
      let user_email = sessionStorage.getItem("user_name");
      if(user_email !== 'null'){
        let res = await ItemService.getItemById(e.target.id);
        let updateItem = res.data;
        if(!updateItem.userList.includes(user_email)){
          updateItem.userList.push(user_email);
          await ItemService.updateItem(updateItem.id, updateItem);
          alert("신청되었습니다!");
        }
        else {
          alert("이미 신청한 항목입니다!");
        }
      }
      else {
        alert("로그인을 해주세요!");
      }
  }

  return (
    <>
        <div className='card_container'>
            {items.map((item) => (
            <div className='card-container-content'>
                <div className="card" id={item.id}>
                  <div className="card_img_div">
                    <img className='card_img' src={item.imgPath}></img>
                  </div>
                  <h5 className='card_title'>{item.title}</h5>
                  <button id={item.id} className='card-btn' onClick={openModal}>detail</button>
                </div>
            </div>
            ))}
        </div>
        {modal && (
          <div className='modal-container' onClick={closeModal}>
            <div className='card-detail' onClick={(e) => (e.stopPropagation())}>
              <div className='detail-img-box'>
                <img src={item.imgPath}></img>
              </div>
              <h1 className='detail-title'>{item.title}</h1>
              <h4 className='detail-author'>{item.author}</h4>
              <div className='detail-description'>{item.content}</div>
              <button className='join-btn' id={item.id} onClick={joinButtonHandle}>join</button>
            </div>
          </div>
        )}
    </>
  )
}

export default Cards