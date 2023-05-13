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
    <Container sx={{ py: 6 }} style={{maxWidth: '1200px'}}>
      {!currentLesson && TITLES.map(
        Title(
          handleTitleClick,
          currentTitle,
          setCurrentTitle,
          handleCurrentLesson,
        ),
      )}

      {/* RENDER TITLE TOPICS */}
      {/* {currentTitle && !currentLesson && (
        
      )} */}

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

function Title(
  handleTitleClick: (title: any) => void,
  currentTitle: undefined,
  setCurrentTitle: React.Dispatch<(prevState: undefined) => undefined>,
  handleCurrentLesson: (url: string) => void,
) {
  return (title) => {
    return (
      <>
        <TitleItem
          url={title.url}
          label={title.label}
          icon={title.icon}
          key={title.url}
          handleClick={() => handleTitleClick(title)}
        />
        <Box>
          {currentTitle && (
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
          )}
          <Box textAlign="center" mb={3}></Box>
          {/* @ts-ignore */}
          {<Topics title={title} handleCurrentLesson={handleCurrentLesson} />}
        </Box>
      </>
    );
  };
}

function Topics({ title, handleCurrentLesson }) {
  return (
    <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
      {title.topics.map((topic) => (
        <LessonsWrapper
          key={topic.dashedName}
          topic={topic}
          handleClick={handleCurrentLesson}
        />
      ))}
    </div>
  );
}
