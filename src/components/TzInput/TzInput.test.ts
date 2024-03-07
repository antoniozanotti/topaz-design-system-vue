import { describe, it, expect } from "vitest";
import { render } from '@testing-library/vue';
import '@testing-library/jest-dom/vitest';
import TzInput from './TzInput.vue';

describe('TzInput Component', () => {
  it('should render correctly', () => {
    const { container } = render(TzInput, { props: { name: "inputName" } });

    const input = container.querySelector("input[name='inputName']");

    expect(input).toBeInTheDocument();
  });
});
