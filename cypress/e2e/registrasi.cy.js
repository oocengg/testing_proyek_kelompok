describe('Regitrasi', () => {
    const NIK = '7602010000001234';
    const NIK2 = '7602010000001234';
    const NamaLengkap = 'Akun Testing 123';
    const NoKK = '5002010000001234';
    const TempatLahir = 'Wakanda';
    const TanggalLahir = '2002-02-02';
    const Kewarganegaraan = 'WNI';
    const Agama = 'Islam';
    const JenisKelamin = 'Laki-Laki';
    const Email = 'testing@gmail.com';
    const No_Telp = '0812345678';
    const NamaIbuKandung = 'Shuri';
    const StatusKawin = 'Belum Kawin';
    const Pekerjaan = 'Mahasiswa';
    const GolonganDarah = 'A';
    const Alamat = 'Jl. Cakalang';
    const RT = '9';
    const RW = '2';
    const Provinsi = 'Sulawesi Barat';
    const KotaKab = 'Mamuju';
    const KelDesa = 'Mamuju';
    const Kecamatan = 'Mamuju';
    const Password = 'testing123';
    const NIKBeda = '7602010000006789';
    const PasswordBeda = 'testing456';


    it('Registration With Different NIK', () => {
        cy.visit('http://localhost/Proyek/home.php')
        cy.get('.nav-item > .btn').contains('Login/Register').click()
        cy.get('a').contains('Sign Up').click()
        cy.get('input[name=nama_lengkap]').type(NamaLengkap)
        cy.get('input[name=nik]').type(NIK)
        cy.get('input[name=tempat_lahir]').type(TempatLahir)
        cy.get('input[name=tanggal_lahir]').type(TanggalLahir)
        cy.get('input[name=no_kk]').type(NoKK)
        cy.get('select[name=kewarganegaraan]').select(Kewarganegaraan).should('have.value', 'WNI')
        cy.get('select[name=agama]').select(Agama).should('have.value', 'Islam')
        cy.get('select[name=jenis_kelamin]').select(JenisKelamin).should('have.value', 'Laki-Laki')
        cy.get('input[name=email]').type(Email)
        cy.get('input[name=no_hp]').type(No_Telp)
        cy.get('input[name=nama_ibu]').type(NamaIbuKandung)
        cy.get('select[name=status_kawin]').select(StatusKawin).should('have.value', 'Belum Kawin')
        cy.get('input[name=pekerjaan]').type(Pekerjaan)
        cy.get('select[name=goldarah]').select(GolonganDarah).should('have.value', 'A')
        cy.get('input[name=alamat]').type(Alamat)
        cy.get('input[name=rt]').type(RT)
        cy.get('input[name=rw]').type(RW)
        cy.get('input[name=provinsi]').type(Provinsi)
        cy.get('input[name=kabkota]').type(KotaKab)
        cy.get('input[name=kelurahan]').type(KelDesa)
        cy.get('input[name=kecamatan]').type(Kecamatan)
        cy.get('input[name=confnik]').type(NIKBeda)
        cy.get('input[name=password]').type(Password)
        cy.get('input[name=confpass]').type(Password)
        cy.get('#btnSubmit').click()
        cy.on('window:alert', (t) => {
            //assertions
            expect(t).to.contains('NIK do not match.');
        })
    })

    it('Registration With Different Password', () => {
        cy.visit('http://localhost/Proyek/home.php')
        cy.get('.nav-item > .btn').contains('Login/Register').click()
        cy.get('a').contains('Sign Up').click()
        cy.get('input[name=nama_lengkap]').type(NamaLengkap)
        cy.get('input[name=nik]').type(NIK)
        cy.get('input[name=tempat_lahir]').type(TempatLahir)
        cy.get('input[name=tanggal_lahir]').type(TanggalLahir)
        cy.get('input[name=no_kk]').type(NoKK)
        cy.get('select[name=kewarganegaraan]').select(Kewarganegaraan).should('have.value', 'WNI')
        cy.get('select[name=agama]').select(Agama).should('have.value', 'Islam')
        cy.get('select[name=jenis_kelamin]').select(JenisKelamin).should('have.value', 'Laki-Laki')
        cy.get('input[name=email]').type(Email)
        cy.get('input[name=no_hp]').type(No_Telp)
        cy.get('input[name=nama_ibu]').type(NamaIbuKandung)
        cy.get('select[name=status_kawin]').select(StatusKawin).should('have.value', 'Belum Kawin')
        cy.get('input[name=pekerjaan]').type(Pekerjaan)
        cy.get('select[name=goldarah]').select(GolonganDarah).should('have.value', 'A')
        cy.get('input[name=alamat]').type(Alamat)
        cy.get('input[name=rt]').type(RT)
        cy.get('input[name=rw]').type(RW)
        cy.get('input[name=provinsi]').type(Provinsi)
        cy.get('input[name=kabkota]').type(KotaKab)
        cy.get('input[name=kelurahan]').type(KelDesa)
        cy.get('input[name=kecamatan]').type(Kecamatan)
        cy.get('input[name=confnik]').type(NIK)
        cy.get('input[name=password]').type(Password)
        cy.get('input[name=confpass]').type(PasswordBeda)
        cy.get('#btnSubmit').click()
        cy.on('window:alert', (t) => {
            //assertions
            expect(t).to.contains('Passwords do not match.');
        })
    })

    it('Registration With Valid Data', () => {
        cy.visit('http://localhost/Proyek/home.php')
        cy.get('.nav-item > .btn').contains('Login/Register').click()
        cy.get('a').contains('Sign Up').click()
        cy.get('input[name=nama_lengkap]').type(NamaLengkap)
        cy.get('input[name=nik]').type(NIK)
        cy.get('input[name=tempat_lahir]').type(TempatLahir)
        cy.get('input[name=tanggal_lahir]').type(TanggalLahir)
        cy.get('input[name=no_kk]').type(NoKK)
        cy.get('select[name=kewarganegaraan]').select(Kewarganegaraan).should('have.value', 'WNI')
        cy.get('select[name=agama]').select(Agama).should('have.value', 'Islam')
        cy.get('select[name=jenis_kelamin]').select(JenisKelamin).should('have.value', 'Laki-Laki')
        cy.get('input[name=email]').type(Email)
        cy.get('input[name=no_hp]').type(No_Telp)
        cy.get('input[name=nama_ibu]').type(NamaIbuKandung)
        cy.get('select[name=status_kawin]').select(StatusKawin).should('have.value', 'Belum Kawin')
        cy.get('input[name=pekerjaan]').type(Pekerjaan)
        cy.get('select[name=goldarah]').select(GolonganDarah).should('have.value', 'A')
        cy.get('input[name=alamat]').type(Alamat)
        cy.get('input[name=rt]').type(RT)
        cy.get('input[name=rw]').type(RW)
        cy.get('input[name=provinsi]').type(Provinsi)
        cy.get('input[name=kabkota]').type(KotaKab)
        cy.get('input[name=kelurahan]').type(KelDesa)
        cy.get('input[name=kecamatan]').type(Kecamatan)
        cy.get('input[name=confnik]').type(NIK)
        cy.get('input[name=password]').type(Password)
        cy.get('input[name=confpass]').type(Password)
        cy.get('#btnSubmit').click()
        cy.on('window:alert', (t) => {
            //assertions
            expect(t).to.contains('Anda berhasil melakukan registrasi. Silahkan Login!');
        })
    })


})