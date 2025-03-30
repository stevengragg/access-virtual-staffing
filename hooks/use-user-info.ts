import useSWR from "swr";
import { GeneralSchema } from "@/lib/validation/general-settings-form-validation";
import { fetchApi } from "@/services/fetch-api";
import { UserInfo } from "@/types/users";

export function useUserInfo() {
  const { data, error, isLoading } = useSWR<
    { userInfo: UserInfo; message: string; ok: boolean },
    Error
  >("/settings/general", fetchApi);

  return {
    userInfo: data?.userInfo,
    error,
    isLoading,
  };
}
