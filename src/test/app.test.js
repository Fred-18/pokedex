import { render, screen } from "@testing-library/react";
import { App } from "../App";

describe("<pokedex/>", () => {
  it("he shouled display poxedex for title", () => {
    render(<App />);
    const titleElement = screen.getByRole("heading", { level: 1 });
    expect(titleElement.textContent).toBe("Pokedex");
  });
});
