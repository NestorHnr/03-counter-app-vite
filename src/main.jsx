import React from 'react';
import reactDOM from 'react-dom/client';
import { CounterApp } from './CounterApp';
import { FirstApp } from './FirstApp';
// import { HelloWorldApp } from './HelloWorldApp';

import './styles.css';

reactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <HelloWorldApp/>
        <FirstApp  subTitle={1234}/> */}
        <CounterApp value = { 10 }/>
        {/* <FirstApp title = 'Hola soy vegeta'/> */}
    </React.StrictMode>
)