import test from 'ava'
import formatCurrency from '../'

test('edge cases', function (t) {
  t.is(formatCurrency(NaN), '0.00', 'NaN => 0.00')
  t.is(formatCurrency([]), '0.00', '[] => 0.00')
})

test('format currency', function (t) {
  t.is(formatCurrency(10000.01), '10,000.01', '10000.01 => 10,000.01')
  t.is(formatCurrency(10000.01, { format: '%s%v', symbol: '$' }), '$10,000.01', '10000.01 => $10,000.01')
  t.is(formatCurrency(10000.01, { format: '%v %c', code: 'USD' }), '10,000.01 USD', '10,000.01 USD')
  t.is(formatCurrency(10000.01, { format: '%v %c', code: 'RUB' }), '10,000.01 RUB', '10,000.01 RUB')
  t.is(formatCurrency(10000.01, { format: '%s%v %c', code: 'EURO', symbol: '€' }), '€10,000.01 EURO', '€10,000.01 EURO')

  t.is(formatCurrency('$100 USD', { format: '%v %c', code: 'USD' }), '100.00 USD')
})
