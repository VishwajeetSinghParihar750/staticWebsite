import React from 'react';
import AnimationSlideUp from './ui/AnimationSlideUp';

const WhoWeAre = () => {
  return (
    <section className="py-16 bg-gray-50" id="whoWeAre">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <h3 className="text-4xl font-bold text-center mb-12 text-gray-900">Who We Are</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimationSlideUp delay={0}>
            <div className="bg-white p-8 shadow-md rounded-lg transition-all duration-700 ease-in-out hover:-translate-y-2 hover:shadow-xl hover:bg-blue-50 max-sm:text-center">
              <h4 className="text-2xl font-semibold mb-4 text-blue-600">Government Entities</h4>
              <p className="text-gray-600 leading-relaxed">We provide street poles with features like lights, Digital info panels, Wi-Fi, and more for public use.</p>
            </div>
          </AnimationSlideUp>

          <AnimationSlideUp delay={0.2}>
            <div className="bg-white p-8 shadow-md rounded-lg transition-all duration-700 ease-in-out hover:-translate-y-2 hover:shadow-xl hover:bg-blue-50 max-sm:text-center">
              <h4 className="text-2xl font-semibold mb-4 text-blue-600">Real Estate</h4>
              <p className="text-gray-600 leading-relaxed">Our products support neighborhood development with smart poles and digital services.</p>
            </div>
          </AnimationSlideUp>

          <AnimationSlideUp delay={0.4}>
            <div className="bg-white p-8 shadow-md rounded-lg transition-all duration-700 ease-in-out hover:-translate-y-2 hover:shadow-xl hover:bg-blue-50 max-sm:text-center">
              <h4 className="text-2xl font-semibold mb-4 text-blue-600">Private Installations</h4>
              <p className="text-gray-600 leading-relaxed">We provide high-end digital poles for private properties, offering a range of customizable features.</p>
            </div>
          </AnimationSlideUp>
        </div>
      </div>
      
    </section>
  );
};

export default WhoWeAre;
