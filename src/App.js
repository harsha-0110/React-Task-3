import React from 'react';
import ColorPicker from './ColorPicker';

const App = () => {
  const colors = ['red', 'blue', 'green', 'yellow', 'pink', 'black'];

  return (
    <div>
      <ColorPicker colors={colors} />
    </div>
  );
};

export default App;
