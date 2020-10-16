import React, {useState} from 'react';
import './GoodsAdd.css';

import {bindActionCreators} from "redux";
import {addNewGoods} from "../../store/actions";
import {connect} from "react-redux";




const GoodsAdd=(addNewGoods,goodsData)=> {
    const [title,setTitle]=useState('')
    const [img,setImg]=useState('')
    const [description,setDescription]=useState('')
    const [price,setPrice]=useState(Number)
    const [error,setError]=useState(false)
    const [success,setSuccess]=useState(false)


    const addNewGoodsToStore=()=>{
        const newGoodsPosition={
            id: Math.floor(Math.random() * Math.floor(1000)),
            title: title,
            img:img,
            description:description,
            price:price,
        }

        const newGoodsData=[...goodsData,newGoodsPosition]

        addNewGoods(newGoodsData)

    }



    return (
        <div className="goods-add-wrapper">

            <label htmlFor="title">Add title*
            <input type="text" id='title'/>
            </label>
            <label htmlFor="img">Add img
            <input type="text" id='img'/>
            </label>
             <label htmlFor="description">Add description *
            <input type="text" id='description'/>
            </label>
             <label htmlFor="price">Add price *
            <input type="number" id='price'/>
            </label>


            <button onClick={addNewGoodsToStore} className="add-goods-btn"> Add goods</button>


            <p>all fields with '*' are required to be filled</p>


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
