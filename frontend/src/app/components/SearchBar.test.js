import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "./SearchBar/Searchbar";

describe("SearchBar", () => {
  test("renderiza o input corretamente", () => {
    render(<SearchBar onSearch={() => {}} />);

    const input = screen.getByPlaceholderText("Buscar série...");
    expect(input).toBeInTheDocument();
  });

  test("permite digitar no input", () => {
    render(<SearchBar onSearch={() => {}} />);

    const input = screen.getByPlaceholderText("Buscar série...");

    fireEvent.change(input, { target: { value: "Stranger things" } });

    expect(input.value).toBe("Stranger things");
  });

  test("chama onSearch ao clicar no botão", () => {
    const mockSearch = jest.fn();
    render(<SearchBar onSearch={mockSearch} />);

    const input = screen.getByPlaceholderText("Buscar série...");
    const button = screen.getByRole("button");

    fireEvent.change(input, { target: { value: "Lost" } });
    fireEvent.click(button);

    expect(mockSearch).toHaveBeenCalledWith("Lost");
  });

  test("chama onSearch ao dar Enter (submit do form)", () => {
    const mockSearch = jest.fn();
    render(<SearchBar onSearch={mockSearch} />);

    const input = screen.getByPlaceholderText("Buscar série...");

    fireEvent.change(input, { target: { value: "Dark" } });
    fireEvent.submit(input); 

    expect(mockSearch).toHaveBeenCalledWith("Dark");
  });
});
