import{BrowserRouter,Routes,Route}from 'react-router-dom'
import './App.css';
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Shop from './components/Shop/Shop'

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Header/>}>
            <Route index element={<Home/>}/>
            <Route path='/shop' element={<Shop/>}/>
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
