import React from 'react';
import Container from '../Container/Cantainer';
import Hero from '../Hero/Hero';
import {infoContent} from '../../data/dataStore';

const Info = () => (
  <Container>
    <Hero titleText={infoContent.title} image={infoContent.imgAddress}/>
    <p>{infoContent.content}</p>
  </Container>
);

export default Info;