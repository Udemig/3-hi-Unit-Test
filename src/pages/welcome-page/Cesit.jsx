import axios from 'axios';
import React, { useEffect, useState } from 'react';
import urls from './urls';

const Cesit = () => {
  const [cesitler, setCesitler] = useState([]);
  const [sepet, setSepet] = useState([]);
  useEffect(() => {
    axios
      .get(urls.cesitler)
      .then((res) => setCesitler(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleReset = (param) => {
    const sifirlandi = sepet.filter((item) => item.name !== param.name);
    setSepet(sifirlandi);
  };

  const adetBul = (cesit) => {
    const miktar = sepet.filter((item) => item.name === cesit.name);
    return miktar.length;
  };

  return (
    <div className="container my-4">
      <h1>Çeşitler</h1>
      <p>Tanesi 3$</p>
      <h2 data-testid="ucret">Çeşitler Ücret: {sepet.length * 3} $</h2>
      <div className="row gap-4 m-5 justify-content-between">
        {cesitler.map((cesit) => {
          const adet = adetBul(cesit);

          return (
            <div
              key={cesit.name}
              className="d-flex flex-column align-items-center gap-2"
              style={{ width: '150px' }}
            >
              <img src={cesit.imagePath} className="w-100" alt="cesit" />
              <label className="lead text-nowrap">{cesit.name}</label>
              <div className="d-flex gap-3">
                <button
                  className="btn btn-danger"
                  onClick={() => handleReset(cesit)}
                >
                  Sıfırla
                </button>
                <span className="lead">{adet}</span>
                <button
                  className="btn btn-primary"
                  onClick={() => setSepet([...sepet, cesit])}
                >
                  Ekle
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cesit;
