import React, {useState}from "react";
import Layout from "../../components/Layouts/Layout";
import { useNavigate, useLocation} from "react-router-dom";
import { toast } from "react-toastify";
import axios from 'axios'
import { useAuth } from "../../context/auth";
import "../../styles/AuthStyles.css";

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [auth, setAuth] = useAuth("")
  const navigate = useNavigate()
  const location = useLocation()

  const handleSublit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`,{
        email,password
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message)
        setAuth({
          ...auth,
          user:res.data.user,
          token:res.data.token
        });
        localStorage.setItem("auth", JSON.stringify(res.data))
        navigate(location.state || "/")
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
        <h4 className="title">Login FORM</h4>
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
              type="password"
              value={password}
              onChange={(e)=>{setPassword(e.target.value)}}
              className="form-control"           
              id="exampleInputPassword1"
              placeholder="Password"
              required
              autoFocus
            />
          </div>
          <div className="mb-3">
            <button type="button" className="btn btn-primary forgot-btn"
            onClick={()=>{navigate("/forgot-password")}}>
              Forgot Password
            </button>
          </div>
          <button type="submit" className="btn btn-primary">
            LOGIN
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
