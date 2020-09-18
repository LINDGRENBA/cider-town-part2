import React from 'react';
import AddCiderForm from './AddCiderForm';
import CiderDetail from './CiderDetail';
import CiderMenu from './CiderMenu';
import { connect } from 'react-redux'; 
import PropTypes from 'prop-types';

class CiderControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedCider: null
    };    
  }

  handleClick = () => {
    if(this.state.selectedCider != null) { 
      this.setState ({
        selectedCider: null
      }); 
    } else {
      const { dispatch } = this.props;
      const action = {
        type: 'TOGGLE_FORM'
      }
      dispatch(action);
    }
  }

  handleAddingNewCiderToMenu = (newCider) => {
    const { dispatch } = this.props; 
    const { id, name, brewery, alcoholContent, price, remainingPints } = newCider;
    const action = {
      type: 'ADD_CIDER',
      name: name,
      brewery: brewery,
      alcoholContent: alcoholContent,
      price: price,
      remainingPints: remainingPints,
      id: id
    }
    dispatch(action); 
    const secondAction = {
      type: 'TOGGLE_FORM',
    }
    dispatch(secondAction);
  }

  handleChangingSelectedCider = (id) => {
    const selectedCider = this.props.mainCiderList[id];  
    this.setState({selectedCider: selectedCider});
  }

  handleChangingNumberOfRemainginPints = (id) => {
    const selectedKeg = this.props.mainCiderList[id];
    const newNumberOfPints = selectedKeg.remainingPints--;
    this.setState({selectedKeg: newNumberOfPints});
  }

  render () {
    let currentlyVisibleState = null;
    let buttonText = null;

    if(this.state.selectedCider != null) { 
      currentlyVisibleState = <CiderDetail cider={ this.state.selectedCider } /> //state to props?
      buttonText = "Return to Cider Menu";
    } else if (this.props.formVisibleOnPage) { 
      currentlyVisibleState = <AddCiderForm onNewCiderTapped={ this.handleAddingNewCiderToMenu } />
      buttonText = "Return to Cider Menu";
    } else { 
      currentlyVisibleState = <CiderMenu ciderMenu={ this.props.mainCiderList } onCiderSelection = { this.handleChangingSelectedCider } onCiderPour = { this.handleChangingNumberOfRemainginPints } /> 
      buttonText = "Add New Keg";
    }

    return (
      <React.Fragment>
        { currentlyVisibleState }
        <button onClick = { this.handleClick }>{buttonText}</button>
      </React.Fragment>
    );
  }
}

CiderControl.propTypes = {
  mainCiderList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    mainCiderList: state.mainCiderList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

CiderControl = connect(mapStateToProps)(CiderControl); 

export default CiderControl;