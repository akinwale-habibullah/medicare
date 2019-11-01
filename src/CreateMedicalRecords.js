import React from 'react';
import './CreateMedicalRecords.css';

class CreateMedicalRecords extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      gender: '',
      age: 1,
      lwd: false,
      city: '',
      country: ''
    }

    this.updateState = this.updateState.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  updateState(e) {
    const val = e.target.value;
    const elementName = e.target.name;
    this.setState((state, props) => ({
      [elementName]: `${val}`
    }))
  }

  handleFormSubmit(e) {
    e.preventDefault();
    this.props.addMedicalRecord({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      gender: this.state.gender,
      age: this.state.age,
      lwd: this.state.lwd,
      city: this.state.city,
      country: this.state.country
    });
    this.setState({
      firstName: '',
      lastName: '',
      gender: '',
      age: 1,
      lwd: false,
      city: '',
      country: ''
    })
  }

  

  render() {
    return (
      <div className="">
        <h1>New Medical Record</h1>
        <form onSubmit={this.handleFormSubmit}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <input type="text" className="form-control" id="first-name" name="firstName" placeholder="First Name" onChange={this.updateState} value={this.state.firstName} required/>
            </div>
            <div className="form-group col-md-6">
              <input type="text" className="form-control" id="last-name" name="lastName" placeholder="Last Name" onChange={this.updateState} value={this.state.lastName} required/>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-6">
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="gender" id="gender-male" value="male" onClick={this.updateState} required/>
                <label className="form-check-label" htmlFor="gender-male">Male</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="gender" id="gender-female" value="female" onClick={this.updateState}/>
                <label className="form-check-label" htmlFor="gender-female">Female</label>
              </div>
            </div>
            <div className="form-group col-md-6">
              <input type="number" className="form-control" id="age" placeholder="Age" name="age" value={this.state.age} onChange={this.updateState} required/>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-6">
            <select className="custom-select" name="city" onChange={this.updateState} required>
              <option value={null} selected>Open this select menu</option>
              <option value="lagos">Lagos</option>
              <option value="Benue">Benue</option>
              <option value="Adamawa">Adamawa</option>
              <option value="Ogun">Ogun</option>
              <option value="Borno">Borno</option>
              <option value="Adamawa">Adamawa</option>
              <option value="Kaduna">Kaduna</option>
              <option value="Katsina">Katsina</option>
            </select>
            </div>
            <div className="form-group col-md-6">
            <select className="custom-select" name="country" onChange={this.updateState} required>
              <option value={null} selected>Open this select menu</option>
              <option value="Nigeria">Nigeria</option>
              <option value="Cameroun">Cameroun</option>
              <option value="Senegal">Senegal</option>
              <option value="Benin">Benin</option>
              <option value="Chad">Chad</option>
              <option value="Niger">Niger</option>
              <option value="Cote D'Ivoire">Cote D'Ivoire</option>
              <option value="Gambia">Gambia</option>
            </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-6">
              <label className="form-check-label">Living with Diabetes?</label>
            </div>
            <div className="form-group col-md-6">
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="liv-with-diab-yes" value="yes" onChange={this.updateState} required/>
                <label className="form-check-label" htmlFor="liv-with-diab-yes">Yes</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="liv-with-diab-no" value="no" onChange={this.updateState} />
                <label className="form-check-label" htmlFor="liv-with-diab-no">No</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="liv-with-diab-unknwn" value="unknown" onChange={this.updateState}/>
                <label className="form-check-label" htmlFor="liv-with-diab-unknwn">Unknown</label>
              </div>
            </div>
            
          </div>

          <div className="form-row">
            <div className="form-group col-md-6"></div>
            <div className="form-group col-md-6 text-right">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateMedicalRecords;
