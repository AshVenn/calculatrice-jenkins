const request = require("supertest");
const app = require("../app");

describe("Tests API calculatrice", () => {
  test("GET / doit répondre correctement", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
    expect(response.text).toContain("API calculatrice opérationnelle");
  });

  test("GET /add?a=5&b=3 retourne 8", async () => {
    const response = await request(app).get("/add?a=5&b=3");
    expect(response.statusCode).toBe(200);
    expect(response.body.resultat).toBe(8);
  });

  test("GET /sub?a=10&b=4 retourne 6", async () => {
    const response = await request(app).get("/sub?a=10&b=4");
    expect(response.statusCode).toBe(200);
    expect(response.body.resultat).toBe(6);
  });

  test("GET /add avec valeurs invalides retourne 400", async () => {
    const response = await request(app).get("/add?a=x&b=2");
    expect(response.statusCode).toBe(400);
  });
});