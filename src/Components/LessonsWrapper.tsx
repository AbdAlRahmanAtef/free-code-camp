import {
  Box,
  Button,
  Collapse,
  MenuItem,
  Radio,
  Stack,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const LessonsWrapper = ({
  topic,
  handleClick,
  handleBack,
  completedLessons,
}) => {
  const [expanded, setExpanded] = useState(true);
  // '02-javascript-algorithms-and-data-structures/basic-javascript/assigning-the-value-of-one-variable-to-another.md';

  const PROGRESS = completedLessons.filter(
    (l) => l.split('/')[1] === topic.dashedName,
  );

  return (
    <Box
      sx={{
        backgroundColor: '#fff',
        p: '20px',
        borderRadius: '8px',
        mb: 4,
        position: 'relative',
      }}
    >
      <Button
        sx={{
          textTransform: 'capitalize',
          fontWeight: 'bold',
          fontSize: '22px',
          mb: 2,
          color: '#000',
        }}
        startIcon={<KeyboardBackspaceIcon fontSize="large" />}
        onClick={handleBack}
      >
        Back
      </Button>
      <Typography
        sx={{
          fontSize: '34px',
          fontWeight: 700,
          mb: '30px',
          textAlign: 'center',
        }}
      >
        {topic.name}
      </Typography>
      <Box sx={{ borderBottom: '2px solid #eee', pb: 2, mb: 2 }}>
        {' '}
        {topic?.description?.split('\n').map((line) => (
          <Typography
            mb={1}
            style={{
              fontSize: '16px',
              color: '#444',
            }}
            key={line}
          >
            {line}
          </Typography>
        ))}
      </Box>
      <Box width="100%" sx={{ borderRadius: '4px', mb: 2 }}>
        <Stack direction="row" justifyContent="space-between" mb={1}>
          {' '}
          <Typography>
            {Math.ceil((PROGRESS.length / topic.challengeOrder.length) * 100) +
              '%'}
          </Typography>
          <Typography>
            {PROGRESS.length} / {topic.challengeOrder.length}
          </Typography>
        </Stack>
        <Box
          width="100%"
          sx={{ backgroundColor: '#ddd', borderRadius: '4px', mb: 2 }}
        >
          <Typography
            sx={{
              height: '8px',
              borderRadius: '4px',
              width:
                (PROGRESS.length / topic.challengeOrder.length) * 100 + '%',
              backgroundColor: '#1c77d2',
            }}
          />
        </Box>
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
            sx={{
              fontSize: '16px',
              fontWeight: 500,
              overflow: 'hidden',
            }}
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
            <Radio
              checked={completedLessons.find(
                (l) =>
                  l ===
                  `${topic.superBlock}/${topic.dashedName}/${c[1]
                    .toLowerCase()
                    .split(' ')
                    .join('-')}.md`,
              )}
            />
            {c[1].length > 50 ? `${c[1].slice(0, 50)}...` : c[1]}
          </MenuItem>
        ))}
      </Collapse>
    </Box>
  );
};

export default LessonsWrapper;
