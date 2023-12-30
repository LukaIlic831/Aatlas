import { Session } from "@supabase/supabase-js";

export interface IAppContext {
  currentUser: Session | null;
}
