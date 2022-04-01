import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { category } from '../data';
import { mobile } from '../responsive';

const Heading = styled.h1`
    display : flex;
    font-size : 35px;
    align-items : center;
    justify-content : center;
    padding-top : 20px;
    ${mobile({ display : "none"})}
`;
const Container = styled.div`
    display : flex;
    padding : 20px;
    justify-content : space-between;
    ${mobile({ padding : "0px", flexDirection : "column"})}
`;
const Category = styled.div`
    flex : 1;
    margin : 3px;
    height : 80vh;
    position : relative;
`;
const Image = styled.img`
    width : 100%;
    height : 80vh;
    object-fit : cover;
    ${mobile({ height : "20vh"})}
`;
const Info = styled.div`
    position : absolute;
    top : 0; 
    left : 0;
    width : 100%;
    height : 100%;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
`;
const Title = styled.h1`
    color : white;
    margin-bottom : 20px;
`;
const Button = styled.button`
    border : none;
    padding : 10px;
    background-color : white;
    color : grey;
    font-weight : 600;
    cursor : pointer;
`;

const Categories = () => {
    return (
        <div>
            <Heading>CATEGORIES</Heading>
            <Container>
                {category.map((item)=>(
                    <Category key={item.id}>
                        <Link to={`/products/${item.categorytype}`}>
                        <Image src={item.img}/>
                        <Info>
                            <Title>{item.title}</Title>
                            <Button>SHOP NOW</Button>
                        </Info>
                        </Link>
                    </Category>
                ))}
            </Container>
        </div>
    )
}

export default Categories
