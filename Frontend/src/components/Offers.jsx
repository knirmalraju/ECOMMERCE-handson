import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Container = styled.div`
    height : 30px;
    background-color : teal;   
    color : white; 
    display : flex;
    align-items : center;
    justify-content : center;
`;

const Offers = () => {
    return (
        <div>
            <Container>
                <Link style={{textDecoration : "none", color : "white"}} to="/products/allproducts">
                Super Deal! 50% off on every product
                </Link>
            </Container>
        </div>
    )
}

export default Offers
