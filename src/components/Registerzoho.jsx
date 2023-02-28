 import React,{useState} from 'react'
 import { useNavigate } from 'react-router-dom';
const Registerzoho = () => {
  const navigate=useNavigate();
  const [data,setData]= useState({
    username:"",
    email:"",
    password:"",
    Phone:"",
  });
function handleInput(e){
  let name = e.target.name
  let value = e.target.value
  setData({...data , [name]:value})
}
const handleSubmit =(e)=>{
   e.preventDefault();
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
};
fetch('http://localhost:8081/ZohoClone/api/v1/signup', requestOptions)
    .then(response => response.json())
    .then(data => console.log(data))
}

  return (
    <>
      <diiv className="main">
        <div className='leftdiv'>
        <div className='logo'>
        <img src='https://proteconsol.com/img/logo1.png'id='logo' alt='Protecons'/>
        </div>
<div className='mid-imge' >
    <img src='https://i1.wp.com/flutterbeads.com/wp-content/uploads/2021/07/profile-pic-green.png?fit=500%2C500&ssl=1' id='mid-img' alt='mid-image'/>
</div>
<div className='para'>
<p>Our employees all work from home and <br/>
they are able to check-in/check out instead<br/>
of a time-card. We can just pull reports <br/>
 and payday is much easier</p>
 <p style={{fontSize:"15px"}}><a href='#'>WENDY BALDWIN OF ER4 LOVE</a></p>
  
</div>

        </div>
        <div className='rightdiv'>
<div className='head1right'>
<ul className='head1'>
  <li>have a zoho account ?</li>
  <li style={{color:"red",cursor:"pointer",marginRight:"20px"}} onClick={()=>navigate("/Loginzoho")}>SIGN IN</li>
</ul>

</div>
<div className='mainSignin'>
<p className='p1'></p>
<h4 style={{fontWeight:"600",fontSize:"30px"}}>Start your 30-day free trial</h4>
<form className='form5' onSubmit={handleSubmit}>
    <input type="text" name="username" placeholder='Name:*' value={data.username}  onChange={handleInput} />
    
    <div>
    <input type="text" name="email" placeholder='Email:*'value={data.email} onChange={handleInput}/>
    </div>
    <div>
    <input type="text" name="password" placeholder='Password:*'value={data.password} onChange={handleInput}/></div>
    <div>
    <input type="text" name="Phone" placeholder='Phone Number'value={data.Phone} onChange={handleInput}/>
</div><br></br>
<input type="checkbox"  id="priv"/>I accept the <a href="#" id="term">Terms of Use </a> & <a href="#" id="term">Privacy Policy</a> <br></br>
<br></br>
<button type='submit' id='btn5'>FREE SIGNUP</button>
</form>
</div>
<footer>
          <h3>© 2023, Zoho Corporation Pvt. Ltd. All Rights Reserved.</h3>
        </footer>
        </div>
        
      </diiv>  
    </>
  )
}

export default Registerzoho;