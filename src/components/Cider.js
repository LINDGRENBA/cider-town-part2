import React from 'react';
import PropTypes from 'prop-types';

function Cider(props) {

  function handlePourButtonClick(event) {
    event.preventDefault();
    props.onCiderPour({ remainingPints: event.target.remainingPints.value -- });
    console.log("from cider");
    // name: event.target.name.value, brewery: event.target.brewery.value, alcoholContent: event.target.alcoholContent.value, price: event.target.price.value, remainingPints: 124, id: v4()
  }

  return (
    <React.Fragment>
      <h2>{props.name} <button onClick = {() => props.whenCiderPoured(props.id)}>Pour</button></h2> {/*figure out how to use this button... whenPourButtonClicked prob similar to above whenCiderClicked...but should this be in */}
      <div onClick = {() => props.whenCiderClicked(props.id)} > 
      {/* the above 'whenCiderClicked' comes from CiderMenu and has a reference to onCiderSelection in the CiderControl componenet */}
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
  whenCiderClicked: PropTypes.func,
  whenCiderPoured: PropTypes.func
};

export default Cider;