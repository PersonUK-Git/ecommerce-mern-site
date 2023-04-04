import React from 'react'
import Layout from '../../components/Layout/Layout'
import UserMenu from '../../components/Layout/UserMenu'
import { useAuth } from '../../context/auth'
const Orders = () => {
    const [auth] = useAuth()
  return (
    <Layout title={`${auth?.user?.name}'s - order`}>
        <div className='row container-fluid p-3 m-3'>
            <div className='col-md-3'>
                <UserMenu />
            </div>
            <div className='col-md-9'>
                <h1>All Orders</h1>
            </div>
        </div>
    </Layout>
  )
}

export default Orders