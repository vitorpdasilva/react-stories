import React, { useState } from 'react';
import StyledActiveStory from './styles';

const ActiveStory = ({ activeStory = [], onClose }) => {
  const [highlightFocus, setHighlightFocus] = useState(0);
  const [seenHighlight, setSeenHighlight] = useState([]);

  setInterval(() => {
    if (highlightFocus + 1 < activeStory.highlight.length) {
      setSeenHighlight([
        ...seenHighlight,
        activeStory.highlight[highlightFocus].id,
      ]);
      setHighlightFocus(highlightFocus + 1);
    } else {
      clearInterval();
    }
  }, 15000);
  return (
    <StyledActiveStory>
      <div className='container'>
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
        <img src={activeStory.highlight[highlightFocus].asset} />
      </div>
      <button onClick={onClose} type='button' className='close'>
        Close
      </button>
    </StyledActiveStory>
  );
};

export default ActiveStory;
