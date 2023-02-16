import React from 'react';
import Form from './../form/Form';
import Cesit from './Cesit';
import Sos from './Sos';

const WelcomePage = () => {
  return (
    <div>
      {/* ÇEŞİTLER */}
      <Cesit />
      {/* SOSLAR */}
      <Sos />
      {/* FORM */}
      <Form />
    </div>
  );
};

export default WelcomePage;
