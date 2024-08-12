/**
 * jest
 * Runs our tests, reports results
 *
 * jsdom
 * simulated a browser when running in a Node environment
 */

/**
 * @testing-library/react
 * Uses ReactDOM to render a component for testing
 *
 * @testing-library/dom
 * Helps find elements that are rendered by our components
 */
import { render, screen, waitFor } from '@testing-library/react';
/**
 * @testing-library/user-event
 * Helps simulate user input like typing and clicking
 */
import user from '@testing-library/user-event';
import App from './App';

test('shows six products by defaults', async () => {
  render(<App />);
  const headings = await screen.findAllByRole('heading');
  expect(headings).toHaveLength(6);
});

test('clicking on the button loads 6 more products', async () => {
  render(<App />);
  const button = await screen.findByRole('button', { name: /load more/i });
  user.click(button);

  await waitFor(async () => {
    const titles = await screen.findAllByRole('heading');
    expect(titles).toHaveLength(12);
  });
});

/**
 * jest finds all files in the src folder that:
 * end with .spec.js
 * end with .test.js
 * are placed in a folder called __test__
 */
