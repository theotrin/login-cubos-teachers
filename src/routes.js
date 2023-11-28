import {Routes, Route} from 'react-router-dom';
import Main from './pages/Main'
import SignIn from './pages/Signin'
function MainRoutes(){
    return(
        <Routes> 
            <Route path='/' element={<SignIn/>} />
            <Route path='/main' element={<Main/>} />
        </Routes>
    )
}

export default MainRoutes;