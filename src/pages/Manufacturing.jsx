import React from 'react';
import Manufacturing from '../components/Manufacturing';
import SupplyInstallation from '../components/SupplyInstallaton';
import SupportWarranty from '../components/SupportWarranty';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ManufacturingPage = () => {
  return (
    <>
      <Header />
      <Manufacturing />
      <SupplyInstallation />
      <SupportWarranty />
      <Footer />
    </>
  );
};

export default ManufacturingPage;
