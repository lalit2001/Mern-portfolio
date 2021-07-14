import React,{useState} from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import pic from '../img/signup.svg';
import { NavLink, useHistory } from 'react-router-dom';

const Signup = () => {

    const history=useHistory();
    const [user,setUser]=useState({
        name:"",email:'',phone:'',work:'',password:'',cpassword:''
    });

    let name,value;
    const handleInputs=(e)=>{
            name=e.target.name;
            value=e.target.value;
            setUser({...user,[name]:value});
    }

    const PostData= async (e)=>{
        e.preventDefault();
        const {name,email,phone,work,password,cpassword}=user;
        const res= await fetch("/register",{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,email,phone,work,password,cpassword
            })
        });

        const data=await res.json();

        if(res.status===422 ||!data){
            window.alert('Invalid registration');
            console.log('Invalid registration');
            console.log(res);
        }else{
            window.alert('Registration Sucessfull');
            console.log('Registration Sucessfull');
            history.push('/login');
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
                            <h3>Sign Up</h3>

                            <div className="form-group">
                                <label><i class="zmdi zmdi-account"></i></label>
                                <input type="text" name='name' className="form-control1" placeholder="First name"
                                value={user.name}
                                onChange={handleInputs} />
                            </div>

                            
                            <div className="form-group">
                                <label><i class="zmdi zmdi-email"></i></label>
                                <input type="email" name='email' className="form-control1" placeholder="Enter email"
                                value={user.email}
                                onChange={handleInputs} />
                            </div>

                            <div className="form-group">
                                <label><i class="zmdi zmdi-phone"></i></label>
                                <input type="text" name='phone' className="form-control1" placeholder="Phone no" 
                                    value={user.phone}
                                    onChange={handleInputs}
                                />
                            </div>


                            <div className="form-group">
                                <label><i class="zmdi zmdi-slideshow"></i></label>
                                <input type="text" name='work' className="form-control1" placeholder="Your profession"
                                value={user.work}
                                onChange={handleInputs} />
                            </div>

                            <div className="form-group">
                                <label><i class="zmdi zmdi-lock"></i></label>
                                <input type="password" name='password' className="form-control1" placeholder="Enter password"
                                value={user.password}
                                onChange={handleInputs} />
                            </div>

                            <div className="form-group">
                                <label><i class="zmdi zmdi-lock"></i></label>
                                <input type="password" name='cpassword' className="form-control1" placeholder="Confirm password"
                                value={user.cpassword}
                                onChange={handleInputs} />
                            </div>

                            <button type="submit" className="btn btn-primary btn-block btn" onClick={PostData}>Sign Up</button>
                            <p className="forgot-password text-right">
                                Already registered <NavLink to="/login">sign in?</NavLink>
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

export default Signup;
