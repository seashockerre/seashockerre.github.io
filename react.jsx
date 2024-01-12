import React from 'react';

const styles = {
  Text: {
    color: '#030303',
    fontSize: '18px',
    fontFamily: 'Poppins',
    lineHeight: '22px',
    textAlign: 'center',
    cursor: 'pointer', // Add this to indicate the text is clickable
  },
};

const defaultProps = {
  text: 'Project',
  site: 'https://seashockerre.github.io/Project/project.html',
  onClick: () => {}, // Default empty click handler
};

const Text = (props) => {
  const handleClick = () => {
    // Call the provided onClick function or use the default empty function
    props.onClick ? props.onClick() : defaultProps.onClick();

    // Navigate to the specified site
    window.location.href = props.site ?? defaultProps.site;
  };

  return (
    <div style={styles.Text} onClick={handleClick}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;
