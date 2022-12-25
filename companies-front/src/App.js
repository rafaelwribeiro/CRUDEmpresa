import { MantineProvider, AppShell, Navbar, Header, NavLink } from '@mantine/core';
import { IconHome2, IconBuilding } from '@tabler/icons';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Companies from './pages/Companies';
import Menu from './template/Menu';
import './App.css';

function App() {
  return (
    <MantineProvider theme={{ fontFamily: 'Open Sans' }} withGlobalStyles withNormalizeCSS>
      <AppShell
        padding="md"
        header={<Header height={100} p="xs"><h1>Gerenciador de empresas</h1></Header>}
        navbar={
          <Menu />
        }
        styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
        })}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/companies" element={<Companies />} />
        </Routes>
      </AppShell>
    </MantineProvider>
  );
}

export default App;
