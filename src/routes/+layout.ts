// src/routes/+layout.ts
import { invalidate } from '$app/navigation'
import { createSupabaseLoadClient } from '@supabase/auth-helpers-sveltekit'

export const load = async ({ fetch, data, depends }: any) => {
  depends('supabase:auth')

  const supabase = createSupabaseLoadClient({
    supabaseUrl: 'https://dybllrihzokqujmhhuvl.supabase.co',
    supabaseKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5Ymxscmloem9rcXVqbWhodXZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU2NDk2MjIsImV4cCI6MjAxMTIyNTYyMn0.TsaPE-ghb-fLcYwH2njcHYCs0YTiTI7AzZ7x2ibYCIY'
    ,
    event: { fetch },
    serverSession: data.session,
  })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  return { supabase, session }
}