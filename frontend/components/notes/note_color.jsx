import React from 'react';
import Select from 'react-select';

const NoteColor = ({color, updateColor}) => {
  const colors = [{value: 'white', label: 'white', clearableValue: false},
    {value: 'yellow', label: 'yellow', clearableValue: false},
    {value: 'green', label: 'green', clearableValue: false},
    {value: 'blue', label: 'blue', clearableValue: false},
    {value: 'red', label: 'red', clearableValue: false}];

  return (
    <div className="note-color-container">
      <Select
        name="note-color" value={color}
        options={colors} clearable={false}
        onChange={updateColor} />
    </div>
  );
};

export default NoteColor;
