import React from 'react';
import './Cards.css';
import CardItem from '../CardItem/CardItem';

const Cards = ({reference}) => {

  return (
    <div className='cards' ref={reference}>
      <h1>Check out some of my projects!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-10.jpg'
              text='Charging Station for Electric Vehicles'
              label='Embedded Development'
              path='/project/1'
            />
            <CardItem
              src='images/img-12.jpg'
              text='Product Scanner Mobile App'
              label='Mobile Development'
              path='/project/2'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-11.jpg'
              text='Image Processing Filters'
              label='Python Scripting'
              path='/project/3'
            />
            <CardItem
              src='images/img-13.jpg'
              text='Banking System'
              label='Java Project'
              path='/project/4'
            />
            <CardItem
              src='images/img-14.jpg'
              text='Sports Quiz Mobile App'
              label='Mobile Development'
              path='/project/5'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default React.forwardRef(Cards);
