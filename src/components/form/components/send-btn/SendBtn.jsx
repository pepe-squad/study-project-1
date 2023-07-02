import React from 'react';
import { createUseStyles } from 'react-jss';

const getBackgroundAppearance = ({ appearance }) => {
  switch (appearance) {
    case 'primary': {
      return '#090C9B';
    }
    case 'secondary': {
      return '#B4C5E4';
    }
    default: {
      return '#090C9B';
    }
  }
};

const getTextColorAppearance = ({ appearance }) => {
  switch (appearance) {
    case 'primary': {
      return 'white';
    }
    case 'secondary': {
      return 'black';
    }
    default: {
      return 'white';
    }
  }
};

const useStyles = createUseStyles({
  sendBtn: {
    minWidth: '100px',
    minHeight: '40px',
    backgroundColor: getBackgroundAppearance,
    fontSize: 20,
    color: getTextColorAppearance,
    borderRadius: '3rem',
    border: 'none',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);',

    '&:hover': {
      backgroundColor: 'red',
      cursor: 'pointer',
    },
  },
});

const SendButton = ({ appearance = 'primary' }) => {
  const classes = useStyles({ appearance });

  return (
    <button type="button" className={classes.sendBtn}>
      Send
    </button>
  );
};

export default SendButton;
