import React, {useContext} from 'react'
import {MyContext} from '../contexts/MyContext'
import '../App.css'
// Importing the Login & Register Componet
import Login from './Login'
import Register from './Register'

import 'bootstrap/dist/css/bootstrap.min.css'

function Home(){

    const {rootState,logoutUser} = useContext(MyContext);
    const {isAuth,theUser,showLogin} = rootState;

    // If user Logged in
    if(isAuth)
    {
        return (
     
            <div className="maincontainer">
              <div className="userInfo">
                 <div className="container mb-5 mt-5 text-left">
                  <button onClick={logoutUser}>Logout</button>
                    <table class="table table-hover table-bordered">
                    <thead>
                      <tr>
                      <th>Name</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                       <tr>
                        <td>{theUser.name}</td>
                        <td>{theUser.email}</td>
                      </tr>
                </tbody>
              </table>
            </div>
            </div>
            </div>
            
      )
    }
    // Showing Login Or Register Page According to the condition
    else if(showLogin){
        return <Login/>;
    }
    else{
        return <Register/>;
    }
    
}

export default Home;