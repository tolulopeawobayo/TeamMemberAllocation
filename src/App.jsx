import * as React from 'react';
import './App.css';
import Header from './Header.jsx';
import Employees from './Employees.jsx';
import Footer from './Footer.jsx';

export default function App() {
  return (
    <main>
      <Header />
      <Employees />
      <Footer />
    </main>
  )
}
