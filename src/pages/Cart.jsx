import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Annousment from '../components/Annousment'
import Footer from '../components/Footer'
import { Add } from '@material-ui/icons'
import { Remove } from '@material-ui/icons'
import { mobile } from '../responsive'


const Container = styled.div`


`


const Wrapper = styled.div`
padding: 20px;
${mobile({padding:' 10px'})}
`


const Title = styled.h1` 
font-weight: 300;
text-align: center;
`


const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
`

const TopButton = styled.button`
 padding: 10px;
 font-weight: 600;
 cursor: pointer;
 border: ${props=>props.type==='filled'&& 'none'};
 background-color: ${props=>props.type==='filled'? 'black' : 'transparent'} ;
 color: ${props=>props.type==='filled'&& 'white'};

 `
const TopTexts = styled.div`
${mobile({display:' none'})}
`
const TopText = styled.span`
text-decoration: underline;
cursor: pointer;
margin: 0px 10px;
 

`
    



const Bottom = styled.div`
display: flex;
justify-content: space-between;
${mobile({flexDirection:' column'})}
` 



const Info = styled.div`
flex: 3; 
`

const Product = styled.div`
display: flex;
justify-content: space-between;
${mobile({flexDirection:' column'})}
`
const ProductDetails = styled.div`
flex: 2 ;
display: flex;
`


const Image = styled.img`
width: 200px  ;

`


const Details = styled.div`

padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-around ;
`


const ProductName = styled.span``


const ProductSize = styled.span``


const ProductID= styled.span``


const ProductColor = styled.div`
width: 20px;
height: 20px; 
border-radius: 50%;
background-color: ${props=>props.color};
`


const PriceDetails= styled.div`
flex: 1;
display:flex ;  
flex-direction : column;
align-items: center;
justify-content: center;
`;
const ProductAmountContainer= styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;
`
const ProductAmount= styled.div`
font-size: 25px;
margin: 5px;
${mobile({magin:' 5px 15px '})}
`
const ProductPrice= styled.div`
font-size: 30px;
font-weight: 200;
${mobile({marginBottom:' 20px'})}
`

const Hr  =styled.hr`
    background-color: #eee;
    border: none;
    height: 1px; 
 `  


const Summary = styled.div`
flex: 1;
border:0.5px solid lightcyan;
border-radius: 10px;
padding: 20px;
height: 50vh
`

const SummartTitle = styled.div`
font-weight: 200;
`

const SummaryItem = styled.div`
margin: 30px 0px;
display: flex;
justify-content: space-between;
font-weight: ${props=>props.type === 'total'&& '500' };
font-size: ${props=>props.type === 'total'&& '24px' }; 
`


const SummaryItemTest = styled.div``

const SummaryItemPrice = styled.div``

const Button = styled.button`
width: 100%;
padding: 10px;
background-color: black;
color: white;
font-weight: 600;
cursor: pointer;
`



const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Annousment/>
        <Wrapper>
        <Title>Your Bag </Title>
        <Top>
            <TopButton>CONTINUE SHOPPING</TopButton>

        <TopTexts>
        <TopText>Shopping Bag(2)</TopText>
        <TopText>Wishlist</TopText>
        <TopText></TopText>
            
        </TopTexts>

            <TopButton type='filled'>CHECKOUT</TopButton>
        </Top>
        <Bottom>
        <Info>
        <Product> 
             <ProductDetails>
                <Image src="./images/img1.png"/>
                 <Details>
                 
            <ProductName><b>Product:</b>Thunder shoe</ProductName>
            <ProductID><b>ID </b> 97470984573</ProductID>
            <ProductColor color = 'black'/>
            <ProductSize><b>Size:</b>37.7</ProductSize>
    

            </Details>
            </ProductDetails>

             <PriceDetails>
            <ProductAmountContainer>
                <Add/>
                <ProductAmount>2</ProductAmount>
                <Remove/>
            </ProductAmountContainer>
            <ProductPrice>$ 30</ProductPrice>
             </PriceDetails>
          </Product>

            <Hr/>

          <Product>
             <ProductDetails>
                <Image src="./images/img2.png"/>
                 <Details>
                 
            <ProductName><b>Product:</b>Okirika palazo</ProductName>
            <ProductID><b>ID </b> 97470984573</ProductID>
            <ProductColor color = 'green'/>
            <ProductSize><b>Size:</b>XL</ProductSize>
    

            </Details>
            </ProductDetails>

             <PriceDetails>
            <ProductAmountContainer>
                <Add/>
                <ProductAmount>1</ProductAmount>
                <Remove/>
            </ProductAmountContainer>
            <ProductPrice>$ 30</ProductPrice>
             </PriceDetails>
          </Product>

        </Info>
        <Summary>
            <SummartTitle>ORDER SUMMARY</SummartTitle>
            <SummaryItem>
            <SummaryItemTest>Subtotal </SummaryItemTest>
            <SummaryItemPrice>$ 80 </SummaryItemPrice>
            </SummaryItem>

            <SummaryItem>
            <SummaryItemTest> Shipping Discount  </SummaryItemTest>
            <SummaryItemPrice>$ 5.00 </SummaryItemPrice>
            </SummaryItem>

            <SummaryItem>
            <SummaryItemTest>Total </SummaryItemTest>
            <SummaryItemPrice>$ -5.00 </SummaryItemPrice>
            </SummaryItem>

            <SummaryItem type='total'>
            <SummaryItemTest>Total </SummaryItemTest>
            <SummaryItemPrice>$ 80 </SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT</Button>
        </Summary>

        
        </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart