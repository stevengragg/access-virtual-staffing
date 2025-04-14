export type ImageProps = {
  url?: string;
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type NormalParamsWithId = { id?: string };
export type AppRouterWithNormalParamsWithId = AppRouterPageRouteOpts &
  NormalParamsWithId;
