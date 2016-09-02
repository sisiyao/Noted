import { connect } from 'react-redux';
import CollectionForm from './collection_form';
import { createCollection, updateCollection }
  from "../../actions/collection_actions";

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.type;
  const processForm = (formType === 'edit') ? updateCollection : createCollection;

  return ({
    processForm: collection => dispatch(processForm(collection))
  });
};

export default connect({
  mapDispatchToProps
})(CollectionForm);
