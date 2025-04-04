import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ImageSlider from './ImageSlider';
import WomenTopsGrid from './WomenTopsGrid';
import NewArrival from './NewArrival';
import Blog from './Blog';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import Navbar from './components/navbar';

const App = () => {
  const sliderImages = [
    'https://via.placeholder.com/800x400?text=Slide+1',
    'https://via.placeholder.com/800x400?text=Slide+2',
    'https://via.placeholder.com/800x400?text=Slide+3',
  ];

  return (
    <Router>
      <Navbar/>
      <div 
      // className="min-h-screen"
      >
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <div className="flex items-center justify-center bg-gray-100">
                  <ImageSlider images={sliderImages} />
                </div>
                <WomenTopsGrid />
                <NewArrival />
                <Blog/>
              </>
            }
          />
          
          {/* Blog Page */}
          <Route path="/blog" element={<Blog />} />

          {/* Not Found Page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
