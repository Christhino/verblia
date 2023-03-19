/* eslint-disable no-unused-vars */
import React from "react";

import { Icon } from "@chakra-ui/react";
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdOutlineShoppingCart,
  MdChat,
} from "react-icons/md";
import {
  FaRobot
} from "react-icons/fa"
import {
  HiTemplate
} from "react-icons/hi";
// Admin Imports
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
import Contenu from "views/admin/contenu";



const routes = [
  {
    name: "Dashboard",
    layout: "/admin",
    path: "/default",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: MainDashboard,
  },
 
  {
    name: "Template",
    layout: "/admin",
    path: "/template",
    icon: (
      <Icon
        as={HiTemplate}
        width='20px'
        height='20px'
        color='inherit'
      />
    ),
    component: NFTMarketplace,
    secondary: true,
  },
  {
    name: "Mon assistant",
    layout: "/admin",
    path: "/contenu",
    icon: <Icon as={FaRobot} width='20px' height='20px' color='inherit' />,
    component: Contenu,
  },
  {
    name: "Profile",
    layout: "/admin",
    path: "/profile",
    icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
    component: Profile,
  },
];

export default routes;
