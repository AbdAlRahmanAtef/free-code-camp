import { Box } from '@mui/material';
import React from 'react';

const TopicItem = ({ topic, handleClick }) => {
  return <Box onClick={handleClick}>{topic[1]}</Box>;
};

export default TopicItem;
