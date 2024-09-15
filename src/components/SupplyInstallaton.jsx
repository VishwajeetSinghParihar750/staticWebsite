import React from 'react';

const SupplyInstallation = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto">
      <h3 className="text-4xl font-bold text-center mb-6 text-gray-900">Supply and Installation</h3>
      <div className="flex flex-col md:flex-row justify-around items-center">
        <div className="flex-1 mb-6 md:mb-0 text-center">
          <img src="path/to/icon1.svg" alt="Icon" className="mx-auto mb-4 w-16 h-16"/>
          <p className="text-lg text-gray-700">Easy to mount without drilling.</p>
        </div>
        <div className="flex-1 mb-6 md:mb-0 text-center">
          <img src="path/to/icon2.svg" alt="Icon" className="mx-auto mb-4 w-16 h-16"/>
          <p className="text-lg text-gray-700">Fully equipped with smart features.</p>
        </div>
      </div>
    </div>
  </section>
);

export default SupplyInstallation;
