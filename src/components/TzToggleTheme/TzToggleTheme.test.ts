import { describe, it, expect } from "vitest";
import { fireEvent, render, screen } from '@testing-library/vue';
import '@testing-library/jest-dom/vitest';
import TzToggleTheme from './TzToggleTheme.vue';

describe('TzToggleTheme Component', () => {
  it('should render in light theme', () => {
    const doc = document.documentElement;
    render(TzToggleTheme, { props: { initialTheme: '' } });

    const toggleTheme = screen.getByRole("button");

    expect(toggleTheme).toBeInTheDocument();
    expect(doc).not.toHaveClass("dark");

    fireEvent.click(toggleTheme);
    expect(doc).toHaveClass("dark");
  });

  it('should render in dark theme', () => {
    const doc = document.documentElement;
    doc.classList.add('dark');
    render(TzToggleTheme, { props: { initialTheme: 'dark' } });

    const toggleTheme = screen.getByRole("button");

    expect(toggleTheme).toBeInTheDocument();
    expect(doc).toHaveClass("dark");

    fireEvent.click(toggleTheme);
    expect(doc).not.toHaveClass("dark");
  });
});
