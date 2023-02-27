import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="bg-white">

      
    

      {/* Hero */}
      <section className="hero bg-blue-500 py-20">
        <div className="container mx-auto">
          <h1 className="text-white text-4xl font-bold mb-4">Find Perfect candidate for a dream Job</h1>
          <p className="text-white text-lg mb-8">Search through thousands of job listings and apply today.</p>
          <button className="bg-white text-blue-500 font-bold py-2 px-4 rounded-full shadow-lg hover:shadow-xl transition duration-300">Enlist Jobs</button>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-20">
        <div className="container mx-auto flex flex-wrap justify-between">
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
            <div className="bg-gray-100 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">Scholarships</h2>
              <p className="text-gray-700 mb-4">Find funding opportunities to help support your education.</p>
              {/* <a href="#" className="text-blue-500 font-bold hover:text-blue-700">Learn More &rarr;</a> */}
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
            <div className="bg-gray-100 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">Courses</h2>
              <p className="text-gray-700 mb-4">Discover new skills and take your career to the next level.</p>
              {/* <a href="#" className="text-blue-500 font-bold hover:text-blue-700">Learn More &rarr;</a> */}
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
            <div className="bg-gray-100 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">Tutorials</h2>
              <p className="text-gray-700 mb-4">Learn from experts in your field and grow your knowledge.</p>
              {/* <a href="#" className="text-blue-500 font-bold hover:text-blue-700">Learn More */}
              {/* </a> */}

              </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
        <div className="bg-gray-100 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Jobs</h2>
          <p className="text-gray-700 mb-4">Find your next career opportunity and apply today.</p>
          {/* <a href="#" className="text-blue-500 font-bold hover:text-blue-700">Learn More &rarr;</a> */}
        </div>
      </div>
    </div>
  </section>

  {/* About Us */}
  <section className="bg-gray-100 py-20">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold mb-4">About Us</h2>
      <p className="text-lg mb-8">Get the best talent for your business with our job enlisting platform - find the perfect candidate for your team today!"</p>
      <p className="text-lg mb-8">Streamline your hiring process and find the right candidates quickly and efficiently with our innovative job enlistment platform.</p>
      <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full shadow-lg hover:shadow-xl transition duration-300">Visit Us</button>
    </div>
  </section>

  {/* Footer */}
  {/* <Footer /> */}
  <footer className="bg-gray-800 py-4">
    <div className="container mx-auto text-center text-white">
      &copy; 2023 VULCAN FORGE reserved.
    </div>
  </footer>
</div>


// <div>
// <Footer />
// </div>

);

  }


  export default Home