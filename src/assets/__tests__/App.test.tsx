/**
 * @jest-environment jsdom
 */
import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import App from "../../App";

describe("App component", () => {
  afterEach(cleanup);
  it("snapshot test", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
});
