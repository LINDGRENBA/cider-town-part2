import React from 'react';
import AddCiderForm from './AddCiderForm';
import CiderDetail from './CiderDetail'; //not using this yet
import CiderMenu from './CiderMenu';
import ReusableForm from './ReusableForm';
// import AddCiderForm from './AddCiderForm'; may not need this here

class CiderControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainCiderList: [],
      selectedCider: null
    };    
  }

  handleClick = () => {
    if(this.state.selectedCider != null) {   //if a cider has been selected
      this.setState ({
        formVisibleOnPage: false, //don't show the reusable form
        selectedCider: null
      }) 
    } else {
      this.setState( prevState => ({ //otherwise, switch formVisibleOnPage to false
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleAddingNewCiderToMenu = (newCider) => {
    const newMainCiderList = this.state.mainCiderList.concat(newCider);
    this.setState({ mainCiderList: newMainCiderList, //create a new array and add new cider onto it
                    formVisibleOnPage: false }); //hide the form
  }

  handleChangingSelectedCider = (id) => {
    const selectedCider = this.state.mainCiderList.filter( cider => cider.id === id )[0]; //filter gives us an array, so we use [0]
    this.setState({ selectedCider: selectedCider });
  }

  // handleChangingNumberOfPints = (ciderToUpdate) => {
  //   select the cider to update
  //   target its remainingPints property
  //   update it
  // }

  render () {
    let currentlyVisibleState = null;
    let buttonText = null;

    if(this.state.selectedCider != null) { //if a specific cider has been selected
      currentlyVisibleState = <CiderDetail cider = { this.state.selectedCider } />
      buttonText = "Return to Cider Menu";
    } else if (this.state.formVisibleOnPage) { //if someone clicked the add a cider button
      currentlyVisibleState = <AddCiderForm onNewCiderTapped = { this.handleAddingNewCiderToMenu } />
      buttonText = "Return to Cider Menu";
    } else { //if no cider selected and not viewing form to add a cider
      currentlyVisibleState = <CiderMenu ciderMenu = { this.state.mainCiderList } onCiderSelection = { this.handleChangingSelectedCider } />
      buttonText = "Add Cider";
    }

    return (
      <React.Fragment>
        { currentlyVisibleState }
        <button onClick = { this.handleClick }>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default CiderControl;