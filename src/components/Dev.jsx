import React from 'react';

function Dev() {
  const text = `tobby samuels founded ibaslogic.com to experiment with new web features and write actionable guides.
          Follow Ibas on Twitter @ibaslogic to learn modern web development.`;
  return (
    <div className="dev">
      <h3>About the developer</h3>
      <p>{text}</p>
    </div>
  );
}

export default Dev;
