import React, {useState}from "react";
import Layout from "../../components/Layouts/Layout";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from 'axios'
import "../../styles/AuthStyles.css"
const Register = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const [answer, setAnswer] = useState("")
  const navigate = useNavigate()

  const handleSublit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register`,{
        name,email,password,phone,address,answer
      });
      if (res.data.success) {
        toast.success(res.data.message)
        navigate("/login")
      } else {
        toast.error(res.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error("Something went wrong")
    }
  }

  return (
    <Layout titlr="Register - Ecommerce App">
      <div className="form-container" style={{ minHeight: "90vh" }}>
        <form onSubmit={handleSublit}>
        <h4 className="title">REGISTER FORM</h4>
          <div className="mb-3">
            <input
              type="text"
              value={name}
              onChange={(e)=>{setName(e.target.value)}}
              className="form-control"
              id="exampleInputName"
              placeholder="Enter Your Name"
              required
              autoFocus
            />
            {/* <label htmlFor="Name">Password</label> */}
          </div>
          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e)=>{setEmail(e.target.value)}}
              className="form-control"
              id="exampleInputEmail"
              placeholder="Enter Your Email"
              required
              autoFocus
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={password}
              onChange={(e)=>{setPassword(e.target.value)}}
              className="form-control"           
              id="exampleInputPassword"
              placeholder="Enter Your Password"
              required
              autoFocus
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={phone}
              onChange={(e)=>{setPhone(e.target.value)}}
              className="form-control"
              id="exampleInputPhone"
              placeholder="Enter Your Phone"
              required
              autoFocus
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={address}
              onChange={(e)=>{setAddress(e.target.value)}}
              className="form-control"
              id="exampleInputAddress"
              placeholder="Enter Your Address"
              required
              autoFocus
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={answer}
              onChange={(e)=>{setAnswer(e.target.value)}}
              className="form-control"
              id="exampleInputAnswer"
              placeholder="What is your Favorite sports"
              required
              autoFocus
            />
          </div>
          <button type="submit" className="btn btn-primary">
            REGISTER
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
