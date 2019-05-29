import React from 'react';
import logo from './logo.svg';
import List from "./List";
import Form from './Form';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="row mt-5">
      <div className="col-md-4 offset-md-1">
      <h2>Articles</h2>
        <List />
      </div>
      <div className="col-md-4 offset-md-1">
        <h2>Add a new article</h2>
        <Form />
      </div>
    </div>
  );
}

export default App;
