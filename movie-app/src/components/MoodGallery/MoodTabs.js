import { Box, Tabs, Tab } from '@mui/material';
import { movieMoods } from '../../data';
import MoodContent from './MoodContent';

function TabPanel({ children, value, index, ...other }) {
  return (
    <Box role="tabpanel" hidden={value !== index} {...other}>
      {value === index && <Box>{children}</Box>}
    </Box>
  );
}

export default function MoodTabs({ value, handleChange }) {
  return (
    <>
      <Box
        sx={
          {
            // borderBottom: 1,
            // borderColor: 'divider',
            // overflowX: 'scroll',
          }
        }
      >
        <Tabs value={value} onChange={handleChange} sx={{ overflowX: 'scroll' }}>
          {movieMoods.map((mood, idx) => (
            <Tab key={mood.name} label={mood.name} index={idx} />
          ))}
        </Tabs>
      </Box>

      {movieMoods.map((mood, idx) => {
        return (
          <TabPanel key={mood.name} value={value} index={idx}>
            <MoodContent genre={mood.genre} />
          </TabPanel>
        );
      })}
    </>
  );
}
