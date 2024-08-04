export function getImgIcon(
  icon: string | string[],
  resolvedTheme: string | undefined
): string {
  return typeof icon === "string"
    ? icon
    : resolvedTheme === "light"
    ? icon[0]
    : icon[1];
}
