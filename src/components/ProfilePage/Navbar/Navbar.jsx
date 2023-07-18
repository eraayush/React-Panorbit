import React from 'react';
import Avatar from '@mui/material/Avatar';

const Navbar = () => {
  return (
    <>
      <nav className="d-flex justify-content-between">
        <h6 className="m-0" style={{ alignSelf: 'center' }}>
          Profile
        </h6>
        <div className="d-flex">
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 30, height: 30 }}
          />
          <h6 className="m-0 ms-3" style={{ alignSelf: 'center' }}>
            Aayush Jain
          </h6>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
