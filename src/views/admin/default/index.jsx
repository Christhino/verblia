// Chakra imports
import {
  Box,
  Flex,
  Grid,
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

// Custom components
import MiniCalendar from "components/calendar/MiniCalendar";

import React from "react";

import Banner from "views/admin/marketplace/components/Banner";


export default function UserReports() {
  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorBrand = useColorModeValue("brand.500", "white");

  return (
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
              <MiniCalendar h='100%' minW='100%' selectRange={false} />
            </SimpleGrid>
          </Flex>
      </Grid>
    </Box>
  );
}
