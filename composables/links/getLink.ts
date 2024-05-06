import { createClient } from "@supabase/supabase-js";

export const getLink = async (id: number) => {
  const config = useRuntimeConfig();
  const supabase = createClient(
    config.public.SUPABASE_URL,
    config.public.SUPABASE_KEY
  );
  const { data } = await supabase.from("links").select("*").eq("id", id);
  return data[0];
};
