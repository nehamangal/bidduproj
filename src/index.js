import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import {BrowserRouter} from "react-router-dom";
import Allrouter from './Rou'

ReactDOM.render(
<BrowserRouter>
<App />
<Allrouter />
</BrowserRouter>


,document.getElementById("root")
);

