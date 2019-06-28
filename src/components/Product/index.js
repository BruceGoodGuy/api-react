import React, {Component} from 'react';

class List extends Component {
  render(){
    return (
      <div className="row">
        <div className="col align-self-center">
            <div className="alert alert-primary" role="alert">
                List Products
            </div>
            <div className="col mt-2">
              {this.props.children}
            </div>
        </div>
      </div>
    );
  }
}

export default List;
