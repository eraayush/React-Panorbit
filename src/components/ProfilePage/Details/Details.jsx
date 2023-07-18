import React from 'react';
import Divider from '@mui/material/Divider';

const Details = () => {
  return (
    <>
      <div className="d-flex flex-column">
        <div className="text-center">
          <img
            src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1005.jpeg"
            className="rounded-circle mb-2"
            alt="person name"
            width={180}
            height={180}
          />
          <h5>Leanne Graham</h5>
        </div>
        <div className="d-flex">
          <p className="col-6 text-end">Username : </p>
          <p className="col-6"> Bret</p>
        </div>
        <div className="d-flex">
          <p className="col-6 text-end">e-mail : </p>
          <p className="col-6"> Sincere@gmail.com</p>
        </div>
        <div className="d-flex">
          <p className="col-6 text-end">Phone : </p>
          <p className="col-6"> 9999999999</p>
        </div>
        <div className="d-flex">
          <p className="col-6 text-end">Website : </p>
          <p className="col-6"> leannegraham.com</p>
        </div>
        <Divider />
      </div>
      <div className="d-flex flex-column">
        <h5 className="text-center my-3">Company</h5>
        <div className="d-flex">
          <p className="col-6 text-end">Name : </p>{' '}
          <p className="col-6"> Romaguera-corna</p>
        </div>
        <div className="d-flex">
          <p className="col-6 text-end">catchprase : </p>{' '}
          <p className="col-6"> Multi-layered client-server neural</p>
        </div>
        <div className="d-flex">
          <p className="col-6 text-end">bs : </p>{' '}
          <p className="col-6"> harness real-time e-amrkets</p>
        </div>
      </div>
    </>
  );
};

export default Details;
