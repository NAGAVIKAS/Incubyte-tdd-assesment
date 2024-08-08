const msg = require('../index');

test('returns hi vikas', () => {
  expect(msg('vikas')).toBe('hi vikas');
});