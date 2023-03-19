/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef } from 'react'
import { ReactElement } from 'react';

import { Editor } from '@tinymce/tinymce-react';
import { BouncingBalls } from "react-cssfx-loading";
// Chakra imports
import {
  Box,
  Flex,
  Link,
  Text,
  useColorModeValue,
  SimpleGrid,
  Grid,
  Tabs, 
  TabList,
  TabPanels, 
  Tab, 
  TabPanel,
  Stack,
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  TagCloseButton,
  HStack, 
  Center,
  Avatar,
  AvatarBadge,
  Badge,
  GridItem,

  Button,
  Container,
  Heading,
  Icon,
 
} from "@chakra-ui/react";


import {
    FcAbout,
    FcAssistant,
    FcCollaboration,
    FcDonate,
    FcManager,
} from 'react-icons/fc';

import {
    GiFountainPen,
    
} from "react-icons/gi";
import {
    BiBookContent,
    BiParagraph
} from "react-icons/bi";
import {
    GrArticle
} from "react-icons/gr";
import {
    MdArticle
} from "react-icons/md";


import { Spinner } from '@chakra-ui/react'

import Card from "components/card/Card.js";
import { ArrowForwardIcon } from '@chakra-ui/icons';

import  {  API_URL } from "data/API_URL";



function Cards({ heading, description, icon, href }) {
    return (
      <Box
        maxW={{ base: 'full', md: '275px' }}
        w={'full'}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        p={5}>
        <Stack align={'start'} spacing={2}>
          <Flex
            w={16}
            h={16}
            align={'center'}
            justify={'center'}
            color={'white'}
            rounded={'full'}
            bg={useColorModeValue('gray.100', 'gray.700')}>
            {icon}
          </Flex>
          <Box mt={2}>
            <Heading size="md">{heading}</Heading>
            <Text mt={1} fontSize={'sm'}>
              {description}
            </Text>
          </Box>
          <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
            Learn more
          </Button>
        </Stack>
      </Box>
    );
}


