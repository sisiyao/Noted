import { connect } from 'react-redux';
import Sidebar from './sidebar.jsx';

const mapStateToProps = state => ({
  sidebar: state.sidebar
});

export default connect(
  mapStateToProps
)(Sidebar);
