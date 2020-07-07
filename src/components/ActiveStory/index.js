import React, { useState } from 'react';
import StyledActiveStory from './styles';

const ActiveStory = ({ activeStory = [], onClose }) => {
  const [highlightFocus, setHighlightFocus] = useState(0);
  const [seenHighlight, setSeenHighlight] = useState([]);

  setInterval(() => {
    if (highlightFocus < activeStory.highlight.length) {
      setSeenHighlight([
        ...seenHighlight,
        activeStory.highlight[highlightFocus].id,
      ]);
      setHighlightFocus(highlightFocus + 1);
    }
  }, 15000);
  return (
    <StyledActiveStory>
      <div className='container'>
        {console.log({ seenHighlight })}
        <div className='progress-bar'>
          {activeStory.highlight.map((item, index) => (
            <div
              className={`progress-item 
                ${index === highlightFocus ? 'focus' : ''}
                ${seenHighlight.includes(item.id) ? 'seen' : ''}
                `}
              key={index}
            />
          ))}
        </div>
      </div>
      <button onClick={onClose} type='button' className='close'>
        Close
      </button>
    </StyledActiveStory>
  );
};

export default ActiveStory;
