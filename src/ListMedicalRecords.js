import React from 'react';
import './ListMedicalRecords.css';

function ListMedicalRecords(props) {
  return (
    <div className="">
      <div className="row">
        <div className="col">
          <h2>List of medical records</h2>
        </div>
        <div className="col text-right">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="check-minors" />
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
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
      </table>
      </div>
    </div>
  );
}

export default ListMedicalRecords;
