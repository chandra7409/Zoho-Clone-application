import React from "react";
import Navbar from "./Navbar";
 import Sidebar from "./LeftSidebar";

const Sectionpage = () => {
  return (
<>
      <div className="navbarSection">
        <Navbar />
        </div>
        <div className="main1">
          <div className="left1">
            <Sidebar/>
          </div>
          <div className="maincantiner">
    <div className="divnavbar">
    

    <div className="inlinebtn"><button style={{backgroundColor:"blue",padding:"5px",borderRadius:"10px"}}>Check In</button> 
   <button style={{marginLeft:"25px"}}>00:00 Hrs.</button></div>
    <div className="inlebtn2">
   <button>Apply Leave</button> 
             <button style={{marginLeft:"25px"}}>Log Time</button>
    </div>

    </div>
<div className="threecards">
<div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
  <div></div>
    <div className="card">
      <h4>Birthdays</h4>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxr3pbhS_QgZP3KjH2e_3H9c6XVgiVfymLMA&usqp=CAU" alt="birthday"style={{height:"200px"}}/>
      <p> No Birthday Today</p>
      
    </div>
  </div>
  <div className="col">
  <div></div>
    <div className="card">
    <h4>New Hires</h4>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUO1cbupGJi8GbYYyotVHISrblg6zt5UcO6A&usqp=CAU"  alt="new hires" style={{height:"200px"}}/>
    <p>No new Joinees in past 15 days</p>
    </div>
  </div>
  <div className="col">
    <div className="card">
    <h4>Favourites</h4>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlkNS7X6JkGKhOHG4qE9IFRE_KaWlCf6lXSQ&usqp=CAU" alt="favourite" style={{height:"200px"}} />
    <p>No Farourite found</p>
    </div>
  </div>
</div>
</div>
<br></br>
<br></br>
<div className="threecards2">
<div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card">
    <h4>Quick Links</h4>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU1d8U0xJoQ_QtclTHRL61J2WTlWpw-3K1zQ&usqp=CAU" alt="Quick" style={{height:"200px"}}/>
    <p>These are Quick links</p>
      
    </div>
  </div>
  <div className="col">
    <div className="card">
    <h4>Request for Approved</h4>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFMJZQD9mUml1uwWYnqsSRJ-Sy3mZfN-Lm0g&usqp=CAU" alt="request" style={{height:"200px"}}/>
    <p>Accept the Request</p>
    </div>
  </div>
  <div className="col">
    <div className="card">
    <h4>Attendance</h4>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmdodK-mLpNTiV19e_jZXgaRujlDkEWFI4Gw&usqp=CAU" alt="attendence" style={{height:"200px"}}/>
    <p>Regular maintaince </p>
    </div>
  </div>
</div>

<br></br>
<br></br>
<div className="threecards3">
<div className="row row-cols-2 g-3">
  <div className="col">
    <div className="card">
      <h4>Quick Solution</h4>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBmrftKpakvGBCLvwVGZoIYBc3WwTVGXgvvTnweMUP3g2U3Psj9ZT81ZFI9Ec-JA7uoQY&usqp=CAU" alt="add image" style={{height:"330px"}}/>
      <p>Now days fast Solution</p>
    </div>
  </div>
  <div className="col">
    <div className="card">
     <h4>Technologies</h4>
     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_a_c5ejgUxgUZ8EFQoXAmphyjYrKpzy1crA&usqp=CAU" alt="technology" style={{height:"330px"}}/>
     <p>These technologies best</p>
    </div>
  </div>
  <div className="col">
    <div className="card">
    <h4>Clients</h4>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvl5S9w6oluQl0ziZ6i7psNJHWBeCwq14pSA&usqp=CAU" alt="our clients" style={{height:"330px"}}/>
    <p>Our Client are Happy</p>
     
    </div>
  </div>
  <div className="col">
    <div className="card">
    <h4>Problems</h4>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwWEF0imDRday_24xAyJyH6vV-cpeIYGZ5cA&usqp=CAU" alt="problems" style={{height:"330px"}}/>
     <p>Found the Solution</p>
    </div>
  </div>
</div>
  </div>
</div>
</div>
</div>

      </>
  );
};
export default Sectionpage;
