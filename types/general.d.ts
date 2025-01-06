export type ImageProps = {
  url?: string;
  src: string;
  alt: string;
  width: number;
  height: number;
};

export interface JobListing {
  id: string;
  url: string;
  title: string;
  pay?: string;
  description?: string;
  createdAt: string;
  postedBy: string;
}

export type Position = {
  position: JobListing;
};
