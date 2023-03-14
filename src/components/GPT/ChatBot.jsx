/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import styled from "styled-components";

import  './ChatBot.css'
export default function  ChatBox () {


    const [messages, setMessages] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const inputValue = event.target.message.value;
        if (inputValue.trim() !== '') {
        setMessages([...messages, { text: inputValue, from: 'user' }]);
        event.target.message.value = '';
        }
    };

    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [response, setResponse] = useState('');
    const chatBoxBodyRef = useRef(null);

    const handleInputChange = (e) =>{
        setMessage(e.target.value);
    }
    
    const handleSendMessage = (e) => {
        setIsLoading(true);
        const  requestBody = {message};
        fetch('URL_API', {
            method:'POST',
            headers: {
                accept: 'application.json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        }).then(response => {
            return response.json();
        }).then(data => {
            setIsLoading(false);
            setResponse(data.message);
            setMessage('');
        })
    }

    const handleKeyDown =(e)=> {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    }
    useEffect(() => {
        if (chatBoxBodyRef.current) {
            chatBoxBodyRef.current.scrollTop = chatBoxBodyRef.current.scrollHeight;
        }
    }, [response]);

    return(
        <Contenaire>
            <Chatbot>
                <ChatbotHeader>

                </ChatbotHeader>

                <ChatbotTitle>

                </ChatbotTitle>
                
                <ChatbotMessages>  
                    {messages.map((message, index) => (
                        <div key={index} className={`chatbot__message ${message.from}`}>
                                <p>{message.text}</p>
                        </div>
                    ))}
                </ChatbotMessages>
                <Form>
                    <form onSubmit={handleSubmit} className='label'>
                        <input type="text" className='message' name="message" placeholder="Type a message..." autoComplete="off" />
                    </form>
                </Form>


            </Chatbot>

        </Contenaire>
    )

}

const  ChatbotTitle =  styled.div`
    
`
const  ChatbotHeader =  styled.div`
    box-shadow: 0 1px 0 rgba(0, 0, 0, .08);
    z-index: 1;
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 60px;
    padding: 0 12px 0 12px;
`
const Contenaire =  styled.div`
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    // height: 100%;
    -webkit-box-pack: end;
    -webkit-justify-content: flex-end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    right: 20px;
    position: fixed;
    top: 60%;
`
const Chatbot = styled.div`
    background-color: #fff;
    border-radius: 18px;
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, .15);
    display: flex;
    flex-direction: column;
    height: calc(100% - 24px);
    justify-content: flex-end;
    left: 0px;
    max-height: 700px;
    position: relative;
    top: -53%;
    width: 300px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;
const  ChatbotMessages  = styled.div`
    flex: 1;
    overflow-y: auto;

    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    min-height: 60px;
    padding: 0 12px 0 12px;
    
`
const Form  =  styled.div`
    border-top: .5px solid rgba(0, 0, 0, .08);
    align-items: center;
    display: flex;

    flex: 1 0 auto;
    height: 36px;
    line-height: 40px;
    margin: 8px 0;
    padding-left: 12px;
`