import { supabase } from "$lib/supabaseClient";

export const load = async ({ locals: { getSession } }) => {
  const session = await getSession()

  let { data: user, error: userError } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', session?.user.id)
    .single()
    ;

    console.log(userError)

    return {
      session: session,
      user: user,
    }
  }