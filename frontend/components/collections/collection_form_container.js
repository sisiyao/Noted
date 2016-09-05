import { connect } from 'react-redux';
import CollectionForm from './collection_form';
import { createCollection, updateCollection, fetchSingleCollection }
  from "../../actions/collection_actions";

const mapStateToProps = state => ({
  collections: state.collections.collections,
  errors: state.collections.errors,
  formStatus: state.collections.formStatus
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname.slice(1);
  const processForm = formType === 'new-collection' ?
    createCollection : updateCollection;

  return {
    fetchSingleCollection: collectionId =>
      dispatch(fetchSingleCollection(collectionId)),
    processForm: collection => dispatch(processForm(collection)),
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CollectionForm);
