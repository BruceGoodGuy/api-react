import React, {Component} from 'react';
import ProductList from './../../components/Product';
import ProductItem from './../../components/Product/productItem';
import NoData from './../../components/NotFound/NoData';
import Table from './../../components/Table';
import {connect} from 'react-redux';
import {getData} from './../../actions/index';
class ProductListPage extends Component {

  componentDidMount(){
    this.props.getData();
  }

  render(){
    var {products} = this.props;
    return (
        <div>
          <ProductList>
              {this.showProductList(products)}
          </ProductList>
        </div>
    );
  }

  showProductList(products){
    var result = null;
    if(products.length > 0){
      return <Table>{this.showItemTable(products)}</Table>
    }else{
      result = <NoData></NoData>;
    }
    return result;
  }

  showItemTable = (products) => {
    var result = null;
    result = products.map((product, key) => {
      return <ProductItem key={key} product={product}></ProductItem>
    })
    return result;
  }
}

const maptStateToProps = state => {
    return {
      products: state.products
    }
}

const mapPropsToState = (dispatch, props) => {
  return {getData: () => dispatch(getData(dispatch))}
}

export default connect(maptStateToProps, mapPropsToState)(ProductListPage);
