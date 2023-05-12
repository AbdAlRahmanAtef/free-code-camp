import { Box, Collapse, MenuItem, Typography } from '@mui/material';
import React, { useState } from 'react';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const LessonsWrapper = ({ topic, handleClick }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Box
      sx={{
        backgroundColor: '#fff',
        p: '16px',
        borderRadius: '8px',
        mb: 3,
      }}
    >
      <h2 className="heading-1">{topic.name}</h2>
      <Box sx={{ borderBottom: '2px solid #eee', pb: 2, mb: 2 }}>
        {' '}
        {topic?.description?.split('\n').map((line) => (
          <Typography mb={1}>{line}</Typography>
        ))}
      </Box>
      <Typography
        sx={{
          fontSize: '20px',
          fontWeight: '500',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
        }}
        onClick={() => setExpanded((prev) => !prev)}
      >
        <ArrowRightIcon
          fontSize="large"
          sx={{
            transform: `rotate(${expanded ? '90deg' : '0deg'})`,
            transition: '.3s',
          }}
        />{' '}
        {expanded ? 'Collapse Courses' : 'Extend Courses'}
      </Typography>
      <Collapse in={expanded}>
        {' '}
        {topic.challengeOrder.map((c) => (
          <MenuItem
            key={c[0]}
            onClick={() =>
              handleClick(
                `${topic.superBlock}/${topic.dashedName}/${c[1]
                  .toLowerCase()
                  .split(' ')
                  .join('-')}.md`,
              )
            }
          >
            {c[1]}
          </MenuItem>
        ))}
      </Collapse>
    </Box>
  );
};

export default LessonsWrapper;
