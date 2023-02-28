import React from "react";
import Homecards from "./Homecards";
import {useNavigate} from "react-router-dom"
const Homepage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="mainheader">
        <nav
          className="navbar navbar-expand-lg navbar-light bg-light"
          id="logoheight"
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img
                src="https://cdn.iconscout.com/icon/free/png-256/zoho-282840.png"
                alt="loho"
                id="loohozoho"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Payroll
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Recurit
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Expense
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Mail
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Survey
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    All Products
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <ul className="navbar-nav" id="secodnavbarupper">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  English
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  SIGNIN
                </a>
              </li>
              <li
                className="nav-item"
                style={{
                  width: "110",
                  height: "25",
                  backgroundColor: "#f0483e",
                }}
              >
                <a className="nav-link active" aria-current="page" href="#">
                  GET started
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="d-flex flex-grow-1">
              <img
                src="https://proteconsol.com/img/logo1.png"
                alt=""
                id="secondimg"
              />
              <a className="navbar-brand d-none d-lg-inline-block" href="#">
                {" "}
                People
              </a>

              <div className="w-100 text-right">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#myNavbar"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
              </div>
            </div>
            <div
              className="collapse navbar-collapse flex-grow-1 text-right"
              id="myNavbar"
            >
              <ul className="navbar-nav ms-auto flex-nowrap">
                <div className="dropdown">
                  <button
                    className="btn dropdown-toggle"
                    type="button"
                    id="dropdownMenu2"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Features
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <li>
                      <button className="dropdown-item" type="button">
                        Action
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item" type="button">
                        Another action
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item" type="button">
                        Something else here
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="dropdown">
                  <button
                    className="btn dropdown-toggle"
                    type="button"
                    id="dropdownMenu2"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Solutions
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <li>
                      <button className="dropdown-item" type="button">
                        Action
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item" type="button">
                        Another action
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item" type="button">
                        Something else here
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="dropdown">
                  <button
                    className="btn "
                    type="button"
                    id="dropdownMenu2"
                    aria-expanded="false"
                  >
                    Pricing
                  </button>
                </div>
                <div className="dropdown">
                  <button
                    className="btn "
                    type="button"
                    id="dropdownMenu2"
                    aria-expanded="false"
                  >
                    Customers
                  </button>
                </div>
                <div className="dropdown">
                  <button
                    className="btn dropdown-toggle"
                    type="button"
                    id="dropdownMenu2"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Resources
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <li>
                      <button className="dropdown-item" type="button">
                        Action
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item" type="button">
                        Another action
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item" type="button">
                        Something else here
                      </button>
                    </li>
                  </ul>
                </div>
              </ul>
            </div>
          </nav>
        </div>

        <div className="container">
          <div className="row">
            <div col-lg-12>
              <h1 className="headingmain">
                Deliver exceptional <br></br> employee experiences
              </h1>
              <h4 className="headingsecond">
                The world of work is changing rapidly and so should your HR
                practices. Zoho People is a <br></br>cloud-based HR software
                crafted to nurture employees, quickly adapt to changes, and make{" "}
                <br></br>HR management agile and effective. Simplify your HR
                operations, retain talent, and build a <br></br>high-performing
                workforce while putting employee experience first.
              </h4>
              <div className="midbutton">
                <button className="midbtnleft" onClick={()=>navigate("/Registerzoho")}>SIGNIN FOR FREE</button>
                <button className="midbtnright">REQUEST DEMO</button>
              </div>
              <div className="videotag">
                {/* <video muted="" id="zheadvid" poster="/sites/zweb/images/people/zp-awards.png"><source src="//www.zohowebstatic.com/sites/zweb/images/people/zp-awards.mp4" type="video/mp4"/></video> */}
              </div>
              <div className="midsectionimg">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="miImage">
                      <img
                        src="//www.zohowebstatic.com/sites/zweb/images/people/zp-mobheaderimg.png"
                        media="screen and (max-width: 480px)"
                        width="700"
                        height="393"
                        className="onlymob zpheadimg"
                        alt="Zpeople Mobile Header Banner"
                      />
                      <img
                        src="//www.zohowebstatic.com/sites/zweb/images/people/zp-img4.png"
                        fetchpriority="high"
                        width="243"
                        height="395"
                        alt="Zpeople Image"
                      />
                      <img
                        src="https://www.zohowebstatic.com/sites/zweb/images/people/zp-img1.png"
                        alt=""
                        id="miImage1"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="client-section">
                <h4 class="onlymob">Trusted by 4000+ Businesses Worldwide</h4>
                <ul>
                  <li className="medlife">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Zomato_Logo.png"
                      alt=""
                      style={{ width: "150px", height: "100px" }}
                    />
                  </li>
                  <li className="mcd">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYwzfWJQ9OZSQpRdKjp8AMXfspQZUshbeimA&usqp=CAU"
                      alt=""
                      style={{ width: "150px", height: "100px" }}
                    />
                  </li>
                  <li className="spicejet">
                    <img
                      src="https://s3-prod-europe.autonews.com/s3fs-public/styles/width_792/public/Renault%20Nissan%20Mitsu%20logo%20web.jpg"
                      alt=""
                      style={{ width: "150px", height: "100px" }}
                    />
                  </li>
                  <li className="orientalinsurance">
                    <img
                      src="http://img0cf.b8cdn.com/images/logo/48/1480348_logo_20220227112718_n.png"
                      alt=""
                      style={{ width: "150px", height: "100px" }}
                    />
                  </li>
                  <li className="nissan">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR1lRCNhVoKD0bWg7PfsRDdl5tdyzAuqd-4g&usqp=CAU"
                      alt=""
                      style={{ width: "150px", height: "100px" }}
                    />
                  </li>
                  <li className="gep">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYCvI9ihG0jax-xU-iQzKkvAJdL74LPbYVfw&usqp=CAU"
                      alt=""
                      style={{ width: "150px", height: "100px" }}
                    />
                  </li>
                  <li className="bigblu">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScJjIHGO8YudHe3l6zCF6JahuLmKW02u_Tjw&usqp=CAU"
                      alt=""
                      style={{ width: "150px", height: "100px" }}
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Homecards/>
    </>
  );
};

export default Homepage;
