describe('Login', () => {
    const username = '7602010000000001';
    const usernameAdmin = 'adminAndi';
    const usernameSalah = '76123287372367'
    const password = 'udilsurbakti';
    const passwordAdmin = '123';
    const passwordSalah = '1234567';

    it('Form Inputan NIK / Username tidak tepat', () => {
        cy.viewport(1280, 720)
        cy.visit("http://localhost/Proyek/home.php")
        cy.get('.btn-success').click();
        cy.get('[type="text"]').type(usernameSalah)
        cy.get('#pass').type(password)
        cy.get('button').click();
        cy.wait(2000)
    });

    it('Form Inputan Password tidak tepat', () => {
        cy.viewport(1280, 720)
        cy.visit("http://localhost/Proyek/home.php")
        cy.get('.btn-success').click();
        cy.get('[type="text"]').type(username)
        cy.get('#pass').type(passwordSalah)
        cy.get('button').click();
        cy.wait(2000)
    });

    it('Form Inputan NIK / Username dan Password tidak tepat', () => {
        cy.viewport(1280, 720)
        cy.visit("http://localhost/Proyek/home.php")
        cy.get('.btn-success').click();
        cy.get('[type="text"]').type(usernameSalah)
        cy.get('#pass').type(passwordSalah)
        cy.get('button').click();
        cy.wait(2000)
    });

    it('Form Inputan tidak terisi', () => {
        cy.viewport(1280, 720)
        cy.visit("http://localhost/Proyek/home.php")
        cy.get('.btn-success').click();
        cy.get('button').click();
        cy.wait(2000)
    });

    it('Form Inputan NIK / Username tidak terisi', () => {
        cy.viewport(1280, 720)
        cy.visit("http://localhost/Proyek/home.php")
        cy.get('.btn-success').click();
        cy.get('#pass').type(password)
        cy.get('button').click();
        cy.wait(2000)
    });

    it('Form Inputan Password tidak terisi ', () => {
        cy.viewport(1280, 720)
        cy.visit("http://localhost/Proyek/home.php")
        cy.get('.btn-success').click();
        cy.get('[type="text"]').type(username)
        cy.get('button').click();
        cy.wait(2000)
    });

    it('Form Inputan Terisi Sempurna', () => {
        cy.viewport(1280, 720)
        cy.visit("http://localhost/Proyek/home.php")
        cy.get('.btn-success').click();
        cy.get('[type="text"]').type(username)
        cy.get('#pass').type(password)
        cy.get('button').click();
        cy.wait(2000)
    });

    it('Login Admin', () => {
        cy.viewport(1280, 720)
        cy.visit("http://localhost/Proyek/home.php")
        cy.get('.btn-success').click();
        cy.get('[type="text"]').type(usernameAdmin)
        cy.get('#pass').type(passwordAdmin)
        cy.get('button').click();
        cy.wait(2000)
    });
});