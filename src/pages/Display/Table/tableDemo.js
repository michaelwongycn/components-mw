import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "../../components/Display/Table/table";

const TableDemo = () => {
  const [employees, setEmployees] = useState([
    { id: 1, name: "John Doe", position: "Developer" },
    { id: 2, name: "Jane Smith", position: "Designer" },
    { id: 3, name: "Sam Johnson", position: "Manager" },
  ]);

  const handleDelete = (rowData) => {
    setEmployees(employees.filter((employee) => employee.id !== rowData.id));
  };

  const commands = [
    {
      key: "Delete",
      command: handleDelete,
      style: "btn btn-danger btn-sm",
    },
  ];

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Employee Table</h3>
        </div>
        <div className="card-body">
          <Table data={employees} commands={commands} />
        </div>
      </div>
    </div>
  );
};

export default TableDemo;
