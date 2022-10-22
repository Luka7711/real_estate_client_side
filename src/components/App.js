import '../style/App.css'
import { Route, Routes } from 'react-router-dom';
import HousingList from './HousingList';
import Home from './Home';
import Navigation from './Navigation/Navigation';
import OneHouse from './OneHouse';


const App = () => {
  return (
    <>
      <Navigation/>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/housing-list' element={ <HousingList/> }/>
          <Route path='/housing-list/:houseId' element={ <OneHouse/>} />
      </Routes>
    </>
  )
}

export default App;
