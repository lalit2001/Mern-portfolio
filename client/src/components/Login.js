import {React,useState} from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import pic from '../img/login.svg';

const Login = () => {

    const history=useHistory();
    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');

    const loginUser= async (e)=>{
        e.preventDefault();

        const res=await fetch('/signin',{
            method:"POST",
            headers:{
                'Content-Type':"application/json",
                'Accept': 'application/json'
            },
            body:JSON.stringify({
                email,password
            })
        });
        const data=res.json();
        if(res.status===400 ||!data){
            window.alert("Invalid credential")
            
            console.log(data);
        }else{
            window.alert("Login Sucessfull");
            history.push('/');
            console.log(data);
    }
    }

    return (

        
        <>
            
            <section >
                
                <div className='d-flex align-items-center justify-content-center mt-5 bg' style={{height: "35em"}}>
                    <div className="d-flex align-items-center justify-content-center bg1">
                        <div class="col1">
                        <form method='POST'>
                            <h3>Login</h3>

                                                        
                            <div className="form-group">
                                <label><i class="zmdi zmdi-email"></i></label>
                                <input type="email" value={email}
                                onChange={(e)=> setEmail(e.target.value)} name='email' className="form-control1" placeholder="Enter email" />
                            </div>

                            
                            <div className="form-group">
                                <label><i class="zmdi zmdi-lock"></i></label>
                                <input type="password" value={password}
                                onChange={(e)=> setPassword(e.target.value)} name='password' className="form-control1" placeholder="Enter password" />
                            </div>

                            <button type="submit" onClick={loginUser} className="btn btn-primary btn-block btn">Log In</button>
                            <p className="forgot-password text-right">
                                Don't have registered <NavLink to="/signup">Register Now</NavLink>
                            </p>
                        </form>
                        </div>
                        <div className="col2">
                            <img src={pic} alt="img" className='signup-pic'/>
                        </div>
                    </div>
                </div>

            </section>

        </>
    )
}

export default Login;
