import React from 'react';
import AppCarousel from '../components/AppCarousel';
import AppCardList from '../components/AppCardList';
import AppFilterBar from '../components/AppFilterBar';
import AppCreateButton from '../components/AppCreateButton';

function Home() {
  return (
    <div>
      <AppCarousel />
      <AppFilterBar />
      <AppCardList />
      <AppCreateButton />
    </div>
  );
}

export default Home;
