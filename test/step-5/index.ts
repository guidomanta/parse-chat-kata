import { test } from 'tap';
import { parseNoNewLineSentences } from '../../step-4';

test('Step 5 tests', async (t) => {
  await t.test('Parse two sentences with date in text', async (t) => {
    const input =
      '14:24:32 Customer : Lorem ipsum dolor sit amet, consectetur adipiscing elit.14:26:15 Agent : I received it at 12:24:48, ut blandit lectus.';

    const output = parseNoNewLineSentences(input);

    const expected = [
      {
        date: '14:24:32',
        mention: '14:24:32 Customer : ',
        sentence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        type: 'customer',
      },
      {
        date: '14:26:15',
        mention: '14:26:15 Agent : ',
        sentence: 'I received it at 12:24:48, ut blandit lectus.',
        type: 'agent',
      },
    ];

    t.same(output, expected);
  });
});
