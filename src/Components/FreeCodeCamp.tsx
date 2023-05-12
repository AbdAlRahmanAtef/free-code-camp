import React, { useState } from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import TitleItem from './TitleItem';
import { TITLES } from '../data/titles';
import LessonItem from './LessonItem';
import LessonsWrapper from './LessonsWrapper';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const FreeCodeCamp = () => {
  const [currentTitle, setCurrentTitle] = useState();
  const [currentLesson, setCurrentLesson] = useState('');

  const handleTitleClick = (title) => {
    setCurrentTitle(title);
  };

  const handleCurrentLesson = (url: string) => {
    setCurrentLesson(url);
  };

  console.log(currentTitle);

  return (
    <Container sx={{ py: 6 }} maxWidth="md">
      {!currentTitle &&
        TITLES.map((title) => (
          <TitleItem
            url={title.url}
            label={title.label}
            icon={title.icon}
            key={title.url}
            handleClick={() => handleTitleClick(title)}
          />
        ))}

      {/* RENDER TITLE TOPICS */}
      {currentTitle && !currentLesson && (
        <Box>
          <Button
            sx={{
              textTransform: 'capitalize',
              fontWeight: '500',
              fontSize: '22px',
            }}
            startIcon={<KeyboardBackspaceIcon fontSize="large" />}
            onClick={() => setCurrentTitle(undefined)}
          >
            Back
          </Button>
          <Box textAlign="center" mb={3}>
            <Typography mb={3} fontWeight={700} fontSize="32px">
              {/* @ts-ignore */}
              {currentTitle.label}
            </Typography>
            {/* @ts-ignore */}
            <Typography mb={2}>{currentTitle.bigIcon}</Typography>
            <Box fontWeight={400} fontSize="18px" textAlign="start" mb={2}>
              {/* @ts-ignore */}
              {currentTitle.description.split('\n').map((line) => (
                <Typography mb={1}>{line}</Typography>
              ))}
            </Box>
            <h2
              style={{ marginTop: '50px', marginBottom: '40px' }}
              className="heading-1"
            >
              Courses
            </h2>
          </Box>
          {/* @ts-ignore */}
          {currentTitle.topics.map((topic) => (
            <Box key={topic.dashedName}>
              <LessonsWrapper topic={topic} handleClick={handleCurrentLesson} />
            </Box>
          ))}
        </Box>
      )}

      {currentLesson && (
        <LessonItem
          url={currentLesson}
          handleClick={() => setCurrentLesson('')}
        />
      )}
    </Container>
  );
};

export default FreeCodeCamp;
