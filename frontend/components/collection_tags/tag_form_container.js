import { connect } from 'react-redux';
import TagForm from './tag_form';
import collectionsSelector from '../../util/collection_selector';

const mapStateToProps = state => ({
  collections: collectionsSelector(state)
});

export default connect(
  mapStateToProps
)(TagForm);
