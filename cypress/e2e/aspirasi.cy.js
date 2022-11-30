describe('Aspirasi', () => {
    const nama = 'Komang Gede';
    const email = 'komang14@gmail.com';
    const nomor = '081234567890';
    const pertanyaan = 'Bagaimana jika terjadi eror?';
    it('passes', () => {
        cy.visit('http://localhost/Proyek/pages/userPage/contactus.php')
        cy.setCookie('botble_cookie_newsletter', '1');
        cy.get('#exampleInputName').type(nama);
        cy.get('#exampleInputEmail1').type(email);
        cy.get('#exampleInputNumber').type(nomor);
        cy.get('#exampleInputQuestion').type(pertanyaan);
        cy.get('#btnSubmit').click();
    });
    it('empty', () => {
        cy.visit('http://localhost/Proyek/pages/userPage/contactus.php')
        cy.get('#btnSubmit').click();
    });
    it('no nama', () => {
        cy.visit('http://localhost/Proyek/pages/userPage/contactus.php')
        cy.setCookie('botble_cookie_newsletter', '1');
        cy.get('#exampleInputEmail1').type(email);
        cy.get('#exampleInputNumber').type(nomor);
        cy.get('#exampleInputQuestion').type(pertanyaan);
        cy.get('#btnSubmit').click();
    });
    it('no email ', () => {
        cy.visit('http://localhost/Proyek/pages/userPage/contactus.php')
        cy.setCookie('botble_cookie_newsletter', '1');
        cy.get('#exampleInputName').type(nama);
        cy.get('#exampleInputNumber').type(nomor);
        cy.get('#exampleInputQuestion').type(pertanyaan);
        cy.get('#btnSubmit').click();
    });
    it('no nomor', () => {
        cy.visit('http://localhost/Proyek/pages/userPage/contactus.php')
        cy.setCookie('botble_cookie_newsletter', '1');
        cy.get('#exampleInputName').type(nama);
        cy.get('#exampleInputEmail1').type(email);
        cy.get('#exampleInputQuestion').type(pertanyaan);
        cy.get('#btnSubmit').click();
    });
    it('no pertanyaan', () => {
        cy.visit('http://localhost/Proyek/pages/userPage/contactus.php')
        cy.setCookie('botble_cookie_newsletter', '1');
        cy.get('#exampleInputName').type(nama);
        cy.get('#exampleInputEmail1').type(email);
        cy.get('#exampleInputNumber').type(nomor);
        cy.get('#btnSubmit').click();
    });
});