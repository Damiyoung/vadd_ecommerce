import styled from'styled-components'
import { mobile } from '../responsive';
const Container = styled.div`
flex: 1;
margin: 3px;
height: 70vh;
position: relative ;

` ;
const Image = styled.img`
width: 100%;
height: 100%;
${mobile({height: '30vh'})}

 `;
const Info = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
 flex-direction: column;
align-items: center;
justify-content: center;
  
`; 
const Title = styled.h1 `
color: #e4de6d;
margin-bottom: 20px;
font-family: Georgia, 'Times New Roman', Times, serif;
`
const Button = styled.button`
cursor: pointer;
border: none;
padding: 10px;
background-color: white;
color: gray  ;
font-weight: 600;
font-style: bold;
font-family: monospace;
`

const CategoryItem = ({item}) => {
  return (
    <Container>
<Image src={item.img}/>
<Info>
<Title> {item.title} </Title>
<Button> SHOP NOW</Button>
</Info>

    </Container>
  )
}

export default CategoryItem