import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit = { props.formSubmissionHandler }>
        <input 
          type = 'text'
          name = 'name'
          placeholder = 'Cider Name'/>
        <input 
          type = 'text'
          name = 'brewery'
          placeholder = 'Brewery Name'/>
        <input 
          type = 'text'
          name = 'alcoholContent'
          placeholder = 'ABV%'/>
        <input 
          type = 'number'
          name = 'price'
          placeholder = 'Cost per Pint'/>
        <input 
          type = 'number'
          name = 'remainingPints'
          placeholder = 'How many pints are remaining?'/>
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
