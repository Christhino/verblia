/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import styled from "styled-components";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Services from "../components/Sections/Services";
import Projects from "../components/Sections/Projects";
import Blog from "../components/Sections/Blog";
import Pricing from "../components/Sections/Pricing";
import Contact from "../components/Sections/Contact";
import ChatBox from "../components/GPT/ChatBot"
import Footer from "../components/Sections/Footer"
import ChatButton from "../components/Buttons/ChatButton";

import IconMessage from "../assets/img/message.png"
export default function Landing() {

  const [showChatbot, setShowChatbot] = useState(false);

  const handleClick = () => {
    setShowChatbot(!showChatbot);
  };

  return (
    <>
      <TopNavbar />
      <Header />
      <Services />
      <Projects />
      <Blog />
      {/* <Pricing /> */}
      <Footer />
      <ButtonsRow >
         {showChatbot && <ChatBox />}
          <Chat onClick={handleClick}>
              <Image >
                  <svg width="49" height="38" viewBox="0 0 36 36"><path fill="white" d="M1 17.99C1 8.51488 8.42339 1.5 18 1.5C27.5766 1.5 35 8.51488 35 17.99C35 27.4651 27.5766 34.48 18 34.48C16.2799 34.48 14.6296 34.2528 13.079 33.8264C12.7776 33.7435 12.4571 33.767 12.171 33.8933L8.79679 35.3828C7.91415 35.7724 6.91779 35.1446 6.88821 34.1803L6.79564 31.156C6.78425 30.7836 6.61663 30.4352 6.33893 30.1868C3.03116 27.2287 1 22.9461 1 17.99ZM12.7854 14.8897L7.79161 22.8124C7.31238 23.5727 8.24695 24.4295 8.96291 23.8862L14.327 19.8152C14.6899 19.5398 15.1913 19.5384 15.5557 19.8116L19.5276 22.7905C20.7193 23.6845 22.4204 23.3706 23.2148 22.1103L28.2085 14.1875C28.6877 13.4272 27.7531 12.5704 27.0371 13.1137L21.673 17.1847C21.3102 17.4601 20.8088 17.4616 20.4444 17.1882L16.4726 14.2094C15.2807 13.3155 13.5797 13.6293 12.7854 14.8897Z"></path></svg>
                  <Span/>
              </Image>
          </Chat>
          
      </ButtonsRow>

      
     
    </>
  );
}
const Chat = styled.div`
  background-color: #00BFC0;
  border-radius: 60px;
  bottom: 24px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 12px 0px;
  display: block;
  height: 60px;
  margin: 0px 12px;
  overflow: visible;
  padding: 0px;
  position: fixed;
  right: 12px;
  top: auto;
  width: 60px;
  z-index: 2147483644;

  display: flex;
  justify-content: center;
  align-items: center;
  
`
const  Image  = styled.div`
  width: 49px;
  height: 40px;
`
const  Span =  styled.div`
  border-radius: inherit;
  inset: 0px;
  z-index: 0;
  position: absolute;
  pointer-events: none;
  overflow: hidden;
`
const ButtonsRow = styled.div`
    position: fixed;
    z-index: 9999;
    right: 36px;
    bottom: 36px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
