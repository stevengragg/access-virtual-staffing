import { cn } from "@/lib/utils";

type Props = {
  address: string;
  className?: string;
};
const GoogleMapLink = ({ address, className }: Props) => {
  const encodedAddress = encodeURIComponent(address);
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;

  return (
    <a
      href={googleMapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn("mb-5 text-sm md:mb-6 hover:underline", className)}
    >
      {address}
    </a>
  );
};

export default GoogleMapLink;
