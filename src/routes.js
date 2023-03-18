/* eslint-disable no-unused-vars */
import React from "react";

import { Icon } from "@chakra-ui/react";
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdOutlineShoppingCart,
} from "react-icons/md";

import {
  HiTemplate
} from "react-icons/hi";
// Admin Imports
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Contenu from "views/admin/contenu";
import Profile from "views/admin/profile";



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
    component: Contenu,
    secondary: true,
    children: [
      {
        name: "Contenu",
        layout: "/admin",
        path: "/contenuleka",
        component: Contenu,
        hideFromSidebar: true 
      },
    ],
  },
  {
    name: "Profile",
    layout: "/admin",
    path: "/profile",
    icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
    component: Profile,
    hideFromSidebar: true 
  },
];

export default routes;
