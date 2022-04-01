import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@material-ui/icons";
import styled from "styled-components"
import { mobile } from "../responsive";

const Container = styled.div`
    display : flex;
    ${mobile({ flexDirection : "column"})}
`;
const Left = styled.div`
    flex : 1;  
    display : flex;
    flex-direction : column;
    padding : 20px;
`;
const Logo = styled.h1`
    font-weight : 800;
    letter-spacing : 1.5px;
    background: -webkit-linear-gradient(rgb(252, 61, 81), rgb(255, 129, 62));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;
const Desc = styled.p`
    margin : 20px 0px;
`;
const SocialContainer = styled.div`
    display : flex;
`;
const SocialIcon = styled.div`
    height : 40px;
    width : 40px;
    border-radius : 50%;
    background-color : #${props=>props.color};
    display: flex;
    align-items : center;
    justify-content : center;
    margin-right : 20px;
`;
const Center = styled.div`
    flex : 1;  
    padding : 20px;
    ${mobile({ display : "none"})}
`;
const Title = styled.h3`
    margin-bottom : 30px;
`;
const List = styled.ul`
    margin : 0;
    padding : 0;
    list-style : none;
    display: flex;
    flex-wrap : wrap;   
`;
const ListItem = styled.li`
      width : 50%;
      margin-bottom : 10px;
`;
const Right = styled.div`
    flex : 1;
    padding : 20px;
    ${mobile({ backgroundColor : "#f5f5f5"})}
`;
const ContactItem = styled.div`
    margin-bottom : 20px;
    display :flex;
    align-items : center;
`;
const Payment = styled.img`
    width : 50%;
`;

const Footer = () => {
    return (
        <div>
            <Container>
                <Left>
                    <Logo>HELLO !</Logo>
                    <Desc>
                    We are made for goodness. We are made for love...We are made for all of the beautiful things that you and I know. We are made to tell the world that there are no outsiders...all are welcome
                    </Desc>
                    <SocialContainer>
                        <SocialIcon color="3B5999">
                            <Facebook/>
                        </SocialIcon>
                        <SocialIcon color="E4405F">
                            <Instagram/>
                        </SocialIcon>
                        <SocialIcon color="55ACEE">
                            <Twitter/>
                        </SocialIcon>
                        <SocialIcon color="E60023">
                            <Pinterest/>
                        </SocialIcon>
                    </SocialContainer>
                </Left>
                <Center>
                    <Title>Useful Links</Title>
                    <List>
                        <ListItem>Home</ListItem>
                        <ListItem>Cart</ListItem>
                        <ListItem>Men Fashion</ListItem>
                        <ListItem>Women Fashion</ListItem>
                        <ListItem>Accessories</ListItem>
                        <ListItem>My Account</ListItem>
                        <ListItem>Order Tracking</ListItem>
                        <ListItem>Wishlist</ListItem>
                        <ListItem>Terms</ListItem>
                    </List>
                </Center>
                <Right>
                    <Title>Contact</Title>
                    <ContactItem>
                        <Room style={{marginRight:"10px"}}/>432 Southwest Street , South New York 785455
                    </ContactItem>
                    <ContactItem>
                        <Phone style={{marginRight:"10px"}}/>+45 45 45 54 988
                    </ContactItem>
                    <ContactItem>
                        <MailOutline style={{marginRight:"10px"}}/>contact@mail.com
                    </ContactItem>
                    <Payment src={"https://www.transparentpng.com/thumb/credit-card/8pLVdL-credit-card-types-transparent-image.png"}/>
                </Right>
            </Container>
        </div>
    )
}

export default Footer
