import { parseMultipleSentences } from './step-2';
import { parseSingleSentence } from './step-1';
import { parseNoNewLineSentences } from './step-4';
import { parseFullNameInSentences } from './step-6';
import { parseNoSemicolonAfterNames } from './step-7';

const input1 =
  '14:24:32 Customer : Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
const input2 =
  '14:24:32 Customer : Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n14:26:15 Agent : Aliquam non cursus erat, ut blandit lectus.';
const input3 =
  '14:24:32 Customer : Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n14:27:00 Customer : Pellentesque cursus maximus felis, pharetra porta purus aliquet viverra.\n14:27:47 Agent : Vestibulum tempor diam eu leo molestie eleifend.\n14:28:28 Customer : Contrary to popular belief, Lorem Ipsum is not simply random text.';
const input4 =
  '14:24:32 Customer : Lorem ipsum dolor sit amet, consectetur adipiscing elit.14:26:15 Agent : Aliquam non cursus erat, ut blandit lectus.';
const input5 =
  '14:24:32 Customer : Lorem ipsum dolor sit amet, consectetur adipiscing elit.14:26:15 Agent : I received it at 12:24:48, ut blandit lectus.';
const input6 =
  '14:24:32 Luca Galasso : Lorem ipsum dolor sit amet, consectetur adipiscing elit.14:26:15 Emanuele Querzola : I received the package, ut blandit lectus.';
const input7 =
  '14:24:32 Customer Lorem ipsum dolor sit amet, consectetur adipiscing elit.14:26:15 Agent I received it at 12:24:48, ut blandit lectus.';

console.log(
  '--- Parsing single sentence ---\n',
  `Input: ${input1}\n`,
  'Output:',
  parseSingleSentence(input1)
);
console.log(
  '--- Parsing two sentences ---\n',
  `Input: ${input2}\n`,
  'Output:',
  parseMultipleSentences(input2)
);
console.log(
  '--- Parsing two customer mentions as start ---\n',
  `Input: ${input3}\n`,
  'Output:',
  parseMultipleSentences(input3)
);
console.log(
  '--- Parsing two sentences not divided by the new line character ---\n',
  `Input: ${input4}\n`,
  'Output:',
  parseNoNewLineSentences(input4)
);
console.log(
  '--- Parsing two sentences with date in text ---\n',
  `Input: ${input5}\n`,
  'Output:',
  parseNoNewLineSentences(input5)
);
console.log(
  '--- Parsing two sentences with full name instead of Customer/Agent ---\n',
  `Input: ${input6}\n`,
  'Output:',
  parseFullNameInSentences(input6)
);
console.log(
  '--- Parsing two sentences with missing colon after the names ---\n',
  `Input: ${input7}\n`,
  'Output:',
  parseNoSemicolonAfterNames(input7)
);
