import { assert } from 'assertthat';
// eslint-disable-next-line unicorn/import-index
import { dummy } from '../../lib/index';

suite('dummy', (): void => {
  test('returns 42.', async (): Promise<void> => {
    const value = dummy();

    assert.that(value).is.equalTo(42);
  });
});
