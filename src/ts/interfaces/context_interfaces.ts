import { Session } from "@supabase/supabase-js";
import { EnumRefetchAction } from "../enums/refetch_toast_action";

export interface IAppContext {
  currentUser: Session | null;
  setRefetch: React.Dispatch<React.SetStateAction<EnumRefetchAction>>;
  refetch:EnumRefetchAction;
}
