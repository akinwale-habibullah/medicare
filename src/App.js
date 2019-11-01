import React from 'react';
import 'popper.js';
import 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import CreateMedicalRecords from './CreateMedicalRecords';
import ListMedicalRecords from './ListMedicalRecords';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      medicalRecords : [],
      medicalRecord: {
        firstName: '',
        lastName: '',
        gender: '',
        age: 1,
        lwd: false,
      }
    }

    this.addMedicalRecord = this.addMedicalRecord.bind(this);
  }

  addMedicalRecord(medRecord){
    this.setState((state, props) => ({
      medicalRecords: [...state.medicalRecords, medRecord]
    }));
  }
  render(){
    return (
      <div className="container">
        <CreateMedicalRecords addMedicalRecord={this.addMedicalRecord}/>
  
        <hr />
  
        <ListMedicalRecords medicalRecords={this.state.medicalRecords}/>
  
      </div>
    );
  }
}

export default App;
