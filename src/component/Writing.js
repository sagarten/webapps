import React from 'react';
import image1 from '../Image/mobile.jpg';
import image2 from '../Image/market.jpg';
import image3 from '../Image/laptop.jpg';
import './Writing.css'; 

const Writing = () => {
  return (
    <div className='writehead'>
      <div className='writemen'>
        <b className='writeblack'>We Love </b>
        <b className='writepurple'> Writing</b>
      </div>
      <p>Some amazing blog posts that are written by even more amazing people</p>
      <div className='images'>
        <div className='image1'>
          <img src={image1} alt='Image' className='image' />
          <b className='opt'>Optimizing your website for your main key</b>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className='image2'>
          <img src={image2} alt='Image' className='image' />
          <b className='crt'>Creating The perfect advertisement campaign</b>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className='image3'>
          <img src={image3} alt='Image' className='image' />
          <b className='efc'>Efficient management of your social media assets</b>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Writing;
