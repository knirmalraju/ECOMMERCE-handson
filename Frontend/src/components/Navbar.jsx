import React from 'react'
import { Person, Search, ShoppingCartOutlined } from "@material-ui/icons"
import styled from 'styled-components'
import { Badge } from '@material-ui/core';
import { mobile } from "../responsive"
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Container = styled.div`
    height : 60px;
    ${mobile({ height : "50px"})}
`;
const Wrapper = styled.div`
    padding : 10px 20px;
    display : flex;
    justify-content : space-between;
    ${mobile({ padding : "10px 0px"})}
`;
const Left = styled.div`
    display : flex;
    align-items : center;  
    flex : 1;
`;
const Center = styled.div`
    flex : 1;   
`;
const Logo = styled.h1`
    font-weight : 800;
    text-align : center;
    letter-spacing : 1.5px;
    background: -webkit-linear-gradient(rgb(252, 61, 81), rgb(255, 129, 62));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    ${mobile({ fontSize : "24px", letterSpacing : "0px", paddingLeft : "20px"})}
`;
const SearchContainer = styled.div`
    height : 25px;
    display : flex;
    align-items : center;
    margin-left : 30px;
    border : 0.5px solid #c0c0c0;
    border-radius: 35px;
    padding : 5px;
    ${mobile({ marginLeft : "10px", height : "15px"})}
`;
const Input = styled.input`
    font-weight : 300;
    width : 200px;
    margin-left : 8px;
    border : none;
    ${mobile({ width : "50px"})}
`;
const Right = styled.div`
    flex : 1;
    display : flex;
    align-items : center;
    justify-content : flex-end;
    padding : 5px 50px 0px 0px;
    ${mobile({ flex : 2, justifyContent : "center", padding : "0px"})}
`;
const MenuItems = styled.div`
    margin-left : 20px;
    font-size : 16px;
    ${mobile({ fontSize : "12px", marginLeft : "10px"})}
    cursor : pointer;
`;
const Signup = styled.h4`
    display : flex;
    justify-content : center;
    width : 60px;
    border : 2px solid black;
    border-radius: 35px;
    padding : 5px;
`;
const Account = styled.div`
    
`;
const Cart = styled.div`
    
`;

const Navbar = () => {
    const quantity = useSelector(state=>state.cart.quantity);
    return (
        <div>
            <Container>
                <Wrapper>
                    <Left>
                        <SearchContainer>
                            <Input placeholder='what are you searching for?'/>
                            <Search style={{color : "gray", fontSize:18}}/>
                        </SearchContainer>
                    </Left>
                    <Center>
                        <Link style={{textDecoration : "none"}} to="/">
                        <Logo>HELLO</Logo>
                        </Link>
                    </Center>
                    <Right>
                        <MenuItems>
                            <Link style={{color : "black", textDecoration : "none"}} to="/signup">
                            <Signup>
                                Signup
                            </Signup>
                            </Link>
                        </MenuItems>
                        <MenuItems>
                            <Link style={{color : "black", textDecoration : "none"}} to="/login">
                            <Account>
                                <Person style={{fontSize:30}}/>
                            </Account>
                            </Link>
                        </MenuItems>
                        <MenuItems>
                            <Link style={{color : "black", textDecoration : "none"}} to="/cart">
                            <Cart>
                                <Badge badgeContent={quantity} color="primary">
                                    <ShoppingCartOutlined style={{fontSize:25}}/>
                               </Badge>
                            </Cart>
                            </Link>
                        </MenuItems>
                    </Right>
                </Wrapper>
            </Container>
        </div>
    )
}

export default Navbar
