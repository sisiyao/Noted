import { connect } from 'react-redux';
import CollectionsIndex from './collections_index.jsx';
import { fetchAllCollections, destroyCollection }
  from '../../actions/collection_actions';
import collectionsSelector from '../../util/collection_selector';

const mapStateToProps = state => ({
  collections: collectionsSelector(state),
  errors: state.collections.errors
});

const mapDispatchToProps = dispatch => ({
  fetchAllCollections: userId => dispatch(fetchAllCollections()),
  destroyCollection: collectionId => dispatch(destroyCollection(collectionId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CollectionsIndex);
