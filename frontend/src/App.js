import React from 'react'
import {Route,BrouserRouter} from 'react-router-dom'

const App = () => {
  return (
    <div>
        <BrouserRouter>
        <Route path='/' exact Component={home} />
        <Route path='/login' exact Component={login} />
        <Route path='/register' exact Component={register} />
        <Route path='/bookingCar' exact Component={bookingCar} />
        
        
        </BrouserRouter>
      
    </div>
  )
}

export default App
