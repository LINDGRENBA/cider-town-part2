import React from 'react';
import ReusableForm from './ReusableForm';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function AddCiderForm(props) {

  function handleAddCiderFormSubmission(event) {
    event.preventDefault();
    props.onNewCiderTapped({ name: event.target.name.value, brewery: event.target.brewery.value, alcoholContent: event.target.alcoholContent.value, price: event.target.price.value, remainingPints: 124, id: v4() });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler = { handleAddCiderFormSubmission } //in ticket ex this was handleNewTicketFormSub
        buttonText = "Add to Menu" />
    </React.Fragment>
  );
}

AddCiderForm.propTypes = {
  onNewCiderTapped: PropTypes.func
};

export default AddCiderForm;