import { render, screen } from "@testing-library/react";
import NavBar from "./NavBar/NavBar";

describe("NavBar", () => {
  test("renderiza o menu corretamente", () => {
    render(<NavBar />);

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Sobre")).toBeInTheDocument();
    expect(screen.getByText("Cadastrar Série")).toBeInTheDocument();
    expect(screen.getByText("Lista de Séries")).toBeInTheDocument();
  });
}); 