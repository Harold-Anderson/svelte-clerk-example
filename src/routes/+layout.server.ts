// src/+layout.server.ts
import { buildClerkProps } from 'svelte-clerk/server';

// To enable Clerk SSR support, pass the `initialState` to the `ClerkProvider` component.
interface Locals {
	auth: any; // Adjust the type of 'auth' as needed
}

export const load = ({ locals }: { locals: Locals }) => {
	return {
		...buildClerkProps(locals.auth)
	};
};

