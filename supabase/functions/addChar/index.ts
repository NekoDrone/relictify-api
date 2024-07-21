import { createClient } from 'jsr:@supabase/supabase-js@2'

Deno.serve(async (req) => {
  
  const supabase = createClient(
    Deno.env.get('SUPABASE_URL') ?? '',
    Deno.env.get('SUPABASE_ANON_KEY') ?? '',
    { global: { headers: { Authorization: req.headers.get('Authorization')! } } }
  )
  
  const character = await req.json()
  const { error } = await supabase.from('characters').insert(character)

  return error ? new Response(JSON.stringify(error), {status: 500}) : new Response()
})