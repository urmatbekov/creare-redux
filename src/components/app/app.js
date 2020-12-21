import React,{useEffect} from 'react';
import {connect} from "react-redux";
import {getProduct} from "../reduce/products";


const App = ({getProduct, products}) => {

    useEffect(()=>{
        getProduct()
    },[])

    const {data: {results}} = products
    return (
        <div>
            {results.map((item) => {
                return <div key={item.id}><h2>{item.title}</h2></div>
            })}
        </div>
    );
}


const mapStateToProps = ({products}) => {
    return {products}
}


export default connect(mapStateToProps, {getProduct})(App);