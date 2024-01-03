import * as React from "react";
import { AppContext } from "../App";
import supabase from "../supabase";
import { ICategory } from "../ts/interfaces/category_interfaces";

const useFetchSupabase = <T>(tableName: string, selectString: string) => {
  const [data, setData] = React.useState<T | null>(null);
  React.useEffect(() => {
    const fetchData = async () => {
      const { error, data } = await supabase
        .from(tableName!)
        .select(selectString);
      error ? alert(error.message) : setData(data as T);
    };
    fetchData();
  }, []);
  return { data };
};

export default useFetchSupabase;
