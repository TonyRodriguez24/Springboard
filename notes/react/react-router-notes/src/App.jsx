import Home from './Home';
import Eat from './Eat';
import Drink from './Drink';
import Navbar from './Navbar';
import Food from './Food';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import OrderSummary from './OrderSummary';

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path = '/' element = {<Home/>}></Route>
          <Route path = '/eat' element = {<Eat/>}></Route>
          <Route path = '/drink' element = {<Drink/>}></Route>
          <Route path = '/food/:name' element = {<Food/>}></Route> 
          <Route path = '/order-summary' element = {<OrderSummary/>}></Route> 
        </Routes>
      </BrowserRouter>
   </div>
  )
}

export default App
