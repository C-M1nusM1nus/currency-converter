# 💱 Currency Converter
A simple currency converter built with React, JSX, HTML, and CSS. Users can enter an amount, select a source currency, select a destination currency, and see the converted amount.

# Features
* Convert between USD, EUR, GBP, and JPY
* Enter a custom amount
* Select the source currency
* Select the destination currency
* Displays the converted amount with two decimal places
* Uses React state to manage user input
* Uses **useMemo** to calculate the base amount efficiently
* Responsive design for smaller screens

# Supported Currencies
* USD — US Dollar
* EUR — Euro
* GBP — British Pound
* JPY — Japanese Yen

# How It Works
The application uses USD as the base currency.

For example, when converting from EUR to GBP:

The entered EUR amount is converted to USD.
1. The USD amount is converted to GBP.
2. The final result is displayed with two decimal places.
3. The exchange rates are stored directly in the JavaScript code:

const rates = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.78,
  JPY: 156.7,
};

**Note:** These are fixed example exchange rates and are not updated automatically.
