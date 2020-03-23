import React, { Component } from 'react';
import groceryItems from './data'

class App extends Component {
    constructor (props) {
        super(props)
        this.state = {
            groceryItems: groceryItems,
            item: '',
            brand: '',
            units: '',
            quantity: 0,
            isPurchased: false,
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.toggleCheckbox = this.toggleCheckbox.bind(this)
        this.buyItem = this.buyItem.bind(this)
    }
    handleChange(event){
        this.setState({ [ event.target.id ]: event.target.value })
    }
    handleSubmit(event){
        event.preventDefault();
        const newItem = {
            item: this.state.item,
            brand: this.state.brand,
            units: this.state.units,
            quantity: this.state.quantity,
            isPurchased: this.state.isPurchased
        }
        this.setState(
            {
                groceryItems: [ newItem, ...this.state.groceryItems ],
                item: '',
                brand: '',
                units: '',
                quantity: 0,
                isPurchased: false,
            },
            () => {
                console.log('adding an item', newItem);
            }
    )
        console.log('the new item is', newItem);
    }
    toggleCheckbox() {
        this.setState({isPurchased: !this.state.isPurchased})
    }
    buyItem(item){
        item.isPurchased = !item.isPurchased
        this.setState({isPurchased: item.isPurchased})
  }
    render() {
        console.log(this.state.isPurchased);
        return (
            <div className="main-container">
                <h1>Grocery List</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-top" >
                        <label htmlFor="item"> Item: </label>
                            <input type="text" value={this.state.item} onChange={this.handleChange} id="item"/>
                        <label htmlFor="brand"> Brand: </label>
                            <input type="text" value={this.state.brand} onChange={this.handleChange} id="brand"/>
                    </div>
                        <br />
                    <div className="form-bottom" >
                        <label htmlFor="units"> Units: </label>
                            <input type="text" value={this.state.units} onChange={this.handleChange} id="units"/>
                        <label htmlFor="quantity"> Quantity: </label>
                            <input type="number" value={this.state.quantity} onChange={this.handleChange} id="quantity"/>
                    </div>
                        <br />
                    <div id="purchased">
                        <label htmlFor="isPurchased"> Purchased: </label>
                            <input type="checkbox" onChange={this.toggleCheckbox} defaultChecked={this.state.isPurchased} id="isPurchased"/>
                    </div>
                        <br />
                    <input type="submit" />
                </form>
                <ul>
                    {this.state.groceryItems.map((item, i) =>
                        <li key={ i }>
                        {
                            item.isPurchased
                            ? ""
                            : <h2>{item.item}</h2>

                        }
                        {
                            item.isPurchased
                            ? ""
                            : <h4><span>Brand:</span> {item.brand}</h4>
                        }
                        {
                            item.isPurchased
                            ? ""
                            : <h4><span>Units:</span> {item.units}</h4>
                        }
                        {
                            item.isPurchased
                            ? ""
                            : <h4><span>Quantity:</span> {item.quantity}</h4>
                        }
                        {
                            item.isPurchased
                            ? ""
                            : 'button'
                        }





                        </li>
                    )}
                </ul>
            </div>
        )
    }
}

export default App;
