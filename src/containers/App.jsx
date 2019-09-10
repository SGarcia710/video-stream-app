import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Category from '../components/Category';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initalState';

const App = () => {
  const initialState = new useInitialState(API);
  return Array.isArray(initialState) ? (
    <h1>Loading...</h1>
  ) : (
    <div className='App'>
      <div className='wrapper'>
        <Header />
        <Search />
        {initialState.mylist.length > 0 && (
          <Category title='My List'>
            <Carousel>
              {initialState.mylist.map(item => {
                <CarouselItem />;
              })}
            </Carousel>
          </Category>
        )}
        {initialState.trends.length > 0 && (
          <Category title='Trending'>
            <Carousel>
              {initialState.trends.map(item => (
                <CarouselItem key={item.id} {...item} />
              ))}
            </Carousel>
          </Category>
        )}

        {initialState.originals.length > 0 && (
          <Category title='Originals'>
            <Carousel>
              {initialState.originals.map(item => (
                <CarouselItem key={item.id} {...item} />
              ))}
            </Carousel>
          </Category>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default App;
