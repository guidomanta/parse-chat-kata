export function parseFullNameInSentences(input: string) {
  const timestampRegex = /(?:2[0-3]|[01]?[0-9]):[0-5][0-9]:[0-5][0-9]/;
  const mentionRegex =
    /(?:2[0-3]|[01]?[0-9]):[0-5][0-9]:[0-5][0-9] [a-zA-Z]+\s+[a-zA-Z]+ : /;
  const sentences = input.split(/(?<=\.)/g);

  return sentences.map((s, k) => {
    return {
      date: s.match(timestampRegex)![0],
      mention: s.match(mentionRegex)![0],
      sentence: s.split(' : ')[1],
      type: k === 0 ? 'customer' : 'agent',
    };
  });
}
