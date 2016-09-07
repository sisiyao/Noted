const modalStyle = {
  overlay : {
    position        : 'fixed',
    top             : 0,
    left            : 0,
    right           : 0,
    bottom          : 0,
    backgroundColor : 'rgba(30, 30, 30, 0.55)',
    'zIndex'       : 2
  },
  content : {
    position        : 'fixed',
    margin          : 'auto',
    top             : '10%',
    border          : '1px solid #fff',
    padding         : '36px 30px 30px 30px',
    'minWidth'      : '400px',
    'maxWidth'      : '400px',
    'minHeight'     : '163px',
    'maxHeight'     : '163px',
    'zIndex'        : 3,
    'boxSizing'     : 'border-box',
    'fontSize'     : '14px',
    'borderRadius'  : 0
  }
};

export default modalStyle;
