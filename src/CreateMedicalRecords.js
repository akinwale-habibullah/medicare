import React from 'react';
import './CreateMedicalRecords.css';

function CreateMedicalRecords(props) {
  return (
    <div className="">
      <h1>New Medical Record</h1>
      <form>
        <div className="form-row">
          <div className="form-group col-md-6">
            <input type="text" className="form-control" id="first-name" placeholder="First Name" />
          </div>
          <div className="form-group col-md-6">
            <input type="text" className="form-control" id="last-name" placeholder="Last Name" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-6">
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="gender" id="gender-male" value="male" />
              <label className="form-check-label" htmlFor="gender-male">Male</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="gender" id="gender-female" value="female" />
              <label className="form-check-label" htmlFor="gender-female">Female</label>
            </div>
          </div>
          <div className="form-group col-md-6">
            <input type="number" className="form-control" id="age" placeholder="Age" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-6">
          <select className="custom-select" name="city">
            <option value={null} selected>Open this select menu</option>
            <option value="1">Lagos</option>
            <option value="2">Benue</option>
            <option value="3">Adamawa</option>
            <option value="4">Ogun</option>
            <option value="5">Borno</option>
            <option value="6">Adamawa</option>
            <option value="7">Kaduna</option>
            <option value="8">Katsina</option>
          </select>
          </div>
          <div className="form-group col-md-6">
          <select className="custom-select" name="country">
            <option value={null} selected>Open this select menu</option>
            <option value="1">Nigeria</option>
            <option value="2">Cameroun</option>
            <option value="3">Senegal</option>
            <option value="4">Benin</option>
            <option value="5">Chad</option>
            <option value="6">Niger</option>
            <option value="7">Cote D'Ivoire</option>
            <option value="8">Gambia</option>
          </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-6">
            <label className="form-check-label">Living with Diabetes?</label>
          </div>
          <div className="form-group col-md-6">
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="liv-with-diab-yes" value="yes" />
              <label className="form-check-label" htmlFor="liv-with-diab-yes">Yes</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="liv-with-diab-no" value="no" />
              <label className="form-check-label" htmlFor="liv-with-diab-no">No</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="liv-with-diab-unknwn" value="unknown" />
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

export default CreateMedicalRecords;
