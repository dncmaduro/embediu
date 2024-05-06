import { createClient } from "@supabase/supabase-js";

export const likeLink = async (id: number, like: boolean) => {
  const config = useRuntimeConfig();
  const supabase = createClient(
    config.public.SUPABASE_URL,
    config.public.SUPABASE_KEY
  );
  await supabase.from("links").update({ like: like }).eq("id", id);
  const { data } = await supabase.from("links").select("*").eq("id", id);
  return data[0];
};
