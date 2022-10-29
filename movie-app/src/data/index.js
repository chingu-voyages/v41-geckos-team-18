// prettier-ignore
const movieGenres = { action: 28, adventure: 12, animation: 16, comedy: 35, crime: 80, documentary: 99, drama: 18, family: 10751, fantasy: 14, history: 36, horror: 27, music: 10402, mystery: 9648, romance: 10749, scienceFiction: 878, tvMovie: 10770, thriller: 53, war: 10752, western: 37 };

// prettier-ignore
const getGenreMoodPairings = () => {
  const { action, adventure, animation, comedy, crime, documentary, drama, family, fantasy, history, horror, music, mystery, romance, scienceFiction, thriller, war } = movieGenres;
  return {
    funny: `${comedy},${adventure}`,
    romantic: `${romance}`,
    dark: `${crime},${thriller},${mystery}`,
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

export const movieMoods = getGenreMoodPairings();

export const isValid = (obj) => obj && Object.keys(obj).length > 0;

export const BASE_IMG_URL = 'https://image.tmdb.org/t/p/';

export const getGenres = (obj) => {
  const result = obj.map((el) => el.name);
  return result.join(', ');
};

export const getKeywords = (obj) => {
  const result = obj.map((el) => el.name);
  return result.join(', ');
};

export const getTopFive = (arr) =>
  arr && arr.map((actor) => (actor.order <= 4 ? actor : null)).filter((obj) => obj);

export const getTrailers = (arr) =>
  arr &&
  arr.reduce((list, el) => {
    if (el.type === 'Trailer' && el.site === 'YouTube') {
      list.push(el);
    }
    return list;
  }, []);
