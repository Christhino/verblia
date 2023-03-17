/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef } from 'react'


import { Editor } from '@tinymce/tinymce-react';

// Chakra imports
import {
  Box,
  Flex,
  Link,
  Text,
  useColorModeValue,
  SimpleGrid,
  Grid
} from "@chakra-ui/react";


export default  function  Contenu() {

      // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorBrand = useColorModeValue("brand.500", "white");
    const editorRef = useRef(null);
    const [text, setText] = useState();
    // const [content, setContent] = useState(
    //     "This is the initial content of the editor."
    // );
    
    const log = () => {
        if (editorRef.current) {
            // console.log(editorRef.current.getContent());
        }
    };
    const onEditorChange = () => {
        const content = editorRef.current.getContent();
        console.log(content);
        setText(content);
    };

    return (
        <Box pt={{ base: "500px", md: "80px", xl: "80px" }}>
            <Flex direction='column'
                gridArea={{ xl: "1 / 1 / 2 / 3", "3xl": "1 / 1 / 3 / 4" }}
                // gridArea: {repeat(2, minmax(0, 1fr))}
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
                            to='#music'>
                            Generateur de paragraphe
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
                    <Editor
                        onInit={(evt, editor) => editorRef.current = editor}
                                initialValue="<p>This is the initial content of the editor</p>"
                                apiKey="dnxjyerv251deu0nuoy2zohlhmy3er72k0xzrieo3dirl5eb"
                                init={{
                                    height: 300,
                                    width:'100%',
                                    menubar: true,
                                    plugins: [
                                        'advlist autolink lists link image charmap print preview anchor',
                                        'searchreplace visualblocks code fullscreen',
                                        'insertdatetime media table paste code help wordcount'
                                    ],
                                    toolbar: 'undo redo | formatselect | ' +
                                        'bold italic | alignleft aligncenter ' +
                                        'alignright alignjustify | bullist numlist outdent indent | ' +
                                        'removeformat | code | help',
                                    content_style: `
                                    body { 
                                        font-family:Helvetica,Arial,sans-serif; 
                                        font-size:14px ; 
                                        color:black !important
                                    }
                                    p code{color: black;}
                                    `
                                }}
                        onEditorChange={onEditorChange}
                    />

                    <Editor
                        onInit={(evt, editor) => editorRef.current = editor}
                                initialValue="<p>This is the initial content of the editor</p>"
                                apiKey="dnxjyerv251deu0nuoy2zohlhmy3er72k0xzrieo3dirl5eb"
                                init={{
                                    height: 300,
                                    width:"100%",
                                    menubar: true,
                                    plugins: [
                                        'advlist autolink lists link image charmap print preview anchor',
                                        'searchreplace visualblocks code fullscreen',
                                        'insertdatetime media table paste code help wordcount'
                                    ],
                                    toolbar: 'undo redo | formatselect | ' +
                                        'bold italic | alignleft aligncenter ' +
                                        'alignright alignjustify | bullist numlist outdent indent | ' +
                                        'removeformat | code | help',
                                    content_style: `
                                    body { 
                                        font-family:Helvetica,Arial,sans-serif; 
                                        font-size:14px ; 
                                        color:black !important
                                    }
                                    p code{color: black;}
                                    `
                                }}
                        onEditorChange={onEditorChange}
                    />
                </Flex>    
                   
            </Flex> 
        </Box>
    )
}