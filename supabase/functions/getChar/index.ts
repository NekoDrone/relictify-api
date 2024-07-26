import { createClient } from 'jsr:@supabase/supabase-js@2'
import { corsHeaders } from "../_shared/cors.ts";

Deno.serve(async (req) => {

  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  const supabase = createClient(
    Deno.env.get('SUPABASE_URL') ?? '',
    Deno.env.get('SUPABASE_ANON_KEY') ?? '',
    { global: { headers: { Authorization: req.headers.get('Authorization')! } } }
  )
  
  const id = (new URL(req.url)).searchParams.get('id')

  const { data, error } = id ? await supabase
    .from('characters')
    .select()
    .eq('id', id) :
    { error: {
      info: "id param must be provided",
      status: 400,
    }}

  if (error) return new Response(JSON.stringify(error), {status: error.status ?? 500});
  return new Response(JSON.stringify(data), { headers: { ...corsHeaders, "Content-Type": "application/json" } });
})