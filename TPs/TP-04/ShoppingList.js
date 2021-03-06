import React from 'react';
import Item from './Item';
import ShoppingItem from './ShoppingItem';
import {setItems, addItems} from './actions/items';
import {connect} from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

class ShoppingList_ extends React.Component {

    constructor(props) {
        super(props);
        this.state = {newItem: '', newPrice: 0};
    }

    componentDidMount() {
        this.props.onSetItems([
            new Item(1, 'pain', 0.95),
            new Item(2, 'gel douche', 2.85),
            new Item(3, 'cahier à spirales', 1.20)
        ]);
    }

    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <ul>
                    {
                        this.props.items.map(item => <ShoppingItem key={item.id} item={item}/>)
                    }
                </ul>
                <form onSubmit={this.createNewItem.bind(this)}>
                    <input type="text"
                           placeholder="item"
                           onChange={(e) =>
                            this.setState({newItem: e.target.value})}
                           value={this.state.newItem}
                    />
                    <input type="number"
                           onChange={(e) =>
                            this.setState({newPrice: parseFloat(e.target.value)})}
                           value={this.state.newPrice}
                    />
                    <button type="submit">add</button>
                </form>
            </div>
        );
    }
}

const ShoppingList = null; // TODO: connect...
export default ShoppingList;