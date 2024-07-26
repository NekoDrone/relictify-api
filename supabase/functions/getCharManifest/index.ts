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

  const { data, error } = await supabase.from('characters').select('id')
  
  const ids: number[] = []
  
  for(const obj of data) {
    ids.push(obj.id)
  }
  
  const res = {
    manifest: ids,
    version: Deno.env.get('HSR_VERSION'),
    lastUpdated: new Date(1721997074480)
  }

  if (error) return new Response(JSON.stringify(error), {status: 500});
  return new Response(JSON.stringify(res), { headers: { ...corsHeaders, "Content-Type": "application/json" } });
})