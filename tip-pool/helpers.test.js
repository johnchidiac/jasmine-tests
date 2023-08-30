describe('Helper tests', function() {

	beforeEach(function () {
		// initialization logic
		tipAmtInput.value = '50';
		billAmtInput.value = '160';
	  });
  
	it('should calculate the total tip amount', function() {
		submitPaymentInfo();
		const testSumTip = sumPaymentTotal('tipAmt');
		expect(testSumTip).toEqual(70);
	});

	it('should calculate the tip percentage', function() {
		const testTip = calculateTipPercent(200,40);
		expect(testTip).toEqual(20);
	});

	afterEach(function () {
		billAmtInput.value = '';
		tipAmtInput.value = '';
		
	});

});