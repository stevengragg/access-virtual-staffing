import useSWR from "swr";
import { fetchApi } from "@/services/fetch-api";
import { IUserInfo } from "@/types/users";

export function useUserInfo() {
  const { data, error, isLoading } = useSWR<
    { userInfo: IUserInfo; message: string; ok: boolean },
    Error
  >("/user", fetchApi);

  return {
    userInfo: data?.userInfo,
    error,
    isLoading,
  };
}
