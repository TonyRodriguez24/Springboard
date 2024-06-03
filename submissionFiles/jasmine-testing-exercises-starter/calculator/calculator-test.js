describe("calculatePaymentAmount", function () {
    it("should calculate our default values correctly", function () {
        expect(
            calculatePaymentAmount({ amount: 1000, years: 1, rate: 5 })
        ).toEqual("85.61");
    });

    it("should return a result with 2 decimal places", function () {
        expect(
            calculatePaymentAmount({ amount: 1000, years: 1, rate: 5 })
        ).toEqual("85.61");
        expect(
            calculatePaymentAmount({ amount: 2000, years: 1, rate: 5 })
        ).toEqual("171.21");
        expect(
            calculatePaymentAmount({ amount: 1000, years: 2, rate: 5 })
        ).toEqual("43.87");
    });

    it("should return NaN if the amount is not a number", function () {
        expect(
            calculatePaymentAmount({ amount: "a", years: 1, rate: 5 })
        ).toEqual("NaN");
    });

    it("should calculate the monthly payment correctly for various inputs", function () {
        expect(
            calculatePaymentAmount({ amount: 1000, years: 1, rate: 5 })
        ).toEqual("85.61");
        expect(
            calculatePaymentAmount({ amount: 3000, years: 19, rate: 2 })
        ).toEqual("15.83");
        expect(
            calculatePaymentAmount({ amount: 10000, years: 2, rate: 5 })
        ).toEqual("438.71");
    });

    it("should handle zero interest rate", function () {
        expect(
            calculatePaymentAmount({ amount: 1000, years: 1, rate: 0 })
        ).toEqual("83.33");
    });

    it("should handle zero years term", function () {
        expect(
            calculatePaymentAmount({ amount: 1000, years: 0, rate: 5 })
        ).toEqual("Infinity");
    });

    it("should handle zero amount", function () {
        expect(
            calculatePaymentAmount({ amount: 0, years: 1, rate: 5 })
        ).toEqual("0.00");
    });

    it("should handle negative values", function () {
        expect(
            calculatePaymentAmount({ amount: -1000, years: 1, rate: 5 })
        ).toEqual("-85.61");
        expect(
            calculatePaymentAmount({ amount: 1000, years: -1, rate: 5 })
        ).toEqual("-81.44");
        expect(
            calculatePaymentAmount({ amount: 1000, years: 1, rate: -5 })
        ).toEqual("81.09");
    });
});
