import { connect } from 'react-redux';
import CollectionForm from './collection_form';
import { createCollection, updateCollection }
  from "../../actions/collection_actions";

const mapStateToProps = (state, ownProps) => ({
  formType: ownProps.type
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createCollection: collection => dispatch(createCollection(collection)),
    updateCollection: collection => dispatch(updateCollection(collection))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CollectionForm);
