import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layouts/Layout'
import UserMenu from '../../components/Layouts/UserMenu'
import { useAuth } from '../../context/auth'
import toast from 'react-hot-toast'
import axios from 'axios'

const Profile = () => {
  //contex
  const [auth, setAuth] = useAuth()
  //state
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")

  //get user data
  useEffect(()=>{
    const {email, name, phone, password, address} = auth?.user
    setName(name)
    setPassword(password)
    setEmail(email)
    setPhone(phone)
    setAddress(address)
  },[auth?.user])

  const handleSublit = async (e) => {
    e.preventDefault()
    try {
      const {data} = await axios.put(`${process.env.REACT_APP_API}/api/v1/auth/profile`,{
        name,email,password,phone,address
      });
      if (data?.error) {
        toast.error(data?.error)
      } else {
        setAuth({...auth, user: data.updatedUser});
        let ls = localStorage.getItem("auth")
        ls = JSON.parse(ls)
        ls.user = data.updatedUser
        localStorage.setItem("auth", JSON.stringify(ls))
        toast.success("Profile Updated Successfully")
        console.log("Profile Updated Successfully")
        alert("Profile Updated Successfully");
      }
    } catch (error) {
      console.log(error)
      toast.error("Something went wrong")
    }
  }

  return (
    <Layout title={"Your Profile"}>
        <div className='container-fluid m-3 p-3'>
        <div className='row'>
            <div className='col-md-3'>
                <UserMenu/>
            </div>
            <div className='col-md-9'>
            <div className="form-container">
        <form onSubmit={handleSublit}>
        <h4 className="title">User Profile</h4>
          <div className="mb-3">
            <input
              type="text"
              value={name}
              onChange={(e)=>{setName(e.target.value)}}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Name"
              
              autoFocus
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e)=>{setEmail(e.target.value)}}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Email"
              
              autoFocus
              disabled
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={password}
              onChange={(e)=>{setPassword(e.target.value)}}
              className="form-control"           
              id="exampleInputPassword1"
              placeholder="Password"
              
              autoFocus
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={phone}
              onChange={(e)=>{setPhone(e.target.value)}}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Phone"
              
              autoFocus
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={address}
              onChange={(e)=>{setAddress(e.target.value)}}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Address"
              
              autoFocus
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Update
          </button>
        </form>
      </div>
            </div>
        </div>
        </div>
    </Layout>
  )
}

export default Profile
