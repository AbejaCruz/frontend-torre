import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import personApi from '../hooks/personApi';
import '../assets/styles/App.scss';

const API = 'https://torre-back.herokuapp.com/api/bios/diegocruz';

const Profile = () => {
  const initialState = personApi(API);
  return initialState.length === 0 ? <h1>Loading...</h1> : (
    <Layout>
      <Header />
     
        
     
      <Footer />
    </Layout>
  );
}

export default Profile;