import React from "react";

const Table = ({ data, commands }) => {
  const handleCommandClick = (command, rowData) => {
    command.command(rowData);
  };

  const renderHeaderRow = () => {
    if (!data.length) return null;

    const headerCells = Object.keys(data[0]).map((attribute) => (
      <th key={attribute}>{attribute}</th>
    ));

    return (
      <tr>
        {headerCells}
        {commands.length > 0 && <th>Actions</th>}
      </tr>
    );
  };

  const renderTableRows = () => {
    return data.map((rowData, rowIndex) => (
      <tr key={rowIndex}>
        {Object.values(rowData).map((value, cellIndex) => (
          <td key={cellIndex}>{value}</td>
        ))}
        {commands.length > 0 && (
          <td>
            {commands.map((command, actionIndex) => (
              <button
                key={actionIndex}
                className={command.style}
                onClick={() => handleCommandClick(command, rowData)}
              >
                {command.key}
              </button>
            ))}
          </td>
        )}
      </tr>
    ));
  };

  return (
    <table className="table table-bordered table-hover">
      <thead className="thead-dark">{renderHeaderRow()}</thead>
      <tbody>{renderTableRows()}</tbody>
    </table>
  );
};

export default Table;