export default  function  Contenu(props) {

    
    const textColor = useColorModeValue('secondaryGray.900', 'white');
    const textColorBrand = useColorModeValue('brand.500', 'white');
    const editorRef = useRef(null);
    
    const [content, setContent] = useState('');

    const [apiResult, setApiResult] = useState({ message: '' });
    const [isLoading, setIsLoading] = useState(false); // initialiser la variable d'état pour suivre l'état de la demande

    async function postContent(body) {
        const response = await fetch(API_URL+'/posts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ body })
        });
        const data = await response.json();
        return data;
    }
    
    async function handleSubmit() {
        setIsLoading(true);
        await postContent(content);

        const editorContent = editorRef.current.getContent(
            { 
                forced_root_block: false,
            }     
        );  // obtenir le contenu de l'éditeur TinyMCE
        const data = { body: editorContent }; // créer un objet de données pour envoyer à votre API
        const response = await fetch(API_URL+'/posts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        const result = await response.json();
        setApiResult(result);
        console.log(result); // afficher la réponse de votre API dans la console
        setIsLoading(false);
    }
 
   

    const colors = useColorModeValue(['blue.50'], ['blue.900']);
    const [tabIndex, setTabIndex] = useState(0);
    const bg = colors[tabIndex];
  

    
    return (
        <>
            <Box>
                <Container maxW={'5xl'} mt={24}>

                    <Flex flexWrap="wrap" gridGap={6} justify="center">

                        <Cards
                            heading={'Poser des questions complexes'}
                            icon={<Icon as={FcAssistant} w={10} h={10} />}
                            description={
                            'Lorem ipsum dolor sit amet catetur, adipisicing elit.'
                            }
                            href={'#'}
                        />
                        <Cards
                            heading={'Générer du contenu professionnel'}
                            icon={<Icon as={FcCollaboration} w={10} h={10} />}
                            description={
                            'Lorem ipsum dolor sit amet catetur, adipisicing elit.'
                            }
                            href={'#'}
                        />
                        <Cards
                            heading={'Rédiges des articles '}
                            icon={<Icon as={FcDonate} w={10} h={10} />}
                            description={
                            'Lorem ipsum dolor sit amet catetur, adipisicing elit.'
                            }
                            href={'#'}
                        />

                    </Flex>

                </Container>
            </Box>
        
            <Flex direction='column'
                gridArea={{ xl: "1 / 1 / 2 / 3", "3xl": "1 / 1 / 3 / 4" }}
            >   
                <Flex
                    mt='45px'
                    mb='20px'
                    
                    justifyContent='space-between'
                    direction={{ base: "column", md: "row" }}
                    align={{ base: "start", md: "center" }}
                    >
                        <Text color={textColor} fontSize='2xl' ms='24px' fontWeight='700'>
                            Creation de contenu
                        </Text>
                        <Flex
                            align='center'
                            me='20px'
                            ms={{ base: "24px", md: "0px" }}
                            mt={{ base: "20px", md: "0px" }}>
                            <Link
                            color={textColorBrand}
                            fontWeight='500'
                            me={{ base: "34px", md: "44px" }}
                            to='#art'>
                            Contenu
                            </Link>
                            <Link
                            color={textColorBrand}
                            fontWeight='500'
                            me={{ base: "34px", md: "44px" }}
                            to='#collectibles'>
                            Blog
                            </Link>
                            <Link color={textColorBrand} fontWeight='500' to='#sports'>
                            Réseaux sociaux
                            </Link>
                        </Flex>
                        
                </Flex>
                <Flex 
                  templateColumns='repeat(2, 1fr)' gap={2}
                  direction={{ base: "column", md: "row" }}
                  align={{ base: "start", md: "center" }}
                > 
                   <Card>
                   <Editor
                        onInit={(evt, editor) => editorRef.current = editor}
                        initialValue=""
                        value={content}
                        apiKey="dnxjyerv251deu0nuoy2zohlhmy3er72k0xzrieo3dirl5eb"
                        init={{
                            height: 450,
                            width:'100%',
                            menubar: false,
                            placeholder: "Commencez à générer des articles qui captiveront votre audience dès le premier mot",
                            plugins: [
                                'advlist autolink lists link image charmap print preview anchor',
                                'searchreplace visualblocks code fullscreen',
                                'insertdatetime media table paste code help wordcount'
                            ],
                            toolbar: 'undo redo | formatselect | ' +
                                'bold italic | alignleft aligncenter ' +
                                'alignright alignjustify | bullist numlist outdent indent | ' +
                                'removeformat |  help',
                            content_style: `
                                body { 
                                    font-family:Helvetica,Arial,sans-serif; 
                                    font-size:14px ; 
                                    color:black !important
                                }
                                p code{color: black;}
                            `
                        }}
                        onEditorChange={setContent}
                    />

                        <Stack direction='row' spacing={2}  pt={{ base: "10px"}}>
                            <Button onClick={handleSubmit} 
                            rightIcon=
                            {
                                isLoading && 
                                <Spinner />
                                
                            } 
                            colorScheme='teal' variant='outline'>
                                Générer du contenu IA
                            </Button>
                        </Stack>

                    </Card>
     
                    <Tabs 
                        onChange={(index) => setTabIndex(index)} 
                         bg={bg} 
                         height='500px'
                        width='100%'
                        >
                            <TabList>
                                <Tab>Reponse </Tab>
                            </TabList>
                            
                            <TabPanels p='2rem'> 

                                <HStack spacing={4}>
                                   
                                        <>
                                            <Tag
                                                size="md"
                                              
                                                borderRadius='full'
                                                variant='solid'
                                                colorScheme='green'
                                            >
                                                <TagLabel>Contenu</TagLabel>
                                                <TagCloseButton />
                                            </Tag>
                                            <Tag
                                                size="md"
                                                borderRadius='full'
                                                variant='solid'
                                                colorScheme='green'
                                            >
                                                <TagLabel>Blog</TagLabel>
                                                <TagCloseButton />
                                            </Tag>
                                        </>
        
                                </HStack> <br></br>
                                  
                                    {isLoading && 
                                        <>
                                            <Box pt={{ base: "100px", md: "100px", xl: "80px" }} display="flex" alignItems="center" justifyContent="center" >
                                                <BouncingBalls color="#00BFC0" duration="1s" />
                                            </Box>
                                        </>
                                    }
                                    {!isLoading && <Text>{apiResult.message}</Text>}       
                            </TabPanels>
                    </Tabs>
                   
                </Flex>    
                   
            </Flex> 
       
        </>
    )
}