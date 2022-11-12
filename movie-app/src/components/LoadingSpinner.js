import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

const LoadingSpinner = ({ isLoading }) => {
  return (
    <div>
      <ClipLoader
        color={'#ffffff'}
        loading={isLoading}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default LoadingSpinner;
