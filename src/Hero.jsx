import React from "react";
import heroImg from './assets/hero.svg'
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            New Delhi: Hiring for white collar jobs declined 19 per cent in July
            compared to the year-ago period as many sectors, including FMCG,
            retail, insurance and education, witnessed cautious recruitment
            sentiments, according to a report. According to the Naukri JobSpeak
            Index released on Tuesday, job postings for white collar hiring in
            July stood at 2,573, down 8 per cent compared to the previous month,
            and down 19 per cent compared to July 2022.
          </p>
        </div>
        <div className="img-container">
            <img src={heroImg} alt="Women and Browser" className="img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;