import React from 'react';
import './MainPage.css';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import { useSelector } from 'react-redux';
import { BrowserRouter as Link, useNavigate } from 'react-router-dom';

function MainPage() {
  const navigate = useNavigate();
  const { loading, error, panorbitData } = useSelector((state) => state);

  return (
    <>
      <div className="main_container d-flex justify-content-center align-items-center vh-100">
        <div className="main_page_list">
          <h5 class="text-center">Select an account</h5>
          <div className="list_container px-3">
            {panorbitData.map((data) => {
              return (
                <List
                  sx={{
                    width: '100%',
                    padding: 0,
                  }}
                >
                  <ListItem
                    key={data.id}
                    onClick={() => {
                      navigate('/profile');
                    }}
                    sx={{ cursor: 'pointer' }}
                  >
                    <ListItemAvatar>
                      <Avatar
                        alt={data.name}
                        src={data.profilepicture}
                      ></Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={data.name} />
                  </ListItem>
                  <Divider variant="middle" />
                </List>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPage;
