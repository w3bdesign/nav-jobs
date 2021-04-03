import React from 'react';

import JobListings from './components/JobListings/JobListings';

import './App.scss';

const App: React.FC = () => (
  <div id="App" className="App">
    <JobListings />
  </div>
);

export default App;
