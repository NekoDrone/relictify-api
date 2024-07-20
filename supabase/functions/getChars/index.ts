import { createClient } from 'jsr:@supabase/supabase-js@2'

Deno.serve(async (req) => {

  const supabase = createClient(
    Deno.env.get('SUPABASE_URL') ?? '',
    Deno.env.get('SUPABASE_ANON_KEY') ?? '',
    { global: { headers: { Authorization: req.headers.get('Authorization')! } } }
  )
  
  const { data, error } = await supabase.from('characters').select()
  
  if (error) return new Response(JSON.stringify(error), {status: 500});
  return new Response(JSON.stringify(data), { headers: { "Content-Type": "application/json" } });
})