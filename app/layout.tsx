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

                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"/>

                <link rel="icon" href="/favicon.ico" sizes="32x32" />
                <link rel="icon" href="/icon.svg" type="image/svg+xml" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
                <link rel="manifest" href="/manifest.webmanifest" />
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