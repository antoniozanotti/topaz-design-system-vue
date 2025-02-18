import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/vue";
import "@testing-library/jest-dom/vitest";
import TzButton from "./TzButton.vue";

const basicTestButton = () => {
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
  return button;
};

const basicTestLabel = (button: HTMLElement, text: string) => {
  expect(button).toHaveTextContent(text);
};

const basicTestIcon = (button: HTMLElement) => {
  const icon = button.children[0];
  expect(icon).toBeInstanceOf(SVGElement);
  return icon;
};

describe("TzButton Component", () => {
  it("should render only label", () => {
    render(TzButton, { props: { label: "Home" } });

    const button = basicTestButton();

    basicTestLabel(button, "Home");
  });

  it("should render only icon", () => {
    render(TzButton, { props: { label: "", iconName: "HomeIcon" } });

    const button = basicTestButton();

    basicTestIcon(button);
  });

  it("should render label and icon on the left", () => {
    render(TzButton, { props: { label: "Home", iconName: "HomeIcon" } });

    const button = basicTestButton();

    basicTestLabel(button, "Home");

    basicTestIcon(button);
  });

  it("should render label and icon on the right", () => {
    render(TzButton, {
      props: { label: "Home", iconName: "HomeIcon", isIconAfterLabel: true },
    });

    const button = basicTestButton();

    basicTestLabel(button, "Home");

    const icon = basicTestIcon(button);
    expect(icon).toHaveClass("order-last");
  });

  it("should render disable state", () => {
    render(TzButton, {
      props: { label: "Locked", iconName: "LockClosedIcon", disabled: true },
    });

    const button = basicTestButton();
    expect(button).toBeDisabled();

    basicTestLabel(button, "Locked");

    basicTestIcon(button);
  });

  it("should render loading state", () => {
    render(TzButton, { props: { isLoading: true } });

    const button = basicTestButton();
    expect(button).toBeDisabled();

    basicTestLabel(button, "loading");

    const icon = basicTestIcon(button);
    expect(icon).toHaveClass("animate-spin");
  });
});
