import React, { useEffect } from 'react'
import './Register.css'
import Button from '../../../components/reusables/Button'
import Input from '../../../components/reusables/Input'

const Register = () => {
    let data = {

    }
    const getData = (key, value) => {
        if (key) data[key] = value

    }

    const logData = () => {
        console.log(data)
    }

    useEffect(() => {
        console.log("Register: i mounted")
        return () => console.log("Register: i unmounted")
    }, [])

    return (
        <div>
            <h5>Welcome</h5>
            <div className="registerContainer">
                <Input label="Email" getData={getData} dataKey="username" icon="email" />
                <Input label="Username" getData={getData} dataKey="email" icon="person" />
                <Input label="Password" getData={getData} dataKey="password" icon="https" />
                <Input label="Confirm Password" getData={getData} dataKey={null} icon="https" />
            </div>

            <div className='registerBtn'>
                <Button color='black' text='register' width="100%" outline={false} action={logData} key="" />
            </div>

        </div>
    )
}

export default Register
