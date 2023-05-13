import { Box, Button, Paper, Stack, Typography } from '@mui/material';

const LOCALSTORAGE_KEY_COURSES = 'LOCALSTORAGE_KEY_COURSES';

const CoursesWrapper = ({
  topic,
  handleClick,
  enrolledCourses,
  setEnrolledCourses,
}) => {
  const handleEnrollCourse = (course) => {
    console.log({ course });

    const isFound = enrolledCourses?.find(
      (c) => c.dashedName === course.dashedName,
    );
    if (!isFound) {
      setEnrolledCourses((prev) => [...prev, course]);
      localStorage.setItem(
        LOCALSTORAGE_KEY_COURSES,
        JSON.stringify([...enrolledCourses, course]),
      );
    }
  };

  return (
    <Box mb={3}>
      {' '}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'start',
          gap: 1,
          padding: '16px 16px',
          mb: 2,
        }}
      >
        {topic.icon}
        <Typography
          sx={{ fontSize: { xs: '24px', md: '34px' }, fontWeight: '700' }}
        >
          {topic.label}
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'grid',
          gap: 3,
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        }}
      >
        {topic.topics.map((topic) => (
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
            <Box>
              <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, mb: 2 }}>
                {topic.name}
              </Typography>
              <Box
                sx={{
                  height: '180px',
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
                startIcon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 2048 2048"
                  >
                    <path
                      fill="#fff"
                      d="M1848 896q42 0 78 15t64 42t42 63t16 78q0 39-15 76t-43 65l-717 719l-377 94l94-377l717-718q28-28 65-42t76-15zm51 249q21-21 21-51q0-31-20-50t-52-20q-14 0-27 4t-23 15l-692 694l-34 135l135-34l692-693zM640 896H512V768h128v128zm896 0H768V768h768v128zM512 1152h128v128H512v-128zm128-640H512V384h128v128zm896 0H768V384h768v128zM384 1664h443l-32 128H256V0h1536v743q-67 10-128 44V128H384v1536zm384-512h514l-128 128H768v-128z"
                    ></path>
                  </svg>
                }
                onClick={() => handleEnrollCourse(topic)}
              >
                Enroll
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
                onClick={() => handleClick(topic)}
              >
                Open
              </Button>
            </Stack>
          </Paper>
        ))}
      </Box>
    </Box>
  );
};

export default CoursesWrapper;
