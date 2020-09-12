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
        <p><em>Brewery: </em>{props.brewery}</p>
        <p><em>ABV: </em>{props.alcoholContent}%</p>
        <p><em>Price: </em>${props.price}.00</p>
        <p><em>Left in the keg: </em>{props.remainingPints}</p>
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