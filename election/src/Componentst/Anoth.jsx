import React from 'react';
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { Box,Text,Image } from "@chakra-ui/react"
import { Typewriter } from 'react-simple-typewriter'
import styles from '../Componentst/MainPa.module.css'

import { useEffect, useRef } from 'react';
import {
    Flex,
    Container,
    Heading,
    Stack,
    
    Tooltip,
    Link,
    IconButton, 
    useClipboard,
    HStack
  } from '@chakra-ui/react';

  
  export default function About() {
    const { hasCopied, onCopy } = useClipboard('example@example.com');
    const el = useRef(null);
    
   

    return (
      <section className='about'>
      <Container maxW={'5xl'}>
        <Stack
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}>
          <Heading
           ml='10px'
            fontWeight={700}
            fontSize={{ base: '3xl', sm: '3xl', md: '3xl',lg:"4xl" }}
            lineHeight={'110%'}>
           माझ्याबद्दल
          </Heading>
            <Text color={'red.400'} fontSize={'30px'}>
            मी संदिप गरड आणि मी आहे,  <span  style={{ color: '#F08080', fontWeight: 'bold',marginLeft:'10px',fontSize:'30px' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={[ 'डिजिटल निवडणूक प्रचारक ','डिजिटल जाहिरातदार', 'जीवन विमा प्रतिनिधी']}
            loop
            cursor
            cursorStyle='|'
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
           
          />
        </span> 
            </Text>
          <Text color={'black.800'} maxW={'3xl'}>
          निवडणूक प्रचार असो किंवा कुठल्याही व्यवसाय, कार्यक्रम याचि जहिरात असो आजच्‍या युगात डिजिटल प्रचार हा खूप महत्‍वाचा 
          घटक आहे आणि कमी वेळा मध्‍ये जास्‍त लोकापर्यंत पोहचण्याचा एकमेव उत्‍कृष्‍ट मार्ग म्‍हणजे डिजिटल माध्यम होय
          या हायटेक युगात Digital माध्यमाच्या जोडीला असणार्‍या आमच्या अनुभवासह आम्ही उमेदवाराच्या प्रचाराची जिम्मेदारी
           स्विकारण्यास तयार आहोत तसेच आपल्या कुठल्याही कार्यक्रमाची किंवा व्यवसायाची, जाहिरात करावयाची असल्यास त्याची
            ही जबाबदारी आम्ही स्विकारण्यास तयार आहोत 
 Digital प्रचार असो किंवा जाहिरात साक्षी विजयसंकल्प  च्या सोबतीने आपले सर्व  कामे निश्चीतच सुखकर आणि यशस्वी रित्या पूर्ण होतील.
          </Text>
        { /* <HStack>
                  <Tooltip
                    label={hasCopied ? 'Email Copied!' : 'Copy Email'}
                    closeOnClick={false}
                    hasArrow>
                    <IconButton
                      aria-label="email"
                      position={''}
                      variant="ghost"
                      size="lg"
                      fontSize="3xl"
                      icon={<MdEmail />}
                      _hover={{
                        bg: 'red.300',
                      }}
                      onClick={onCopy}
                      isRound
                    />
                  </Tooltip>
  
                  <Link href="https://github.com/MAKNISH" target={'blank'}>
                    <IconButton
                      aria-label="github"
                      variant="ghost"
                      position={''}
                      size="lg"
                      fontSize="3xl"
                      icon={<BsGithub />}
                      _hover={{
                        bg: 'red.300',
                      }}
                      isRound
                    />
                  </Link>
  
                  <Link href="https://twitter.com/manishnishad18" target={'blank'}>
                    <IconButton
                      aria-label="twitter"
                      variant="ghost"
                      position={''}
                      size="lg"
                      icon={<BsTwitter size="28px" />}
                      _hover={{
                        bg: 'red.300',
                      }}
                      isRound
                    />
                  </Link>
  
                  <Link href="https://www.linkedin.com/in/manish-nishad/" target={'blank'}>
                    <IconButton
                      aria-label="linkedin"
                      variant="ghost"
                      position={''}
                      size="lg"
                      icon={<BsLinkedin size="28px" />}
                      _hover={{
                        bg: 'red.300',
                      }}
                      isRound
                    />
                  </Link>
                </HStack>*/}
          <Stack spacing={6} direction={'row'}>
            
          </Stack>
          <Flex w={'full'}>
          
          </Flex>
        </Stack>
      </Container>
      </section>
    );
  }