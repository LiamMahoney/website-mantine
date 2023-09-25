'use client';

import { useState, useContext } from 'react';
import { Switch, useMantineColorScheme } from '@mantine/core';
import { IconSunFilled, IconMoonFilled } from '@tabler/icons-react';
import classes from './ColorSchemeToggle.module.css';
import { HydrationContext } from '@/src/context/HydrationContext';

export function ColorSchemeToggle() {
    const { toggleColorScheme, colorScheme} = useMantineColorScheme();
    const [ checked, setChecked ] = useState(colorScheme === 'dark');
    const hydrated = useContext(HydrationContext);

    function handleCheck(event:any) {
        setChecked(event.currentTarget.checked);
        toggleColorScheme();
    }

    if (hydrated) {
        return (
            <Switch
                offLabel={<IconSunFilled height="80%" />}
                onLabel={<IconMoonFilled height="80%" />}
                size="md"
                color="gray"
                checked={checked}
                onChange={handleCheck}
                classNames={{
                    trackLabel: classes.ColorSchemeToggleTrack
                }}
            />
        );
    } else {
        return (
            <Switch
                offLabel={<IconSunFilled height="80%" />}
                onLabel={<IconMoonFilled height="80%" />}
                size="md"
                color="gray"
                checked={true}
                onChange={handleCheck}
                classNames={{
                    trackLabel: classes.ColorSchemeToggleTrack
                }}
            />
        )
    }
    
}
