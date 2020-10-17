import React from "react";
import './GoodsCard.css';
import cart from '../../graphic/cart.jpg';
import  closeMenu from '../../graphic/close.png'
const GoodsCard=({user,price, id,title,img,description,addNewGoods,goodsData})=>{

    const deleteSelectedGoods = (id)=>{
    const newGoodsData = goodsData.filter(item=> item.id!==id)
    addNewGoods(newGoodsData)
    }

    return (
        <div className="goods-card" >

            {user==='admin'? <button className="delete-current-goods"
            onClick={()=>deleteSelectedGoods(id)}
            ><img src={closeMenu} alt="closeMenu" className="close-menu-card"/></button>:''}

            <span className='title'>{title} </span>
            <img src={img?img:cart} alt="" className="card-img"/>
            <p className="description-card">{description}</p>

            <span className="price">{price} UAH</span>

        </div>

    );
}

export default GoodsCard;