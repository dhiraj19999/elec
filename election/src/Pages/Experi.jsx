
import { WrapItem } from "@chakra-ui/react"
import { Wrap } from "@chakra-ui/react"
import { Center } from "@chakra-ui/react"
import { Image,Text,Box } from "@chakra-ui/react"
import img1 from '../Images/vote.png'
import adver from '../Images/bullhorn.png'
import insur from '../Images/life-insurance.png'
function Experi(){

    return(
        <Box>
             <Text   fontWeight={700} fontSize={{ base: '3xl', sm: '3xl', md: '3xl',lg:"4xl" }}mt='-100px' pb={'90px'}  >आमच्या सेवा</Text>
        <Wrap spacing='30px' justify='center'>
           
  <WrapItem>
    <Center display={'block'} w='300px' h='250px' bg='yellow.200' borderRadius={'10px'} _hover={{background:'pink'}}>
    <Image  src={img1} w='90px' mt='20px' ml='105px'/>
    <Text color='teal' mt='20px' fontSize={'24px'} ml='-10px' fontWeight={'bold'} >डिजिटल निवडणूक प्रचार</Text>
    <Text color='teal' fontSize={'20px'}>आपला यशस्वी निवडणूक प्रचार आता आमची जिमेदारी </Text>
    </Center>
  </WrapItem>
  <WrapItem>
  <Center display={'block'}  w='300px' h='250px'  bg='red.300' borderRadius={'10px'} _hover={{background:"teal.200"}}>
  <Image  src={adver} w='90px' mt='20px' ml='105px'/>
 
 <Text color='black' mt='25px' fontSize={'23px'} ml='-2px'  fontWeight={'bold'} >डिजिटल जाहिरात</Text>
 <Text color='black' fontSize={'18px'}>आपल्‍या कोणत्‍याही कामाची तसेच कार्यक्रमाची जहिरात सोपावा आता आमच्‍यावर</Text> 
    </Center>
  </WrapItem>
  <WrapItem>
  <Center display={'block'} w='300px' h='250px' bg='teal' borderRadius={'10px'} _hover={{background:'black'}}>
  <Image  src={insur} w='90px' mt='20px' ml='105px'/>
 
 <Text color='#F08080' mt='29px' fontSize='23px' ml='-1px'  fontWeight={'bold'} >जीवन विमा  </Text>
 <Text  color='#F08080' fontSize='18px'>आपले जीवन सुरक्षित करा,
आपला विमा त्वरित मिळवा.</Text> 
    </Center>
  </WrapItem>
  
</Wrap></Box>
    )
}

export default Experi