export const shortenName = (name: string): string => {
  const wordsToDelete = ['Headphones', 'Earphones', 'Speaker', 'Wireless'];

  wordsToDelete.forEach((word) => {
    const regex = new RegExp(word, 'i');
    name = name.replace(regex, '').trim();
  });

  return name;
};
