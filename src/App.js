import {Routes,BrowserRouter,Route} from 'react-router-dom'
import {Layout,Typography,Space} from 'antd'
import { Navbar } from './components/Navbar';
import 'antd/dist/antd.css';
import './app.css'


import { HomePage } from './components/HomePage';
import { Cryptocurrencies } from './components/Cryptocurrencies';
import { Exchanges } from './components/Exchanges';
import { News } from './components/News';
import { CryptoDetails } from './components/CryptoDetails';

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar/>
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/cryptocurrencies" element={<Cryptocurrencies/>}/>
              <Route path="/exchanges" element={<Exchanges/>}/>
              <Route path="/news" element={<News/>}/>
              <Route path="/crypto/:coinId" element={<CryptoDetails/>}/>
            </Routes>
          </div>
        </Layout>
      </div>
  
    </div>
  );
}

export default App;
