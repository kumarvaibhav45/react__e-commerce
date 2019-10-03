import React, { Component } from 'react';
import { ProductConsumer } from '../../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from '../Button';

export default class ProductDetails extends Component {
  render() {
    return (
      <div>
        <ProductConsumer>
          {value => {
            const {
              id,
              company,
              img,
              info,
              price,
              title,
              inCart
            } = value.detailProduct;
            return (
              <div className="container py-5">
                {/* title */}
                <div className="row">
                  <div className="col-10 mx-auto text-center text-blue my-3 text-slanted">
                    <h1>{title}</h1>
                  </div>
                </div>
                {/* title end */}
                {/* product info */}
                {/* image */}
                <div className="row">
                  <div className="col-10 mx-auto col-6 my-3 text-capitalize">
                    <img src={img} className="img-fluid" alt="product" />
                  </div>
                  {/* product text */}
                  <div className="col-10 mx-auto col-6 my-3 text-capitalize">
                    <h2>model : {title}</h2>
                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                      made by :{' '}
                      <span className="text-uppercase">{company}</span>
                    </h4>
                    <h4 className="text-blue">
                      <strong>
                        price : <span>$</span>
                        {price}
                      </strong>
                    </h4>
                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                      some info about product:
                    </p>
                    <p className="text-muted lead">{info}</p>
                    <div>
                      <Link to="/">
                        <ButtonContainer>back to products</ButtonContainer>
                      </Link>
                      <ButtonContainer
                        cart
                        disabled={inCart}
                        onClick={() => {
                          value.addToCart(id);
                          value.openModel(id);
                        }}
                      >
                        {inCart ? 'in cart' : 'add to cart'}
                      </ButtonContainer>
                    </div>
                  </div>
                </div>
              </div>
            );
          }}
        </ProductConsumer>
      </div>
    );
  }
}