import { Instagram } from "@material-ui/icons";
import { Pinterest } from "@material-ui/icons";
import { PhoneAndroidOutlined } from "@material-ui/icons";
import { LocationCity } from "@material-ui/icons";
import { EmailOutlined } from "@material-ui/icons";
import { Twitter } from "@material-ui/icons";
import { Facebook } from "@material-ui/icons";
import  styled  from "styled-components"
import { mobile } from "../responsive";


const Container = styled.div`
display: flex;
${mobile({flexDirection:'column'})}
`;

const Left = styled.div`
flex: 1;
display: flex; 
flex-direction: column ;
padding: 20px;
`;

const Logo =styled.h1`     
`


const Desc =styled.p` 
margin    :20px 0px ;


`


const SocialContainer =styled.div`  
display   :flex ;
padding: 20px;
`




const SocialIcon =styled.div` 
width :40px ;
height: 40px;
border-radius:50px ;
color: white;
background-color:#${props=>props.color };
display: flex;
align-items: center;
justify-content: center;
margin: 20px;
`

const Center = styled.div`
flex: 1;
padding: 20px;
${mobile({display:'none'})}
`;

const Title =styled.h3`
   margin-bottom: 30px;
`

const List =styled.ul`
    margin: 0;
    padding: 0;
    list-style:none ;
    display: flex;
    flex-wrap:wrap;
`

const ListItem =styled.li`
    width: 50%;
    margin-bottom:10px;
`

const Right = styled.div`
flex: 1; 
padding: 20px ;  
${mobile({backgroundColor:'#f6efef'})}
`;

const ContactItem = styled.div`
   margin-bottom: 20px;
   display: flex;
   align-items: center ;
`

const Payment = styled.div`

`
const Footer = () => {
  return (
    <Container>
 <Left>
     <Logo>D&S.</Logo>
     <Desc>NO.10 Muritala street.................i really dont know what to write like this i am very Hungry like a mad dog 🤔🤔💯🔅✴️💥💨⚕️💟
     </Desc>
      <SocialContainer>
     < SocialIcon color='blue'>

         <Facebook/>
      </SocialIcon>

      <SocialIcon color='pink'>
         <Instagram/>
      </SocialIcon>

      <SocialIcon color= 'skyblue'>
         <Twitter/>
     </SocialIcon>

      <SocialIcon color ='red'>
         <Pinterest/>
      </SocialIcon>

      </SocialContainer>
      
 </Left>
 <Center>
<Title>
   Useful links 
</Title>
<List>
<ListItem>Home</ListItem>
<ListItem>Cart</ListItem>
<ListItem>Man Fashion</ListItem>
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
        <LocationCity style={{marginRight:'10px'}}/>
       No. 73 Agala tannor street of an unknown local government
    </ContactItem>
    <ContactItem>
       <PhoneAndroidOutlined style={{marginRight: '10px'}}/>
       +234 905 756 0881
    </ContactItem>
    <ContactItem>
       <EmailOutlined style={{marginRight: '10px'}}/>
       damiyoung30@gmail.com
     </ContactItem>


 </Right>
    </Container>
  )
}

export default Footer