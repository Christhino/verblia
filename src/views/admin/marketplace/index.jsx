import React from "react";

// Chakra imports
import {
  Box,
  Flex,
  Link,
  Text,
  useColorModeValue,
  SimpleGrid,
} from "@chakra-ui/react";

import NFT from "components/card/NFT";


// Assets
import Nft1 from "assets/img/nfts/Nft1.png";
import Nft2 from "assets/img/nfts/Nft2.png";
import Nft3 from "assets/img/nfts/Nft3.png";
import Nft4 from "assets/img/nfts/Nft4.png";
import Nft5 from "assets/img/nfts/Nft5.png";
import Nft6 from "assets/img/nfts/Nft6.png";

export default function Marketplace() {
  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorBrand = useColorModeValue("brand.500", "white");
  return (
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
              <NFT
                name='Écrire des articles de blog' 
                image={Nft1}

              />
              <NFT
                name='Améliorateur de contenu'
               
                image={Nft2}
               
              />
              <NFT
                name='articles de blog idées de sujet'
               
              
                image={Nft3}
              
              />
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
              <NFT
                name='Générateur de paragraphe'
               
                image={Nft4}
               
              />
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
  );
}
