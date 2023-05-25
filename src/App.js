import React from 'react';
import './App.css';
import Login from "./components/login";
import ProductList from './components/ProductList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/produtos" element={<ProductList />} />
      </Routes>
    </Router>
  );
};

export default App;
