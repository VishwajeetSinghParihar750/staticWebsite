import React from 'react';

const WhoWeAre = () => (
  <section className="py-16 bg-gray-50" id='whoWeAre'>
    <div className="container mx-auto">
      <h3 className="text-4xl font-bold text-center mb-8 text-gray-900">Who We Are</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h4 className="text-xl font-semibold mb-4 text-blue-600">Government Entities</h4>
          <p className="text-gray-600">We provide street poles with features like lights, Digital info panels, Wi-Fi, and more for public use.</p>
        </div>
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h4 className="text-xl font-semibold mb-4 text-blue-600">Real Estate</h4>
          <p className="text-gray-600">Our products support neighborhood development with smart poles and digital services.</p>
        </div>
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h4 className="text-xl font-semibold mb-4 text-blue-600">Private Installations</h4>
          <p className="text-gray-600">We provide high-end digital poles for private properties, offering a range of customizable features.</p>
        </div>
      </div>
    </div>
  </section>
);

export default WhoWeAre;
