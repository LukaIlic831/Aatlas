import * as React from "react";
import supabase from "../supabase";

const useFetchWithFilter = <T>(
  tableName: string,
  selectString: string,
  columnName: string,
  filterString: string
) => {
  const [data, setData] = React.useState<T | null>(null);
  React.useEffect(() => {
    const fetchData = async () => {
      const { error, data } = await supabase
        .from(tableName!)
        .select(selectString)
        .eq(columnName, filterString);
      error ? alert(error.message) : setData(data as T);
    };
    fetchData();
  }, []);
  return { data };
};

export default useFetchWithFilter;
