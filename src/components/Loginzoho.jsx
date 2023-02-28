
import React,{useState} from 'react'
const Loginzoho = () => {
    const [data,setData]= useState({
        username:"",
        email:"",
        password:"",
        Phone:""
      });
    function handleInput(e){
      let name = e.target.name
      let value = e.target.value
      setData({...data , [name]:value})
    }
    console.log(data);
    const handleSubmit =()=>{
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };
    fetch('http://localhost:8081/ZohoClone/api/v1/login', requestOptions)
        .then(response => response.json())
        .then(data => console.log(data))
    }
  return (
<>
    <div className='contain'>
    <div className="row row-cols-1 row-cols-md-2 g-4" id='logincard'>
  <div className="col" >
    
      <img src="https://proteconsol.com/img/logo1.png" className="card-img-top" alt="..." id='cardimg'/>
      <h2 style={{paddingLeft:"20px"}}>Sign in</h2>
      <h3 style={{paddingLeft:"20px"}}>to access People</h3>
      <br></br>
      <form className='form2' onChange={handleSubmit}>
        <input type="text" name='email' placeholder='Enter the email'value={data.email} onChange={handleInput} style={{width:"300px",outline:"none"}}/>
        <input type="text" name='password' placeholder='Enter the password' value={data.password} onChange={handleInput} style={{width:"300px",outline:"none"}}/>
        <br></br>
        <br></br>
        <button type='submit' style={{width:"300px",backgroundColor:"#159AFF",height:"45px",textAlign:"center",justifyContent:"center",borderRadius:"5px"}}>Login</button>
        <br>
        </br>
        <br></br>
        <div>
            <p><a href='#'> Forget Password </a></p>
        </div>
        <div>----------------OR------------</div>
<div>
    <h4>Using Signin</h4>
</div>
<div className='google'>


</div>
<div>

</div>
      </form>
   
    </div>
  
  <div className="col">
  <div className='card'>
<img src='https://accounts.zoho.in/v2/components/images/mfa_illustration2x.png' alt='cardimg'></img>
<div className="botton-content">
<h4 style={{textAlign:"center"}}><b>MFA for all accounts </b></h4>
<h5>Secure online accounts with OneAuth 2FA. Back up OTP secrets and never lose access to your accounts.</h5>

  <button type='Submit' id='btn'>Learn More</button>

</div>
   </div>
    </div>
    </div>
</div>
<div classNmae="footerSection">
<h5>Don't have a Zoho account? <a href='#'> Sign Up </a><br></br>Now© 2023, Zoho Corporation Pvt. Ltd. All Rights Reserved.</h5>

</div>
</>

  )
}

export default Loginzoho