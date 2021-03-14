import React, { useEffect } from 'react';

const App: React.FC = () => {
  useEffect(() => {
    fetch(
      'https://arbeidsplassen.nav.no/public-feed/api/v1/ads?size=10&page=1',
      {
        method: 'GET',
        headers: {
          Authorization:
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwdWJsaWMudG9rZW4udjFAbmF2Lm5vIiwiYXVkIjoiZmVlZC1hcGktdjEiLCJpc3MiOiJuYXYubm8iLCJpYXQiOjE1NTc0NzM0MjJ9.jNGlLUF9HxoHo5JrQNMkweLj_91bgk97ZebLdfx3_UQ',
        },
      },
    ).then((res) => res.json().then((data) => {
      console.log(data);
    }));
  }, []);

  return <div className="app">Test</div>;
};

export default App;
