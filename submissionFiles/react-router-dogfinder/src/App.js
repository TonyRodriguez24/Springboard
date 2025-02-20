import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Dogs from './Dogs';
import dogsData from './db.json';
import Nav from './Nav';
import DogDetails from './DogDetails';
import Colors from './Colors';
import ColorsForm from './ColorsForm';
import { useState } from 'react';

function App() {
  const [colors, setColors] = useState([])

  return (
    <div className="App">
      <BrowserRouter>
        <Nav dogs={dogsData.dogs}/>
        <Routes>
          <Route index element={<Dogs dogs={dogsData.dogs} /> }></Route>
          <Route path = '/dogs/:name' element = {<DogDetails dogs = {dogsData.dogs}/>}></Route>
          <Route path='*' element={<Navigate to='/dogs' replace />}></Route>
          
          <Route path='/colors' element={<Colors colors={colors} />}></Route>
          <Route path='/colors/form' element={<ColorsForm setColors={setColors} />}></Route>
          <Route path = '/colors/:color' element = {<Colors/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
