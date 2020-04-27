import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {Compare, ProductList} from '../../components'
import * as productActions from '../../actions/product'
import {connect} from 'react-redux'

class Home extends Component {
  componentWillMount() {
    this.props.actions.getProducts()
  }

  render() {
    const {products, actions, userPrice} = this.props;
    const compareProducts = products.filter(product => product.compare);

    return (
      <div className="home mt-5">
        <div className="row">
          <div className="col-12">
            <h2 className="mb-3">Compare Products</h2>
          </div>
        </div>
        <ProductList products={products} compare={actions.compare}/>
        <button onClick={actions.filterOutBlue}>Filter</button>
        <div>
          <input type="number" value={userPrice} onChange={e => actions.addUserPrice(e.target.value)}/>
          <button onClick={actions.filterPrice}>Submit</button>
        </div>
        {compareProducts.length >= 2 &&
          <Compare products={compareProducts}/>
        }
      </div>
    )
  }
}

export default connect(
  state => ({
    products: state.product.products,
    userPrice: state.product.userPrice,
  }),
  dispatch => ({
    actions: bindActionCreators(productActions, dispatch)
  })
)(Home)
