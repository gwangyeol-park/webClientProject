import React from "react";
import Main from "../components/Main";
import LoginHeader from "../components/LoginHeader";
import Cards from "../components/Cards";


const LoginHomeView =()=> {
    return (
        <>
            <Main>
                <LoginHeader />
                <Cards />
            </Main>
        </>
    )
}

export default LoginHomeView;