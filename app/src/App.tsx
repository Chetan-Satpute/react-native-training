import React from 'react';
import StockDetails from './components/StockDetails';

const data = {
  headers: ['Name', 'Price'],
  sections: [
    {
      title: 'Sporting Goods',
      rows: [
        {
          name: 'Football',
          price: 49.99,
        },
        {
          name: 'Baseball',
          price: 9.99,
        },
        {
          name: 'Basketball',
          price: 29.99,
        },
      ],
    },
    {
      title: 'Electronics',
      rows: [
        {
          name: 'iPod Touch',
          price: 99.99,
        },
        {
          name: 'iPhone 5',
          price: 399.99,
        },
        {
          name: 'Nexus 7',
          price: 199.99,
        },
      ],
    },
  ],
};

function App() {
  return <StockDetails data={data} />;
}

export default App;
