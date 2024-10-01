describe('Проверка авторизации', function () {

    it('Верный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio/');                                        // Зашли на сайт
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки
         
         cy.get('#mail').type('german@dolnikov.ru');                                  // Ввели верный логин
         cy.get('#pass').type('iLoveqastudio1');                                      // Ввели верный пароль
         cy.get('#loginButton').click();                                              // Нажал войти
        
         cy.get('#messageHeader').contains('Авторизация прошла успешно');             // Проверяю,что после авт... вижу текст
         cy.get('#messageHeader').should('be.visible');                               // Текст виден
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');               // Есть крестик и он виден польззователю
})

     it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/');                                         // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');  // Проверяю цвет кнопки
        
        cy.get('#mail').type('german@dolnikov.ru');                                   // Ввели верный логин
        cy.get('#pass').type('iLoveqastudio8');                                       // Ввели неверный пароль
        cy.get('#loginButton').click();                                               // Нажал войти
       
        cy.get('#messageHeader').contains('Такого логина или пароля нет');            // Проверяю,что после авт... вижу текст
        cy.get('#messageHeader').should('be.visible');                                // Текст виден
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');                // Есть крестик и он виден польззователю
    
})

    it('Неправильный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/');                                             // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');      // Проверяю цвет кнопки
    
        cy.get('#mail').type('german@dolnikov');                                          // Ввели неверный логин
        cy.get('#pass').type('iLoveqastudio1');                                           // Ввели верный пароль
        cy.get('#loginButton').click();                                                   // Нажал войти
   
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');          // Проверяю,что после авт... вижу текст
        cy.get('#messageHeader').should('be.visible');                                    // Текст виден
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');                    // Есть крестик и он виден польззователю

})

    it('Проверка,что в логине есть @', function () {
        cy.visit('https://login.qa.studio/');                                            // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');     // Проверяю цвет кнопки
    
        cy.get('#mail').type('germandolnikov.ru');                                       // Ввели  логин без @
        cy.get('#pass').type('iLoveqastudio1');                                          // Ввели верный пароль
        cy.get('#loginButton').click();                                                  // Нажал войти
   
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');         // Проверяю,что после авт... вижу текст
        cy.get('#messageHeader').should('be.visible');                                   // Текст виден
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');                   // Есть крестик и он виден польззователю

})

    it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio/');                                         // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');  // Проверяю цвет кнопки
    
        cy.get('#forgotEmailButton').click();                                         // Нажимаю восстановить пароль
        cy.get('#mailForgot').type('german@dolnikov.ru');                             // Ввел почту для восстановления пароля
        cy.get('#restoreEmailButton').click();                                        // Нажал отправить код
   
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');      // Проверяю на совп... текст
        cy.get('#messageHeader').should('be.visible');                                // Текст виден
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');                // Есть крестик и он виден польззователю
    
})

   it('Проверка на приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/');                                         // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');  // Проверяю цвет кнопки

        cy.get('#mail').type(' GerMan@Dolnikov.ru');                                  // Ввели строчные буквы в логин
        cy.get('#pass').type('iLoveqastudio1');                                       // Ввели верный пароль
        cy.get('#loginButton').click();                                               // Нажал войти
        
        cy.get('#messageHeader').contains('Такого логина или пароля нет');            // Проверяю,что после авт... вижу текст
        cy.get('#messageHeader').should('be.visible');                                // Текст виден
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');                // Есть крестик и он виден польззователю
   })
})