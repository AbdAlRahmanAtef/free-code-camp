import React, { useEffect, useState } from 'react';
import { Box, Collapse, Container, Typography } from '@mui/material';
import { TITLES } from '../data/titles';
import LessonItem from './LessonItem';
import LessonsWrapper from './LessonsWrapper';
import CoursesWrapper from './CourseWrapper';
import EnrolledCourses from './EnrolledCourses';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const LOCALSTORAGE_KEY_Lessons = 'LOCALSTORAGE_COMPLETED_COURSES';
const LOCALSTORAGE_KEY_COURSES = 'LOCALSTORAGE_KEY_COURSES';

const FreeCodeCamp = () => {
  const [currentCourse, setCurrentCourse] = useState();
  const [currentLesson, setCurrentLesson] = useState('');
  const [expanded, setExpanded] = useState(false);
  const [enrolledCourses, setEnrolledCourses] = useState(
    JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY_COURSES)),
  );
  const [completedLessons, setCompletedLessons] = useState(
    JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY_Lessons)),
  );

  useEffect(() => {
    localStorage.setItem(
      LOCALSTORAGE_KEY_Lessons,
      JSON.stringify(completedLessons),
    );

    const storedLessons =
      JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY_Lessons)) || [];
    const storedCourses =
      JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY_COURSES)) || [];

    setEnrolledCourses(storedCourses);
    setCompletedLessons(storedLessons);
  }, [localStorage]);

  return (
    <Box sx={{ py: { xs: 3, md: 6 }, background: { xs: '#fff', md: '#eee' } }}>
      {' '}
      <Container maxWidth="sm">
        {enrolledCourses?.length > 0 && !currentCourse && (
          <Box>
            <Typography
              sx={{
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                fontSize: { xs: '24px', md: '34px' },
                fontWeight: '700',
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
              Enrolled Courses <small>({enrolledCourses.length})</small>
            </Typography>
            <Collapse in={expanded}>
              <Box
                sx={{
                  display: 'grid',
                  gap: 3,
                  gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                }}
              >
                {enrolledCourses?.map((course) => (
                  <EnrolledCourses
                    handleOpen={setCurrentCourse}
                    topic={course}
                    enrolledCourses={enrolledCourses}
                    setEnrolledCourses={setEnrolledCourses}
                  />
                ))}
              </Box>
            </Collapse>
          </Box>
        )}

        {!currentLesson &&
          !currentCourse &&
          TITLES.map((topic) => (
            <CoursesWrapper
              key={topic.url}
              topic={topic}
              enrolledCourses={enrolledCourses}
              setEnrolledCourses={setEnrolledCourses}
              handleClick={setCurrentCourse}
            />
          ))}

        {currentCourse && !currentLesson && (
          <LessonsWrapper
            completedLessons={completedLessons}
            topic={currentCourse}
            handleClick={setCurrentLesson}
            handleBack={() => setCurrentCourse(undefined)}
          />
        )}

        {currentLesson && (
          <LessonItem
            completedLessons={completedLessons}
            setCompletedLessons={setCompletedLessons}
            url={currentLesson}
            handleClick={() => setCurrentLesson('')}
          />
        )}
      </Container>
    </Box>
  );
};

export default FreeCodeCamp;
