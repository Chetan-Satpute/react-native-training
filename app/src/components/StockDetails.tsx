import React, { useState } from 'react';
import SearchBox from './SearchBox';
import Table, { TableType } from './Table/Table';

interface Props {
  data: TableType;
}

function StockDetails(props: Props) {
  const [filteredSections, setFilteredSections] = useState(props.data.sections);

  const filterDataByQuery = (query: string) => {
    query = query.toLowerCase();

    const data = props.data.sections.map((section) => {
      const rows = section.rows.filter((row) =>
        row.name.toLowerCase().includes(query)
      );

      return {
        title: section.title,
        rows: rows,
      };
    });

    setFilteredSections(data);
  };

  return (
    <div>
      <SearchBox onQueryChange={filterDataByQuery} />
      <Table headers={props.data.headers} sections={filteredSections} />
    </div>
  );
}

export default StockDetails;
