import React from 'react';
import AnimationSlideUp from './ui/AnimationSlideUp';

const SupportWarranty = () => (
  <section className="py-16 bg-blue-500 text-white">
    <div className="container mx-auto px-4 text-center">
      <h3 className="text-4xl font-bold mb-8 ">After-sales Support & Warranty</h3>

      <AnimationSlideUp>
      <p className="text-lg   font-light  ">
        We provide 24/7 after-sales support. Our team is always ready to assist with repairs and maintenance.
      </p>
      <p className="text-lg font-light">
        <strong>Warranty:</strong> 3-year product replacement and 5-year service guarantee.
      </p>
      </AnimationSlideUp>
    </div>
  </section>
);

export default SupportWarranty;
