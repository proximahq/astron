import test from 'ava';

test('Testing JSDOM', t => {
  const div = document.createElement('div');
  document.body.appendChild(div);

  t.is(document.querySelector('div'), div);
});
