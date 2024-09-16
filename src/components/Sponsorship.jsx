import React from 'react';
import AnimationSlideUp from './ui/AnimationSlideUp';

const Sponsorship = () => (
  <section className="py-16 bg-blue-500 text-white">
    <div className="container mx-auto text-center max-sm:px-2">
      <h3 className="text-4xl font-bold mb-6">Sponsorship Opportunities</h3>
      <AnimationSlideUp>
        <p className="text-lg font-light max-w-2xl mx-auto ">
          Commercial establishments can sponsor the installation of AIDSPOT in public areas. Digital ads can run 24/7. We arrange with legal and government approvals.
        </p>
      </AnimationSlideUp>
    </div>
  </section>
);

export default Sponsorship;
