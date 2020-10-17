import React, {useState} from 'react';
import './GoodsAdd.css';

import {bindActionCreators} from "redux";
import {addNewGoods} from "../../store/actions";
import {connect} from "react-redux";


const GoodsAdd=({addNewGoods, goodsData})=> {
    const [title,setTitle]=useState('')
    const [img,setImg]=useState('')
    const [description,setDescription]=useState('')
    const [price,setPrice]=useState(Number)
    const [error,setError]=useState(false)
    const [success,setSuccess]=useState(false)

    const addNewGoodsToStore=()=>{

        if(title==='' || description ==='' || price === ''){
            setError(prev=>!prev)
            setTimeout(()=>setError(prev=>!prev),10000)
            return
        }

        const newGoodsPosition={
            id: Math.floor(Math.random() * Math.floor(1000)),
            title: title,
            img:img,
            description:description,
            price:price,
        }

        const newGoodsData=[...goodsData,newGoodsPosition]

        addNewGoods(newGoodsData)

        setTitle('')
        setImg('')
        setDescription('')
        setPrice('')
        setSuccess(prev=>!prev)
        setTimeout(()=>setSuccess(prev=>!prev),5000)
    }



    return (
        <div className="goods-add-wrapper">

            <label htmlFor="title">Add title* </label>
            <input type="text" id='title' value={title}  onChange={(e)=>setTitle(e.target.value)} />

            <label htmlFor="img">Add img</label>
            <input type="text" id='img' value={img}  onChange={(e)=>setImg(e.target.value)} />

             <label htmlFor="description">Add description *  </label>
            <input type="text" id='description' value={description}  onChange={(e)=>setDescription(e.target.value)}/>

             <label htmlFor="price">Add price *</label>
            <input type="number" id='price' value={price}  onChange={(e)=>setPrice(e.target.value)}/>



            <button onClick={addNewGoodsToStore} className="add-goods-btn"> Add Product</button>


            <p>All fields with '*' are required to be filled</p>


            {error? <span className="error">Please fill in all required fields</span> :''}
            {success? <span className="success">Product successfully added</span> :''}

        </div>

    );
}
const mapStateToProps = (state) => ({
    goodsData: state.goodsData,
});

const mapDispatchToProps = (dispatch) => ({
    addNewGoods: bindActionCreators(addNewGoods, dispatch)

});



export default connect(mapStateToProps,mapDispatchToProps )(GoodsAdd);
