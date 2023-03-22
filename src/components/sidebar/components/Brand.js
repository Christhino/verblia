/* eslint-disable no-unused-vars */
import React from "react";

// Chakra imports
import { Flex, Img, useColorModeValue } from "@chakra-ui/react";
import  Setting  from '../../../../src/assets/img/setting.png'
// Custom components
import { HorizonLogo } from "components/icons/Icons";
import { HSeparator } from "components/separator/Separator";


export function SidebarBrand() {
  //   Chakra color mode
  let logoColor = useColorModeValue("navy.700", "white");

  return (
    <Flex align='center' direction='column'>
       <Img src={Setting}/>

      <HSeparator mb='20px' />
    </Flex>
  );
}

export default SidebarBrand;
