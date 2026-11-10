const request = require("supertest");
const fs = require("fs");
const path = require("path");
const dataPath = path.join(__dirname, "series.test.json");
process.env.SERIES_DATA_FILE = dataPath;
const app = require("../app");

describe("API de Séries", () => {
  beforeAll(() => {
    fs.writeFileSync(
      dataPath,
      JSON.stringify([
        {
          id: 1,
          title: "Breaking Bad",
          seasons: 5,
          releaseDate: "2008-01-20",
          director: "Vince Gilligan",
          production: "AMC",
          category: "Drama/Crime",
          watchedAt: "2023-03-10",
          imgUrl: "",
        },
      ]),
    );
  });

  afterAll(() => {
    if (fs.existsSync(dataPath)) {
      fs.unlinkSync(dataPath);
    }
  });
  describe("GET /series", () => {
    it("deve retornar a lista de séries", async () => {
      const response = await request(app).get("/series");

      expect(response.status).toBe(200);
      expect(response.body).toBeInstanceOf(Array);
    });
  });

  describe("GET /series/:id", () => {
    it("deve retornar uma série existente", async () => {
      const response = await request(app).get("/series/1");

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("id", 1);
      expect(response.body).toHaveProperty("title");
    });

    it("deve retornar 404 para uma série inexistente", async () => {
      const response = await request(app).get("/series/999");

      expect(response.status).toBe(404);
    });
  });

  describe("POST /series", () => {
    it("deve criar nova serie", async () => {
      const response = await request(app).post("/series").send({
        title: "The Last of Us",
        seasons: 2,
        releaseDate: "2023-01-15",
        director: "Craig Mazin",
        production: "HBO",
        category: "Drama",
        watchedAt: "2026-11-09",
        imgUrl: "",
      });

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("title", "The Last of Us");
      expect(response.body).toHaveProperty("id");
    });
  });

  describe("PUT /series/:id", () => {
    it("deve atualizar uma série existente", async () => {
      const response = await request(app).put("/series/1").send({
        title: "Breaking Bad - Atualizada",
      });

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty(
        "title",
        "Breaking Bad - Atualizada",
      );
      expect(response.body).toHaveProperty("id", 1);
    });
  });

  describe("DELETE /series/:id", () => {
    it("deve deletar série existente", async () => {
      const response = await request(app).delete("/series/2");
      expect(response.status).toBe(200);
    });

    it("deve retornar 404 para série inexistente", async () => {
      const response = await request(app).delete("/series/9");

      expect(response.status).toBe(404);
    });
  });
});
