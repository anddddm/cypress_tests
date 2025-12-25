describe("Тестирование википедии", function () {
  it("Проверка", function () {
    cy.visit("https://www.wikipedia.org/");
    // 1
    cy.get(".central-textlogo__image").should("exist"); // проверка наличия лого
    //2
    cy.get("#js-link-box-ru > strong").click(); // выбор русского языка
    cy.wait(1000);
    //3
    cy.get("#searchInput")
      .should("have.attr", "placeholder")
      .and("include", "Искать в Википедии"); // проверка, что язык действительно русский
    //3
    cy.get("#searchInput")
      .type("Автоматизированное тестирование")
      .type("{enter}");
    //4
    cy.get("h1").should("contain", "Автоматизированное тестирование");
    //5
    cy.get(".mw-parser-output p a").first().click(); // поиск ссылок внутри текста и выбор первой
    //6
    cy.get("h1").should("not.contain", "Автоматизированное тестирование"); // проверка что страница изменилась
  });
});
