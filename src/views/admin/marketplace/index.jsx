/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef } from 'react'

// Chakra imports
import {
  Box,
  Flex,
  Link,
  Text,
  useColorModeValue,
  SimpleGrid,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Grid,
  GridItem,
  Divider,
  Icon,
  Textarea,
  Stack,
  Heading,
  Container,
  Input,
  Avatar,
  AvatarGroup,
  useBreakpointValue,
  IconProps,
} from "@chakra-ui/react";
import {
  BsRobot,
  BsParagraph
} from 'react-icons/bs';
import {
  BiBookContent
} from 'react-icons/bi';

import { Editor } from '@tinymce/tinymce-react';


import NFT from "components/card/NFT";


// Assets
import Nft1 from "assets/img/nfts/Nft1.png";
import Nft2 from "assets/img/nfts/Nft2.png";
import Nft3 from "assets/img/nfts/Nft3.png";
import Nft4 from "assets/img/nfts/Nft4.png";
import Nft5 from "assets/img/nfts/Nft5.png";
import Nft6 from "assets/img/nfts/Nft6.png";
import ContenuForm from './components/ContenuForm';
import ArticleForm from './components/ArtileForm';
import ParagrapheForm from './components/ParagrapheForme';



const avatars = [
  {
    name: 'Ryan Florence',
    url: 'https://bit.ly/ryan-florence',
  },
  {
    name: 'Segun Adebayo',
    url: 'https://bit.ly/sage-adebayo',
  },
  {
    name: 'Kent Dodds',
    url: 'https://bit.ly/kent-c-dodds',
  },
  {
    name: 'Prosper Otemuyiwa',
    url: 'https://bit.ly/prosper-baba',
  },
  {
    name: 'Christian Nwamba',
    url: 'https://bit.ly/code-beast',
  },
];


export default function Marketplace() {
  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorBrand = useColorModeValue("brand.500", "white");
  //wysiswyg
  const editorRef = useRef(null);
   const log = () => {
     if (editorRef.current) {
       console.log(editorRef.current.getContent());
     }
   };
  // modal full 
  const  {isOpen ,onOpen, onClose } =  useDisclosure()
  
  const [isOpenModal1, setIsOpenModal1] = useState(false);
  const [isOpenModal2, setIsOpenModal2] = useState(false);
  const [isOpenModal3, setIsOpenModal3] = useState(false);

  const handleClickModal1 = () => setIsOpenModal1(true);
  const handleClickModal2 = () => setIsOpenModal2(true);
  const handleClickModal3 = () => setIsOpenModal3(true);

  const handleCloseModal1 = () => setIsOpenModal1(false);
  const handleCloseModal2 = () => setIsOpenModal2(false);
  const handleCloseModal3 = () => setIsOpenModal3(false);

  return (
    <>
      <Box pt={{ base: "200px", md: "80px", xl: "80px" }}>
        <Flex direction='column'
              gridArea={{ xl: "1 / 1 / 2 / 3", "3xl": "1 / 1 / 3 / 4" }}>
              <Flex
                mt='45px'
                mb='20px'
                justifyContent='space-between'
                direction={{ base: "column", md: "row" }}
                align={{ base: "start", md: "center" }}>
                <Text color={textColor} fontSize='2xl' ms='24px' fontWeight='700'>
                  Template
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
              <SimpleGrid columns={{ base: 1, md: 3 }} gap='20px'>
              
                <Box  onClick={() => handleClickModal1('full')}>
                  <NFT
                    name='Écrire des articles de blog' 
                    image={Nft1}
                    
                  />
                </Box> 
                
                <Box  onClick={() => handleClickModal2('full')}>
                  <NFT
                    name='Améliorateur de contenu'    
                    image={Nft2}           
                  />
                </Box>

                <Box onClick={() => handleClickModal1('full')}>
                  <NFT
                      name='Articles de blog idées de sujet'
                      image={Nft3}
                     
                  />
                </Box>

              </SimpleGrid>
              
              <Text
                mt='45px'
                mb='36px'
                color={textColor}
                fontSize='2xl'
                ms='24px'
                fontWeight='700'>
                Autre template
              </Text>
              
              <SimpleGrid
                columns={{ base: 1, md: 3 }}
                gap='20px'
                mb={{ base: "20px", xl: "0px" }}>
                <Box onClick={() => handleClickModal3('full')}>
                  <NFT
                    name='Générateur de paragraphe'
                    image={Nft4}
                  />
                </Box>
                <NFT
                  name='Texte préliminaire des publicités'
                  image={Nft5}
                
                />

                <NFT
                  name='Traduction'
                  image={Nft6}
                />
              </SimpleGrid>
        </Flex>
        
      </Box>

      <Modal onClose={handleCloseModal1} size="full" isOpen={isOpenModal1}>
        <ModalOverlay />
        <ModalContent>
         
            <ModalHeader >
              <Flex  gap={5}>
                <Icon as={BsRobot} color="#2A9D8F"   w={8} h={8}/>
                AI Article Writer 3.0
              </Flex>
            </ModalHeader>
        
          <ModalCloseButton />
          <ModalBody>     
              <ArticleForm/>
          </ModalBody>
          <ModalFooter>
            <Button onClick={handleCloseModal1}>Ferme</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>


      <Modal onClose={handleCloseModal2} size="full" isOpen={isOpenModal2}>
        <ModalOverlay />
        <ModalContent>
         
            <ModalHeader >
              <Flex  gap={5}>
                <Icon as={BiBookContent} color="#2A9D8F"   w={8} h={8}/>
                AI Contenu Writer 3.0
              </Flex>
            </ModalHeader>
        
          <ModalCloseButton />
          <ModalBody>     
              <ContenuForm/>
          </ModalBody>
          <ModalFooter>
            <Button onClick={handleCloseModal2}>Ferme</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal onClose={handleCloseModal3} size="full" isOpen={isOpenModal3}>
        <ModalOverlay />
        <ModalContent>
         
            <ModalHeader >
              <Flex  gap={5}>
                <Icon as={BsParagraph} color="#2A9D8F"   w={8} h={8}/>
                AI paragraphe Writer 3.0
              </Flex>
            </ModalHeader>
        
          <ModalCloseButton />
          <ModalBody>     
              <ParagrapheForm/>
          </ModalBody>
          <ModalFooter>
            <Button onClick={handleCloseModal3}>Ferme</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

    </>
  );
}
