import { connect } from 'react-redux';
import CollectionForm from './collection_form';
import { createCollection, updateCollection, clearCollectionFormErrors }
  from "../../actions/collection_actions";

const mapStateToProps = state => ({
  errors: state.collections.errors
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const formAction = ownProps.type === 'edit' ? updateCollection : createCollection;

  return {
    formAction: collection => dispatch(formAction(collection)),
    clearErrors: () => dispatch(clearCollectionFormErrors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CollectionForm);
