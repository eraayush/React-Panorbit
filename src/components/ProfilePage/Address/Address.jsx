import React from 'react';

const Address = () => {
  return (
    <>
      <div className="p-3">
        <div>Address:</div>
        <div className="d-flex flex-column mt-3">
          <div className="d-flex">
            <p className="col-3 text-end">Username : </p>
            <p className="col-9"> Bret</p>
          </div>
          <div className="d-flex">
            <p className="col-3 text-end">e-mail : </p>
            <p className="col-9"> Sincere@gmail.com</p>
          </div>
          <div className="d-flex">
            <p className="col-3 text-end">Phone : </p>
            <p className="col-9"> 9999999999</p>
          </div>
          <div className="d-flex">
            <p className="col-3 text-end">Website : </p>
            <p className="col-9"> leannegraham.com</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Address;
