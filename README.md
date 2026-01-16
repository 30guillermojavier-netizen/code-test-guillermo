## Real-Time Stock Tracker

### Tech Stack

- React
- TypeScript
- Vite
- Recharts
- Finnhub WebSocket API

### Architecture

This project follows Clean Architecture and Atomic Design principles.

- data: API & WebSocket integration
- domain: business models and repositories
- presentation: UI using Atomic Design (atoms, molecules, organisms, templates)

### Real-Time Updates

Stock prices are streamed using Finnhub WebSocket API.
UI components never interact directly with WebSocket.

### SOLID Principles

- SRP: Each component has a single responsibility
- DIP: UI depends on repository abstractions
- OCP: Easy to extend with new data sources

### How to run

1. npm install
2. Add your Finnhub API key
3. npm run dev
