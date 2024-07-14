import React, {useState}from "react";
import Layout from "../../components/Layouts/Layout";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from 'axios'

const ForgotPassword = () => {
  const [email, setEmail] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [answer, setAnswer] = useState("")
  const navigate = useNavigate()

  const handleSublit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/forgot-password`,{
        email,newPassword,answer
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message)
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
      <div className="form-container">
        <form onSubmit={handleSublit}>
        <h4 className="title">FORGOT PASSWORD</h4>
          <div className="mb-3">
            
          </div>
          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e)=>{setEmail(e.target.value)}}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Email"
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
              id="exampleInputEmail1"
              placeholder="Enter your Favorite Sport Name"
              required
              autoFocus
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={newPassword}
              onChange={(e)=>{setNewPassword(e.target.value)}}
              className="form-control"           
              id="exampleInputPassword1"
              placeholder="Password"
              required
              autoFocus
            />
          </div>
          <button type="submit" className="btn btn-primary">
            RESET
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default ForgotPassword;
