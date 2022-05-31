import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material';
import {MessageList, Layout, ChatList, Header } from './components';

const root = ReactDOM.createRoot(document.getElementById('root'));
const theme = createTheme({
palette:{
  primary:{
    main: "#008656",
  },
},

});

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Layout
        messages={<MessageList />}
        header={<Header />}
        chats={<ChatList />}
      />
    </ThemeProvider>


  </React.StrictMode>
);