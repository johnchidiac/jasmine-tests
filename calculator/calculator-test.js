
const testValues = { 'amount':400000, 'years':15, 'rate':5.5 }

it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment(400000,15,5.5)).toEqual(3268.33);
});

it("should return a result with 2 decimal places", function() {
  expect(calculateMonthlyPayment(400000,15,5.5)).toMatch(/\d*\.\d\d/);
});

it("should have a place to display the result under the heading Monthly Payment", function() {
  expect(document.getElementById('monthly-payment').innerText).toEqual('')
})

/// etc
