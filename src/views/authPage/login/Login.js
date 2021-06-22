import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './Login.css'
import Button from '../../../components/reusables/Button'
import Input from '../../../components/reusables/Input'

const Login = () => {
    let data = {}
    const getData = (key, value) => {
        data[key] = value
    }
    const [loading, setLoading] = useState(false)

    const history = useHistory()

    const loginUser = async () => {
        setLoading(true)
        try {
            let res = await fetch(`http://localhost:5000/users/?email=${data.email}&password=${data.password}`)
                .catch(err => console.error(err))
            let result = await res.json()
            setLoading(false)
            console.log(result)

            if (result.length > 0) history.push("/home")
        } catch (error) {
            setLoading(false)
            console.error(error)
        }
    }
    return (
        <div>
            <h5>Welcome</h5>
            <div className="loginContainer">
                <Input label="Email" getData={getData} dataKey="email" icon="email" />
                <Input label="Password" getData={getData} dataKey="password" icon="person" />
            </div>
            <div className='loginBtn'>
                <Button color='black' text={loading ? 'Loading' : 'Login'} width="100%" outline={false}
                    action={loginUser} key="" />
            </div>
        </div>
    )
}

export default Login
