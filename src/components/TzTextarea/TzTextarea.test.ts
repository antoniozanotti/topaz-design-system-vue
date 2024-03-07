import { describe, it, expect } from "vitest";
import { render } from '@testing-library/vue';
import '@testing-library/jest-dom/vitest';
import TzTextarea from './TzTextarea.vue';

describe('TzTextarea Component', () => {
  it('should render correctly', () => {
    const { container } = render(TzTextarea, { props: { name: "textareaName" } });

    const textarea = container.querySelector("textarea[name='textareaName']");

    expect(textarea).toBeInTheDocument();
  });
});
