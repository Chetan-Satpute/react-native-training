import {FC, useEffect, useState} from 'react';

import './styles.css';

function HOC() {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount(count => count + 1);
  };

  return (
    <div>
      <h1>Counter Value: {count}</h1>
      {withCallback(DivComponent, incrementCounter)}
      {withCallback(ParagraphComponent, incrementCounter)}
    </div>
  );
}

function withCallback(Component: FC, callback: () => void) {
  useEffect(() => {
    const id = setInterval(callback, 1000);

    return () => {
      clearInterval(id);
    };
  }, []);

  return <Component />;
}

function DivComponent() {
  return (
    <div className="box">
      This is div element with increment counter callback.
    </div>
  );
}

function ParagraphComponent() {
  return (
    <p className="box">
      This is paragraph element with increment counter callback.
    </p>
  );
}

export default HOC;
