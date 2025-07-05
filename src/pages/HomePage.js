import React from 'react';
import HeroSection from '../components/HeroSection';
import ChallengeSection from '../components/ChallengeSection';
import SolutionsSection from '../components/SolutionsSection';

const HomePage = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <ChallengeSection />
      <SolutionsSection />
    </div>
  );
};

export default HomePage; 