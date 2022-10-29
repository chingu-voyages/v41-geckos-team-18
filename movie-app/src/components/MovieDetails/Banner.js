import { BASE_IMG_URL } from '../../data';

export default function Banner({ bannerUrl, title }) {
  return (
    <img
      src={`${BASE_IMG_URL}original${bannerUrl}`}
      alt={`${title} Banner`}
      style={{
        width: '100%',
        height: '25rem',
        objectFit: 'cover',
        objectPosition: 'center',
      }}
    />
  );
}
