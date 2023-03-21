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

export  default function ArticleForm() {

    //wysiswyg
    const editorRef = useRef(null);
    const log = () => {
        if (editorRef.current) {
        console.log(editorRef.current.getContent());
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
                        Créez des articles d'une longueur maximale de 1500 mots en seulement quatre étapes grâce à un processus guidé. Vous pouvez choisir le titre, l'introduction et le plan, et les personnaliser selon vos besoins.
                        </Text>
                      </Stack>
                      <Box as={'form'} mt={10}>
                        <Stack spacing={4}>
                          <Input
                            placeholder="Titre de l'article"
                            bg={'gray.200'}
                            border={0}
                            color={'gray.500'}
                            _placeholder={{
                              color: 'gray.500',
                            }}
                          />
                          <Textarea 
                            placeholder="Bref descriptif  de  l'article"
                            bg={'gray.200'}
                            height="200"
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