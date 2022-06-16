import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './containers/Header';
import ProductDetail from './containers/ProductDetail';
import ProductListing from './containers/ProductListing';
function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
        <Route path="/" element = {<ProductListing/>} />
        <Route path="/product/:productID" element = {<ProductDetail/>} />
        <Route>404</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
