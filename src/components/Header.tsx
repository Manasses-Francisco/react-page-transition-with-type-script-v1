import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const Navbar=styled.nav`
    height:80px;
    background:transparent;
    padding:0rem calc((100vw - 1300px)/2);
    display:flex;
    justify-content:space-between;
    align-items:center;
`;

const Logo=styled(Link)`
    color:#fff;
    padding-left:1rem;
    text-decoration:none;
    font-size:1.5rem;
    font-weight:bold;
    font-style:italic;
`;

const NavItems=styled.div``;

const NavLink=styled(Link)`
    color:#fff;
    text-decoration:none;
    padding:1rem;
`;

export function Header(){
    return(
        <Navbar>
            <Logo to="/">Animal</Logo>
            <NavItems>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/services">Services</NavLink>
            </NavItems>
        </Navbar>
    )
}