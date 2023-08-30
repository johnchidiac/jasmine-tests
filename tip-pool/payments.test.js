describe("Payments test", function() {
	beforeEach(function () {
	  // initialization logic
	  tipAmtInput.value = '20';
	  billAmtInput.value = '100';
	});
 

	it('should calculate tip percent', function() {
		submitPaymentInfo();

		// let paymentData = createCurPayment();
		expect(allPayments.payment1.tipPercent).toEqual(20);
	
	});

	it('should add a payment entry to the payments table', function() {
		expect(allPayments.payment1.billAmt).toEqual('160');
	});

	it('should add a table row for the payment entry data to be displayed', function() {
		const paymentRow = document.querySelector('#payment1');
		expect(paymentRow).toBeDefined();
	})

	it('should display the total tip amount', function() {
		expect(summaryTds[1].innerText).toEqual('$70');
	})

	afterEach(function () {
		billAmtInput.value = '';
		tipAmtInput.value = '';
		
	});

});