import { parseSingleSentence } from '../step-1';
import { sentenceOutput } from '../step-2';

export function parseNoNewLineSentences(input: string) {
  const output: sentenceOutput[] = [];

  const sentences = input.split(/(?<=\.)/g);

  for (const sentence of sentences!) {
    output.push(...parseSingleSentence(sentence));
  }

  return output;
}
