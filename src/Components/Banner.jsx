import React from 'react';
import '../Style.css';
import ImageSlider from './ImageSlider';
import { ReactTyped } from 'react-typed';

const Banner = () => {
  return (
    <>
      <header className="main-banner">
        <div className="banner-txt">
          {/* Primary heading with targeted keywords */}
          <h1>
            We Design <span style={{ color: "red" }}>Strong Visual</span> and{' '}
            <ReactTyped
              strings={[
                'Digital Products',
                'Web Designing',
                'Web Development',
                'UI/UX Designing',
                'App Development',
                'Game Development',
              ]}
              typeSpeed={50}
              backSpeed={30}
              backDelay={2000}
              loop
            />
          </h1>
          {/* Supporting text with relevant keywords */}
          <p>
            Crafting innovative ideas to bring a smile to your users worldwide through exceptional design and functionality.
          </p>
        </div>

        {/* ImageSlider for showcasing visual content */}
        <ImageSlider />
      </header>
    </>
  );
};

export default Banner;
