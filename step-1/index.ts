export function parseSingleSentence(input: string) {
  const timestampRegex = /(?:2[0-3]|[01]?[0-9]):[0-5][0-9]:[0-5][0-9]/;
  const mentionRegex =
    /(?:2[0-3]|[01]?[0-9]):[0-5][0-9]:[0-5][0-9] ((Customer)|(Agent)) : /;
  const typeRegex = /Customer|Agent/;

  const date = input.match(timestampRegex)![0];
  const mention = input.match(mentionRegex)![0];
  const sentence = input.split(' : ')[1]!;
  const type = input.match(typeRegex)![0].toLowerCase();

  return [{ date, mention, sentence, type }];
}
