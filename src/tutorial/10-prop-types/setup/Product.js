import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../../../assets/default-image.jpeg';
const Product = ({ image, name, price }) => {
  const url = image && image.url; //if image exists, give me image.url, that's how it works
  return (
    <article className="product">
      <h4>{name}</h4>
      <img src={url || defaultImage} alt={name || 'Default name'} />
      <p>${price || 3.99}</p>
    </article>
  );
};

export default Product;
