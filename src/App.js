import React from 'react';
import { useForm } from 'react-hook-form'
import './assets/App.css'


function Menu(){

  const { register, handleSubmit } = useForm()

  function onSubmit(data){
    console.log(data)
  }

  function handleSignin(){
    document.body.className =  "sign-in-js"; 

  }

  function handleSignUp(){
    document.body.className = "sign-up-js";
  }


  return (
    <div className="container">
      <div className="content first-content">
        <div className="first-column">
          <h2 className="title title-primary">Welcome Back</h2>
          <p className="description description-primary"> To keep connected with us </p>
          <p className="description" style={{color: '#fff'}} > Please login with your personal info</p>
          <button className="btn btn-primary" onClick={() => handleSignin()} >Sign In</button>   
         
        </div>
      <div className="second-column">
        <h2 className="title title-second"> Create Account</h2>
       
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
              <label className="label-input">
              {/* <i class="far fa-user"></i> */}
                <input type="text" name="username" autoComplete="off" required ref={register} /> 
              </label>
              <label className="label-input" >
                {/* <i class="far fa-user"></i> */}
                <input type="email" name="email"  autoComplete="off" required ref={register} />
              </label>

              <label className="label-input" >
              {/* <i class="far fa-user"></i> */}
                <input type="password" name="pass" required  autoComplete="off" ref={register} />
              </label>

              <button className="btn btn-second" >Sign Up</button>
        </form>
      </div>
    </div>
        

    {/* ---------------------------------------------------------------------------------------------------------- */}

  
    <div className="content second-content">
          <div className="first-column">
            <h2 className="title title-primary">Hello, friend!</h2>
            <p className="description description-primary "> Enter your personal details </p>
            <p className="description"> and start journey with us</p>
            <button className="btn btn-primary" onClick={() => handleSignUp()} >Sign up</button>   
          </div>
        <div className="second-column">
          <h2 className="title title-second "> Sign into developer</h2>
      
          {/* onSubmit={handleSubmit(onSubmit)} */}
          <form className="form" >
            
              <label className="label-input" >
                <input type="email" name="email"  autoComplete="off" required ref={register} />
              </label>

              <label className="label-input" >
                <input type="password" name="pass" required  autoComplete="off" ref={register} />
              </label>

              <a className="password" className="password" href="#"> Forgot password </a>

              <button className="btn btn-second"  >Sign in</button>
        </form>
        </div>
     </div>
    </div>
  );
}

export default Menu;