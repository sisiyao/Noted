import { connect } from 'react-redux';
import Search from './search';

const mapStateToProps = state => ({
  atRoute: state.search.atRoute
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
