import { cn } from "@/lib/utils";

type Props = {
  address: string;
  className?: string;
};
const GoogleMapLink = ({ address, className }: Props) => {
  // Encode the address to be URL-safe
  const encodedAddress = encodeURIComponent(address);
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;

  return (
    // Use 'a' tag for external link opening
    <a
      href={googleMapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn("mb-5 text-sm md:mb-6", className)}
    >
      {address}
    </a>
  );
};

export default GoogleMapLink;
