import React, { useState, useEffect } from 'react'
import UserContext from './Context'
import getCookie from './utils/cookie'
import config from './utils/config'

const App = (props) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const logIn = (user) => {
    setUser({
      ...user,
      loggedIn: true
    })
  }

  const logOut = () => {
    document.cookie = "x-auth-token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
    setUser({
      loggedIn: false
    })
  }

  useEffect(() => {
    const token = getCookie('x-auth-token')
    if (!token) {
      logOut()
      setLoading(false)
      return
    }
    
    fetch(`${config.userURL}verify`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      }
    }).then(promise => {
      return promise.json()
    }).then(response => {
      if (response.status) {
        console.log(response.user.treks)
        console.log(response.user)
        logIn({
          username: response.user.username,
          id: response.user._id,
          treks: response.user.treks.map(x => x.location)
        })
      } else {
        logOut()
      }
      setLoading(false)
    })
  }, [])

  if (loading) {
    return (
      <div>Loading....</div>
    )
  }

  return (
    <UserContext.Provider value={{
      user,
      logIn,
      logOut
    }}>
      {props.children}
    </UserContext.Provider>
  )
}

export default App