import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit = { props.formSubmissionHandler }>
        <input 
          type = 'text'
          name = 'name'
          placeholder = 'Cider Name'
          required />
        <input 
          type = 'text'
          name = 'brewery'
          placeholder = 'Brewery Name'
          required />
        <input 
          type = 'text'
          name = 'alcoholContent'
          placeholder = 'ABV%'
          required />
        <input 
          type = 'number'
          name = 'price'
          placeholder = 'Cost per Pint'
          required />
        <input 
          type = 'number'
          name = 'remainingPints'
          placeholder = '# of Pints Left'
          required />
        <button type = 'submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;