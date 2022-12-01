import { Route, Routes } from 'react-router-dom';
import '../style/App.css'
import Buy from './Pages/Buy';
import Home from './Pages/Home';
import Navigation from './Navigation/Navigation';
import OneHouse from './Pages/OneHouse';


const App = () => {
  return (
    <>
      <Navigation/>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/housing-list' element={ <Buy/> }/>
          <Route path='/housing-list/:houseId' element={ <OneHouse/>} />
      </Routes>
    </>
  )
}

export default App;
