import React from 'react';
import AnimationSlideUp from './ui/AnimationSlideUp';

const SupplyInstallation = () => (

  <section className="py-16 mx-auto px-4 md:px-8 lg:px-16 bg-white">
    <div className="container mx-auto px-4">
      <h3 className="text-4xl font-bold text-center   mb-8 text-gray-900">Supply and Installation</h3>
      <div className="flex flex-col md:flex-row justify-around items-end gap-12">
       <AnimationSlideUp delay={.2 }> 
          <div className="flex-1 text-center">
            <img src="/easyInstall.jpg"  alt="Easy to mount" className="mx-auto mb-4 max-h-96"/>
            <p className="text-lg text-gray-700">Our All-in-One AIDSPOT is a fully equipped metal pole that can be easily mounted on a concrete base without the need to drill holes in the poles.</p>
          </div>
        </AnimationSlideUp>
        <AnimationSlideUp delay={.4}>
        <div className="flex-1 text-center">
          <img src="/smartFeatures.jpg" alt="Smart features" className="mx-auto mb-4 max-h-96"/>
          <p className="text-lg text-gray-700">Fully equipped with Wi-Fi access, charging points, and CCTV camera surveillance, and much more based on customers need.</p>
        </div>
        </AnimationSlideUp>
      </div>
    </div>
  </section>
);

export default SupplyInstallation;
