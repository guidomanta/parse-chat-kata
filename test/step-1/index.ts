import { test } from 'tap';
import { parseSingleSentence } from '../../step-1';

test('Step 1 tests', async (t) => {
  await t.test('Parse single sentence', async (t) => {
    const input =
      '14:24:32 Customer : Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

    const output = parseSingleSentence(input);

    const expected = [
      {
        date: '14:24:32',
        mention: '14:24:32 Customer : ',
        sentence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        type: 'customer',
      },
    ];

    t.same(output, expected);
  });
});
