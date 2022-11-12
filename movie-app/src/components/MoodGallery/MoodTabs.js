import { Box, Tabs, Tab } from '@mui/material';
import { movieMoods } from '../../data';

export default function MoodTabs({ value, handleTabChange }) {
  return (
    <>
      <Box>
        <Tabs value={value} onChange={handleTabChange} variant="scrollable" scrollButtons={false}>
          {movieMoods.map((mood, idx) => (
            <Tab key={mood.name} label={mood.name} index={idx} />
          ))}
        </Tabs>
      </Box>
    </>
  );
}
