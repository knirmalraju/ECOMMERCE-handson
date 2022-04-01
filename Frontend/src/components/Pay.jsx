import React from 'react';
import styled from 'styled-components';
import StripeCheckout from 'react-stripe-checkout';
import { useState, useEffect } from 'react';
import { unstable_HistoryRouter } from 'react-router-dom';
import axios from 'axios';


const Container = styled.div`
    height : 100vh;
    width : 100%;
    display : flex;
    align-items : center;
    justify-content : center;
`;
const Button = styled.button`
    height : 50px;
    width : 120px;
    font-weight : bold;
    border : none;
    background-color : black;
    border-radius : 5px;
    color : white;
    cursor : pointer;
`;
const KEY = "pk_test_51KKG50SBu9O3BScnup7YmY8BWXbVYkgSW4Ww8w3FHwm1JVKyi1F6q12ZSxJtOKMCETOaC58JpGGbfUeQ7wH73q0200g7sEw6wh"

const Pay = () => {
    const [stripeToken, setStripeToken] = useState(null);
    const history = unstable_HistoryRouter();
    const onToken = (token)=>{
        setStripeToken(token);
    };
    useEffect(()=>{
    const makeRequest = async () =>{
        try{
            const res = await axios.post(
                "http://localhost:5000/api/checkout/payment",
                {
                    tokenId: stripeToken.id,
                    amount: 2000,
                } 
                );
                console.log(res.data);
                history.push("/success");
        }catch(err){
            console.log(err);
        }
    };
    stripeToken && makeRequest();
    },[stripeToken, history]);
  return <div>
      <Container>
        {stripeToken ? (<span>Processing. Please wait...</span>):(
        <StripeCheckout 
            name="Hello shop" 
            billingAddress
            shippingAddress
            description= "Your total is $20"
            amount={2000}
            token={onToken}
            stripeKey={KEY}
        >
            <Button>Pay Now</Button>
        </StripeCheckout>
        )}
      </Container>
  </div>;
};

export default Pay;
