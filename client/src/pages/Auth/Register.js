import React, { useState } from 'react'
import axios from 'axios'
import AuthStyles from '../../styles/AuthStyles.css'
import Layout from '../../components/Layout/Layout'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
const Register = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")
    const [answer, setAnswer] = useState("")
    const navigate = useNavigate()

    //form function
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post('http://localhost:8080/api/v1/auth/register', { name, email, password, phone, address , answer})
            if(!res.data.sucess){
                toast.success(res.data.message)
                navigate('/login')
            }else{
                toast.error(res.data.message)
            }
        } catch (error) {
            console.log(`error in Register.js in auth : ${error}`);
            toast.error('Something went wrong')
        }
    }

    return (
        <Layout title="Register - ecommerce app">
            <div className='form-container'>
                <h1>Register Page</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">

                        <input type="text" className="form-control" id="exampleInputEmail1" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter your name' required />

                    </div>

                    <div className="mb-3">

                        <input type="email" className="form-control" id="exampleInputEmail1" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email' required />

                    </div>

                    <div className="mb-3">

                        <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter your Password' required />
                    </div>

                      <div className="mb-3">
                        <input type="text" className="form-control" id="exampleInputEmail1" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='Enter your phone' required />

                    </div>

                    <div className="mb-3">

                        <input type="text" className="form-control" id="exampleInputEmail1" value={address} onChange={(e) => setAddress(e.target.value)} placeholder='Enter your address' required />

                    </div>

                    <div className="mb-3">

                        <input type="text" className="form-control" id="exampleInputEmail1" value={answer} onChange={(e) => setAnswer(e.target.value)} placeholder='What is your bestfriend name ?' required />

                    </div>
                  



                    <button type="submit" className="btn btn-primary">REGISTER</button>
                </form>

            </div>
        </Layout>
    )
}

export default Register