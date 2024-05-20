import React, { useEffect, useState } from 'react';
import '../assets/css/MypageView.css';
import '../assets/css/Reset.css';
import ItemService from '../service/ItemService';
import MypageHeader from '../components/MypageHeader';

const MypageView = () => {

    const [items, setItems] = useState([]);
    const [userList, setUserList] = useState([]);
    const [userAcceptList, setUserAcceptList] = useState([]);
    const [modal, setModal] = useState(false);
    const [curItem, setCurItem] = useState();
    
    useEffect(() => {
        ItemService.getItemsByUserName(sessionStorage.getItem("user_name")).then((res) => {
            setItems(res.data);
        });
    }, []);

    const openModal = (e) => {
        ItemService.getItemById(e.target.id)
            .then((res) => {
                setUserList(res.data.userList);
                return ItemService.getItemById(e.target.id);
            })
            .then((res) => {
                setCurItem(res.data);
                setUserAcceptList(res.data.acceptList);
                setModal(true);
            })
    };
    

    const closeModal = (e) => {
        setModal(false);
    }

    const userButtonHandle = async (e) => {
        if(!curItem.acceptList.includes(e.target.id)){
            await curItem.acceptList.push(e.target.id);
            ItemService.updateItem(curItem.id, curItem);
            setUserAcceptList(curItem.acceptList);
            alert('완료했습니다');
        }
        else {
            alert('이미 수락한 유저입니다!');
        }
    }

    const delBtnHandle = () => {
        ItemService.deleteItemById(curItem.id);
        alert('삭제되었습니다!');
        window.location.reload();
    }

    let user_name = sessionStorage.getItem('user_name');
    
    return (
        <>
            <MypageHeader></MypageHeader>
            <div className='content_container'>
                <h1 className='page_title'>{user_name}님의 page</h1>
                <div className='item_container'>
                    <h3>글목록</h3>
                    <ul className='item_list'>
                        {items.map((item) => (
                            <li className='item' id={item.id} onClick={openModal}>
                                <div className='item_title'>{item.title}</div>
                                <div className='item_count'>신청인원: {item.userList.length}명</div>
                            </li>
                        ))}
                        {
                            modal && (
                                <div className='modal' onClick={closeModal}>
                                    <div className='detail_container' onClick={(e) => (e.stopPropagation())}>
                                        <h2>신청자</h2>
                                        <div className='detail-content'>
                                            <ul className='user_list'>
                                                {userList.map((user) => (
                                                    <li className='user_item'>
                                                        <div className='user_name'>{user}</div>
                                                        {!userAcceptList.includes(user) ? <button className='user_btn-before' id={user} onClick={userButtonHandle}>accept</button> :
                                                        <button className='user_btn-after' id={user} onClick={userButtonHandle}>accepted</button>}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className='del-btn-box'>
                                            <button className='detail-del-btn' onClick={delBtnHandle}>Delete</button>
                                        </div>
                                    </div>
                                </div> 
                            )
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default MypageView