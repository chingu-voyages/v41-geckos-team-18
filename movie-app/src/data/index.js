// prettier-ignore
const movieGenres = { action: 28, adventure: 12, animation: 16, comedy: 35, crime: 80, documentary: 99, drama: 18, family: 10751, fantasy: 14, history: 36, horror: 27, music: 10402, mystery: 9648, romance: 10749, scienceFiction: 878, tvMovie: 10770, thriller: 53, war: 10752, western: 37 };

// prettier-ignore
const getGenreMoodPairings = () => {
  const { action, adventure, animation, comedy, crime, documentary, drama, family, fantasy, history, horror, music, mystery, romance, scienceFiction, thriller, war } = movieGenres;
  return {
    funny: `${comedy},${adventure}`,
    romantic: `${romance}`,
    dark: `${crime},${thriller}`,
    tense: `${thriller},${mystery},${horror}`,
    excited: `${action},${adventure}`,
    blissful: `${fantasy},${animation},${family}`,
    historic: `${war},${history}`,
    emotional: `${drama},${romance},${mystery}`,
    curious: `${documentary}`,
    thoughtProvoking: `${mystery},${scienceFiction},${adventure}`,
    musical: `${music},${comedy},${romance}`,
  };
};

const movieMoods = getGenreMoodPairings();
export default movieMoods;
