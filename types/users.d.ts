export interface IUserResponse {
  message: string;
  ok: boolean;
  user?: {
    id: number;
    firstName: string;
    lastName: string;
  };
}

export interface UserInfo {
  email: string;
  profileImage?: string | null;
  firstName: string;
  lastName: string;
  username?: string | null;
  createdAt: Date;
  jobRecommendationNotifPref: string;
  jobSubmissionNotifPref: string;
  jobSearchStatus: string;
  isNewUser: boolean;
}
