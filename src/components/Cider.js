import React from 'react';
import PropTypes from 'prop-types';

function Cider(props) {

  return (
    <React.Fragment>
      <h2>{props.name} 
        <button 
          onClick = {() => props.whenCiderPoured(props.id)}
          disabled={props.remainingPints === 0 ? true : false}
        > Pour 
        </button>
      </h2> 
      <div onClick = {() => props.whenCiderClicked(props.id)} > 
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