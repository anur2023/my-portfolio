export function getProjectBySlug(profile, slug) {
  if (!profile?.projects) return undefined;
  return profile.projects.find((p) => p.slug === slug);
}
