import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/HomePage';
import Booking from './Pages/Booking';
import BookingForm from './Pages/ReservationForm';



function App() {
   
  return (
<>
<Router>
    <Routes>
                  
          <Route path='/' element={<Home/>}/>
          <Route path='/booking' element={<Booking/>}/>
          <Route path='/reservation' element={<BookingForm/>}/>
</Routes>
</Router>
</>
  )
}  

export default App;
