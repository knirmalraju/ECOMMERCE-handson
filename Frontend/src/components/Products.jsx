import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { productitems } from '../data';
//import { incremented } from '../redux/userSlice';


const Container = styled.div`
    padding : 20px;
    display : flex;
    flex-wrap : wrap;
    justify-content : space-between;
`;
const Info = styled.div`
    opacity : 0;
    width : 100%;
    height : 100%;
    position : absolute;
    top : 0;
    left : 0;
    background-color : rgba(0,0,0,0.2);
    z-index : 3;
    display : flex;
    align-items : center;
    justify-content : center;
    transition : all 0.5s ease;
`;
const ProductItems = styled.div`
    flex : 1;
    margin : 5px;
    min-width : 280px;
    height : 350px;
    display : flex;
    align-items : center;
    justify-content : center;
    background-color : #edeefc;
    position : relative;
    &:hover ${Info}{
        opacity : 1;
    }
`;
const Circle = styled.div`
    height : 200px;
    width : 200px;  
    border-radius : 50%;
    background-color : white;
    position : absolute;
`;
const Image = styled.img`
    height : 75%;
    z-index : 2;
`;
const Icon = styled.button`
    height : 40px;
    width : 40px;
    border-radius : 50%;
    background-color : white;
    border : none;
    display: flex; 
    align-items : center;
    justify-content : center;
    margin : 10px;
    cursor : pointer;
    transition : all 0.5s ease;
    &:hover{
        background-color : #e0f5f5;
        transform : scale(1.1);
    }
`;
const Products = ({cat,filters,sort}) => {
    //redux code for cartvalue increment
    //const dispatch = useDispatch();
    //const handleincrement = (e)=>{
    //    e.preventDefault();
    //    dispatch(incremented());
    //};
    //arguments from product list component for filters and sorting
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    useEffect(()=>{
        const getProducts = async ()=>{
            try{
                const res = await axios.get( cat ? `http://localhost:5000/api/products?category=${cat}` : 
                "http://localhost:5000/api/products"
                );
                setProducts(res.data);
            }catch(err){}
        };
        getProducts()
    },[cat]);

    useEffect(()=>{
        cat && setFilteredProducts(
            products.filter(item=>
                Object.entries(filters).every(([key,value])=>
                    item[key].includes(value)
                )
            )
        );
    },[products,cat,filters]);

    useEffect(()=>{
        if(sort==="Newest"){
            setFilteredProducts(prev=>
                [...prev].sort((a,b)=>a.createdAt - b.createdAt)
            );
        }else if(sort==="asc"){
            setFilteredProducts(prev=>
                [...prev].sort((a,b)=>a.price - b.price)
            );
        }else {
            setFilteredProducts(prev=>
                [...prev].sort((a,b)=>b.price - a.price)
            );
        }
    },[sort]);
    //console.log(cat,filters,sort);
    return (
        <div>
            <Container>
            {cat ? filteredProducts.map((item)=>(
                <ProductItems key={item._id}>
                    <Circle/>
                    <Image src={item.img}/>
                    {/*<Link style={{color : "black"}} to={`/product/${item.title}`}>*/}
                    <Info>
                        <Icon>
                            <ShoppingCartOutlined/>
                        </Icon>
                        <Icon>
                            <Link style={{color : "black"}} to={`/product/${item._id}`}>
                            <SearchOutlined/>
                            </Link>
                        </Icon>
                        <Icon>
                            <FavoriteBorderOutlined/>
                        </Icon>
                    </Info>
                    {/*</Link>*/}
                </ProductItems>
            ))
            :  productitems.slice(0,8).map((item)=>(
                <ProductItems key={item.id}>
                    <Circle/>
                    <Image src={item.img}/>
                    {/*<Link style={{color : "black"}} to={`/product/${item.title}`}>*/}
                    <Info>
                        <Icon>
                            <ShoppingCartOutlined/>
                        </Icon>
                        <Icon>
                            <Link style={{color : "black"}} to={`/product/${item._id}`}>
                            <SearchOutlined/>
                            </Link>
                        </Icon>
                        <Icon>
                            <FavoriteBorderOutlined/>
                        </Icon>
                    </Info>
                    {/*</Link>*/}
                </ProductItems>
            ))
            }
            </Container>
        </div>
    )
}

export default Products
