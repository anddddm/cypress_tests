describe("Тестирование google maps", function () {
  it("Проверка", function () {
    cy.visit("https://www.google.com/maps");
    cy.wait(5000);
    //1
    cy.log("**Поиск места**");
    cy.get("#searchboxinput").type("Эйфелева башня Париж").type("{enter}");
    cy.wait(15000);
    //2
    cy.log("**Проверка, что открылась нужная страница**");
    cy.get("h1").should("contain", "Эйфелева башня"); //Проверка, что открылась нужная страница
    //3
    cy.log("**Проверка маршрута**");
    cy.get(
      "#QA0Szd > div > div > div.w6VYqd > div:nth-child(2) > div > div.e07Vkf.kA9KIf > div > div > div:nth-child(4) > div.etWJQ.jym1ob.peSXAf.kdfrQc.k17Vqe.WY7ZIb > button",
      { timeout: 5000 }
    )
      .should("be.visible")
      .click({ force: true });
    cy.get("#sb_ifc50 > .tactile-searchbox-input").type("Лувр").type("{enter}");
    //4
    cy.get('div[aria-label*="Маршрут"]', { timeout: 15000 })
      .should("be.visible")
      .and("contain", "км") // Проверка наличия дистанции
      .and("contain", "мин"); // Проверка наличия времени

    cy.contains(/[0-9]+\s*мин/, { timeout: 5000 }).should("be.visible"); // Проверка отображения времени пути
    //5
    cy.log("**Проверка отображения карты**");
    cy.get("canvas", { timeout: 10000 }).should("exist"); // Проверка отображения карты
    //6
    cy.log("**Закрытие маршрута**");
    cy.get(".YismEf > .ExQYxb").click(); //Закрытие окна маршрута
    cy.get('div[aria-label*="Маршрут"]').should("not.exist"); //Проверка, что окно маршрута закрылось
  });
});
