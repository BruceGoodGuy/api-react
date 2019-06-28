import React, {Component} from 'react';
import $ from 'jquery';

$(document).ready(function(){
    $("#exampleInputEmail1").focus()
})
class Add extends Component {
    constructor  (props) {
        super(props);
        this.state = {
            name:'',
            quanlity: '',
            status: true
        }
    }
    onChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({
            [name]:value
        })
    }

    addProduct = (e) => {
        e.preventDefault();
        this.props.addProduct(this.state)
    }
  render(){
    return (
        <div className="col-md-8">
            <div className="alert alert-primary" role="alert">
                Add Product
            </div>
            <form onSubmit={this.addProduct}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Name</label>
                    <input name="name" type="text" onChange={this.onChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Quantity</label>
                    <input name="quanlity" type="number" onChange={this.onChange} className="form-control" id="exampleInputPassword1" placeholder="Quantity"/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Status</label>
                    <select name="status" onChange={this.onChange} className="form-control">
                        <option value={1}>True</option>
                        <option value={0}>False</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
  }
}

export default Add;
