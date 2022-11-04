import { useState } from 'react';
import { Typography } from '@mui/material';
import MoodTabs from './MoodTabs';

export default function MoodGallery() {
  const [value, setValue] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const handleTabChange = (e) => {
    const index = Number(e.target.getAttribute('index'));
    setValue(index);
    setCurrentPage(1);
  };

  return (
    <>
      <Typography component="h1" variant="h5">
        What are you in the mood for?
      </Typography>
      <MoodTabs
        value={value}
        handleTabChange={handleTabChange}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}
