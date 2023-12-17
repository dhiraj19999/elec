
 import { Button, WrapItem ,Heading} from "@chakra-ui/react"

 import { Wrap } from "@chakra-ui/react"
 import { Center } from "@chakra-ui/react"
 import { Image,Text,Box } from "@chakra-ui/react"
 import styles from '../Componentst/MainPa.module.css'
import led1 from '../Images/led1.jpg'
import { useState,useEffect } from "react"
import led2 from '../Images/led2.jpeg'
import led3 from '../Images/led3.webp'
import led4 from '../Images/led4.jpg'
import social1 from '../Images/social1.jpg'
import social2 from '../Images/social2.webp'
import social3 from '../Images/social3.jpg'
import social4 from '../Images/social4.jpg'

import adv1 from '../Images/adv1.webp'
import adv2 from '../Images/adv2.png'
import adv3 from '../Images/adv3.webp'
import adv4 from '../Images/adv4.webp'

import docu from '../Images/docu.jpg'
import docu1 from '../Images/docu1.jpg'
import docu4 from '../Images/docu4.jpg'
import docu3 from '../Images/docu3.jpg'

import serve1 from '../Images/serve1.jpg'

import serve2 from '../Images/serve2.webp'

import serve3 from '../Images/serve3.webp'

import serve4 from '../Images/serve4.jpg'


import soft2 from '../Images/soft2.jpg'

import soft3 from '../Images/soft3.webp'

import soft4 from '../Images/soft4.jpg'

import soft5 from '../Images/soft5.jpg'









