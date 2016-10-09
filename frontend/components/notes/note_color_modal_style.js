const modalStyle = {
  overlay : {
    position        : 'fixed',
    top             : 0,
    left            : 0,
    right           : 0,
    bottom          : 0,
    backgroundColor : 'rgba(30, 30, 30, 0.55)',
    zIndex          : 3
  },
  content : {
    position        : 'fixed',
    margin          : 'auto',
    top             : '7%',
    border          : '1px solid',
    borderColor     : 'var(--light-grey)',
    padding         : '20px 20px 20px 20px',
    minWidth        : '260px',
    maxWidth        : '260px',
    minHeight       : '220px',
    maxHeight       : '220px',
    zIndex          : 3,
    boxSizing       : 'border-box',
    fontSize        : '14px',
    borderRadius    : 0
  }
};

export default modalStyle;
