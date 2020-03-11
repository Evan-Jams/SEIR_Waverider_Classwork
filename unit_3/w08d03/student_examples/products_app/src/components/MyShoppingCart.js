import React, { Component } from 'react';


class MyShoppingCart extends Component {
  render() {
    return (
      <div className="MyShoppingCart">
        <h2>Your Cart!</h2>
        <ul>
            {
                this.props.cart.map((item, index)=> {
                      return (
                        <li key={index}>{item.name} &nbsp; {item.price}</li>
                      )
                })
            }
        </ul>
      </div>
    );
  }
}

export default MyShoppingCart;
