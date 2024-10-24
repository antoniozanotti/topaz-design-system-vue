import { describe, it, expect } from "vitest";
import { render, screen } from '@testing-library/vue';
import '@testing-library/jest-dom/vitest';
import TzToggleTheme from '../TzToggleTheme.vue';

describe('TzToggleTheme Component', () => {
  it('should render correctly', () => {
    const { container } = render(TzToggleTheme, { props: { initialTheme: '' } });

    const toggleTheme = screen.getByRole("button");

    expect(toggleTheme).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
