import { describe, it, expect } from "vitest";
import { render } from "@testing-library/vue";
import "@testing-library/jest-dom/vitest";
import TzTag from "../TzTag.vue";

const basicTestSpan = (container: Element) => {
  const span = container.querySelector("span");
  expect(span).toBeInTheDocument();
};

const basicTestLabel = (span: Element, text: string) => {
  expect(span).toHaveTextContent(text);
};

describe("TzTag Component", () => {
  it("should render span", () => {
    const { container } = render(TzTag, { props: { label: "Label" } });

    basicTestSpan(container);
    basicTestLabel(container, "Label");
    expect(container).toMatchSnapshot();
  });

  it("should render disable state", () => {
    const { container } = render(TzTag, {
      props: { label: "Locked", disabled: true },
    });

    basicTestSpan(container);
    basicTestLabel(container, "Locked");
    expect(container).toMatchSnapshot();
  });
});
