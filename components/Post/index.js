import React, { useState } from "react"
import { Card } from 'antd';
import { Timeline } from 'antd'
//import { postData } from "../../posts";
import "./style.css";
import { ConsoleSqlOutlined, HeartTwoTone } from "@ant-design/icons";
import api from "../../utils/Api";





export const Post = ({ userDelete, onPostLike, _id, title, likes, image, text, author: {name, email}, created_at, updated_at}) => {
    const isLiked = likes.some(id => id === currentUser._id);
    const [count, setCount] = useState(0);

    function handleDeleteClick(){
        userDelete({_id})
    }

    function handleLikeClick (){
        setCount(prevState => prevState+1);
        onPostLike({_id, likes})
    }
    
    return (
       
        
        
        <div className="site-card-border-less-wrapper">
            <Card title={name} extra = {email}  style={{ width: 300 }}>
                
                <img  src={image} alt='not this time' className="card__image" />
                <p>{title}</p>
                <p>{text} </p>
                
               
                
                
                <Timeline>
                    <Timeline.Item>{created_at}</Timeline.Item>
                    <Timeline.Item>{updated_at}</Timeline.Item>
                    
                </Timeline>
                <button onClick={handleLikeClick}>{ count}
                    <HeartTwoTone twoToneColor="#eb2f96"  />
                </button>
                <button className="btn_delete" onClick = {handleDeleteClick}>Удалить</button>
            </Card>
        </div>
        
    );

};
