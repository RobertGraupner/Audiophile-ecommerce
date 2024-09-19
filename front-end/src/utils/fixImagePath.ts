export const fixImagePath = (path: string) => {
  if (process.env.NODE_ENV === 'development') {
    return path.replace('./assets', '/src/assets');
  } else {
    return path.replace('./assets', '/assets');
  }
};
