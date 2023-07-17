export function parseNoSemicolonAfterNames(input: string) {
  const timestampRegex = /(?:2[0-3]|[01]?[0-9]):[0-5][0-9]:[0-5][0-9]/;
  const mentionRegex =
    /(?:2[0-3]|[01]?[0-9]):[0-5][0-9]:[0-5][0-9] ((Customer)|(Agent)) /;
  const typeRegex = /Customer|Agent/;

  const sentences = input.split(/(?<=\.)/g);

  return sentences.map((s) => {
    return {
      date: s.match(timestampRegex)![0],
      mention: s.match(mentionRegex)![0],
      sentence: s.split(typeRegex)[1]!.trim(),
      type: s.match(typeRegex)![0].toLowerCase(),
    };
  });
}
