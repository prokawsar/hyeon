import { createClient } from '@supabase/supabase-js'
import { dev } from '$app/environment';
import {writable} from "svelte/store";

const defaultStore = {
    user: null,
    msgs: []
}

export const authStore = writable(defaultStore)
export const supabase = createClient('https://uaubmooigfmnmaspsznw.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVhdWJtb29pZ2Ztbm1hc3Bzem53Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMyODIxNjcsImV4cCI6MjAwODg1ODE2N30.jYyQNg4eT3EVzldvwqz9VvGbTYrg9d9t72hASD5seEQ');

supabase.auth.onAuthStateChange((event, session) => {
    if (event === 'SIGNED_IN') {
        authStore.update((oldStore) => { // updating the store if there is a token stored
            return {
                ...oldStore,
                user: session.user
            }
        })
    } else if (event === 'SIGNED_OUT') {
        authStore.set(defaultStore) // set the store to the default value
    }
})
