import React from "react";
import styled from "styled-components";

export interface HeroProps{
    image:string;
    title?:string,
    desc?:string
}

const Section=styled.section<HeroProps>`
    background-image:url(${({image})=>(image && image)});
    background-repeat:no-repeat;
    background-position:center;
    background-size:100% 100%;
    height:100vh;
    display:flex;
    justify-content:flex-start;
    align-items:flex-end;
    margin-top:-80px;
`;

const Container=styled.div`
    color:#fff;
    padding:2rem;
    backdrop-filter:blur(5px);
    background-color:rgba(0,0,0,0.4);
    margin:2rem;
    border-radius:10px;

    h1{
        font-size:clamp(2rem,8vw,5rem);
        margin-bottom:0.5rem;
    }

    p{
        font-size:clamp(1rem,6vw,2.5rem);
        margin-bottom:1rem;
    }

    button{
        font-size:clamp(0.8rem,4vw,1.2rem);
        padding:0.8rem 2rem;
        background:#ffb347;
        background:linear-gradient(to right,#ffcc33,#ffb347);
        border:none;
        border-radius:4px;
        cursor:pointer;
        outline:none;
    }
`;

export function Hero({image,title,desc}:HeroProps){

    return (
        <Section image={image}>
            <Container>
                <h1>{title}</h1>
                <p>{desc}</p>
                <button>Learn more</button>
            </Container>
        </Section>
    )
}