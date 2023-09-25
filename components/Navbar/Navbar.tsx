'use client';

import { useDisclosure } from '@mantine/hooks';
import { Button, AppShell, Group, Burger, UnstyledButton, Stack, Flex } from '@mantine/core';
import classes from './Navbar.module.css';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';

export function Navbar({ children }: { children: any }) {
    const [opened, { toggle }] = useDisclosure();

    return (
        <AppShell
            header={{ height: 60 }}
            aside={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened } }}
            padding="md"
            transitionDuration={275}
            withBorder={false}
        >
            <AppShell.Header>
                <Group h="100%" px="md">
                    <Group className={classes.navContainer} >
                        <Group className={classes.navLeft}>
                            
                        </Group>
                        <Group className={classes.navCenter} gap={0} visibleFrom="sm" >
                            <UnstyledButton className={classes.link}>Home</UnstyledButton>
                            <UnstyledButton className={classes.link}>Projects</UnstyledButton>
                            <UnstyledButton className={classes.link}>Blog</UnstyledButton>
                        </Group>
                        <Group className={classes.navRight}>
                            <Group visibleFrom="sm">
                                <ColorSchemeToggle size="md"/>
                            </Group>
                            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
                        </Group>
                    </Group>
                </Group>
            </AppShell.Header>

            <AppShell.Aside py="md" px={4} >
                <Stack className={classes.mobileContainer}>
  
                    <Stack className={classes.mobileLinkContainer}>
                        <UnstyledButton className={classes.link}>Home</UnstyledButton>
                        <UnstyledButton className={classes.link}>Projects</UnstyledButton>
                        <UnstyledButton className={classes.link}>Blog</UnstyledButton>
                    </Stack>
                    <Flex className={classes.mobileColorSchemeToggle} justify="flex-end" align="center">
                        <ColorSchemeToggle size="xl" />
                    </Flex>
                </Stack>


            </AppShell.Aside>

            <AppShell.Main>
                {children}
            </AppShell.Main>
        </AppShell>
    );
}
