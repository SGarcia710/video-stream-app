import React from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Category from '../components/Category';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import '../assets/styles/Home.scss';

const Home = ({ myList, trends, originals }) => {
  return (
    <>
      <Search />
      {myList.length > 0 && (
        <Category title='My List'>
          <Carousel>
            {myList.map(item => (
              <CarouselItem key={item.id} {...item} isList />
            ))}
          </Carousel>
        </Category>
      )}
      <Category title='Trending'>
        <Carousel>
          {trends.map(item => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Category>
      <Category title='Originals'>
        <Carousel>
          {originals.map(item => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Category>
    </>
  );
};

const mapStateToProps = state => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals
  };
};

export default connect(
  mapStateToProps,
  null
)(Home);
