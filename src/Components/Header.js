import React, { useState } from "react";
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <p className="text">
      {isReadMore ? text.slice(0, 100) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "...read more" : " show less"}
      </span>
    </p>
  );
};

function Header() {
  return (
    <div>
    <Nav>
       <NavMenu>
         <Logo src="./images/logo.svg" />
          <a>
           <SearchIcon />
            <span>Search</span>
          </a>
          <a>
          <PermIdentityIcon />
            <span>Login</span>
          </a>
        </NavMenu> 
        
    </Nav>
    <WarningMenu>
    <ReadMore className="readmore">
          GeeksforGeeks: A Computer Science portal for geeks. 
          It contains well written, well thought and well explained
          computer science, programming articles and quizzes. 
          It provides a variety of services for you to learn, so thrive
          and also have fun! Free Tutorials, Millions of Articles, Live, 
          Online and Classroom Courses ,Frequent Coding Competitions,
          Webinars by Industry Experts, Internship opportunities, and Job
          Opportunities. Knowledge is power!
        </ReadMore>
    </WarningMenu>
    </div>
  )
}

export default Header

// Using CSS in JS File  via  ==> Styled-Component 

const Nav = styled.div`
height: 100px;
width: 100vw;
display: flex;
align-items: center;
padding: 0 36px;
border: 2px solid blue;
box-shadow : 
`
const Logo = styled.img`
width: 150px;
height: 100px;
margin-top: 0;
margin-bottom:0;
margin-right: 1000px;
margin-left : 100px;
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

const WarningMenu = styled.div`
border: 2px solid green;
  height: 100px;
  cursor: pointer;
  padding: 20px  20px;


`