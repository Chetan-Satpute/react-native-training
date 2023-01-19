import React from 'react';
import TableSection, { TableSectionType } from './TableSection';

export interface TableType {
  headers: string[];
  sections: TableSectionType[];
}

function Table(props: TableType) {
  const sections = props.sections.map((data) => (
    <TableSection title={data.title} rows={data.rows} />
  ));

  return (
    <table style={{ padding: '1rem' }}>
      <tr>
        <th>Name</th>
        <th>Price</th>
      </tr>

      {sections}
    </table>
  );
}

export default Table;
