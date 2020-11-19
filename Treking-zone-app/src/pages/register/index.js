import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import styles from './index.module.css'
import PageLayout from '../../page-layout'
import Input from '../../components/input'
import Button from '../../components/button'
import Link from '../../components/link'
import UserContext from '../../Context'
import { authenticate, config } from '../../utils'


const RegisterPage = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')
    const context = useContext(UserContext)
    const history = useHistory()

    const handleSubmit = async (event) => {
        event.preventDefault()

        await authenticate(`${config.userURL}register`, {
            username,
            password
        }, (user) => {
            context.logIn(user)
            history.push('/')
        }, (e) => {
            console.log('Error', e)
        }
        )
    }

    return (
        <PageLayout>
            <form onSubmit={handleSubmit}>

                <div className='text-center mb-4'>
                    <h1 className='h3 mb-3 font-weight-normal'>Register</h1>
                    <p>Join our family and make a wish!</p>
                </div>

                <Input
                    id='username'
                    type='text'
                    name='username'
                    placeHolder='Username'
                    label='Username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <Input
                    id='password'
                    type='password'
                    name='password'
                    placeHolder='Password'
                    label='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Input
                    id='rePassword'
                    type='password'
                    name='rePassword'
                    placeHolder='Re-Password'
                    label='Re-Password'
                    value={rePassword}
                    onChange={(e) => setRePassword(e.target.value)}
                />

                <Button title='Sign Up' />

                <div className='text-center mb-4'>
                    <p className='alreadyUser'>  Already have account? Then just
                        <Link href='/login' title=' Sign-In' />!
                    </p>
                </div>

                <p className='mt-5 mb-3 text-muted text-center'>© The Trekking Zone - 2019.</p>

            </form>
        </PageLayout>
    )
}

export default RegisterPage