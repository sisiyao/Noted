import { connect } from 'react-redux';
import CollectionForm from './collection_form';
import { createCollection, updateCollection }
  from "../../actions/collection_actions";

const mapStateToProps = state => ({
  errors: state.collections.errors
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const formAction = ownProps.type === 'edit' ? updateCollection : createCollection;

  return {
    formAction: collection => dispatch(formAction(collection))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CollectionForm);
