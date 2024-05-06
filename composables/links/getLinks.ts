import { createClient } from "@supabase/supabase-js";

export const getLinks = async () => {
  const config = useRuntimeConfig();
  const supabase = createClient(
    config.public.SUPABASE_URL,
    config.public.SUPABASE_KEY
  );
  const { data } = await supabase.from("links").select("*");
  return data;
};
