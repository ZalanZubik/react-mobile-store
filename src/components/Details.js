import React from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';

class Details extends React.Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { id, company, img, price, title, info, inCart } = value.detailProduct;
          return (
            <div className="container py-5">
              {/* title */}
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              {/* end title */}
              {/* product info */}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} className="img-fluid" alt="product" />
                </div>
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h2>model: {title}</h2>
                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">made by: <span className="text-uppercase">{company}</span></h4>
                  <h4 className="text-blue"><strong>price:&nbsp;<span>$</span>{price}</strong></h4>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">some info about the product:</p>
                  <p className="text-muted lead">{info}</p>
                  {/* buttons */}
                  <div>
                    <Link to="/">
                      <ButtonContainer>back to products</ButtonContainer>
                    </Link>
                    <ButtonContainer changeButtonColor disabled={inCart} onClick={() => {
                      value.addToCart(id);
                      value.openModal(id);
                    }}>
                      {inCart ? "in cart" : "add to cart"}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          )
        }}
      </ProductConsumer>
    )
  }
}

export default Details;