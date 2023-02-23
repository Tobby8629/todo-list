import React from 'react';

function Appli() {
  const text = 'This application lets us add to-dos, edit, and delete items. Log in to see the delete feature. It also persists to-dos in the browser\'s local storage for a subsequent visit.';
  return (
    <div className="appli">
      <h3>About the app</h3>
      <p>{text}</p>
    </div>
  );
}

export default Appli;
