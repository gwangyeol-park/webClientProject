import React, { useState } from 'react'
import "../assets/css/ItemCreateView.css"
import LoginHeader from '../components/LoginHeader'
import ItemService from '../service/ItemService';

const ItemCreateView = () => {

    let user_name = sessionStorage.getItem("user_name");

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState(user_name);
    const [description, setDescription] = useState("");
    const [img_path, setImgPath] = useState("");

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleAuthorChange = (e) => {
        setAuthor(e.target.value);
    }

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    }

    const handleImgPathChange = (e) => {
        setImgPath(e.target.value);
    }

    const handleFormButtonClick = () => {
        let item = {
            title: title,
            author: author,
            content: description,
            imgPath: img_path,
            userList: [],
            acceptList: []
        }
        if(item.title !== '' && item.content !== ''){
            ItemService.postItem(item);
            alert("작성완료!");
        }
        else {
            alert('내용을 입력해 주세요!');
        }
    }

  return (
    <>
        <LoginHeader></LoginHeader>
        <div className='content'>
            <div className='form-container'>
                <h1>내용 작성</h1>
                <form action="">
                    <div className='form-item'>
                        <label htmlFor="title">title*</label>
                        <input id="title" type="text" onChange={handleTitleChange}/>
                    </div>
                    <div className='form-item'>
                        <label htmlFor="author">author*</label>
                        <input id="author" type="text" onChange={handleAuthorChange} value={author}/>
                    </div>
                    <div className='form-item'>
                        <label htmlFor="description">description*</label>
                        <input id="description" type="text" onChange={handleDescriptionChange} />
                    </div>
                    <div className='form-item'>
                        <label htmlFor="img">img path</label>
                        <input id="img" type="text" onChange={handleImgPathChange}/>
                    </div>
                    <div className='btn-container'>
                        <button className='form-btn' onClick={handleFormButtonClick}>submit</button>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default ItemCreateView