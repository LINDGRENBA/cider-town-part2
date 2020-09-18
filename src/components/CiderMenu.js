import React from 'react';
import Cider from './Cider';
import PropTypes from 'prop-types'; 

function CiderMenu(props) {  
  return (
    <React.Fragment> 
      {Object.values(props.ciderMenu).map((cider) => {
        return <Cider
          whenCiderClicked = { props.onCiderSelection }
          whenCiderPoured = { props.onCiderPour }
          name = { cider.name }
          brewery = { cider.brewery }
          alcoholContent = { cider.alcoholContent }
          price = { cider.price }
          remainingPints = { cider.remainingPints }
          id = { cider.id }
          key = { cider.id } />
      })} 
    </React.Fragment>
  );
}

CiderMenu.propTypes = {
  ciderMenu: PropTypes.object,
  onCiderSelection: PropTypes.func,
  onCiderPour: PropTypes.func
};

export default CiderMenu;
