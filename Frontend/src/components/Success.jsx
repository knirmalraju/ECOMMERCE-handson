import { ThumbUpAltOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height : 100vh;
    width : 100%;
    display : flex;
    align-items : center;
    justify-content : center;
`;
const Wrapper = styled.div`
    height : 180px;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : space-between;
    padding : 10px;
`;
const Circle = styled.div`
    height : 50px;
    width : 50px;
    border-radius : 50%;
    border : none;
    color : teal;
    background-color : white;
    display : flex;
    align-items : center;
    justify-content : center;
`;
const Button = styled.button`
    height : 50px;
    width : 150px;
    background-color : teal;
    font-size : 20px;
    color : white;
    border : none;
    border-radius : 10px;
`;
const Desc = styled.p`
    width : 270px;
    font-weight : 500;
    font-size : 17px;
    text-align : center;
    padding : 10px;
`;

const Success = () => {
  return <div>
      <Container>
        <Wrapper>
            <Circle><ThumbUpAltOutlined style={{fontSize:"35px", fontWeight : "bolder"}}/></Circle>
            <Button>Successful</Button>
            <Desc>Your order is being prepared. Thanks for choosing Lama Shop</Desc>
        </Wrapper>
      </Container>
  </div>;
};

export default Success;
