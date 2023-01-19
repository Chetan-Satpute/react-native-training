import React from 'react';
import TableRow from './TableRow';

export interface TableSectionType {
  title: string;
  rows: { name: string; price: number }[];
}

function TableSection(props: TableSectionType) {
  const rows = props.rows.map((data) => (
    <TableRow name={data.name} price={data.price} />
  ));

  return (
    <>
      <tr>
        <span style={{ fontWeight: 'bold' }}>{props.title}</span>
      </tr>

      {rows}
    </>
  );
}

export default TableSection;
