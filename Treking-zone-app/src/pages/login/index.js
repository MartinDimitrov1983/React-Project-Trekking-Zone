import React, { useContext, useState } from "react"
import { useHistory } from "react-router-dom"
import styles from "./index.module.css"
import PageLayout from "../../components/page-layout"
import Input from "../../components/input"
import Button from "../../components/button"
import Link from "../../components/link"
import UserContext from "../../Context"
import authenticate from "../../utils/authenticate"

const LoginPage = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const context = useContext(UserContext)
    const history = useHistory()

    const handleSubmit = async (event) => {
        event.preventDefault()

        await authenticate('http://localhost:9999/api/user/login', {
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

                <div className="text-center mb-4">
                    <h1 className="h3 mb-3 font-weight-normal">Login</h1>
                </div>

                <Input
                    id="username"
                    type="text"
                    name="username"
                    placeHolder="Username"
                    label="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <Input
                    id="password"
                    type="password"
                    name="password"
                    placeHolder="Password"
                    label="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button title="Sign In" />

                <div className="text-center mb-4">
                    <p className="alreadyUser"> Don't have account? Then just
                        <Link href="/register" title=" Sign-Up" />!
                    </p>
                </div>

                <p className="mt-5 mb-3 text-muted text-center">© The Trekking Zone - 2019.</p>

            </form>
        </PageLayout>
    )
}

export default LoginPage;
