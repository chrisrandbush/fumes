import React, { useState, useEffect } from "react";
import "./style.css";
import api from "../../utils/api";

function Table() {
  const [tableState, setTableState] = useState([]);

  useEffect(() => {
    api.pullCart().then((res) => {
      setTableState(res.data);
    });
  }, []);

  return (
    <section className="tableSect">
      <h1>Service Status</h1>
      <div className="tbl-header">
        <table cellPadding={0} cellSpacing={0} border={0}>
          <thead>
            <tr>
              <th>Service</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
        </table>
      </div>
      <div className="tbl-content">
        <table cellPadding={0} cellSpacing={0} border={0}>
          <tbody>
            {tableState.map((allTable) => {
              return (
                <React.Fragment>
                  <tr>
                    <td>{allTable.name}</td>
                    <td>$ {allTable.value}</td>
                    <td>Incomplete</td>
                  </tr>
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Table;
