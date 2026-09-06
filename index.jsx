const { useState, useMemo } = React;

const rates = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.78,
  JPY: 156.7,
};

const currencies = ["USD", "EUR", "GBP", "JPY"];

export function CurrencyConverter() {
  const [amount, setAmount] = useState(100);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");

  // Convert the input into our base currency (USD).
  // This calculation does NOT rerun when only toCurrency changes.
  const baseAmount = useMemo(() => {
    return amount / rates[fromCurrency];
  }, [amount, fromCurrency]);

  // Changing the destination currency only uses the memoized base amount.
  const convertedAmount = baseAmount * rates[toCurrency];

  return (
    <main className="converter-page">
      <section className="converter-card">
        <div className="converter-header">
          <span className="eyebrow">EXCHANGE</span>
          <h1>Currency Converter</h1>
          <p>Convert your money with a simple, clear calculation.</p>
        </div>

        <div className="amount-field">
          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            type="number"
            min="0"
            step="any"
            value={amount}
            onChange={(event) => setAmount(Number(event.target.value))}
          />
        </div>

        <div className="currency-row">
          <div className="currency-field">
            <label htmlFor="from-currency">From</label>
            <select
              id="from-currency"
              value={fromCurrency}
              onChange={(event) => setFromCurrency(event.target.value)}
            >
              {currencies.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>

          <div className="swap-icon" aria-hidden="true">
            →
          </div>

          <div className="currency-field">
            <label htmlFor="to-currency">To</label>
            <select
              id="to-currency"
              value={toCurrency}
              onChange={(event) => setToCurrency(event.target.value)}
            >
              {currencies.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="result">
          <span className="result-label">Converted amount</span>
          <strong>
            {convertedAmount.toFixed(2)} {toCurrency}
          </strong>
        </div>
      </section>
    </main>
  );
}