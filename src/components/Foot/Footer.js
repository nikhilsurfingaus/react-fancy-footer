import React from "react";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import "./Footer.css";

import LOGO from "./assets/QuiverCoin.png";


const MY__ACCOUNT = [
  {
    display: "Market",
    url: "/market",
    target: "_self",
  },
  {
    display: "Mintable Store",
    url: "https://mintable.app/u/nikhilsurfingaus",
    target: "_blank",
  },
  {
    display: "Collection",
    url: "/market",
    target: "_blank",
  },
];

const RESOURCES = [
  {
    display: "Road Map",
    url: "/map",
    target: "_self",
  },
  {
    display: "Live Chat",
    url: "/chat",
    target: "_self",
  },
  {
    display: "Projects",
    url: "/project",
    target: "_self",
  },
];

const COMPANY = [
  {
    display: "Ethereum",
    url: "https://ethereum.org/en/",
    target: "_blank",
  },
  {
    display: "WaveFlightSimulations",
    url: "https://www.youtube.com/c/WaveFlightSimulations",
    target: "_blank",
  },
  {
    display: "Binance",
    url: "/trading",
    target: "_self",
  },
];

const SOCIAL = [
  {
    display: "ri-linkedin-box-line",
    url: "https://www.linkedin.com/in/nikhil-naik-76724b133",
  },
  {
    display: "ri-instagram-line",
    url: "https://www.instagram.com/pixelsurfboardnft/",
  },
  {
    display: "ri-github-fill",
    url: "https://github.com/nikhilsurfingaus",
  },
  {
    display: "ri-youtube-fill",
    url: "https://www.youtube.com/c/WaveFlightSimulations",
  },
];

    const DESC = "Quiver calls all ocean lovers and wave chargers to join the Quiver community " + 
        "Together we can ride towards conquering the bottom and blast the top turns of the crypto wave."

export const Footer = (props) => {

    //INIT
    let siteName;
    if (props.siteName === null || props.siteName === undefined) {
        siteName = "Quiver"
    } else {
        siteName = props.siteName
    }

    let siteDesc;
    if (props.siteDesc === null || props.siteDesc === undefined) {
        siteDesc = DESC
    } else {
        siteDesc = props.siteDesc
    }

    let subOne
    let subTwo
    let subThree
    let subSocial
    if (props.subOne === null || props.subOne === undefined) {
        subOne = MY__ACCOUNT
    } else {
        subOne = props.subOne
    }
    if (props.subTwo === null || props.subTwo === undefined) {
        subTwo = RESOURCES
    } else {
        subTwo = props.subTwo
    }
    if (props.subThree === null || props.subThree === undefined) {
        subThree = COMPANY
    } else {
        subThree = props.subThree
    }
    if (props.subSocial === null || props.subSocial === undefined) {
        subSocial = SOCIAL
    } else {
        subSocial = props.subSocial
    }

    let s1Title
    let s2Title
    let s3Title
    if (props.s1Title === null || props.s1Title === undefined) {
        s1Title = "Section 1"
    } else {
        s1Title = props.s1Title
    }
    if (props.s2Title === null || props.s2Title === undefined) {
        s2Title = "Section 2"
    } else {
        s2Title = props.s2Title
    }
    if (props.s3Title === null || props.s3Title === undefined) {
        s3Title = "Section 3"
    } else {
        s3Title = props.s3Title
    }

    let bg
    if (props.bg === null || props.bg === undefined) {
        bg = "#0b4a91"
    } else {
        bg = props.bg
    }

    let siteLogo
    if (props.siteLogo === null || props.siteLogo === undefined) {
        siteLogo = LOGO
    } else {
        siteLogo = props.siteLogo
    }


  return (
    <footer style={{background:bg}} className="footer animate__animated animate__fadeInUp">
      <Container>
        <Row className="rowie">
          <Col lg="3" md="6" sm="6" className="mb-4">
            <div className="logo">
              <h2 className="d-flex gap-2 align-items-center ">
                <span>
                <img src={siteLogo} alt='logo' className="fot_logo"/>
                </span>
              </h2>
              <p>
               {siteDesc}
              </p>
            </div>
          </Col>

          <Col lg="2" md="3" sm="6" className="mb-4">
            <h5>{s1Title}</h5>
            <ListGroup className="list__group">
              {subOne.map((item, index) => (
                <ListGroupItem key={index} className="list__item">
                  <a target={item.target} rel="noopener noreferrer" href={item.url}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="2" md="3" sm="6" className="mb-4">
            <h5>{s2Title}</h5>
            <ListGroup className="list__group">
              {subTwo.map((item, index) => (
                <ListGroupItem key={index} className="list__item">
                  <a target="_self" rel="noopener noreferrer" href={item.url}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="2" md="3" sm="6" className="mb-4">
            <h5>{s3Title}</h5>
            <ListGroup className="list__group">
              {subThree.map((item, index) => (
                <ListGroupItem key={index} className="list__item">
                  <a target={item.target} rel="noopener noreferrer" href={item.url}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" md="6" sm="6" className="mb-4">
            <h5>Socials</h5>
            {subSocial.map((item, index) => (

            <div key={index} className="social__links d-flex gap-3 align-items-center ">
              <span>
                <a target="_blank" rel="noopener noreferrer" href={item.url}> <i className={item.display}></i></a>
              </span>
            </div>
            ))}

          </Col>

          <Col lg="12" className=" mt-4 text-center">
            <p className="copyright">
              {" "}
              Copyrights 2022, Developed by Nikhil Naik. @WaveFlightSimulation
              All Rights Reserved.{" "}
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
