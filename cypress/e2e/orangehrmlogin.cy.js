describe("Тестирование saucedemo", function () {
  it("Проверка входа с пустыми полями", function () {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
    cy.get(".oxd-button").click();
    cy.contains("Required");
  });
  it("Проверка входа c логином, без пароля", function () {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("Admin");
    cy.get(".oxd-button").click();
    cy.contains("Required");
  });
  it("Проверка входа без логина, с паролем", function () {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
    cy.get(
      ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("admin123");
    cy.get(".oxd-button").click();
    cy.contains("Required");
  });
  it("Проверка входа c неправильным логином, с неправильным паролем", function () {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("Odmin");
    cy.get(
      ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("odmin123");
    cy.get(".oxd-button").click();
    cy.contains("Invalid credentials");
  });
  it("Проверка входа c правильным логином, с неправильным паролем", function () {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("Admin");
    cy.get(
      ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("odmin123");
    cy.get(".oxd-button").click();
    cy.contains("Invalid credentials");
  });
  it("Проверка входа c неправильным логином, с правильным паролем", function () {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("Odmin");
    cy.get(
      ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("admin123");
    cy.get(".oxd-button").click();
    cy.contains("Invalid credentials");
  });
  it("Проверка входа", function () {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("Admin");
    cy.get(
      ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("admin123");
    cy.get(".oxd-button").click();
    cy.contains("Dashboard");
  });
});
