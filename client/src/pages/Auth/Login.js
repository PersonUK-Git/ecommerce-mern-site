import React, { useState } from 'react'
import axios from 'axios'
import AuthStyles from '../../styles/AuthStyles.css'
import Layout from '../../components/Layout/Layout'
import { toast } from 'react-toastify'
import { useNavigate , useLocation} from 'react-router-dom'
import { useAuth } from '../../context/auth'

const Login = () => {
            

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [auth, setAuth] = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post('http://localhost:8080/api/v1/auth/login', { email, password })
            if(res.data.success){
                toast.success(res.data.message)
                setAuth({
                    ...auth,
                    user: res.data.user,
                    token: res.data.token
                })
                localStorage.setItem('auth', JSON.stringify(res.data))

                navigate(location.state || '/')
            }else{
                toast.error(res.data.message)
            }
        } catch (error) {
            console.log(`error in Register.js in auth : ${error}`);
            toast.error('Something went wrong')
        }
    }
  return (
    <Layout title="Login - ecommerce app">
    <div className='form-container'>
        <h1>Login Page</h1>
        <form onSubmit={handleSubmit}>


            <div className="mb-3">

                <input type="email" className="form-control" id="exampleInputEmail1" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email' required />

            </div>

            <div className="mb-3">

                <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter your Password' required />
            </div>

            
            <div className='mb-3'>
            <button type="button" className="btn btn-primary" onClick={()=>{navigate('/forgot-password')}}>Forgot Password</button>
            </div>

            <button type="submit" className="btn btn-primary">Login</button>
        </form>

    </div>
</Layout>
  )
}

export default Login