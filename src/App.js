import './App.css';
import Home from './components/Home';
import About from './components/About';
import Header from './common/header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './components/Contact';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
