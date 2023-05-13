import { Box, Typography, Paper, Stack, Button } from '@mui/material';
import React from 'react';

const LOCALSTORAGE_KEY_COURSES = 'LOCALSTORAGE_KEY_COURSES';

const EnrolledCourses = ({
  topic,
  enrolledCourses,
  setEnrolledCourses,
  handleOpen,
}) => {
  const handleDelete = () => {
    const isFound = enrolledCourses?.find(
      (c) => c.dashedName === topic.dashedName,
    );
    if (isFound) {
      console.log(isFound);
      setEnrolledCourses(
        enrolledCourses.filter((c) => c.dashedName !== topic.dashedName),
      );
      localStorage.setItem(
        LOCALSTORAGE_KEY_COURSES,
        JSON.stringify(
          enrolledCourses.filter((c) => c.dashedName !== topic.dashedName),
        ),
      );
    }
  };

  return (
    <Box mb={3}>
      <Paper
        key={topic.name}
        sx={{
          padding: '16px',
          transition: '.3s',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, mb: 2 }}>
          {topic.name}
        </Typography>
        <Box
          sx={{
            height: '160px',
            overflow: 'hidden',
            mb: 3,
          }}
        >
          {topic?.description > 300
            ? topic?.description
                ?.slice(0, 300)
                ?.split('\n')
                .map((line, index) => (
                  <Typography
                    key={line}
                    mb={1}
                    style={{
                      fontSize: '.875rem',
                      fontWeight: 400,
                      lineHeight: '1.5',
                    }}
                  >
                    {index === topic?.description?.split('\n').length - 1
                      ? `${line}...`
                      : line}
                  </Typography>
                ))
            : topic?.description
                ?.slice(0, 300)
                ?.split('\n')
                .map((line, index) => (
                  <Typography
                    key={line}
                    mb={1}
                    style={{
                      fontSize: '.875rem',
                      fontWeight: 400,
                      lineHeight: '1.5',
                    }}
                  >
                    {index === topic?.description?.split('\n').length - 1
                      ? `${line}...`
                      : line}
                  </Typography>
                ))}
        </Box>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          gap={2}
        >
          <Button
            sx={{ textTransform: 'capitalize' }}
            variant="contained"
            color="warning"
            startIcon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z"
                />
              </svg>
            }
            onClick={handleDelete}
          >
            Delete
          </Button>
          <Button
            sx={{ textTransform: 'capitalize' }}
            variant="contained"
            startIcon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 256 256"
              >
                <path
                  fill="#fff"
                  d="M251 123.13c-.37-.81-9.13-20.26-28.48-39.61C196.63 57.67 164 44 128 44S59.37 57.67 33.51 83.52C14.16 102.87 5.4 122.32 5 123.13a12.08 12.08 0 0 0 0 9.75c.37.82 9.13 20.26 28.49 39.61C59.37 198.34 92 212 128 212s68.63-13.66 94.48-39.51c19.36-19.35 28.12-38.79 28.49-39.61a12.08 12.08 0 0 0 .03-9.75Zm-46.06 33C183.47 177.27 157.59 188 128 188s-55.47-10.73-76.91-31.88A130.36 130.36 0 0 1 29.52 128a130.45 130.45 0 0 1 21.57-28.11C72.54 78.73 98.41 68 128 68s55.46 10.73 76.91 31.89A130.36 130.36 0 0 1 226.48 128a130.45 130.45 0 0 1-21.57 28.12ZM128 84a44 44 0 1 0 44 44a44.05 44.05 0 0 0-44-44Zm0 64a20 20 0 1 1 20-20a20 20 0 0 1-20 20Z"
                ></path>
              </svg>
            }
            onClick={() => handleOpen(topic)}
          >
            Open
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
};

export default EnrolledCourses;
