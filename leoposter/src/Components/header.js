import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";


const Li = styled.li`
  display: flex;
  font-size: 20px;
  padding-top: 12px;
  color: ${(props) => (props.current ? 'pink' : 'black')};
  transition: color 0.5s ease-in-out;
  &:hover {
    color: pink;
  }
`;
const Ul = styled.ul`
  display: flex;
  margin-top: 13px;
  justify-content: space-around;
  width: 60%;
  padding-bottom: 25px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

function Header(){
    return(
        <>
        <header>
            <Ul>
                <Li>
                    <Link to="/login">login</Link>
                </Li>
                <Li>
                    <Link to="/signup">회원가입</Link>
                </Li>
            </Ul>
        </header>
        </>
    )
}

export default Header;