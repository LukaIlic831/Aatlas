import { createClient } from "@supabase/supabase-js";
import { Database } from "../ts/types/supabase_types";

const supabase = createClient<Database>(
  process.env.REACT_APP_SUPABASE_PROJECT!,
  process.env.REACT_APP_SUPABASE_KEY!
);

export default supabase;
