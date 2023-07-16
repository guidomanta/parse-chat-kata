import { test } from 'tap';
import { parseMultipleSentences } from '../../step-2';

test('Step 2 tests', async (t) => {
  await t.test('Parse two sentences', async (t) => {
    const input =
      '14:24:32 Customer : Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n14:26:15 Agent : Aliquam non cursus erat, ut blandit lectus.';

    const output = parseMultipleSentences(input);

    const expected = [
      {
        date: '14:24:32',
        mention: '14:24:32 Customer : ',
        sentence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n',
        type: 'customer',
      },
      {
        date: '14:26:15',
        mention: '14:26:15 Agent : ',
        sentence: 'Aliquam non cursus erat, ut blandit lectus.',
        type: 'agent',
      },
    ];

    t.same(output, expected);
  });
});
