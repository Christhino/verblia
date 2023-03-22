/* eslint-disable no-unused-vars */
import React from "react";

// Chakra imports
import { Button, Flex,Link,Text } from "@chakra-ui/react";

// Assets
import banner from "assets/img/nfts/NftBanner1.png";

export default function Banner() {
  // Chakra Color Mode
  return (
    <Flex
      direction='column'
      bgImage={banner}
      bgSize='cover'
      py={{ base: "30px", md: "56px" }}
      px={{ base: "30px", md: "64px" }}
      borderRadius='30px'>
      <Text
        fontSize={{ base: "24px", md: "34px" }}
        color='white'
        mb='14px'
        maxW={{
          base: "100%",
          md: "64%",
          lg: "46%",
          xl: "70%",
          "2xl": "50%",
          "3xl": "42%",
        }}
        fontWeight='700'
        lineHeight={{ base: "32px", md: "42px" }}>
        Écrivez des contenus longs 5 fois plus rapidement en mode Boss.
      </Text>
      <Text
        fontSize='md'
        color='#E3DAFF'
        maxW={{
          base: "100%",
          md: "64%",
          lg: "40%",
          xl: "56%",
          "2xl": "46%",
          "3xl": "34%",
        }}
        fontWeight='500'
        mb='40px'
        lineHeight='28px'>
        Explorez notre bibliothèque croissante d'outils puissants spécialement conçus pour écrire du contenu persuasif et engageant pour votre site Web, des vidéos publicitaires et plus encore. Assemblez-les pour créer votre contenu fini
      </Text>
      <Flex align='center'>
        <Link href="/admin/template">
          <Button
            bg='white'
            color='black'
            _hover={{ bg: "whiteAlpha.900" }}
            _active={{ bg: "white" }}
            _focus={{ bg: "white" }}
            fontWeight='500'
            fontSize='14px'
            py='20px'
            px='27'
            me='38px'>
            Commencer
          </Button>
        </Link>
        {/* <Link>
          <Text color='white' fontSize='sm' fontWeight='500'>
            Watch video
          </Text>
        </Link> */}
      </Flex>
    </Flex>
  );
}
