const getNavigation = (user) => {

  const authLinks = [
    
    {
      title: "Request trek",
      link: "/create"
    },
    {
      title: `Hello, ${user && user.username}`,
      link: `/profile/${user && user.id}`
    },
    {
      title: "Logout",
      link: `/logout`
    }
  ]

  const guestLinks = [
    {
      title: "Register",
      link: "/register"
    },
    {
      title: "Login",
      link: "/login"
    }
  ]
  const loggedIn = user && user.loggedIn
  return loggedIn ? authLinks : guestLinks
}

export default getNavigation