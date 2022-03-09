import React, { useState } from "react";
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import { Card,Button } from 'react-bootstrap';

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <p className="text">
      {isReadMore ? text.slice(0, 250) : text}
      <span onClick={toggleReadMore} className="read-or-hide"><strong>{ isReadMore ? "   ... Read More" : " Show Less" } </strong>
      
      </span>
    </p>
  );
};

function Header() {
  return (
    <div>
      <Nav>
        <NavMenu>
          <Logo src="./images/logo2.svg" />
          <a>
            <SearchIcon />
            <span>Search</span>
          </a>
          <a>
            <PermIdentityIcon />
            <span>Login</span>
          </a>
        </NavMenu>
        <Menu>
            <h1>Hello</h1>
        </Menu>
      </Nav>
      <WarningMenu>
        <Card style={ { width: "1000px", margin: "0 auto"} }>
          <Card.Body>
            {/* <Card.Img  src="./images/warn.jpg"  style={{width: "100px", display:"-ms-flexbox", alignItems: "center", marginLeft:"5px"}} /> */}
            <Card.Title style={{marginLeft:"18px", textDecoration:"underline"}}>Warning !</Card.Title>
              <Card.Text style={{marginLeft:"18px"}}>
              <ReadMore>
              You must check if you are eligible to travel from India
              Indian nationals, regardless of foreign residency status, can only travel from India to the UK, Ireland and Cayman Islands and must hold a valid visa. India nationals cannot travel further to any other countries, unless their spouse is a foreign national or they are a seaman travelling with authorised documentation from the Ministry of Shipping. You will not be allowed to board your flight if you do not meet these requirements. If you’d like to talk, please call us on our International Toll Free number 0008004401060 or contact your travel agent. Due to COVID-19, we are currently working with limited capacity.Thanks for bearing with us.
              </ReadMore>
              </Card.Text>
            {/* <Button variant="primary">Read More</Button> */}
          </Card.Body>
        </Card>
      </WarningMenu>
    </div>
  )
}

export default Header

// Using CSS in JS File  via  ==> Styled-Component 

const Nav = styled.div`
height: 15vh;
width: 100vw;
display: flex;
align-items: center;
padding: 0 36px;
// border: 2px solid blue;
box-shadow : 
`
const Logo = styled.img`
width: 180px;
height: 200px;
margin-top: 0;
margin-bottom:0;
margin-right: 550px;
margin-left : 200px;
cursor: pointer;

`

const NavMenu = styled.div`
display: flex;
flex: 1;
margin-left: 0.6;
align-items: center;
a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    span {
        font-size: 15px;
        letter-spacing: 1.42px;
        position: relative;

        &:after {
            content: "";
            height: 2px;
            background: blue;
            position: absolute;
            left: 0;
            right: 0;
            bottom: -10px;
            opacity: 0;
            transform-origin: left center;
            transform: scaleX(0);
            transition: all 280ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
        }   
    }
        &: hover {
            span:after {
                transform: scaleX(1);
                opacity: 1;
            }
        }


}

`

const Menu = styled.div`

`

const WarningMenu = styled.div`
  // border: 2px solid green;
  background-color: lightgrey;
  box-shadow: 
  cursor: pointer;
  padding: 20px  20px;

`