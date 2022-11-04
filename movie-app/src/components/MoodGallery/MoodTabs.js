import { useState } from 'react';
import { Box, Tabs, Tab, Pagination } from '@mui/material';
import { movieMoods } from '../../data';
import MoodContent from './MoodContent';

function TabPanel({ children, value, index, ...other }) {
  return (
    <Box role="tabpanel" hidden={value !== index} {...other}>
      {value === index && <Box>{children}</Box>}
    </Box>
  );
}

export default function MoodTabs({ value, handleTabChange, currentPage, setCurrentPage }) {
  const [totalPages, setTotalPages] = useState(0);

  const handlePageChange = (e, newPage) => setCurrentPage(newPage);

  return (
    <>
      <Box>
        <Tabs value={value} onChange={handleTabChange}>
          {movieMoods.map((mood, idx) => (
            <Tab key={mood.name} label={mood.name} index={idx} />
          ))}
        </Tabs>
      </Box>

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
        color="secondary"
        sx={{ display: 'flex', placeContent: 'center' }}
      />
    </>
  );
}
