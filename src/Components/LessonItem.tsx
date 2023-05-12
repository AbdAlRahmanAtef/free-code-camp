import { Box, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { marked } from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const LessonItem = ({ url, handleClick }) => {
  const [html, setHtml] = useState('');

  useEffect(() => {
    async function readFile() {
      try {
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
      }
    }

    readFile();
  }, [url]);

  return (
    <div className="App">
      <style>
        {`
          .App {
            text-align: center;
            background-color: #fff;
            padding: 16px;
            border-radius: 8px;
          }

          h3 {
            font-size: 30px;
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
          }

          .main pre code {
            background-color: transparent;
            padding: 0;
            border-radius: 0;
          }

          .main {
            margin: 20px auto;
            background-color: #fff;
            padding: 20px;
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
        `}
      </style>
      <Box textAlign="start">
        {' '}
        <Button
          sx={{
            textTransform: 'capitalize',
            fontWeight: 'bold',
            fontSize: '22px',
          }}
          startIcon={<KeyboardBackspaceIcon fontSize="large" />}
          onClick={handleClick}
        >
          Back
        </Button>
      </Box>
      {/* @ts-ignore */}
      <h3>{url.split('/')[2].split('.')[0].split('-').join(' ')}</h3>
      <div className="main" dangerouslySetInnerHTML={{ __html: html }}></div>
    </div>
  );
};

export default LessonItem;
