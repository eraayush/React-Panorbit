import React, { useState } from 'react';
import { Box, Tabs, Divider, Tab } from '@mui/material';
import { TabPanel, TabContext } from '@mui/lab';
import './SideNavber.css';

const style = {
  width: '100%',
  maxWidth: 360,
  color: 'white',
};

function SideNavber() {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="side_bar px-3 row align-items-center">
        <Box sx={{ width: '100%', typography: 'body1', color: 'white' }}>
          <TabContext value={value}>
            <Tabs onChange={handleChange} orientation="vertical">
              <Tab sx={{ color: 'white' }} label="Profile" value="1" />
              <Divider variant="middle" />
              <Tab sx={{ color: 'white' }} label="Posts" value="2" />
              <Divider variant="middle" />
              <Tab sx={{ color: 'white' }} label="Gallery" value="3" />
              <Divider variant="middle" />
              <Tab sx={{ color: 'white' }} label="ToDo" value="4" />
            </Tabs>
            <TabPanel value="1">Profile</TabPanel>
            <TabPanel value="2">Item Two</TabPanel>
            <TabPanel value="3">Item Three</TabPanel>
            <TabPanel value="4">Item ToDO</TabPanel>
          </TabContext>
        </Box>
      </div>
    </>
  );
}

// function SideNavber() {
//   return (
//     <>
//       <div className="side_bar px-3 row align-items-center">
//         <div className="">
//           <List sx={style} component="nav" aria-label="mailbox folders">
//             <ListItem>
//               <ListItemText sx={style} primary="Profile" />
//             </ListItem>
//             <Divider variant="middle" />
//             <ListItem>
//               <ListItemText sx={style} primary="Posts" />
//             </ListItem>
//             <Divider variant="middle" />
//             <ListItem>
//               <ListItemText sx={style} primary="Gallery" />
//             </ListItem>
//             <Divider variant="middle" />
//             <ListItem>
//               <ListItemText sx={style} primary="ToDo" />
//             </ListItem>
//           </List>
//         </div>
//       </div>
//     </>
//   );
// }

export default SideNavber;
