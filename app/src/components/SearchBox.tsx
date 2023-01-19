import React, { useEffect, useState } from 'react';

interface Props {
  onQueryChange: (query: string) => void;
}

function SearchBox(props: Props) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    props.onQueryChange(query);
  }, [query]);

  return (
    <div style={{ padding: '1rem' }}>
      <input
        type="text"
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />

      <div>
        <input type="checkbox" /> <span>Only show products in stock.</span>
      </div>
    </div>
  );
}

export default SearchBox;
