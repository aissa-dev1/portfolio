export function createDynamicImgSrc(src: string, dynamicValue: string): string {
  const srcList = src.split(".");
  return `${srcList[0]}-${dynamicValue}.${srcList[1]}`;
}
