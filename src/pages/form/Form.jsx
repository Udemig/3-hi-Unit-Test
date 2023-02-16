import React, { useState } from 'react';

const Form = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <form className=" container mt-4 mb-1 d-flex  align-items-center justify-content-between">
      <div className=" d-flex gap-4">
        <input
          id="kosul"
          type="checkbox"
          onChange={(e) => setIsChecked(!isChecked)}
        />
        <label htmlFor="kosul" className="text-nowrap">
          Kosulları okudum ve kabul ediyorum
        </label>
      </div>
      <button disabled={!isChecked} className="  btn btn-warning ">
        Siparişi Onayla
      </button>
    </form>
  );
};

export default Form;
