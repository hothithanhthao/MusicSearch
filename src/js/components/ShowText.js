import React, { useState } from 'react';

// This component expects 2 props:
//   text - the text to display
//   maxLength - how many characters to show before "read more"
const ShowText = ({ text, maxLength }) => {
  // Create a piece of state, and initialize it to `true`
  // `hidden` will hold the current value of the state,
  // and `setHidden` will let us change it
  const [hidden, setHidden] = useState(true);

  // If the text is short enough, don't bother with the
  // buttons
  if (text <= maxLength) {
    return <span>{text}</span>;
  }

  // Render the text (shortened or full-length) followed by
  // a link to expand/collapse it.
  // When a link is clicked, update the value of `hidden`,
  // which will trigger a re-render
  return (
    <span>
      {hidden ? `${text.substr(0, maxLength).trim()} ...` : text}
      {hidden ? (
        <a onClick={() => setHidden(false)}> Read More</a>
      ) : (
        <a onClick={() => setHidden(true)}> Read Less</a>
      )}
    </span>
  );
}

export default ShowText;