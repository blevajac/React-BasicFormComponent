import React, {Component} from 'react';

//components
import CheckboxOrRadioGroup from '../components/CheckboxOrRadioGroup';
import SingleInput from '../components/SingleInput';
import TextArea from '../components/TextArea';
import Select from '../components/Select';

class FormComponent extends Component {
  constructor(props) {
    super(props);

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);

    this.handleFullNameChange = this.handleFullNameChange.bind(this);
    this.handleAgeRangeSelect = this.handleAgeRangeSelect.bind(this);

  }

  componentDidMount() {
    fetch('./fake_db.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          ownerName: data.ownerName,
          petSelections: data.petSelections,
          selectedPets: data.selectedPets,
          ageOptions: data.ageOptions,
          ownerAgeRangeSelection: data.ownerAgeRangeSelection,
          siblingOptions: data.siblingOptions,
          siblingSelection: data.siblingSelection,
          currentBunnyCount: data.currentBunnyCount,
          description: data.description
        });
    });
  }

  handleFormSubmit() {
    // submit logic goes here
  }

  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      ownerName: '',
      selectedPets: [],
      ownerAgeRangeSelection: '',
      siblingSelection: [],
      currentBunnyCount: 0,
      description: ''
    });
  }
//-----------------------------------------------
  //component callbacks to state changes
  handleFullNameChange(e) {
    this.setState({ ownerName: e.target.value });
  }
  handleAgeRangeSelect(e) {
    this.setState({ ownerAgeRangeSelection: e.target.value });
  }

  handleBunnySelection(e) {
    const newSelection = e.target.value;
    let newSelectionArray;

    if(this.state.selectedPets.indexOf(newSelection) > -1) {
      newSelectionArray = this.state.selectedPets.filter(s => s !== newSelection)
    } else {
      newSelectionArray = [...this.state.selectedPets, newSelection];
    }

      this.setState({ selectedPets: newSelectionArray });
  }
//-----------------------------------------------
  render() {
    return(
      <form className="container" onSubmit={this.handleFormSubmit}>
        <h5>Buny Adoption Form</h5>
        <SingleInput /> {/* Full name text input */}
        <Select /> {/* Owner age range select */}
        <CheckboxOrRadioGroup /> {/* Pet type checkboxes */}
        <CheckboxOrRadioGroup /> {/* Will you adopt siblings? radios */}
        <SingleInput /> {/* Number of current pets number input */}
        <TextArea /> {/* Descriptions of current pets textarea */}
        <input
          type="submit"
          className="btn btn-primary float-right"
          value="Submit"/>
        <button
          className="btn btn-link float-left"
          onClick={this.handleClearForm}>Clear form</button>
      </form>
    );
  }
}

export default FormComponent;
