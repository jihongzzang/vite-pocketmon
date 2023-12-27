import { render, screen, fireEvent } from '@testing-library/react';

import App from './App';

test('Renders main page correctly', async () => {
  render(<App />);
  const buttonCount = await screen.findByRole('button');

  expect(buttonCount.innerHTML).toBe('count is 0');

  fireEvent.click(buttonCount);

  fireEvent.click(buttonCount);

  expect(buttonCount.innerHTML).toBe('count is 2');
});
