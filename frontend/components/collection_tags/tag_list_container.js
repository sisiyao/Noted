import { connect } from 'react-redux';
import TagList from './tag_list';

const mapStateToProps = state => ({
  collections: state.collections.collections
});

export default connect(
  mapStateToProps
)(TagList);
