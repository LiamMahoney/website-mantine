import type { Metadata } from 'next'
import {  Stack } from '@mantine/core';
import { Project, Props as ProjectProp } from '@/components/Project/Project';
import data from './projects.json';

export const metadata: Metadata = {
    title: "Projects",
    description: "Projects that Liam has worked on",
};

export default function Projects() {
    const projectComponents = data.map((i:ProjectProp) => <Project key={i.title} {...i} />)

    return (
        <>
            <Stack
                align="center"
                justify="center"
                w="100%"
                h="100%"
            >
                {projectComponents}
            </Stack>
        </>
    );
}
