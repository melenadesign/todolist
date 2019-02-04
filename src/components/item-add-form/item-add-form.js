import React, { Component } from 'react';
import './item-add-form.css';

export default class ItemAddForm extends Component {
    render() {
    return (
        <div className="item-add-form">
        <button className="btn btn-outline-info "
                  onClick={ () => this.props.onItemAdded('new Item') } > 
                  Add Item
                  {/* <i className="fa fa-plus" /> */}
                  </button>               
                  </div>
      )
    }
}