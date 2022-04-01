import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive';

const Container = styled.div`
    width : 100vw;
    height : 100vh;
    background-color : #20f38abe;  
    display : flex;
    align-items : center;
    justify-content : center;
`;
const Wrapper = styled.div`
    padding : 20px;
    width : 40%;
    border-radius : 10px;
    background-color : #1d1c1c73;
    ${mobile({ width : "75%"})}
`;

const Form = styled.form`
    display : flex;
    flex-wrap : wrap;
`;
const Title = styled.h1`
    font-size : 24px;
    font-weight : 300;
    color : white;
`;
const Input = styled.input`
    flex : 1;
    min-width : 40%;
    margin : 20px 10px 0px 0px;
    padding : 10px 10px 10px 18px;
    border : none;
    border-radius: 35px;
`;
const Agreement = styled.span`
    font-size : 12px;
    margin : 20px 0px;
    color : white;
`;
const Button = styled.button`
    width : 40%;
    border : none;
    padding : 15px 20px;
    background-color : teal;
    color : white;
    cursor : pointer;
`;

const Signup = () => {
    return (
        <div>
            <Container>
                <Wrapper>
                    <Title>CREATE AN ACCOUNT</Title>
                    <Form>
                        <Input placeholder="first name"/>
                        <Input placeholder="last name"/>
                        <Input placeholder="user name"/>
                        <Input placeholder="email"/>
                        <Input placeholder="password"/>
                        <Input placeholder="confirm password"/>
                        <Agreement>
                            By creating an account, I consent to the processing of my personal data in accordance 
                            with the <b>PRIVACY POLICY</b>
                        </Agreement>
                        <Button>CREATE</Button>
                    </Form>
                </Wrapper>
            </Container>
        </div>
    )
}

export default Signup
