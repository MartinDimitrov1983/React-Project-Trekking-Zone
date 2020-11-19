import React, { useContext } from 'react'
import {
    BrowserRouter,
    Switch,
    Route,
    Redirect
} from 'react-router-dom'

import RegisterPage from '../pages/register'
import LoginPage from '../pages/login'
import Home from '../pages/home'
import CreateTrekPage from '../pages/createTrek'
import ProfilePage from '../pages/profile'
import DetailsTrekPage from '../pages/detailsTrek'
import EditTrekPage from '../pages/editTrek'
import UserContext from '../Context'

const Navigation = () => {
    const context = useContext(UserContext)
    const loggedIn = context.user === null ? false : context.user.loggedIn 
    
    return (
        <BrowserRouter>
            <Switch>

                <Route path='/' exact component={Home} />
                <Route path='/register' component={RegisterPage} >
                    {loggedIn ? (<Redirect to='/' />) :(<RegisterPage />)}
                </Route>
                <Route path='/login' component={LoginPage}>
                    { loggedIn ? (<Redirect to='/'/>) : <LoginPage />}
                </Route>
                <Route path='/profile/:userid' component={ProfilePage}> 
                    {loggedIn ? (<ProfilePage />) : (<Redirect to='/login' />)}
                </Route>
                <Route path='/create' component={CreateTrekPage}>
                    {loggedIn ? (<CreateTrekPage />) : (<Redirect to='/' />)}
                </Route>               
                <Route path='/details/:trekid' component={DetailsTrekPage}> 
                    {loggedIn ? (<DetailsTrekPage />) : (<Redirect to='/login' />)}
                </Route>
                <Route path='/edit/:trekid' component={EditTrekPage}> 
                    {loggedIn ? (<EditTrekPage />) : (<Redirect to='/login' />)}
                </Route>

            </Switch>
        </BrowserRouter>
    )
}

export default Navigation