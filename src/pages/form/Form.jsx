import React, { useState } from 'react';

const Form = () => {
  const [isChecked, setIsChecked] = useState(false);
  
  return (
    <form className="mt-4 row d-flex justify-content-center align-items-center">
      <div className="col-4 d-flex gap-4">
        <input
          id="kosul"
          type="checkbox"
          onChange={(e) => setIsChecked(!isChecked)}
        />
        <label htmlFor="kosul">Kosulları okudum ve kabul ediyorum</label>
      </div>
      <button disabled={!isChecked} className="col-2 btn btn-warning">
        Siparişi Onayla
      </button>
    </form>
  );
};

export default Form;
