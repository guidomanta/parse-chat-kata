import { test } from 'tap';
import { parseFullNameInSentences } from '../../step-6';

test('Step 6 tests', async (t) => {
  await t.test(
    'Parse two sentences with full name instead of Customer/Agent',
    async (t) => {
      const input =
        '14:24:32 Luca Galasso : Lorem ipsum dolor sit amet, consectetur adipiscing elit.14:26:15 Emanuele Querzola : I received the package, ut blandit lectus.';

      const output = parseFullNameInSentences(input);

      const expected = [
        {
          date: '14:24:32',
          mention: '14:24:32 Luca Galasso : ',
          sentence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          type: 'customer',
        },
        {
          date: '14:26:15',
          mention: '14:26:15 Emanuele Querzola : ',
          sentence: 'I received the package, ut blandit lectus.',
          type: 'agent',
        },
      ];

      t.same(output, expected);
    }
  );
});
