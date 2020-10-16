import React from "react";
import './GoodsCard.css';

function GoodsCard({ id,title,img,description,addNewGoods,goodsData}){

    const deleteSelectedGoods = (id)=>{
    const newGoodsData = goodsData.filter(item=> item.id!==id)
    addNewGoods(newGoodsData)
    }

    return (
        <div className="goods-card" >

            <button className="delete-current-goods"
            onClick={()=>deleteSelectedGoods(id)}
            >del</button>

            <span className='title'>{title} </span>
            <img src={img} alt="" className="card-img"/>
            <p className="description">{description}</p>





        </div>

    );
}

export default GoodsCard;