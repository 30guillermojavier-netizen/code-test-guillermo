# Real-Time Stock Tracker

A real-time stock tracking dashboard built with **React + TypeScript**, consuming live market data from the **Finnhub WebSocket API**.

The application allows users to:
- Select a stock or crypto symbol
- Set a price alert
- View live price updates
- Visualize price evolution in real time
- See percentage change similar to the Finnhub homepage

---

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Recharts
- Finnhub WebSocket API
- ESLint + Prettier
- Husky + lint-staged

---

## Architecture

This project follows **Clean Architecture** and **Atomic Design** principles.

src/
├── data/ # DTOs, mappers, WebSocket handling
├── domain/ # Business models & repository interfaces
├── presentation/
│ ├── components/ # atoms, molecules, organisms, templates
│ ├── hooks/ # custom hooks (useStock)
│ ├── pages # page-level components
│ └── strings
├── utils


### Key architectural decisions
- UI components never interact directly with WebSocket
- Data flow goes through a repository abstraction
- Clear separation of concerns between layers

---

## Real-Time Data Flow

- Stock data is streamed using the **Finnhub WebSocket API**
- A repository manages subscribe / unsubscribe logic
- The `useStock` hook:
  - Filters outdated trades
  - Handles symbol changes safely
  - Resets state correctly when switching symbols
  - Computes percentage change based on the first received trade
- UI reacts only to valid, active-symbol trades

---

## Dashboard Layout

The application is composed of **three main components**:

### 1 Left Form
- Dropdown to select a stock or crypto symbol
- Input for price alert

### 2 Top Card (Finnhub-style)
- Stock symbol
- Current price
- Percentage change (color-coded)
- Real-time updates

### 3 Chart
- Plots the stock price evolution in USD
- Updates only when real trades are received

---

## UI & UX

- Fully responsive (Desktop / Tablet / Mobile)
- Built with Tailwind CSS
- Adaptive layout depending on screen size
- Visual feedback for price movement
- “Waiting for trades…” state when waiting for the data to load or when there is no trades at that moment

---

## Code Quality

- ESLint with strict rules
- No `console.log` or `debugger` allowed
- Prettier for consistent formatting
- Pre-commit hooks using Husky
- `lint-staged` ensures only clean code is committed

---

## SOLID Principles

- **SRP** – Each component and hook has a single responsibility
- **DIP** – UI depends on abstractions, not implementations
- **OCP** – Easy to extend with new symbols or data sources

---

## How to run the project

1. Install dependencies
```bash
npm install
2. Add your Finnhub API Key
VITE_FINNHUB_API_KEY=your_api_key_here
3. Run the app
npm run dev
```
---

## Notes

- Some symbols may not emit trades continuously
- The UI handles this gracefully by showing a waiting state
- Crypto symbols (e.g. BINANCE:BTCUSDT) update more frequently