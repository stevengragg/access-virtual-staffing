import LinkButton, { LinkButtonProps } from "@/components/ui/link-button";

type Props = {
  title: string;
  description: string;
  logInButton: LinkButtonProps;
  signUpButton: LinkButtonProps;
};

export type AuthProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export default function Auth(props: AuthProps) {
  const { title, description, logInButton, signUpButton } = {
    ...AuthDefaults,
    ...props,
  };

  return (
    <section id="relume" className="px-[5%]">
      <div className="relative flex min-h-svh flex-col justify-start overflow-auto py-24 lg:py-20">
        <div className="mx-auto w-full max-w-sm">
          <div className="rb-6 mb-6 text-center md:mb-8">
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              {title}
            </h1>
            <p className="md:text-md">{description}</p>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="grid grid-cols-1 gap-4">
              <LinkButton {...logInButton} className="gap-x-3" />

              <LinkButton {...signUpButton} className="gap-x-3" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export const AuthDefaults: Props = {
  title: "Applicant Portal",
  description:
    "Discover jobs that fits your skills and access your account to manage your profile and job applications.",
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
