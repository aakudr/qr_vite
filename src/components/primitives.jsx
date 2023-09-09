import {useTextField, useButton, useCheckbox} from 'react-aria';
import {useToggleState} from 'react-stately';
import React from 'react';
import PropTypes from 'prop-types';

function TextField(props) {
    let { label } = props;
    let ref = React.useRef(null);
    let { labelProps, inputProps, descriptionProps, errorMessageProps } =
        useTextField(props, ref);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
            <label {...labelProps}>{label}</label>
            <input {...inputProps} ref={ref} />
            {props.description && (
                <div {...descriptionProps} style={{ fontSize: 12 }}>
                    {props.description}
                </div>
            )}
            {props.errorMessage && (
                <div {...errorMessageProps} style={{ color: 'red', fontSize: 12 }}>
                    {props.errorMessage}
                </div>
            )}
        </div>
    );
}

TextField.propTypes = {
    label: PropTypes.string.isRequired,
    description: PropTypes.string,
    errorMessage: PropTypes.string
};

function Button(props) {
  let ref = React.useRef();
  let { buttonProps } = useButton(props, ref);
  let { children } = props;

  return (
    <button {...buttonProps} ref={ref}>
      {children}
    </button>
  );
}

Button.propTypes = {
    children: PropTypes.node.isRequired
};

function Checkbox(props) {
  let { children } = props;
  let state = useToggleState(props);
  let ref = React.useRef(null);
  let { inputProps } = useCheckbox(props, state, ref);

  return (
    <label style={{ display: 'block' }}>
      <input {...inputProps} ref={ref} />
      {children}
    </label>
  );
}

Checkbox.propTypes = {
    children: PropTypes.node.isRequired
};

<Checkbox>Unsubscribe</Checkbox>

export { TextField, Button, Checkbox };