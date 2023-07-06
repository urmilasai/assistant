import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getDatabaseData = createAsyncThunk(
  'getDatabaseData',
  async ({credentials}:any) => {
    try {
      const response = await axios.post('http://10.10.5.16:7777/db_connect',credentials,   {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        withCredentials: true
      });
      // handle any actions on successful connection
    //  response.tables);
    //   setSchema(response.schema);
      console.log(response);
      if (response.status===200){
        const cookies = document.cookie.split(';');
        console.log(cookies);
        let session_id = '';
        cookies.forEach(cookie => {
          if (cookie.trim().startsWith('session_id=')) {
            session_id = cookie.trim().substring('session_id='.length, cookie.length);
          }
        });
    
        console.log(`Session ID: ${session_id}`);
          
          return response.data;
      }
    } catch (error) {
      // handle any actions on error
    }
  }
);