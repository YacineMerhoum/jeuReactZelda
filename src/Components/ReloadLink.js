import React from 'react';

const ReloadLink = ({ children }) => {
  const handleReload = (event) => {
    event.preventDefault();
    window.location.reload();
  };

  return (
    <a href="/" onClick={handleReload}>
      {children}
    </a>
  );
};

export default ReloadLink;
