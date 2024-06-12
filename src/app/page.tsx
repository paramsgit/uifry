// pages/Home.tsx

import React from 'react';
import Navbar from './components/navbar';
import Container from './components/container';


const Home: React.FC = () => {
  return (
      <div className="bg-slate-50 dark:bg-slate-950 w-full lg:h-screen lg:overflow-auto overflow-hidden transition-all duration-700 ease-in-out">
        <div className="lg:w-[1090px] w-[425px] flex justify-center flex-col mx-auto bg-slate-50 dark:bg-slate-950 transition-all duration-700 ease-in-out">
          <Navbar />
          <Container />
        </div>
      </div>
    
  );
};

export default Home;
