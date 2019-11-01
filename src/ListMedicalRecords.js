import React from 'react';
import './ListMedicalRecords.css';

class ListMedicalRecords extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      filter: false
    }

    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter(e){
    const checked = e.target.checked;
    this.setState({
      filter: checked
    });
  }

  render(){
    let medicalRecordRows 
    if(this.state.filter){
      medicalRecordRows = this.props.medicalRecords.filter(item => item.age <= 18).map((item, index) => {
        return <tr id={index}>
          <th scope="row">{`${item.firstName}, ${ item.lastName}`}</th>
          <td>{item.gender}</td>
          <td>{item.age}</td>
          <td>{`${item.country} (${item.city})`}</td>
        </tr>
      });
    } else {
      medicalRecordRows = this.props.medicalRecords.map((item, index) => {
        return <tr id={index}>
          <th scope="row">{`${item.firstName}, ${ item.lastName}`}</th>
          <td>{item.gender}</td>
          <td>{item.age}</td>
          <td>{`${item.country} (${item.city})`}</td>
        </tr>
      });
    }

    return (
      <div className="">
        <div className="row">
          <div className="col">
            <h2>List of medical records</h2>
          </div>
          <div className="col text-right">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value={this.state.filter} id="check-minors" onChange={this.handleFilter}/>
              <label className="form-check-label" htmlFor="defaultCheck1">
                Only minors
              </label>
            </div>
          </div>
        </div>
        
        <div className="row">
          <table className="table">
            <thead className="thead-light">
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Gender</th>
                <th scope="col">Age</th>
                <th scope="col">Country (City)</th>
              </tr>
            </thead>
            
            <tbody>
              {medicalRecordRows}
            </tbody>
        </table>
        </div>
      </div>
    );
  }
}

export default ListMedicalRecords;
