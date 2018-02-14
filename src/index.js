import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import $ from 'jquery/dist/jquery'
import './index.css'
window.jQuery = $;
window.$ = $;

require('materialize-css/dist/css/materialize.min.css');
require('materialize-css/dist/js/materialize');

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
