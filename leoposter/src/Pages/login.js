import React, { Component } from "react";
import styled from "styled-components";

// const imput= styled.imput`
// `


class Login extends Component{
    render(){
        return(
            <div>
                <h1>안녕 로그인</h1>
                <input type="text" placeholder="아이디 입력"/>
                <input type="password" placeholder="비밀번호 입력"/>
                <button type="submit">로그인</button>
            </div>
        )
    }
}

export default Login;