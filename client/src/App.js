
import Navbar from './components/navbar';
import Searchbar from './components/searchbar';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Searchbar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
