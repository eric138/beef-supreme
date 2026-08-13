import { useState, useEffect } from 'react';
import Header from './components/Header.tsx';
import Stack from '@mui/material/Stack';
import PokeSearch from './components/PokeSearch.tsx';
import PokeHome from './components/PokeHome.tsx';

const App = () => {
  const [currentView, setCurrentView] = useState<string>('POKE_HOME');
  const [viewComponent, setViewComponent] = useState<React.ReactElement | null>(null);

  // if currentView is changed, log the new value to the console
  useEffect(() => {
    switch (currentView) {
      case 'POKE_SEARCH':
        setViewComponent(<PokeSearch />);
        break;
      case 'POKE_HOME':
        setViewComponent(<PokeHome />);
        break;
      default:
        setViewComponent(null);
    }
  }, [currentView]);

  return (
    <Stack direction="column">
      <Header setView={setCurrentView}></Header>
      {viewComponent}
    </Stack>
  )
}

export default App;
