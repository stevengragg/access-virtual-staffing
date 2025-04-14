export function getProgressReadableText(progress: string): string {
  const progressMap: Record<string, string> = {
    in_review: "In Review",
    reviewed: "Reviewed",
    declined_initial_interview: "Declined (Initial Interview)",
    initial_interview: "Initial Interview",
    for_client_interview: "For Client Interview",
    declined_after_interview: "Declined (After Interview)",
    make_offer: "Make Offer",
    hired_signed: "Hired & Signed",
    endorsed: "Endorsed",
    reserved_for_future_opening: "Reserved for Future Opening",
  };

  return progressMap[progress] || "Unknown Progress";
}

export function getProgressColor(progress: string): string {
  const colorMap: Record<string, string> = {
    in_review: "text-blue-500",
    reviewed: "text-green-500",
    declined_initial_interview: "text-red-500",
    initial_interview: "text-yellow-500",
    for_client_interview: "text-purple-500",
    declined_after_interview: "text-red-500",
    make_offer: "text-green-600",
    hired_signed: "text-green-700",
    endorsed: "text-blue-400",
    reserved_for_future_opening: "text-gray-500",
  };

  return colorMap[progress] || "text-gray-700";
}
