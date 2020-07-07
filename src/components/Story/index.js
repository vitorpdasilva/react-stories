import React from 'react';
import StyledAvatar from './styles';

const Story = ({ thumbnail, username, seen }) => (
  <StyledAvatar seen={seen}>
    {console.log({ thumbnail, username })}
    <img src={thumbnail} />
    <span>{username}</span>
  </StyledAvatar>
);

export default Story;
