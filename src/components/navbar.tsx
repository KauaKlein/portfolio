import React from 'react';
import { Avatar, Anchor, Box, Header, Nav } from 'grommet';

// Itens do menu
const items = [
  { label: 'HTML', href: '#' },
  { label: 'JS', href: '#' },
  { label: 'CSS', href: '#' },
  { label: 'REACT', href: '#' },
];

// Importando a imagem local
import gravatarSrc from '../assets/123.jpg'; // Caminho correto para a imagem

const OnHeaderNav = () => (
  <Header background="dark-1" pad="small">
    <Box direction="row" align="center" gap="small">
      <Avatar src={gravatarSrc} />
      <Anchor color="white" href="https://github.com/KauaKlein">
        Klein
      </Anchor>
    </Box>
    <Nav direction="row">
      {items.map((item) => (
        <Anchor href={item.href} label={item.label} key={item.label} />
      ))}
    </Nav>
  </Header>
);

export const OnHeader = () => <OnHeaderNav />;
OnHeader.storyName = 'On Header';

export default {
  title: 'Controls/Nav/On Header',
};
