<script lang="ts">
import { UserProfile } from 'svelte-clerk/components'
import { useClerkContext } from 'svelte-clerk'

const context = useClerkContext()

const fullName = $derived(context.user?.fullName)
</script>

<UserProfile />

Hello, {fullName}!
