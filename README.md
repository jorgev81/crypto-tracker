# Cryptocurrency Rates Tracker

A **React** and **TypeScript** application that displays a list of cryptocurrency rates relative to USD, with individual pages for each coin showing detailed information.

## 🌐 Live Demo

Check out the live application here: [Cryptocurrency Rates Tracker](https://crypto-tracker-sigma-lovat.vercel.app/)

## 📖 Table of Contents

- [Objective](#🎯-objective)
- [Features](#✨-features)
- [Technologies Used](#🛠️-technologies-used)
- [License](#📄-license)

## 🎯 Objective

Develop a single-page application using **React** and **TypeScript** that displays a list of cryptocurrency rates, fetching data from [YouHodler API](https://app.youhodler.com/api/v3/rates/extended). The rates are relative to the **USD**.

Each item in the list is a link leading to a dedicated page for each coin (e.g., `/btc`, `/eth`), displaying all the information available from the endpoint:

- `rate` - medium price
- `ask` - ask price
- `bid` - bid price
- `diff24h` - 24-hour price movement

## ✨ Features

- **Display Rates**: View a comprehensive list of cryptocurrency rates relative to USD.
- **Switch Views**: Toggle between table and card views for better visualization.
- **Pagination**: Navigate through pages in the table view, displaying 20 items per page.
- **Sorting and Filtering**: Sort coins by symbol, price, or 24-hour change, and search for specific coins.
- **Coin Details**: Click on a coin to view detailed information on its dedicated page.
- **Responsive Design**: Optimized for both desktop and mobile devices.

🛠️ Technologies Used
- **React**: Front-end library for building user interfaces.
- **TypeScript**: Typed superset of JavaScript for type safety.
- **MobX**: State management library for efficient state handling.
- **Vite**: Build tool for rapid development and hot module replacement.
- **Axios**: HTTP client for API requests.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **React Router**: Library for routing in React applications.
- **Vercel**: Hosting platform for deploying the application.

## Contributing
Feel free to contribute to the development of this widget. Submit issues or pull requests to enhance its functionality or address any bugs.