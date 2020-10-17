import React from "react";
import './GoodsState.css'
import {bindActionCreators} from "redux";
import {addNewGoods} from "../../store/actions";
import {connect} from "react-redux";

const GoodsState =({goodsData,addNewGoods}) =>{
    const allGoods =goodsData.length
    const totalPrice =goodsData.reduce((sum,item)=>{return sum + Number(item.price)
    },0)
    const averagePrice=allGoods? (totalPrice/allGoods).toFixed(2) :0;


    return (
        <div className="goods-state-wrapper">

           <h2>Product gallery info</h2>

            <table>
                <tr>
                    <th>Option</th>
                    <th className="table-value">Value</th>
                </tr>
                <tr>
                    <td>All goods</td>
                    <td className="table-value">{allGoods}</td>
                </tr>
                <tr>
                    <td>Total price of goods</td>
                    <td className="table-value">{totalPrice}</td>
                </tr>
                <tr>
                    <td>Average price</td>
                    <td className="table-value">{averagePrice}</td>
                </tr>
            </table>

            <button onClick={()=>addNewGoods([])}   className='delete-all-goods'> delete all goods</button>



        </div>

    );
}


const mapStateToProps = (state) => ({
    goodsData: state.goodsData,
});

const mapDispatchToProps = (dispatch) => ({
    addNewGoods: bindActionCreators(addNewGoods, dispatch)

});



export default connect(mapStateToProps,mapDispatchToProps )(GoodsState);