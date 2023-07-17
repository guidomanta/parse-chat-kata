import { test } from 'tap';
import { parseNoSemicolonAfterNames } from '../../step-7';

test('Step 7 tests', async (t) => {
  await t.test(
    'Parse two sentences with missing colon after the names',
    async (t) => {
      const input =
        '14:24:32 Customer Lorem ipsum dolor sit amet, consectetur adipiscing elit.14:26:15 Agent I received it at 12:24:48, ut blandit lectus.';

      const output = parseNoSemicolonAfterNames(input);

      const expected = [
        {
          date: '14:24:32',
          mention: '14:24:32 Customer ',
          sentence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          type: 'customer',
        },
        {
          date: '14:26:15',
          mention: '14:26:15 Agent ',
          sentence: 'I received it at 12:24:48, ut blandit lectus.',
          type: 'agent',
        },
      ];

      t.same(output, expected);
    }
  );
});
