import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <React.StrictMode>
    <div className="App">
      <p>Hello Bijay I'm {process.env.NODE_ENV} environment.</p>
      <p>Secret Key: {process.env.REACT_APP_SECRET_KEY}</p>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
