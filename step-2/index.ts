import { parseSingleSentence } from '../step-1';

export interface sentenceOutput {
  date: string;
  mention: string;
  sentence: string;
  type: string;
}

export function parseMultipleSentences(input: string) {
  const output: sentenceOutput[] = [];

  const sentences = input.split(/(?<=\n)/g);

  for (const sentence of sentences!) {
    output.push(...parseSingleSentence(sentence));
  }

  return output;
}
