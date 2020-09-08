import React from 'react';
import '../css/App.css';
import Header from './Header';
import Sidebar from './Sidebar';


function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar />
      </div>

      {/*Feed*/}
      {/*Aside*/}
    </div>
  );
}

export default App;
