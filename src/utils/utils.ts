export const includesText = (input: string, name: string): boolean => {
  input = input.trim().toLowerCase();
  name = name.trim().toLowerCase();

  return name.startsWith(input);
};
