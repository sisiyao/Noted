const authModalStyle = {
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
    top             : '7%',
    border          : '1px solid #fff',
    padding         : '30px 30px 10px 30px',
    'minWidth'      : '400px',
    'maxWidth'      : '400px',
    'minHeight'     : '400px',
    'maxHeight'     : '400px',
    'zIndex'        : 3,
    'boxSizing'     : 'border-box',
    'fontSize'     : '14px',
    'borderRadius'  : 0
  }
};

export default authModalStyle;
