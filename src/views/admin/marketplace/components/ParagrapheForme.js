/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef } from 'react'

// Chakra imports
import {
  Box,
  Flex,
  Button,
  Grid,
  GridItem,
  Text,
  Icon,
  Textarea,
  Stack,
  Heading,
  Container,
  Input,
  Spinner,
 
} from "@chakra-ui/react";
import { Editor } from '@tinymce/tinymce-react';
import  {  API_URL } from "data/API_URL";
export  default function ParagrapheForm() {
  const [sujet, setSujet] = useState('');
  const [keywords, setKeywords] = useState('');
  const [tonalite, setTonalite] = useState('');


    //wysiswyg 
    const editorRef = useRef(null);
    const log = () => {
        if (editorRef.current) {
        console.log(editorRef.current.getContent());
        }
    };
   
    const [apiResult, setApiResult] = useState();
    const [isLoading, setIsLoading] = useState(false);
    
    const handleSubmit = async () => {
      try {
        setIsLoading(true);
          const response = await fetch(API_URL+'/paragraphe', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ sujet ,keywords,tonalite}),
          });
          const data = await response.json();
          setApiResult(data.message);
          setTonalite(data.tonalite);
          console.log(data.message)
          setIsLoading(false);
      } catch (error) {
          console.error(error);
      }
  };
    return(
        <>
           <Grid
              templateRows={{ base: "1fr 1fr", md: "none" }}
              templateColumns={{ base: "none", md: "repeat(2, 1fr)" }}
            
              w="100%"
              color="white"
              fontSize="4xl"
            >
              {/* Page 1 */}
              <GridItem  w="100%" h="100%">
                <Flex justifyContent="center" alignItems="center" h="100%">
                <Box position={'relative'}>
                  <Container>
                    <Stack
                      bg={'gray.50'}
                      rounded={'xl'}
                      p={{ base: 4, sm: 6, md: 6 }}
                      spacing={{ base: 8 }}
                      h="80vh"
                      maxW={800}
                      
                    >
                      
                      <Stack spacing={4}>
                        <Heading
                          color={'gray.800'}
                          lineHeight={1.1}
                          fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
                           Votre solde : 10 000 mots premium
                          <Text
                            as={'span'}
                            bgGradient="linear(to-r, red.400,pink.400)"
                            bgClip="text">
                            !
                          </Text>
                        </Heading>
                        <Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
                        Rédigez des paragraphes courts et percutants qui transforment vos lecteurs en clients.
                        </Text>
                      </Stack>
                      <Box as={'form'} mt={10}>
                        <Stack spacing={4}>
                          <Input
                            placeholder="Sujet : L'intelligence artificielle est l'avenir du copywriting"
                            bg={'gray.200'}
                            border={0}
                            color={'gray.500'}
                            value={sujet}
                            onChange={(event) => setSujet(event.target.value)}
                            _placeholder={{
                              color: 'gray.500',
                            }}
                          />
                          <Input
                            placeholder="Mots clés : page d'accueil, annonces Google, annonces Facebook"
                            bg={'gray.200'}
                            border={0}
                            value={keywords}
                            onChange={(event) => setKeywords(event.target.value)}
                            color={'gray.500'}
                            _placeholder={{
                              color: 'gray.500',
                            }}
                          />
                         <Input
                            placeholder="Ton de la voix"
                            bg={'gray.200'}
                            value={tonalite}
                            onChange={(event) => setTonalite(event.target.value)}
                            border={0}
                            color={'gray.500'}
                            _placeholder={{
                              color: 'gray.500',
                            }}
                          />
                        </Stack>
                        <Button
                          // fontFamily={'heading'}
                          mt={8}
                          colorScheme='teal' variant='outline'
                          onClick={handleSubmit}
                          rightIcon=
                            {
                                isLoading && 
                                <Spinner />
                                
                            } 
                          >
                          Générer
                        </Button>
                      </Box>
              
                    </Stack>
                  </Container>
                </Box>
                </Flex>
              </GridItem>

              {/* Page 2 */}
              <GridItem bg="white" w="100%" h="100%">
                <Flex justifyContent="center" alignItems="center" h="100%">
                  <Editor
                      onInit={(evt, editor) => editorRef.current = editor}
                      initialValue="<p>Vos copies créées par l'intelligence artificielle apparaîtront ici.</p>"
                      value={apiResult}
                      init={{
                        height: "80vh",
                        width: "100%",
                        menubar: false,
                        plugins: [
                          'advlist autolink lists link image charmap print preview anchor',
                          'searchreplace visualblocks code fullscreen',
                          'insertdatetime media table paste code help wordcount'
                        ],
                        toolbar: 'undo redo | formatselect | ' +
                        'bold italic backcolor | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'removeformat | help',
                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                      }}
                  />
                </Flex>
              </GridItem>
            </Grid>
        </>
    )
}