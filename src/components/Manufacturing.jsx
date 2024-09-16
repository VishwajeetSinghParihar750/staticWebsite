import React from 'react';
import AnimationSlideUp from './ui/AnimationSlideUp';

const Manufacturing = () => (
  <section
    id="manufacturing"
    className="py-16 pt-36 bg-[#F5F5F5]"
  >
    <div className="container mx-auto px-4">
      <h3 className="text-4xl font-bold text-center mb-8 text-gray-900">Manufacturing</h3>
      <AnimationSlideUp>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="text-lg text-gray-800 max-w-lg">
            <p className="mb-4">
              AIDSPOT’s metal structures are made from premium GI poles with a durable powder-coated finish. We ensure that all safety standards are met before any product is released, guaranteeing optimal quality and reliability in the market.
            </p>
            <p>
              Our solar panels and batteries deliver consistent, high-performance results. Products are rigorously tested before shipping to meet agreed-upon specifications. Customers can trust in the durability and efficiency of our solutions, backed by stringent quality checks at every stage of production.
            </p>
          </div>
          <img src="/image.png" alt="AIDSPOT Pole" className="w-full max-w-md rounded-lg shadow-lg"/>
        </div>
      </AnimationSlideUp>
    </div>
  </section>
);

export default Manufacturing;
