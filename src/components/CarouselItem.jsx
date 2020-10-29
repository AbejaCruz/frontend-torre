import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png'

const CarouselItem = ({ name,picture, username, locationName,professionalHeadline,remoter}) => (
  <div className="carousel-item">
    <img className="carousel-item__img" src={picture} alt={username} />
    <div className="carousel-item__details">
      <div>
      <p className="carousel-item__details--title">{username}</p>
      <p className="carousel-item__details--subtitle">{name}</p>
      </div>
      <p className="carousel-item__details--title">{professionalHeadline}</p>
      <p className="carousel-item__details--subtitle">{`${locationName} `}</p>
    </div>
  </div>
);

CarouselItem.propTypes = {
  name: PropTypes.string,
  username: PropTypes.string,
  professionalHeadline: PropTypes.string,
  remoter: PropTypes.string,
  locationName: PropTypes.string,
  picture: PropTypes.string,
};

export default CarouselItem;
