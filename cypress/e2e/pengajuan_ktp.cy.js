describe('Regitrasi', () => {
    // Data belum melakukan pengajuan
    const NIK = '7602010000001234';
    const password = 'testing123';

    // Data sudah melakukan pengajuan
    const NIKdone = '7602010000000001';
    const passwordDone = 'udilsurbakti';


    it('Submit With Accout That Has Been Submited', () => {
        cy.visit('http://localhost/Proyek/home.php')
        cy.get('.btn-success').click();
        cy.get('[type="text"]').type(NIKdone)
        cy.get('#pass').type(passwordDone)
        cy.get('button').click();
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Anda berhasil Log In, Selamat Datang Member!')
        })
        cy.on('window:confirm', () => true)

        cy.get(':nth-child(3) > .text-white').click();
        cy.get('a > .btn').click();
    })

    it('Submit With New Accout', () => {
        cy.visit('http://localhost/Proyek/home.php')
        cy.get('.btn-success').click();
        cy.get('[type="text"]').type(NIK)
        cy.get('#pass').type(password)
        cy.get('button').click();
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Anda berhasil Log In, Selamat Datang Member!')
        })
        cy.on('window:confirm', () => true)

        cy.get(':nth-child(3) > .text-white').click();
        cy.get('a > .btn').click();
        cy.get(':nth-child(2) > a > .btn').click();
    })
})