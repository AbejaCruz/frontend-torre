import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/components/CarouselItem.scss';


const CarouselItem = ({ name,picture, username, locationName,professionalHeadline}) => (
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
  locationName: PropTypes.string,
  picture: PropTypes.string,
};

export default CarouselItem;
