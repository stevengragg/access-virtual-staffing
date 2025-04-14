/**
 * Extracts the job ID from a string containing an ID and slug.
 * @param idWithSlug - The string containing the job ID and slug (e.g., "12345-job-title").
 * @returns The extracted job ID or null if invalid.
 */
export const getJobId = (idWithSlug: string): string | null => {
  const idMatch = idWithSlug.match(/^(\d+)-/);
  return idMatch ? idMatch[1] : null;
};
