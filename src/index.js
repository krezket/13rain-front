import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import store from './redux/store'
// import { Provider } from 'react-redux';
// import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
// import { pagesApi } from './redux/features/pagesSlice';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <Provider store={store}>
        // <ApiProvider api={pagesApi}>
            <App />
        // </ApiProvider>
    // </Provider>
);