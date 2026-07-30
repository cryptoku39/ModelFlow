// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ModelFlow title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ModelFlow/i);
    expect(titleElement).toBeInTheDocument();
});
