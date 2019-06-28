import React, {Component} from 'react';
import AddProduct from './../../components/Product/add';
import {connect} from 'react-redux';
import {addProduct} from './../../actions/index'

class ProductActionPage extends Component {
  render(){
    let {addProduct} = this.props;

    return (
        <div>
            <AddProduct addProduct={addProduct}></AddProduct>
        </div>
    );
  }
}

const mapPropsToState = (dispatch, props) => {
  return {
    addProduct: (product) =>  dispatch(addProduct(product, props.history))
  }
}

export default connect(null, mapPropsToState)(ProductActionPage);
