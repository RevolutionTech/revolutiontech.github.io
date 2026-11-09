import type { Project, ProjectDefinition } from "./project";

const fileStem = (path: string) => (path.split("/").pop() ?? "").split(".")[0];
const parentFolder = (path: string) => path.split("/").at(-2);

/**
 * Finds each project's screenshots and download by its slug. A screenshot
 * belongs to a project when its folder name is the slug. A download belongs
 * to a project when its file name (without extension) is the slug.
 */
export const attachProjectAssets = (
  definitions: ProjectDefinition[],
  screenshotUrlsByPath: Record<string, string>,
  downloadUrlsByPath: Record<string, string>,
): Project[] => {
  const downloadUrlsBySlug = Object.fromEntries(
    Object.entries(downloadUrlsByPath).map(([path, url]) => [
      fileStem(path),
      url,
    ]),
  );
  return definitions.map((definition) => ({
    ...definition,
    screenshots: Object.entries(screenshotUrlsByPath)
      .filter(([path]) => parentFolder(path) === definition.slug)
      .map(([path, url]) => ({
        url,
        caption: definition.screenshotCaptions?.[fileStem(path)],
      })),
    downloadUrl: downloadUrlsBySlug[definition.slug],
  }));
};
