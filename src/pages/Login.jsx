import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';


const URL = 'http://localhost:3000/api/auth/login';
const Login = () => {

    const [user, setUser] = useState({
        email:"",
        password:"",
    });

    const navigate = useNavigate();
    const {storeTokenInLS} = useAuth();

    const handleInput = (e)=>{
        let name = e.target.name;
        let value= e.target.value;

        setUser({
            ...user,
            [name]:value,
        })

    };

    const handleSubmit  = async (e)=>{
        e.preventDefault();
        try {
            const response = await fetch(URL,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(user),
            });
            console.log("Login Form", response);

            if(response.ok){
                
                alert("Login Successful")
                const res_data = await response.json();
                storeTokenInLS(res_data.token);
                // localStorage.setItem("token", res_data.token);
                setUser({email:"", password:""});
                navigate("/");
            } else{
                alert("Invalid Credentials")
                console.log("inavlid credentials");
                
            }
            
        } catch (error) {
            console.log("login", error);
            
        }
    };
  return (
   <>
    <section>
        <main>
            <div className="section-registration">
                <div className="container grid gird-tow-cols">
                    <div className="registration-image">
                      <img src='/images/login.png' alt='login image' width="570" height="500"/>
                    </div>
                    <div className="registraion-form">
                        <h1 className='main-heading mb3'>login from</h1>
                        <br />
                        <form onClick={handleSubmit}>
                           
                            <div>
                                <label htmlFor='email'>email</label>
                                <input type="email" name='email' placeholder='email' id='email'  required autoComplete='off' value={user.email} onChange={handleInput}/>
                            </div>
                            
                            <div>
                                <label htmlFor='password'>password</label>
                                <input type="password" name='password' placeholder='password' id='password'  required autoComplete='off' value={user.password} onChange={handleInput}/>
                            </div>
                            <br />
                            <button type='submit' className='btn btn-submit'>Login Now</button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    </section>
   </>
  )
}

export default Login