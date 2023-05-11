import React from 'react';
import { useState } from 'react';
import {Link,useNavigate} from 'react-router-dom';

const Login = () => {
 
  let navigate = useNavigate();

      const[credentials,setcredentials] = useState({email:"",password:""})
    const handleSubmit = async(e) => {

        e.preventDefault();
        console.log(JSON.stringify({email:credentials.email,password:credentials.password}))
        const response = await fetch("http://localhost:5000/api/login",{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({email:credentials.email,password:credentials.password})
        })
        const j = await response.json();
        console.log(j);
        if(!j.success){
            alert('Enter valid credintials')
        }
        if(j.success){
          localStorage.setItem("authToken",j.authToken)
          console.log(localStorage.getItem("authToken"))
          navigate("/");
        }
    }
    const onChange = (event) => {
        setcredentials({...credentials,[event.target.name]:event.target.value})
    }
        return (
    <>
    <div className='container'>
     <form onSubmit={handleSubmit}>
  
  <div className="mb-3 ">
  <label className="form-lable" htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" name="email" value={credentials.email} onChange={onChange}/>
   
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" name="password" value={credentials.password} onChange={onChange}/>
  </div>
  
  
 
 
 
 
  <button type="submit" className="btn btn-dark">Submit</button>
    <Link to='/creatuser' className='m-3 btn-danger'>I'm new user</Link>


</form>
</div>

    </>
   )
  
}

export default Login
