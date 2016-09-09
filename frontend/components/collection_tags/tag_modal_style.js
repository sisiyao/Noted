const modalStyle = {
  overlay : {
    position        : 'fixed',
    top             : 0,
    left            : 0,
    right           : 0,
    bottom          : 0,
    backgroundColor : 'rgba(30, 30, 30, 0.55)',
    zIndex          : 2
  },
  content : {
    position        : 'fixed',
    margin          : 'auto',
    top             : '10%',
    border          : '1px solid',
    borderColor     : 'var(--light-grey)',
    padding         : '20px 20px 20px 20px',
    minWidth        : '280px',
    maxWidth        : '280px',
    minHeight       : '300px',
    maxHeight       : '300px',
    zIndex          : 3,
    boxSizing       : 'border-box',
    fontSize        : '14px',
    borderRadius    : 0
  }
};

export default modalStyle;
