import React from 'react';
import ReusableForm from './ReusableForm';
import PropTypes from 'prop-types';

function EditCiderForm(props) {
  const { cider } = props;

  function handleEditCiderFormSubmission(event) {
    event.preventDefault();
    props.onEditCider({ name: event.target.name.value, brewery: event.target.brewery.value, alcoholContent: event.target.alcoholContent.value, price: event.target.price.value, remainingPints: cider.remainingPints, id: cider.id });
  }
  
  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditCiderFormSubmission}
        buttonText="Update" />
    </React.Fragment>
  );
}

EditCiderForm.propTypes = {
  onEditCider: PropTypes.func
};

export default EditCiderForm;