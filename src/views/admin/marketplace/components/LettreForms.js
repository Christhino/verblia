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
 
} from "@chakra-ui/react";
import {
  BsRobot
} from 'react-icons/bs';
import { Editor } from '@tinymce/tinymce-react';
import  {  API_URL } from "data/API_URL";

export  default function LettreForm() {
    
    const [title, setTitle] = useState('');
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [body, setBody] = useState('');

    //wysiswyg
    const editorRef = useRef(null);
    const log = () => {
        if (editorRef.current) {
        console.log(editorRef.current.getContent());
        }
    };
    const [apiResult, setApiResult] = useState();

    const handleSubmit = async () => {
        try {
            const response = await fetch(API_URL+'/motivation', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title, nom, prenom ,body}),
            });
            const data = await response.json();
            setApiResult(data.message);
            setBody(data.body);
            console.log(data.message)
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
                          Reformulez votre contenu dans une voix et un style différents pour attirer des lecteurs différents.
                        </Text>
                      </Stack>

                      <Box as={'form'} mt={10}>
                        <Stack spacing={4}>
                           <Input
                                placeholder="Votre titre"
                                bg={'gray.200'}
                                border={0}
                                color={'gray.500'}
                                value={title}
                                onChange={(event) => setTitle(event.target.value)}
                            />
                            <Input
                                placeholder="Votre Nom"
                                bg={'gray.200'}
                                border={0}
                                color={'gray.500'}
                                value={nom}
                                onChange={(event) => setNom(event.target.value)}
                            />
                            <Input
                                placeholder="Votre prenom"
                                bg={'gray.200'}
                                border={0}
                                color={'gray.500'}
                                value={prenom}
                                onChange={(event) => setPrenom(event.target.value)}
                            />
                            <Textarea
                                placeholder="Votre BIO"
                                bg={'gray.200'}
                                height="200"
                                border={0}
                                color={'gray.500'}
                                value={body}
                                onChange={(event) => setBody(event.target.value)}
                            />
                        </Stack>
                        <Button
                          // fontFamily={'heading'}
                          mt={8}
                          colorScheme='teal' 
                          variant='outline'
                          onClick={handleSubmit}
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
                      initialValue="<p>This is the initial content of the editor.</p>"
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