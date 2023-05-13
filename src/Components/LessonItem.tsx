import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Stack,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { marked } from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const LessonItem = ({
  url,
  handleClick,
  completedLessons,
  setCompletedLessons,
}) => {
  const [html, setHtml] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const LOCALSTORAGE_KEY = 'LOCALSTORAGE_COMPLETED_COURSES';

  useEffect(() => {
    const readFile = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://raw.githubusercontent.com/freeCodeCamp/freeCodeCamp/main/curriculum/challenges/english/${url}`,
        );

        let text = await response.text();

        const regex = /---(.*?)---/gs;
        const foundMatches = text.match(regex) || [];
        const extractedStates = {};

        foundMatches.forEach((match) => {
          const stateRegex =
            /(id|title|challengeType|videoUrl|forumTopicId|dashedName):\s*(.*)/g;
          let stateMatch;

          while ((stateMatch = stateRegex.exec(match)) !== null) {
            const [, key, value] = stateMatch;
            extractedStates[key] = value;
          }
        });
        // Remove the matching text from the `text`
        foundMatches.forEach((match) => {
          text = text.replace(match, '');
        });

        const regex2 = /--(.*?)--/gs;
        text = text.replace(regex2, '$1');

        marked.setOptions({
          highlight: function (code, lang) {
            const language = hljs.getLanguage(lang) ? lang : 'plaintext';

            return hljs.highlight(code, { language }).value;
          },
        });
        setHtml(marked.parse(text));
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    readFile();
  }, [url]);

  const handleCompleteLesson = () => {
    const isFound = completedLessons?.find((l) => l === url);
    if (isFound) {
      setCompletedLessons(completedLessons.filter((l) => l !== url));
      localStorage.setItem(
        LOCALSTORAGE_KEY,
        JSON.stringify(completedLessons.filter((l) => l !== url)),
      );
    } else {
      setCompletedLessons((prev) => [...prev, url]);
      localStorage.setItem(
        LOCALSTORAGE_KEY,
        JSON.stringify([...completedLessons, url]),
      );
    }
  };

  useEffect(() => {
    const isFound = completedLessons?.findIndex((l) => l === url);

    setIsCompleted(isFound !== -1 ? true : false);
  }, [completedLessons, setCompletedLessons]);

  return (
    <div className="App">
      <style>
        {`
          .App {
            text-align: center;
            background-color: #fff;
            border-radius: 8px;
            padding: 16px 0;
            min-height: calc(100vh - 130px);
            position: relative;
          }
      
          h3 {
            font-size: 34px;
            margin-top: 0;
            margin-bottom: 30px;
            text-transform: capitalize;
          }

          .main pre {
            background-color: #282c34;
            padding: 10px 16px;
            border-radius: 8px;
          }
          
          code{
            color: #c1a877;
            background-color: #282c34;
            padding: 2px 8px;
            border-radius: 4px;
            white-space: pre-wrap;
            word-wrap: break-word;
          }

          .main pre code {
            background-color: transparent;
            padding: 0;
            border-radius: 0;
          }

          .main {
            margin: 20px auto;
            background-color: #fff;
            text-align: left;
          }

          .main h1, .main h2, .main h3 {
            margin-top: 0;
          }

          .main h1 strong{
            font-size: 18px !important;
          }

          .main p {
            line-height: 1.5;
          }

          .main a {
            color: #007bff;
            text-decoration: none;
          }

          .main a:hover {
            text-decoration: underline;
          }

          h2 {
            margin-top: 30px !important;
            text-transform: capitalize !important;
          }
          
          h1 {
            text-transform: capitalize !important;
            margin-top: 30px !important;
          }

          @media (max-width: 767px) {
            h3 {
              font-size: 22px;
              margin-top: 20px;
            }
            
            h1 {
              margin-top: 20px;
              font-size: 18px;
            }
            
            h2 {
              font-size: 18px;
            }
          }
        `}
      </style>
      <Container sx={{ textAlign: 'start' }}>
        {' '}
        <Stack direction="row" justifyContent="space-between">
          {' '}
          <Button
            sx={{
              textTransform: 'capitalize',
              fontWeight: 'bold',
              fontSize: '22px',
              color: '#000',
              mb: 2,
            }}
            startIcon={<KeyboardBackspaceIcon fontSize="large" />}
            onClick={handleClick}
          >
            Back
          </Button>
          <FormControlLabel
            control={
              <Checkbox checked={isCompleted} onChange={handleCompleteLesson} />
            }
            label="Set As Completed"
          />
        </Stack>
        {isLoading ? (
          <Typography
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              fontSize: '34px',
              fontWeight: 'bold',
            }}
          >
            Loading...
          </Typography>
        ) : (
          <>
            <h3>{url.split('/')[2].split('.')[0].split('-').join(' ')}</h3>
            <div
              className="main"
              dangerouslySetInnerHTML={{ __html: html }}
            ></div>
          </>
        )}
      </Container>
    </div>
  );
};

export default LessonItem;
