import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/vue";
import "@testing-library/jest-dom/vitest";
import TzHeading from "../TzHeading.vue";
import { LevelEnum } from "../LevelEnum";
import { SizeEnum } from "../SizeEnum";
import { VariantEnum } from "../VariantEnum";

const basicTestHeading = (
  levelString: keyof typeof LevelEnum,
  level: number,
  size: keyof typeof SizeEnum,
  variant: keyof typeof VariantEnum
) => {
  const { container } = render(TzHeading, {
    props: {
      level: levelString,
      size: size,
      variant: variant,
    },
    slots: {
      default: "Heading",
    },
  });
  const heading = screen.getByRole("heading", { level: level });
  expect(heading).toBeInTheDocument();
  expect(heading).toHaveTextContent("Heading");
  expect(container).toMatchSnapshot();

  return heading;
};

describe("TzHeading Component", () => {
  it("should render h1, large, accent", () => {
    basicTestHeading("h1", 1, "large", "accent");
  });

  it("should render h2, large, accent-1", () => {
    basicTestHeading("h2", 2, "large", "accent-1");
  });

  it("should render h3, medium, accent-2", () => {
    basicTestHeading("h3", 3, "medium", "accent-2");
  });

  it("should render h4, small, secondary", () => {
    basicTestHeading("h4", 4, "small", "secondary");
  });
});
