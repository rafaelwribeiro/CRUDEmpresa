import { useState } from 'react';
import { IconHome2, IconBuilding  } from '@tabler/icons';
import { Navbar, NavLink } from '@mantine/core';
import { Link } from 'react-router-dom';

export default function Menu(){
    const data = [
        { icon: IconHome2, label: 'Inicio', to: "/" },
        { icon: IconBuilding, label: 'Empresas', to: "/companies" },
      ];

    const [active, setActive] = useState(0);

  const items = data.map((item, index) => (
    <NavLink
      key={item.label}
      active={index === active}
      label={<Link  to={item.to}>{item.label}</Link>}
      icon={<item.icon size={16} stroke={1.5} />}
      onClick={() => setActive(index)}
    />
  ));

  return <Navbar  width={{ base: 200 }}  p="xs">{items}</Navbar>;
}

/*
<Navbar  width={{ base: 200 }}  p="xs">
              <Navbar.Section>
                <NavLink
                  label={<Link  to="/">Inicio</Link>}
                  icon={<IconHome2 size={16} stroke={1.5}
                  component="a" href="/home" target="_blank"
                />} />
              </Navbar.Section>
        
              <Navbar.Section>
                <NavLink
                  label={<Link  to="/companies">Empresas</Link>}
                  icon={<IconBuilding size={16} stroke={1.5}
                />} />
              </Navbar.Section>
          </Navbar>
*/