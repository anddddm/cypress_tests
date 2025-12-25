describe("Тестирование saucedemo", function () {
  it("Проверка входа, добавления сотрудника, поиска добавленного сотрудника, выхода", function () {
    const randomAge = Math.floor(Math.random() * 99999) + 1;
    cy.visit("https://opensource-demo.orangehrmlive.com/");
    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("Admin");
    cy.get(
      ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("admin123");
    cy.get(".oxd-button").click();
    cy.contains("Dashboard");
    // Проверка добавления сотрудника

    cy.get(":nth-child(2) > .oxd-main-menu-item > .oxd-text").click();
    cy.get(".orangehrm-header-container > .oxd-button").click();
    cy.get(".orangehrm-card-container > .oxd-text--h6").should(
      "contain",
      "Add Employee"
    );
    cy.get(
      ".--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input"
    ).type("Ura");
    cy.get(":nth-child(2) > :nth-child(2) > .oxd-input").type("Pobeda");
    cy.get(":nth-child(3) > :nth-child(2) > .oxd-input").type("Vot eto da");
    cy.get(".oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input")
      .clear()
      .type(String(randomAge));
    cy.get(".oxd-button--secondary").click();
    cy.wait(10000);
    cy.contains("Personal Details");
    //Поиск созданного сотрудника
    cy.get(":nth-child(2) > .oxd-main-menu-item > .oxd-text").click();
    cy.get(":nth-child(2) > .oxd-input")
      .type(String(randomAge))
      .type("{enter}");
    cy.get(".oxd-form-actions > .oxd-button--secondary").click();
    cy.wait(5000);
    cy.get(".oxd-table-card > .oxd-table-row").should("have.length", 1); // Проверка количества записей
    cy.get(".oxd-table-card > .oxd-table-row > :nth-child(3) > div")
      .contains("Ura")
      .contains("Pobeda");
    cy.get(".oxd-table-card > .oxd-table-row > :nth-child(4) > div").contains(
      "Vot eto da"
    );
    //Выход из аккаунта
    cy.get(".oxd-userdropdown-tab > .oxd-icon").click();
    cy.get(":nth-child(4) > .oxd-userdropdown-link").click();
    cy.wait(2000);
    cy.contains("Login"); //Проверка, что был произведен выход
  });
});