import Aos from 'aos'
import { SimpleGrid } from "@chakra-ui/react"
function Project(){
const [count,setCount]=useState(0)
const [count2,setCount2]=useState(0)
const [count3,setCount3]=useState(0)
const [count4,setCount4]=useState(0)
const [count5,setCount5]=useState(0)
const [count6,setCount6]=useState(0)
let ser=[serve1,serve2,serve3,serve4,"jj"]
let soft=[soft2,soft3,soft4,soft5]
let sce=[docu,docu1,docu4,docu3,"jj"]
let arr=[led1,led2,led3,led4,'hj']
let news=[social1,social2,social3,social4,"kk"]
let tra=[adv1,adv2,adv3,adv4,"jjj"]
if(count==4){
    setCount((prevCount)=>prevCount-4)
   
 }
 if(count2==4){
    setCount2((prevCount2)=>prevCount2-4)
 }

if(count3==4){
    setCount3((prevCount3)=>prevCount3-4)
}

if(count4==4){
    setCount4((prevCount4)=>prevCount4-4) 
}

if(count5==4){
    setCount5((prevCount5)=>prevCount5-4) 
}

if(count6==4){
    setCount6((prevCount6)=>prevCount6-4) 
}


 let html="https://bzhaoportfolio.netlify.app/static/media/html.2ba4fabc69a89a8f71e6.png"
 let css="https://bzhaoportfolio.netlify.app/static/media/css.69a82c2d9e45c933a9cb.png"
 let js="https://bzhaoportfolio.netlify.app/static/media/javascript.1ccd6ef9bb1f9c84ef00.png"
 let react="https://bzhaoportfolio.netlify.app/static/media/react.0cf951a69d8e58f83f9d.png"
    
 //
 
 
 
 let chakra="https://img.icons8.com/fluency-systems-filled/154/chakra-ui.png"

 
 useEffect(()=>{
    Aos.init({duration:4000});
  },[])
 useEffect(()=>{
    const id=setInterval(()=>{
      
       setCount((prevCount)=>prevCount+1)
      
       },2000)
       
       return ()=>{clearInterval(id)}
    },[])


useEffect(()=>{
    const ids=setInterval(()=>{
      
        setCount2((prevCount2)=>prevCount2+1)
       
        },2000)
        
        return ()=>{clearInterval(ids)}
},[])




useEffect(()=>{
    const idss=setInterval(()=>{
      
        setCount4((prevCount4)=>prevCount4+1)
       
        },2000)
        
        return ()=>{clearInterval(idss)}
},[])





useEffect(()=>{

const id3=setInterval(()=>{
      
    setCount3((prevCount3)=>prevCount3+1)
   
    },2000)
    
    return ()=>{clearInterval(id3)}

},[])




useEffect(()=>{

    const id5=setInterval(()=>{
          
        setCount5((prevCount5)=>prevCount5+1)
       
        },2000)
        
        return ()=>{clearInterval(id5)}
    
    },[])



    useEffect(()=>{

        const id6=setInterval(()=>{
              
            setCount6((prevCount6)=>prevCount6+1)
           
            },2000)
            
            return ()=>{clearInterval(id6)}
        
        },[])






useEffect(()=>{
    Aos.init({duration: 2000,});
  },[])




    return(
        <Box h='900px' mt={{lg:"150px",md:"100px",sm:"100px",base:"100px"}} >
            
            <Heading

 mb='100px'
           ml='10px'
            fontWeight={700}
            fontSize={{ base: '3xl', sm: '3xl', md: '3xl',lg:"4xl" }}
            lineHeight={'110%'}>
            My Projects
          </Heading>
           
<Wrap spacing='30px' justify='center'>

<SimpleGrid spacing="30px" columns={{xl:2,lg:2,md:1,sm:1,base:1}}>

<WrapItem   className={styles.profirst1}  w={{lg:"450px",md:"450px",base:"310px",sm:"450px"}} style={{borderRadius:"6px"}}  height={{lg:"550px",md:"640px",sm:"640px",base:"600px"}}>






<Center display={'block'} >


<WrapItem ml={{lg:"50px",md:"50px",sm:"50px",base:"24px"}} mt='30px' className={styles.profirst1} w={{lg:"350px",md:"350px",base:"260px",sm:"350px"}}    h={{lg:"320px",md:"320px",base:"250px",sm:"320px"}}        style={{borderRadius:"6px"}}>
    <Center display={'block'}>
<Image borderRadius={'10px'}     w={{lg:"330px",md:"330px",base:"240px",sm:"330px"}}        fit='cover'        h={{lg:"300px",md:"300px",base:"230px",sm:"300px"}}           mt='10px' ml='10px' src={arr[count]}/>
   
   <Text fontSize='28px' fontWeight='bold' mt='30px' ml={{lg:"-50px",base:"-23px", sm:"-50px",md:"-50px"}}>एल.ई.डी. व्हॅन / प्रचार रथ</Text>
   

    
<Center>


</Center>


<Text mt='10px' ml={{lg:"-40px",md:"-40px",sm:"-40px",base:"-16px"}} fontWeight={'bold'} fontSize={{lg:"14px",md:"14px",sm:"14px",base:"12px"}} lineHeight={'22px'} 
width={{lg:"437px",md:"437px",sm:"437px",base:"300px"}}>

आपला निवडणूक प्रचार आणि आपल्या पक्षाची व पक्षाच्या विकासाच्या धोरणाची सर्व माहिती गल्लोगल्ली आणि सर्व लोकांपर्यंत प्रात्यक्षिक 
रित्या पोहचवण्यासाठी प्रचारक रथ म्हणजेच एल.ई.डी. व्हॅन ची सुविधा उपलब्ध.

</Text>


<Center>
     
    </Center>



    
    </Center>
</WrapItem>




</Center>
</WrapItem>





























<WrapItem   className={styles.profirst1}   w={{lg:"450px",md:"450px",base:"310px",sm:"450px"}} style={{borderRadius:"6px"}} height={{lg:"550px",md:"640px",sm:"640px",base:"600px"}}>

<Center display={'block'} >


<WrapItem ml={{lg:"50px",md:"50px",sm:"50px",base:"24px"}} mt='30px' className={styles.profirst1} w={{lg:"350px",md:"350px",base:"260px",sm:"350px"}}    h={{lg:"320px",md:"320px",base:"250px",sm:"320px"}}        style={{borderRadius:"6px"}}>
    <Center display={'block'}>
<Image borderRadius={'10px'}     w={{lg:"330px",md:"330px",base:"240px",sm:"330px"}}        fit='cover'        h={{lg:"300px",md:"300px",base:"230px",sm:"300px"}}           mt='10px' ml='10px' src={news[count2]}/>
   
   <Text fontSize={'28px'} fontWeight='bold' mt='30px' ml={{lg:"-50px",base:"-24px", sm:"-50px",md:"-50px"}}>सोशल मीडिया प्रचार-प्रसार</Text>
   

    
<Center>


</Center>


<Text mt='10px' ml={{lg:"-40px",md:"-40px",sm:"-40px",base:"-16px"}} fontWeight={'bold'} fontSize={{lg:"14px",md:"14px",sm:"14px",base:"12px"}} lineHeight={'22px'} width={{lg:"437px",md:"437px",sm:"437px",base:"300px"}}>
आजच्‍या सोशल मीडियाच्‍या युगात प्रत्‍येक जन सोशल मीडिया चा वापर करत आहे 
आणि सोशल मिडीया मुळेच आपण कमी वेळात लोकांपर्यंत पोहोचु शकतो आणि आपला प्रचार व प्रसार सोशल मिडीया च्या 
माध्यमातून करू शकतो म्हणूनच फेसबुक,इन्स्टाग्राम,ट्विटर या माध्यमातून प्रचार - प्रसार
</Text>


<Center>
     
    </Center>



    
    </Center>
</WrapItem>




</Center>
</WrapItem>

































<WrapItem   className={styles.profirst1}  w={{lg:"450px",md:"450px",base:"310px",sm:"450px"}} style={{borderRadius:"6px"}}  height={{lg:"550px",md:"640px",sm:"640px",base:"600px"}}>

<Center display={'block'} >


<WrapItem ml={{lg:"50px",md:"50px",sm:"50px",base:"24px"}} mt='30px' className={styles.profirst1} w={{lg:"350px",md:"350px",base:"260px",sm:"350px"}}    h={{lg:"320px",md:"320px",base:"250px",sm:"320px"}}        style={{borderRadius:"6px"}}>
    <Center display={'block'}>
<Image borderRadius={'10px'}     w={{lg:"330px",md:"330px",base:"240px",sm:"330px"}}        fit='cover'        h={{lg:"300px",md:"300px",base:"230px",sm:"300px"}}           mt='10px' ml='10px' src={tra[count3]}/>
   
   <Text fontSize='28px' fontWeight='bold' mt='30px' ml={{lg:"-50px",base:"-25px", sm:"-50px",md:"-50px"}}>MR.TRAVELER</Text>
   

    
<Center>




</Center>


<Text mt='10px' ml={{lg:"-40px",md:"-40px",sm:"-40px",base:"-16px"}} fontWeight={'bold'} fontSize={{lg:"14px",md:"14px",sm:"14px",base:"12px"}} lineHeight={'20px'} width={{lg:"437px",md:"437px",sm:"437px",base:"300px"}}>
Mr.Traveler is an travel advisory website for hotel
booking, flight booking and reviews of places, 
 Its a individual project which is completed in five days
Login,signup,hotel booking,payment options and add to cart
functionality are developed

</Text>


<Center>
   
    </Center>



    
    </Center>
</WrapItem>




</Center>
</WrapItem>




























<WrapItem   className={styles.profirst1}  w={{lg:"450px",md:"450px",base:"310px",sm:"450px"}} style={{borderRadius:"6px"}}  height={{lg:"550px",md:"640px",sm:"640px",base:"600px"}}>

<Center display={'block'} >


<WrapItem ml={{lg:"50px",md:"50px",sm:"50px",base:"24px"}} mt='30px' className={styles.profirst1} w={{lg:"350px",md:"350px",base:"260px",sm:"350px"}}    h={{lg:"320px",md:"320px",base:"250px",sm:"320px"}}        style={{borderRadius:"6px"}}>
    <Center display={'block'}>
<Image borderRadius={'10px'}     w={{lg:"330px",md:"330px",base:"240px",sm:"330px"}}        fit='cover'        h={{lg:"300px",md:"300px",base:"230px",sm:"300px"}}           mt='10px' ml='10px' src={sce[count4]}/>
   
   <Text fontSize='28px' fontWeight='bold' mt='30px' ml={{lg:"-50px",base:"-25px", sm:"-50px",md:"-50px"}}>प्रचारासाठी चित्रफित ( डॉक्युमेंटरी )</Text>
   

    
<Center>



</Center>


<Text mt='10px' ml={{lg:"-40px",md:"-40px",sm:"-40px",base:"-16px"}} fontWeight={'bold'} fontSize={{lg:"14px",md:"14px",sm:"14px",base:"12px"}} lineHeight={'22px'} width={{lg:"437px",md:"437px",sm:"437px",base:"300px"}}>
आपल्या विषयी मतदारांना माहिती मिळावी यासाठी आपले वेगवेगळे विकासाचे धोरण,निवडणुकीविषयी असणारे संकल्प किंवा विविध 
कार्यक्रमाची,सांस्कृतिक कार्यक्रमाची या सगळ्यांचे एकत्रित असे लघु माहिती चित्रफीत तयार करणे.

</Text>


<Center>
 
    </Center>



    
    </Center>
</WrapItem>




</Center>
</WrapItem>






















<WrapItem   className={styles.profirst1}  w={{lg:"450px",md:"450px",base:"310px",sm:"450px"}} style={{borderRadius:"6px"}}  height={{lg:"550px",md:"640px",sm:"640px",base:"600px"}}>

<Center display={'block'} >


<WrapItem ml={{lg:"50px",md:"50px",sm:"50px",base:"24px"}} mt='30px' className={styles.profirst1} w={{lg:"350px",md:"350px",base:"260px",sm:"350px"}}    h={{lg:"320px",md:"320px",base:"250px",sm:"320px"}}        style={{borderRadius:"6px"}}>
    <Center display={'block'}>
<Image borderRadius={'10px'}     w={{lg:"330px",md:"330px",base:"240px",sm:"330px"}}        fit='cover'        h={{lg:"300px",md:"300px",base:"230px",sm:"300px"}}           mt='10px' ml='10px' src={ser[count5]}/>
   
   <Text fontSize='28px' fontWeight='bold' mt='30px' ml={{lg:"-50px",base:"-25px", sm:"-50px",md:"-50px"}}>Scheduler</Text>
   

    
<Center>



</Center>


<Text mt='10px' ml={{lg:"-40px",md:"-40px",sm:"-40px",base:"-16px"}} fontWeight={'bold'} fontSize={{lg:"14px",md:"14px",sm:"14px",base:"12px"}} lineHeight={'20px'} width={{lg:"437px",md:"437px",sm:"437px",base:"300px"}}>
Schdeular is a powerful project management system which  help
  to complete projects efficientl.

Price,Login,Admin, Calender system are  developed
 its collaborative project,
completed in five days, 

 area of responsibility is to Develope Contact section 


</Text>


<Center>
 
    </Center>



    
    </Center>
</WrapItem>




</Center>
</WrapItem>
































<WrapItem   className={styles.profirst1}  w={{lg:"450px",md:"450px",base:"310px",sm:"450px"}} style={{borderRadius:"6px"}}  height={{lg:"550px",md:"640px",sm:"640px",base:"600px"}}>

<Center display={'block'} >


<WrapItem ml={{lg:"50px",md:"50px",sm:"50px",base:"24px"}} mt='30px' className={styles.profirst1} w={{lg:"350px",md:"350px",base:"260px",sm:"350px"}}    h={{lg:"320px",md:"320px",base:"250px",sm:"320px"}}        style={{borderRadius:"6px"}}>
    <Center display={'block'}>
<Image borderRadius={'10px'}     w={{lg:"330px",md:"330px",base:"240px",sm:"330px"}}        fit='cover'        h={{lg:"300px",md:"300px",base:"230px",sm:"300px"}}           mt='10px' ml='10px' src={soft[count6]}/>
   
   <Text fontSize='28px' fontWeight='bold' mt='30px' ml={{lg:"-50px",base:"-25px", sm:"-50px",md:"-50px"}}>Scheduler</Text>
   

    
<Center>



</Center>


<Text mt='10px' ml={{lg:"-40px",md:"-40px",sm:"-40px",base:"-16px"}} fontWeight={'bold'} fontSize={{lg:"14px",md:"14px",sm:"14px",base:"12px"}} lineHeight={'20px'} width={{lg:"437px",md:"437px",sm:"437px",base:"300px"}}>
Schdeular is a powerful project management system which  help
  to complete projects efficientl.

Price,Login,Admin, Calender system are  developed
 its collaborative project,
completed in five days, 

 area of responsibility is to Develope Contact section 


</Text>


<Center>
 
    </Center>



    
    </Center>
</WrapItem>




</Center>
</WrapItem>







































</SimpleGrid>








</Wrap>






































</Box>
    )
}

export default Project