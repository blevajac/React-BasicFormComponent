import React from 'react';

//no logic or internal state for the input so it is a pure functional component
//pure functional components are attached to a const.
const SingleInput = (props) => (
  <div className="form-group">
    <lable className="form-lable">{props.title}</lable>
    <input
      className="form-input"
      name={props.name}
      type={props.inputType}
      value={props.content}
      onChange={props.controlFunc}
      placeholder={props.placeholder} />
  </div>
);

SingleInput.propTypes = {
  inputType: React.PropTypes.oneOf(['text', 'number']).isRequired,
  title: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  controlFunc: React.PropTypes.func.isRequired,
  content: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number,
  ]).isRequired,
  placeholder: React.PropTypes.string,
};

export default SingleInput;
