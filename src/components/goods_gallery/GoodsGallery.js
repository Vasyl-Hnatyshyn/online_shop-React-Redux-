import React from 'react';
import './GoodsGallery.css'
import {bindActionCreators} from "redux";
import {addNewGoods} from "../../store/actions";
import {connect} from "react-redux";
import GoodsCard from "../goods_card/GoodsCard";

const  GoodsGallery=({goodsData,addNewGoods})=> {

    return (
        <div className="goods-gallery">

            {goodsData.map((item,i)=>{
                return < GoodsCard  key={i}
                                    id={item.id}
                                    title={item.title}
                                    img={item.img}
                                    description={item.description}
                                    addNewGoods={addNewGoods}
                                    goodsData={goodsData}
                                    price={item.price}

                />

            })

            }





        </div>

    );
}



const mapStateToProps = (state) => ({
    goodsData: state.goodsData,
});

const mapDispatchToProps = (dispatch) => ({
    addNewGoods: bindActionCreators(addNewGoods, dispatch)

});



export default connect(mapStateToProps,mapDispatchToProps )(GoodsGallery);


