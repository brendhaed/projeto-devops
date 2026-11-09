import { render, screen, fireEvent } from "@testing-library/react";
import SerieEdit from "./SerieEdit/SerieEdit";

describe("SerieEdit Component", () => {
  const mockSerie = {
    id: 1,
    title: "Breaking Bad",
    seasons: "5",
    releaseDate: "2008-01-20",
    director: "Vince Gilligan",
    production: "AMC",
    category: "drama",
    watchedAt: "2024-01-01",
    imgUrl: "https://exemplo.com/bb.jpg",
  };

  test("carrega os dados da série no formulário", () => {
    render(
      <SerieEdit
        open={true}
        onClose={() => {}}
        serieCard={mockSerie}
        onSave={() => {}}
      />
    );

    expect(screen.getByLabelText("Título")).toHaveValue("Breaking Bad");
    expect(screen.getByLabelText("Número de Temporadas")).toHaveValue(5);
    expect(screen.getByLabelText("Diretor")).toHaveValue("Vince Gilligan");
  });

  test("alterar campos do formulário", () => {
    render(
      <SerieEdit
        open={true}
        onClose={() => {}}
        serieCard={mockSerie}
        onSave={() => {}}
      />
    );

    const inputTitle = screen.getByLabelText("Título");

    fireEvent.change(inputTitle, { target: { value: "Better Call Saul" } });

    expect(inputTitle).toHaveValue("Better Call Saul");
  });

  test("chama onSave com os dados atualizados", () => {
    const mockOnSave = jest.fn();

    render(
      <SerieEdit
        open={true}
        onClose={() => {}}
        serieCard={mockSerie}
        onSave={mockOnSave}
      />
    );

    fireEvent.change(screen.getByLabelText("Título"), {
      target: { value: "Better Call Saul" },
    });

    fireEvent.click(screen.getByText("Salvar"));

    expect(mockOnSave).toHaveBeenCalledTimes(1);

    const savedData = mockOnSave.mock.calls[0][0];

    expect(savedData.title).toBe("Better Call Saul");
    expect(savedData.seasons).toBe("5");
  });
});
