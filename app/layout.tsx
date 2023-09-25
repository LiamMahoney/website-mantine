import '@mantine/core/styles.css';
import { AppShell, MantineProvider, ColorSchemeScript } from '@mantine/core';
import { theme } from '../theme';
import { Navbar } from '@/components/Navbar/Navbar';
import { HydrationProvider } from '@/src/context/HydrationContext';

export default function RootLayout({ children }: { children: any }) {

    return (
        <html lang="en">
            <head>
                <ColorSchemeScript />
                <link rel="shortcut icon" href="/favicon.svg" />
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
                />
            </head>
            <body>
                <MantineProvider
                    defaultColorScheme="auto"
                >
                    <HydrationProvider>
                        <Navbar>
                            {children}
                        </Navbar>
                    </HydrationProvider>
                </MantineProvider>
            </body>
        </html>
    );
}