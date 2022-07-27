import { Send } from '@material-ui/icons'
import styled from 'styled-components'
import { mobile } from '../responsive'


const Container = styled.div`
height: 60vh;
background-color: antiquewhite;
display: flex;
align-items:center;
justify-content: center;
flex-direction: column;
`

const Title = styled.h1 ` 
 font-size: 60px;
 margin: 20px;
 font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
`
const Description = styled.div`
font-size:24px ;
font-weight: 300;
margin-bottom: 20px; 
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
${mobile({textAlign:'center'})}
`
const InputContainer = styled.div`
width: 50%;
height: 40px;
background-color: white;  
display: flex;
justify-content: space-between;
border: 1px lightblue ;
${mobile({width:'80%'})}
`
const Input = styled.input`
border: none;
flex: 15 ;
padding-left:20px ;
`
const Button = styled.button`
 flex: 1;
 border: none;
 background-color: teal;
 color: white;
 
`



const Newletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
            <Description>Get timely updates from your favourite</Description>
            <InputContainer>
            <Input placeholder="Your Email"/>
            <Button> 
                <Send/>
            </Button>
            </InputContainer>
        
    </Container>
  )
}

export default Newletter