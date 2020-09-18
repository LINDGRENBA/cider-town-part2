import React from 'react';
import AddCiderForm from './AddCiderForm';
import CiderDetail from './CiderDetail';
import CiderMenu from './CiderMenu';
import { connect } from 'react-redux'; 

class CiderControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      // mainCiderList: [], redux will now handle our ciderList, not react
      selectedCider: null
    };    
  }

  handleClick = () => {
    if(this.state.selectedCider != null) { 
      this.setState ({
        formVisibleOnPage: false,
        selectedCider: null
      }) 
    } else {
      this.setState( prevState => ({ 
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  // handleAddingNewCiderToMenu = (newCider) => {
  //   const newMainCiderList = this.state.mainCiderList.concat(newCider);
  //   this.setState({ mainCiderList: newMainCiderList, 
  //                   formVisibleOnPage: false }); 
  // }

  handleAddingNewCiderToMenu = (newCider) => {
    const { dispatch } = this.props; // deconstruct dispatch from props
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
    dispatch(action); //dispatch our add which automatically updates the store
    this.setState({formVisibleOnPage: false}); //still have to handle local state
  }

  handleChangingSelectedCider = (id) => { 
    const selectedCider = this.state.mainCiderList.filter( cider => cider.id === id )[0]; 
    this.setState({ selectedCider: selectedCider }); 
  }

  handleChangingNumberOfRemainginPints = (id) => {
    const selectedKeg = this.state.mainCiderList.filter( cider => cider.id === id )[0];
    const newNumberOfPints = selectedKeg.remainingPints--;
    this.setState({ selectedKeg: newNumberOfPints });
  }

  render () {
    let currentlyVisibleState = null;
    let buttonText = null;

    if(this.state.selectedCider != null) { 
      currentlyVisibleState = <CiderDetail cider = { this.state.selectedCider } />
      buttonText = "Return to Cider Menu";
    } else if (this.state.formVisibleOnPage) { 
      currentlyVisibleState = <AddCiderForm onNewCiderTapped = { this.handleAddingNewCiderToMenu } />
      buttonText = "Return to Cider Menu";
    } else { 
      currentlyVisibleState = <CiderMenu ciderMenu = { this.state.mainCiderList } onCiderSelection = { this.handleChangingSelectedCider } onCiderPour = { this.handleChangingNumberOfRemainginPints } /> 
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

CiderControl = connect()(CiderControl); // redifines our cidercontrol as a new component, returns component itself with powerful tools at our disposal such as dispatch() and mapStateToProps()

export default CiderControl;