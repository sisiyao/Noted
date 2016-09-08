import React from 'react';
import Select from 'react-select';

class TagForm extends React.Component {
  constructor (props) {
    super(props);
    this.allCollections = this.allCollections.bind(this);
  }

  allCollections () {
    const vals = [];
    this.props.collections.map(collection => {
      vals.push({value: collection.id, label: collection.name});
    });
    return vals;
  }

  render () {
    return (
      <div className="tag-form">
        <Select
          name="form-field-name" value={this.props.collectionIds}
          options={this.allCollections()} multi={true}
          onChange={this.props.updateCheckbox} />
      </div>
    );
  }
}

export default TagForm;
