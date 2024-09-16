import React from 'react';
import AnimationSlideUp from './ui/AnimationSlideUp';

const WhoWeAre = () => {
  return (
    <section className="py-16 bg-gray-50" id="whoWeAre">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <h3 className="text-4xl font-bold text-center mb-12 text-gray-900">Who We Are</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimationSlideUp delay={0}>
            <div className="bg-white p-8 shadow-md rounded-lg transition-all duration-700 ease-in-out hover:-translate-y-2 hover:shadow-xl hover:bg-blue-50 max-sm:text-center  min-h-[280px]">
              <h4 className="text-2xl font-semibold mb-4 text-blue-600">Government Entities</h4>
              <p className="text-gray-600 leading-relaxed">Government or semi-government entities wish to serve public peoples in the streets or any common areas with lights, digital information, commercial advertisements, Wi-Fi network access, devise charging points, and CCTV camera surveillance, and any other required features.</p>
            </div>
          </AnimationSlideUp>

          <AnimationSlideUp delay={0.2}>
            <div className="bg-white p-8 shadow-md rounded-lg transition-all duration-700 ease-in-out hover:-translate-y-2 hover:shadow-xl hover:bg-blue-50 max-sm:text-center min-h-[280px]">
              <h4 className="text-2xl font-semibold mb-4 text-blue-600">Real Estate Developers And Builders</h4>
              <p className="text-gray-600 leading-relaxed">Builders and real estate establishments for their neighbourhood development projects who wish to provide the mentioned services in the designated areas like open spaces, walkways, parks etc.</p>
            </div>
          </AnimationSlideUp>

          <AnimationSlideUp delay={0.4}>
            <div className="bg-white p-8 shadow-md rounded-lg transition-all duration-700 ease-in-out hover:-translate-y-2 hover:shadow-xl hover:bg-blue-50 max-sm:text-center min-h-[280px]">
              <h4 className="text-2xl font-semibold mb-4 text-blue-600">Private Installations</h4>
              <p className="text-gray-600 leading-relaxed">Private individuals also can install at their own designated premises to relish the mentioned and many other several features.</p>
            </div>
          </AnimationSlideUp>
        </div>
      </div>
      
    </section>
  );
};

export default WhoWeAre;
