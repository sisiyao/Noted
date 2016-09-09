import React from 'react';

class TagForm extends React.Component {
  constructor (props) {
    super(props);
  }

  checkboxes () {
    return this.props.collections.map(collection => {
      return (
        <div className="checkbox" key={`${collection.id}${collection.name}`}>
          <label className="checkbox-label">
            <input type="checkbox" value="collection.name"
              checked={this.props.collectionIds.includes(collection.id)}
              onChange={this.props.updateCheckbox(collection.id)}
              name="note[collection_ids][]" />
            {collection.name}
          </label>
        </div>
      );
    });
  }

  render () {
    return (
      <div className="tag-form" onClick={this.props.showDropdown}>
        <div className="tag-form-label">
          <span>Edit collections</span>
          <i className="fa fa-caret-down" aria-hidden="true" />
        </div>
        <div className={`tag-form-checkboxes-${this.props.dropdownStatus}`}>
          {this.checkboxes()}</div>
      </div>
    );
  }
}

export default TagForm;
