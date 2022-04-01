import { ArrowBackIos, ArrowForwardIos, ArrowRightAlt } from '@material-ui/icons';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import {slideItems} from "../data"
import { mobile } from '../responsive';

const Container = styled.div`
    height : 100vh;
    width : 100%;
    display : flex;
    background-color: teal;
    position : relative;
    overflow : hidden;
    ${mobile({display : "none"})} 
`;
const Arrow = styled.div`
    height: 50px;
    width: 50px;
    background-color : white;
    border-radius : 50%;
    display : flex;
    align-items : center;
    justify-content : center;
    position : absolute;
    top : 0;
    bottom : 0;
    left : ${props=>props.direction === "left" && "10px"};
    right : ${props=>props.direction === "right" && "10px"};
    margin : auto;
    cursor : pointer;
    opacity : 0.5;
    z-index : 2;
    &:hover{
        opacity : 0.8;
    }
`;
const Wrapper = styled.div` 
    height : 100%;
    width : 100vw;
    display : flex;
    transition: all 1.5s ease;
    transform: translateX(${(props)=>props.slideIndex * -98.8}vw);
`;
const Slide = styled.div`
    width : 100vw;
    height : 100vh;
    display : flex;
    align-items : center;
    background-color : lightgreen;
`;
const Imgcontainer = styled.div`
    width : 98.8vw;
    height : 100vh;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
    background-image : ${props=>props.bgimg};
    background-size: 100% 100%;
`;
const Title = styled.div`
    color : white;
    font-size: 60px;
    font-weight: 600;
    align-items: center;
    justify-content: center;
    margin-bottom: 100px;
`;
const Button = styled.button`
    height : 50px;
    width : 220px;
    border: 0px;
    font-size: 18px;
    display : flex;
    align-items : center;
    justify-content : space-between;
    background-color: white;
`;

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if(direction === "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        }
        else{
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    };
    return (
        <div>
            <Container>
                <Arrow direction="left" onClick={()=>handleClick("left")}>
                    <ArrowBackIos/>
                </Arrow> 
                <Wrapper slideIndex={slideIndex}>
                {slideItems.map((item)=>(
                    <Slide>
                        <Link style={{textDecoration : "none"}} to={`/products/${item.title}`}>
                        <Imgcontainer bgimg={item.bgimg} key={item.id}>
                            <Title>{item.title}</Title>
                            <Button>{item.button}<ArrowRightAlt/></Button>
                        </Imgcontainer>
                        </Link>
                    </Slide>
                    ))}
                </Wrapper>
                <Arrow direction="right" onClick={()=>handleClick("right")}>
                    <ArrowForwardIos/> 
                </Arrow>
            </Container>
        </div>
    )
}

export default Slider
