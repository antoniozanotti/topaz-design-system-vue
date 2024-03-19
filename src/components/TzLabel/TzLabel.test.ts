import { describe, it, expect } from "vitest";
import { render } from "@testing-library/vue";
import "@testing-library/jest-dom/vitest";
import TzLabel from "./TzLabel.vue";

const basicTestSpan = (container: Element) => {
  const span = container.querySelector("span");
  expect(span).toBeInTheDocument();
};

const basicTestLabel = (span: Element, text: string) => {
  expect(span).toHaveTextContent(text);
};

describe("TzLabel Component", () => {
  it("should render span", () => {
    const { container } = render(TzLabel, { props: { label: "Label" } });

    basicTestSpan(container);
    basicTestLabel(container, "Label");
  });

  it("should render disable state", () => {
    const { container } = render(TzLabel, {
      props: { label: "Locked", disabled: true },
    });

    basicTestSpan(container);
    basicTestLabel(container, "Locked");
  });
});
