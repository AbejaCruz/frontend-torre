import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Search from '../components/Search';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import peopleApi from '../hooks/peopleApi';
import '../assets/styles/App.scss';

const API = 'https://search.torre.co/people/_search/?offset=0&size=24';

const Home = () => {
  const initialState = peopleApi(API);
  return initialState.length === 0 ? <h1>Loading...</h1> : (
    <Layout>
      <Header />
      <Search />
      {initialState.results.length > 0 && (
        <Categories title="People">
          <Carousel>
            {initialState.results.map(item =>
              <CarouselItem key={item.name} {...item} />
            )}
          </Carousel>
        </Categories>
      )}
     
     
      <Footer />
    </Layout>
  );
}

export default Home;
