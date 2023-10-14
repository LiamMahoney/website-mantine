import { Badge, Flex, Stack, Text, Title } from '@mantine/core';
import classes from './Project.module.css';
import Link from 'next/link';
import { IconBrandGithub, IconExternalLink } from '@tabler/icons-react';

export type Props = {
    title: string,
    tags: Array<string>,
    description: string,
    link: string,
    repo: string
}

export function Project({ title, tags, description, link, repo }:Props) {
    return (
        <Stack
            maw="500px"
            align='flex-start'
            gap="0"
            className={classes.projectContainer}
        >
            <Flex 
                className={classes.titleContainer} 
                justify='space-between'
                align='center'
                w="100%"
            >
                <Link href={link} className={classes.unstyledLink} passHref target="_blank">
                    <Title
                        order={4}
                    >
                        {title}
                    </Title>
                </Link>
                <Link href={repo} className={classes.unstyledLink} passHref target="_blank">
                    <IconBrandGithub className={classes.repoIcon}/>
                </Link>
            </Flex>

            <Flex>
                {tags.map((tag => <Badge size="xs" variant='outline' color='gray'>{`#${tag}`}</Badge>))}
            </Flex>
            <Text size="sm" className={classes.description}>
                {description}
            </Text>
        </Stack>
    );
}
