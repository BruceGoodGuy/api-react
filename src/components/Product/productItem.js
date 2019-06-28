import React, {Component} from 'react';

class ProductItem extends Component {
  render(){
    let {product} = this.props;
    return (
        <tr>
            <th scope="row">{product.id}</th>
            <td>{product.name}</td>
            <td>{product.quantity}</td>
            <td>{product.status}</td>
        </tr>
    );
  }
}

export default ProductItem;
