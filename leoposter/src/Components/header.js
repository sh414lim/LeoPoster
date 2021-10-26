import React from "react";
import styled from "styled-components";
import {HashRouter, Link} from "react-router-dom";

function Header(){
    return(
        <>
        <head>
            <ul>
                <li>
                    <Link to="/login">login</Link>
                </li>
                <li>
                    <Link to="/signup">회원가입</Link>
                </li>
            </ul>
        </head>
        </>
    )
}

export default Header;