import React from 'react';

export interface TableRowType {
  name: string;
  price: number;
}

function TableRow(props: TableRowType) {
  return (
    <tr>
      <td>{props.name}</td>
      <td>${props.price}</td>
    </tr>
  );
}

export default TableRow;
