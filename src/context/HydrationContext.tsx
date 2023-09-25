'use client'

import React from 'react';

export const HydrationContext = React.createContext(false);

export function HydrationProvider({ children }: {children: any}) {
	const [hydrated, setHydrated] = React.useState(false);
	React.useEffect(() => {
		setHydrated(true);
	}, []);
	return <HydrationContext.Provider value={hydrated}>{children}</HydrationContext.Provider>;
}