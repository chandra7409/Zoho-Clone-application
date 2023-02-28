import React from "react";

const Homecards = () => {
  return (
    <>
      <div className="conatiner-fluid">
        <div className="container" id="bigcantainer">
          <div className="row">
            <div className="col-lg-6">
              <div className="cardhero">
                <h1
                  style={{
                    fontSize: "50px",
                    paddingLeft: "40px",
                    color: "white",
                    fontWeight: "700",
                  }}
                >
                  Transform your HR,<br></br>
                  regardless of your
                </h1>
                <h2
                  style={{
                    fontSize: "40px",
                    paddingLeft: "40px",
                    color: "#ffe100",
                    fontWeight: "600",
                  }}
                >
                  business size or <br></br>industry
                </h2>
                <h4
                  style={{
                    color: "white",
                    lineHeight: "30px",
                    paddingLeft: "40px",
                  }}
                >
                  With over a decade of experience, serving more than<br></br>{" "}
                  4500+ organizations, we've catered to businesses of all
                  <br></br> shapes and sizes. Check out how Zoho People can
                  <br></br> benefit your workforce.
                </h4>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card" id="imagecardcircle">
                <img
                  src="//www.zohowebstatic.com/sites/zweb/images/people/zp-indusmain.png"
                  alt="problems"
                  style={{ height: "330px" }}
                />
              </div>
              <h1 style={{ textAlign: "center", color: "yellow" }}>Small</h1>
              <h3 style={{ textAlign: "center", color: "white" }}>
                We Help your small yet focused <br></br>Businesses grow
              </h3>
            </div>
          </div>
          <div className="line1"></div>
          <div className="row" id="homecards1">
            <div className="col-lg-4">
                <img
                  src="https://www.zohowebstatic.com/sites/zweb/images/people/zp-marketing.png"
                  alt="birthday"
                  style={{ height: "200px" }}
                />
                <h2 style={{color:"white"}}>
                  Media and <br></br>advertising
                </h2>
                <p className="pimage">
                  Manage HR and engage your<br></br> workforce with a creative
                  solution.
                </p>
                <h3 className="underliner"> Learn more</h3>
            </div>
            <div className="col-lg-4">
                <img
                  src="https://www.zohowebstatic.com/sites/zweb/images/people/zp-it.png"
                  alt="birthday"
                  style={{ height: "180px" }}
                />
                <h1 style={{color:"white"}}>
                  Information <br></br>Technology
                </h1>
                <p className="pimage"> Cater to the needs of an evolving<br></br> workforce.</p>
                <h3 className="underliner"> Learn more</h3>
            </div>
            <div className="col-lg-4">
                <img
                  src="https://www.zohowebstatic.com/sites/zweb/images/people/zp-education.png"
                  alt="birthday"
                  style={{ height: "224px" }}
                />
                <h1 style={{color:"white"}}>
                Education
                </h1>
                <p className="pimage"> Streamline a cohesive working <br></br>curriculum.</p>
                <h3 className="underliner"> Learn more</h3>
            </div>
          </div>
          <div className="row" id="homecards1">
            <div className="col-lg-4">
                <img
                  src="https://www.zohowebstatic.com/sites/zweb/images/people/zp-healthcare.png"
                  alt="birthday"
                  style={{ height: "200px" }}
                />
                <h2 style={{color:"white"}}>
                 Healthcare
                </h2>
                <p className="pimage">
                Consolidate HR processes and <br></br>create a compassionate <br></br>employee experience.
                </p>
                <h3 className="underliner"> Learn more</h3>
            </div>
            <div className="col-lg-4">
                <img
                  src="https://www.zohowebstatic.com/sites/zweb/images/people/zp-finance.png"
                  alt="birthday"
                  style={{ height: "180px" }}
                />
                <h1 style={{color:"white"}}>
                  Finance
                </h1>
                <p className="pimage"> Strategically analyze and account <br></br> for your HR needs</p>
                <h3 className="underliner"> Learn more</h3>
            </div>
          </div>
          
        </div>
      </div>
      <br></br><br></br>
          <div className="row">
            <div className="col-lg-6" style={{textAlign:"center"}}>
            <img
                  src="https://www.zohowebstatic.com/sites/zweb/images/people/zp-privacybanner.png"
                  alt="birthday"
                  style={{ height: "250px" }}
                />
                <h2 style={{color:"black"}}>
                Trust and security
                </h2>
                <p className="pimage1">
                Trust and customer security is the foundation of everything we<br></br> do at Zoho. Built on our own cloud, battle-tested infrastructure,<br></br> we deploy industry-leading safety measures so you can rest<br></br> assured that your data is safe and protected 24/7.
                </p>
                <h3 className="underliner1"> Security and Privacy</h3>
            </div>
            <div className="col-lg-6" style={{textAlign:"center"}}>
            <img
                  src="https://www.zohowebstatic.com/sites/zweb/images/people/zp-grow.png"
                  alt="birthday"
                  style={{ height: "250px" }}
                />
                <h2 style={{color:"black"}}>
               
                Increased business agility
                </h2>
                <p className="pimage1">
                The skills your company needs, where employees work and <br></br>how your company itself functions continue evolving. Zoho<br></br> arms you with the ability to adapt to these changes, to have <br></br>consistent, accurate, and real-time visibility of your global <br></br>workforce with better decision-making.
                </p>
                <h3 className="underliner1"> Data 
                Why Zoho People
                </h3>
            </div>
          </div>
          <div className="conatiner" id="singlerow1">
            <div className="row" >
            <div className="col-lg-12">
<h1 id="singlerow">Provide an HR experience that your <br></br> employees will love.</h1>
<button id="signbtn">SIGN UP FOR FREE</button>
<center><h5><b>30 day free trial. No credit card required.</b></h5></center>
            </div>
            </div>
          </div>
    </>
  );
};

export default Homecards;
