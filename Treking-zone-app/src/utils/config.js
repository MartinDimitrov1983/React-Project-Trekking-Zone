import getCookie from './cookie'

const config = {
    userURL: 'http://localhost:9999/api/user/',
    trekURL: 'http://localhost:9999/api/trek/',
    authHeader: {
        'Content-Type': 'application/json',
        'Authorization': getCookie('x-auth-token')
    }

}

export default config;