import * as React from "react";
import supabase from "../supabase";
import useAppContext from "./useAppContext";
import { EnumRefetchAction } from "../ts/enums/refetch_toast_action";

const useFetchSupabase = <T>(tableName: string, selectString: string) => {
  const [data, setData] = React.useState<T | null>(null);
  const {refetch, setRefetch} = useAppContext();
  React.useEffect(() => {
    const fetchData = async () => {
      const { error, data } = await supabase
        .from(tableName!)
        .select(selectString);
      error ? alert(error.message) : setData(data as T);
      if(error){
        alert(error.message)
      }
      else{
        setData(data.length === 0 ? null : (data as T));
        setRefetch(EnumRefetchAction.default);
      }
      
    };
    fetchData();
  }, [refetch]);
  return { data };
};

export default useFetchSupabase;
