'use client';

import { useState, useContext } from 'react';
import { Switch, useComputedColorScheme, useMantineColorScheme } from '@mantine/core';
import { IconSunFilled, IconMoonFilled } from '@tabler/icons-react';
import classes from './ColorSchemeToggle.module.css';
import { HydrationContext } from '@/src/context/HydrationContext';

type Props = {
    size: string
}

export function ColorSchemeToggle( { size }: Props) {
    const { toggleColorScheme } = useMantineColorScheme();   
    const computredColorScheme = useComputedColorScheme('dark');
 
    const [ checked, setChecked ] = useState(computredColorScheme === 'dark');
    // fixes server - client hydration mismatch issue
    const hydrated = useContext(HydrationContext);

    function handleCheck(event:any) {
        setChecked(event.currentTarget.checked);
        toggleColorScheme();
    }

    if (hydrated) {
        // hydration complete, update status of switch based on color scheme
        // fixes server - client mismatch hydration issue
        return (
            <Switch
                offLabel={<IconSunFilled height="80%" />}
                onLabel={<IconMoonFilled height="80%" />}
                size={size}
                color="gray"
                checked={checked}
                onChange={handleCheck}
                classNames={{
                    trackLabel: classes.ColorSchemeToggleTrack
                }}
            />
        );
    } else {
        // page not hydrated yet - render place holder
        return (
            <Switch
                offLabel={<IconSunFilled height="80%" />}
                onLabel={<IconMoonFilled height="80%" />}
                size={size}
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
