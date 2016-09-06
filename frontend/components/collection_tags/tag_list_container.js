import { connect } from 'react-redux';
import TagList from './tag_list';
import collectionsSelector from '../../util/collection_selector';

const mapStateToProps = state => ({
  collections: state.collections.collections
});

export default connect(
  mapStateToProps
)(TagList);
