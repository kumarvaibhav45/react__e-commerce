import React, { Component } from 'react';
import Product from '../Product';
import { ProductConsumer } from '../../context';
import Title from '../Title';

export default class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div class="container">
            <Title name="Our" title="Products" />
            <div class="row">
              <ProductConsumer>
                {value => {
                  return value.products.map(product => (
                    <Product key={product.id} product={product} />
                  ));
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
