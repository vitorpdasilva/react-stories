import React from 'react';
import Story from '../Story';

const Stories = ({ stories }) => (
  <div>
    {stories.map((story, index) => (
      <Story {...story} seen={index % 2 === 0} key={story.id} />
    ))}
  </div>
);

export default Stories;
