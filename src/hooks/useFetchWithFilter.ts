import * as React from "react";
import supabase from "../supabase";
import useAppContext from "./useAppContext";
import { EnumRefetchAction } from "../ts/enums/refetch_toast_action";
import toastSuccess from "../toasts/toastSuccess";

const useFetchWithFilter = <T>(
  tableName: string,
  selectString: string,
  columnName: string,
  filterString: string
) => {
  const [data, setData] = React.useState<T | null>(null);
  const { refetch, setRefetch } = useAppContext();
  React.useEffect(() => {
    const fetchData = async () => {
      const { error, data } = await supabase
        .from(tableName!)
        .select(selectString)
        .eq(columnName, filterString);
      if (error) {
        alert(error.message);
      } else {
        setData(data.length === 0 ? null : (data as T));
        refetch === EnumRefetchAction.delete &&
          tableName === "post" &&
          toastSuccess.postDeletedSuccessfully();
        setRefetch(EnumRefetchAction.default);
      }
    };
    fetchData();
  }, [filterString, refetch]);
  return { data };
};

export default useFetchWithFilter;
