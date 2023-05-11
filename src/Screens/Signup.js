import React, { useState } from 'react'
import {Link} from 'react-router-dom';
const Signup = () => {
    const[credentials,setcredentials] = useState({name:"",email:"",password:"",geolocation:""})
    const handleSubmit = async(e) => {

        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/creatuser",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password,location:credentials.geolocation})
        })
        const j = await response.json();
        console.log(j);
        if(!j.success){
            alert('Enter valid credintials')
        }
    }
    const onChange = (event) => {
        setcredentials({...credentials,[event.target.name]:event.target.value})
    }
  return (
    <>
    <div className='container'>
     <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" name="name" value={credentials.name} onChange={onChange} />
   
  </div>
  <div className="mb-3 ">
    <input type="email" className="form-control" name='email' value={credentials.email
    } onChange={onChange}/>
    <label className="form-lable" htmlFor="exampleInputEmail1">Email address</label>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" name="password" value={credentials.password} onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
    <input type="text" className="form-control" name="geolocation" value={credentials.geolocation} onChange={onChange}/>
  </div>
  
  <button type="submit" className="btn btn-dark">Submit</button>
    <Link to='/login' className='m-3 btn-danger'>Already user</Link>
</form>
</div>
    </>
  )
}

export default Signup;
