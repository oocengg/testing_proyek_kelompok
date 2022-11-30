describe('test edit profile', () => {

    it('edit profile dengan data yang valid', () => {
        cy.visit('http://localhost/Proyek/home.php')
        cy.get('.nav-item > .btn').click()
        cy.get('[type="text"]').type('7602010000000002')
        cy.get('#pass').type('ahmadidris')
        cy.get('button').click()
        cy.get(':nth-child(4) > .text-white').click()
        cy.get('a > .btn').click()
        cy.get(':nth-child(3) > .form-group > #exampleInputName').type(' Kota')
        cy.get('#btnSubmit').click()
    })

    it('edit profile dengan data nama nomor', () => {
        cy.visit('http://localhost/Proyek/home.php')
        cy.get('.nav-item > .btn').click()
        cy.get('[type="text"]').type('7602010000000002')
        cy.get('#pass').type('ahmadidris')
        cy.get('button').click()
        cy.get(':nth-child(4) > .text-white').click()
        cy.get('a > .btn').click()
        cy.get(':nth-child(1) > :nth-child(1) > .form-group > .form-control').type(' 01')
        cy.get('#btnSubmit').click()
    })

    it('edit profile dengan data nomor telepon berisi huruf', () => {
        cy.visit('http://localhost/Proyek/home.php')
        cy.get('.nav-item > .btn').click()
        cy.get('[type="text"]').type('7602010000000002')
        cy.get('#pass').type('ahmadidris')
        cy.get('button').click()
        cy.get(':nth-child(4) > .text-white').click()
        cy.get('a > .btn').click()
        cy.get(':nth-child(10) > .form-group > #exampleInputName').type('xx')
        cy.get('#btnSubmit').click()
    })

    it('edit profile dengan ada field kosong', () => {
        cy.visit('http://localhost/Proyek/home.php')
        cy.get('.nav-item > .btn').click()
        cy.get('[type="text"]').type('7602010000000002')
        cy.get('#pass').type('ahmadidris')
        cy.get('button').click()
        cy.get(':nth-child(4) > .text-white').click()
        cy.get('a > .btn').click()
        cy.get(':nth-child(10) > .form-group > #exampleInputName').clear()
        cy.get('#btnSubmit').click()
    })

    it('edit profile dengan data email berisi spasi', () => {
        cy.visit('http://localhost/Proyek/home.php')
        cy.get('.nav-item > .btn').click()
        cy.get('[type="text"]').type('7602010000000002')
        cy.get('#pass').type('ahmadidris')
        cy.get('button').click()
        cy.get(':nth-child(4) > .text-white').click()
        cy.get('a > .btn').click()
        cy.get(':nth-child(9) > .form-group > #exampleInputName').type('x    01')
        cy.get('#btnSubmit').click()
    })

    it('edit profile dengan data pekerjaan berisi angka', () => {
        cy.visit('http://localhost/Proyek/home.php')
        cy.get('.nav-item > .btn').click()
        cy.get('[type="text"]').type('7602010000000002')
        cy.get('#pass').type('ahmadidris')
        cy.get('button').click()
        cy.get(':nth-child(4) > .text-white').click()
        cy.get('a > .btn').click()
        cy.get(':nth-child(13) > .form-group > #exampleInputName').type(' 01')
        cy.get('#btnSubmit').click()
    })

    it('edit profile dengan data nama ibu berisi angka', () => {
        cy.visit('http://localhost/Proyek/home.php')
        cy.get('.nav-item > .btn').click()
        cy.get('[type="text"]').type('7602010000000002')
        cy.get('#pass').type('ahmadidris')
        cy.get('button').click()
        cy.get(':nth-child(4) > .text-white').click()
        cy.get('a > .btn').click()
        cy.get(':nth-child(11) > .form-group > #exampleInputEmail1').type(' 01')
        cy.get('#btnSubmit').click()
        cy.get('h6.card-title > a').click()
    })
})