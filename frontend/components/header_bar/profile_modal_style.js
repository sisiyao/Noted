const profileModalStyle = {
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
    padding         : '20px 30px 15px 30px',
    'minWidth'      : '300px',
    'maxWidth'      : '300px',
    'minHeight'     : '163px',
    'maxHeight'     : '163px',
    'zIndex'        : 3,
    'boxSizing'     : 'border-box',
    'fontSize'     : '14px',
    'borderRadius'  : 0
  }
};

export default profileModalStyle;
