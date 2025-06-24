import React, { useEffect, useState } from 'react';
import ForgeReconciler, { Text, Lozenge } from '@forge/react';
import { invoke, view } from '@forge/bridge';

const App = () => {
  const [data, setData] = useState(null);
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    const getTheme = async () => {
      const context = await view.getContext();
      setTheme(context.theme.colorMode);
    };
    getTheme();
  }, []);

  useEffect(() => {
    invoke('getText', { example: 'my-invoke-variable' }).then(setData);
  }, []);

  return (
    <>
      <Text>Hello world!</Text>
      <Text>My name is Asmi Sharma</Text>
      <Text>
        Current theme: <Lozenge>{theme ? theme.toUpperCase() : 'Loading...'}</Lozenge>
      </Text>
      <Text>
        Current theme: <Lozenge>{theme ? theme.toUpperCase() : 'Loading...'}</Lozenge>
      </Text>
    </>
  );
};

ForgeReconciler.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
