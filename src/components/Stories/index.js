import React from 'react';
import Container from '../Container';
import Story from '../Story';

const Stories = ({ stories }) => (
  <Container>
    {stories.map((story, index) => (
      <Story {...story} seen={index % 2 === 0} key={story.id} />
    ))}
  </Container>
);

export default Stories;
