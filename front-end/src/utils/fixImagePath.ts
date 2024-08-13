export const fixImagePath = (path: string) => {
  return path.replace('./assets', '/src/assets');
};
