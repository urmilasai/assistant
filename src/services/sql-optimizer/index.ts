import axios from 'axios';

const base_url = 'http://10.10.5.16:7777'
export interface Credentials {
    identifier: string;
    host_name: string;
    username: string;
    password: string;
    database_name: string;
    port: number;
    database_type: string;
  }

export interface ResponseData {
  tables: string[];
  schema: string;
}

export const handleConnect = async (credentials: Credentials) => {
  console.log(credentials);
  try {
    const response = await axios.post<ResponseData>(
      `${base_url}/db_connect`,
      credentials,
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        withCredentials: true
      }
    );
    console.log(response);
    // Get the session_id from the Set-Cookie header in the response
    const cookies = document.cookie.split(';');
    console.log(cookies);
    let session_id = '';
    cookies.forEach(cookie => {
      if (cookie.trim().startsWith('session_id=')) {
        session_id = cookie.trim().substring('session_id='.length, cookie.length);
      }
    });

    console.log(`Session ID: ${session_id}`);
    console.log(`Response: ${response.data}`);
    console.log(`Session ID: ${session_id}`);
    console.log(`Response: ${JSON.stringify(response.data)}`);
    const tables = response.data.tables;
    const schema = response.data.schema;
    const status = response.status
    return { tables: tables, schema: schema, status: status };
    // handle the response data here
  } catch (error) {
    console.error(error);
    // handle the error here
    return { tables: [], schema: '' };
  }
};