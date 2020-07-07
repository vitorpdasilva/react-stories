import React, { useState } from 'react';
import Container from '../Container';
import Story from '../Story';
import ActiveStory from '../ActiveStory';

const Stories = ({ stories, gradientColors }) => {
  const [storyActive, setStoryActive] = useState(null);

  const handleStoryClick = story => {
    setStoryActive(story);
  };

  return (
    <Container>
      {stories.map((story, index) => (
        <Story
          gradientColors={gradientColors}
          key={story.id}
          onClick={() => handleStoryClick(story)}
          seen={index % 2 === 0}
          {...story}
        />
      ))}
      {storyActive && (
        <ActiveStory
          onClose={() => setStoryActive()}
          activeStory={storyActive}
        />
      )}
    </Container>
  );
};

export default Stories;
