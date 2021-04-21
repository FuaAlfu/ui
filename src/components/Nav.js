import React from 'react';
import {Link} from 'react-router-dom';

//styled
import styled from 'styled-components';

const Nav = () => {
  return (
    <StyledNav>
      <h1><Link id="logo" to="/">LOGO</Link></h1>
      <ul>
          <li>
          <Link to="/">1. About Us</Link>
          </li>
          <li>
          <Link to="/sercices">2. Our Services</Link>
          </li>
          <li>
          <Link to="/contact">3. Contact Us</Link>
          </li>
      </ul>
    </StyledNav>
  );
};

// must be StyleNav or any name.. because Nav is already took by our lovely func
const StyledNav = styled.nav`
min-height:10vh;
display:flex;
margin: auto;
justify-content: space-between;
align-items: center;
padding: 1rem 10rem;
background:#282828;
a{
  color: white;
  text-decoration: none;
}

ul{
  display: flex;
  list-style: none;
}

#logo{
  font-size:1.5rem;
font-family: "lobster", cursive;
font-weight: lighter;
}
li{
  padding-left: 10rem;
  position: relative;

}
`;

export default Nav