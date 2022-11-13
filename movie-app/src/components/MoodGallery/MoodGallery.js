import { useState } from 'react';
import { Typography, Pagination, Box, useTheme, useMediaQuery } from '@mui/material';
import { movieMoods } from '../../data';
import MoodTabs from './MoodTabs';
import MoodContent from './MoodContent';

export default function MoodGallery() {
  const [value, setValue] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const handleTabChange = (e) => {
    const index = Number(e.target.getAttribute('index'));
    setValue(index);
    setCurrentPage(1);
  };

  const handlePageChange = (e, newPage) => setCurrentPage(newPage);

  const theme = useTheme();
  const isMobileDown = useMediaQuery(theme.breakpoints.down('sm'));

  function TabPanel({ children, value, index, ...other }) {
    return (
      <Box role="tabpanel" hidden={value !== index} {...other}>
        {value === index && <Box>{children}</Box>}
      </Box>
    );
  }

  return (
    <Box>
      <Typography variant="h4" component="h2">
        What are you in the mood for?
      </Typography>

      <MoodTabs value={value} handleTabChange={handleTabChange} />

      {/* Mood Content */}
      {movieMoods.map((mood, idx) => {
        return (
          <TabPanel key={mood.name} value={value} index={idx} minHeight={375}>
            <MoodContent
              genre={mood.genre}
              setTotalPages={setTotalPages}
              currentPage={currentPage}
            />
          </TabPanel>
        );
      })}

      <Pagination
        count={totalPages}
        onChange={handlePageChange}
        page={currentPage}
        defaultPage={1}
        size={isMobileDown ? 'small' : 'medium'}
        color="secondary"
        sx={{ display: 'flex', placeContent: 'center' }}
      />
    </Box>
  );
}
