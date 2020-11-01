import React, { useContext } from 'react'
import {
    BrowserRouter,
    Switch,
    Route,
    Redirect
} from 'react-router-dom'
// import Publications from "./pages/publications"
// import ErrorPage from "./pages/error"
import RegisterPage from "./pages/register"
import LoginPage from "./pages/login"
import Home from "./pages/home"
import CreateTrekPage from "./pages/createTrek"
import ProfilePage from "./pages/profile"
import DetailsTrekPage from "./pages/detailsTrek"
import EditTrekPage from "./pages/editTrek"
// import ProfilePage from "./pages/profile"
// import ShareThoughtsPage from "./pages/share-thoughts"
import UserContext from "./Context"

const Navigation = () => {
    const context = useContext(UserContext)
    const loggedIn = context.user === null ? false : context.user.loggedIn 

    return (
        <BrowserRouter>
            <Switch>

                <Route path="/" exact component={Home} />
                <Route path="/register" component={RegisterPage} >
                    {loggedIn ? (<Redirect to="/" />) :(<RegisterPage />)}
                </Route>
                <Route path="/login">
                    { loggedIn ? (<Redirect to="/"/>) : <LoginPage />}
                </Route>
                <Route path="/create" component={CreateTrekPage} >
                    {loggedIn ? (<CreateTrekPage />) : (<Redirect to="/" />)}
                </Route>               
                <Route path="/profile/:userid" > 
                    {loggedIn ? (<ProfilePage />) : (<Redirect to="/login" />)}
                </Route>
                <Route path="/details/:trekid" > 
                    {loggedIn ? (<DetailsTrekPage />) : (<Redirect to="/login" />)}
                </Route>
                <Route path="/edit/:trekid" > 
                    {loggedIn ? (<EditTrekPage />) : (<Redirect to="/login" />)}
                </Route>

            </Switch>
        </BrowserRouter>
    )
}

export default Navigation