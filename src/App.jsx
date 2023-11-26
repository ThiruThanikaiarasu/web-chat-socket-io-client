import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavigationComponent from './components/NavigationComponent'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Chat from './pages/Chat'



const App = () => {
    return (
        <Router>
            <NavigationComponent/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/signup' element={<Signup/>}/>
                <Route path='/chat' element={<Chat/>}/>
            </Routes>
        </Router>
    )
}

export default App