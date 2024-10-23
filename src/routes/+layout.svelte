<script lang="ts">
	import type { Snippet } from "svelte";
	import type { LayoutData } from './$types';
	import { ClerkProvider, SignIn } from 'svelte-clerk';
	import { PUBLIC_CLERK_PUBLISHABLE_KEY } from '$env/static/public';

	const {
		children,
		data
	}: {
		children: Snippet;
		data: LayoutData;
	} = $props();
</script>

<ClerkProvider {...data} publishableKey={PUBLIC_CLERK_PUBLISHABLE_KEY}>
	{@render children()}
	<SignIn />
</ClerkProvider>