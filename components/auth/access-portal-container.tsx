"use client";

import { useUser } from "@auth0/nextjs-auth0/client";

import LinkButton, { LinkButtonProps } from "../ui/link-button";

type Props = {
  logInButton: LinkButtonProps;
  signUpButton: LinkButtonProps;
};

export type AuthContainerProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const AccessPortalContainer = (props: AuthContainerProps) => {
  const { user, isLoading, error } = useUser();
  console.log(user);
  const { logInButton, signUpButton } = {
    ...AuthContainerDefaults,
    ...props,
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <div className="grid grid-cols-1 gap-6">
        <LinkButton
          navLink={{
            title: "Go to App",
            url: "/app/overview",
            follow: false,
          }}
          variant="default"
          size="xl"
          className="gap-x-3"
        />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6">
      <LinkButton {...logInButton} className="gap-x-3" />

      <LinkButton {...signUpButton} className="gap-x-3" />
    </div>
  );
};

export const AuthContainerDefaults: Props = {
  logInButton: {
    navLink: {
      title: "Login",
      url: "/api/auth/login",
      follow: false,
    },
    variant: "default",
    size: "xl",
  },

  signUpButton: {
    navLink: {
      title: "Create Account",
      url: "/api/auth/signup",
      follow: false,
    },
    variant: "secondary",
    size: "xl",
  },
};
