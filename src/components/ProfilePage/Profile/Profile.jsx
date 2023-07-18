import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Divider from '@mui/material/Divider';
import Details from '../Details/Details';
import Address from '../Address/Address';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import Tabs from '@mui/material/Tabs';
import TabPanel from '@mui/lab/TabPanel';
import './Profile.css';
import OtherPage from '../OtherPage/OtherPage';

function profile() {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <div className="container mt-5">
        <div class="row">
          <TabContext value={value}>
            <div className="col-3 px-0">
              <div className="side_bar px-3 row align-items-center">
                <Box
                  sx={{ width: '100%', typography: 'body1', color: 'white' }}
                >
                  <Tabs onChange={handleChange} orientation="vertical">
                    <Tab sx={{ color: 'white' }} label="Profile" value="1" />
                    <Divider variant="middle" />
                    <Tab sx={{ color: 'white' }} label="Posts" value="2" />
                    <Divider variant="middle" />
                    <Tab sx={{ color: 'white' }} label="Gallery" value="3" />
                    <Divider variant="middle" />
                    <Tab sx={{ color: 'white' }} label="ToDo" value="4" />
                  </Tabs>
                </Box>
              </div>
            </div>
            <div className="col-9">
              <div class="row">
                <Navbar />
                <div className="my-4">
                  <Divider />
                </div>
              </div>
              <TabPanel value="1">
                <div className="row">
                  <div class="col-5">
                    <Details />
                  </div>
                  <div class="col-7 border-start">
                    <Address />
                  </div>
                </div>
              </TabPanel>
              <TabPanel value="2">
                <OtherPage />
              </TabPanel>
              <TabPanel value="3">
                <OtherPage />
              </TabPanel>
              <TabPanel value="4">
                <OtherPage />
              </TabPanel>
            </div>
          </TabContext>
        </div>
      </div>
    </>
  );
}

export default profile;
