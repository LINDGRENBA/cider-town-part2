import React from 'react';
import Cider from './Cider';
import PropTypes from 'prop-types'; 

function CiderMenu(props) {  //properties are passed in from cidercontrol
  return (
    <React.Fragment> 
      { props.ciderMenu.map((cider) =>
        <Cider //we assign properties to the cider component here
          whenCiderClicked = { props.onCiderSelection } //onCidSel comes from prop of ciderMenu in CiderControl
          name = { cider.name }
          brewery = { cider.brewery }
          alcoholContent = { cider.alcoholContent }
          price = { cider.price }
          remainingPints = { cider.remainingPints }
          id = { cider.id }
          key = { cider.id } />
      )} 
    </React.Fragment>
  );
}

CiderMenu.propTypes = {
  ciderMenu: PropTypes.array,
  onCiderSelection: PropTypes.func
};

export default CiderMenu;
