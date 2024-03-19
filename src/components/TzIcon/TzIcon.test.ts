import { describe, it, expect } from "vitest";
import { render } from "@testing-library/vue";
import "@testing-library/jest-dom/vitest";
import TzIcon from "./TzIcon.vue";
import type { TzIconVariant } from "./TzIcon.vue";
import * as heroIcons from "@heroicons/vue/24/outline";

const basicTestIcon = (
  iconName: keyof typeof heroIcons,
  variant: TzIconVariant
) => {
  const { container } = render(TzIcon, { props: { iconName: iconName, variant: variant } });
  const icon = container.querySelector("svg");

  expect(icon).toBeInstanceOf(SVGElement);
  expect(icon).toBeInTheDocument();

  return icon;
};

describe("TzIcon Component", () => {
  it("should render ArrowRightIcon, light", () => {
    basicTestIcon("ArrowRightIcon", "light");
  });

  it("should render MoonIcon, primary", () => {
    basicTestIcon("MoonIcon", "primary");
  });

  it("should render SunIcon, secondary", () => {
    basicTestIcon("SunIcon", "secondary");
  });

  it("should render HeartIcon, negative", () => {
    basicTestIcon("HeartIcon", "negative");
  });
});
