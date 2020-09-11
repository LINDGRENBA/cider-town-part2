import React from 'react';
import PropTypes from 'prop-types';

function Cider(props) {
  return (
    <React.Fragment>
      <div onClick = {() => props.whenCiderClicked(props.id)} > 
      {/* the above 'whenCiderClicked' comes from CiderMenu and has a reference to onCiderSelection in the CiderControl componenet */}
        <h2>{props.name} <button>Pour</button></h2> {/*figure out how to use this button... whenPourButtonClicked prob similar to above whenCiderClicked...*/}
        <p>{props.brewery}</p>
        <p>{props.alcoholContent}</p>
        <p>{props.price}%</p>
        <p>{props.remainingPints}</p>
      </div>
    </React.Fragment>
  );
}

Cider.propTypes = {
  name: PropTypes.string.isRequired,
  brewery: PropTypes.string.isRequired,
  alcoholContent: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  remainingPints: PropTypes.number.isRequired,
  id: PropTypes.string,
  whenCiderClicked: PropTypes.func
};

export default Cider;