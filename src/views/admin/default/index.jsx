/* eslint-disable no-unused-vars */
// Chakra imports
import React, { useEffect, useState, useRef } from 'react'

import {
  Box,
  Flex,
  Grid,
  Link,
  Text,
  useColorModeValue,
  SimpleGrid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Icon
} from "@chakra-ui/react";

import {
  BsRobot,
  BsParagraph
} from 'react-icons/bs';
import {
  SlSocialInstagram
} from 'react-icons/sl';


import {
  BiBookContent
} from 'react-icons/bi';

import NFT from "components/card/NFT";


// Assets
import Nft1 from "assets/img/nfts/Nft1.png";
import Nft2 from "assets/img/nfts/Nft2.png";
import Nft3 from "assets/img/nfts/Nft3.png";
import ContenuForm from '../marketplace/components/ContenuForm';
import ArticleForm from '../marketplace/components/ArtileForm';
import ParagrapheForm from '../marketplace/components/ParagrapheForme';
import ReseauForm from '../marketplace/components/ResauForm';
import LettreForm from '../marketplace/components/LettreForms';

// Custom components
import MiniCalendar from "components/calendar/MiniCalendar";



import Banner from "views/admin/marketplace/components/Banner";


export default function UserReports() {
  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorBrand = useColorModeValue("brand.500", "white");
   
  const [isOpenModal1, setIsOpenModal1] = useState(false);
  const [isOpenModal2, setIsOpenModal2] = useState(false);
  const [isOpenModal3, setIsOpenModal3] = useState(false);
  const [isOpenModal4, setIsOpenModal4] = useState(false);
  const [isOpenModal5, setIsOpenModal5] = useState(false);

  const handleClickModal1 = () => setIsOpenModal1(true);
  const handleClickModal2 = () => setIsOpenModal2(true);
  const handleClickModal3 = () => setIsOpenModal3(true);
  const handleClickModal4 = () => setIsOpenModal4(true);
  const handleClickModal5 = () => setIsOpenModal5(true);

  const handleCloseModal1 = () => setIsOpenModal1(false);
  const handleCloseModal2 = () => setIsOpenModal2(false);
  const handleCloseModal3 = () => setIsOpenModal3(false);
  const handleCloseModal4 = () => setIsOpenModal4(false);
  const handleCloseModal5 = () => setIsOpenModal5(false);
  return (
    <>
      <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
        <SimpleGrid mb='20px'>
          <Banner/>
        </SimpleGrid>
        <Grid
          mb='20px'
          gridTemplateColumns={{ xl: "repeat(3, 1fr)", "2xl": "1fr 0.46fr" }}
          gap={{ base: "20px", xl: "20px" }}
          display={{ base: "block", xl: "grid" }}>
            <Flex direction='column'
              gridArea={{ xl: "1/ 1 / 2 / 4", "3xl": "1 / 1 / 2 / 4" }}>
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
              <SimpleGrid columns={{ base: 1, md: 4 }} gap='20px'>

                  <Box  onClick={() => handleClickModal5('full')}>
                    <NFT
                      name='Générateur  de lettre de motivation' 
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
                <MiniCalendar h='100%' minW='100%' selectRange={false} />
              </SimpleGrid>
            </Flex>
        </Grid>
      </Box>

      <Modal onClose={handleCloseModal5} size="full" isOpen={isOpenModal5}>
        <ModalOverlay />
        <ModalContent>
         
            <ModalHeader >
              <Flex  gap={5}>
                <Icon as={BsRobot} color="#2A9D8F"   w={8} h={8}/>
                AI Lettre de motivation Writer 3.0
              </Flex>
            </ModalHeader>
        
          <ModalCloseButton />
          <ModalBody>     
              <LettreForm/>
          </ModalBody>
          <ModalFooter>
            <Button onClick={handleCloseModal5}>Ferme</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>


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

    </>
  );
}
