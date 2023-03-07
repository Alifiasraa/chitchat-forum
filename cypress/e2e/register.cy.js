/**
 * - Register spec
 *   - should display register page correctly
 *   - should display alert when name is empty
 *   - should display alert when email is empty
 *   - should display alert when password is empty
 *   - should display alert when email is already taken
 *   - should display homepage when email and password are correct
 */

describe('Register spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/register');
  });

  it('should display register page correctly', () => {
    // memverifikasi elemen yang harus tampak pada halaman register
    cy.get('img[alt="logo"]').should('be.visible');
    cy.get('input[placeholder="Name"]').should('be.visible');
    cy.get('input[placeholder="Email"]').should('be.visible');
    cy.get('input[placeholder="Password"]').should('be.visible');
    cy.get('button').contains(/^Register$/).should('be.visible');
  });

  it('should display alert when name is empty', () => {
    // klik tombol register tanpa mengisi email
    cy.get('button').contains(/^Register$/).click();

    // memverifikasi window.alert untuk menampilkan pesan dari API
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"name" is not allowed to be empty');
    });
  });

  it('should display alert when email is empty', () => {
    // mengisi name
    cy.get('input[placeholder="Name"]').type('testuser');

    // klik tombol register tanpa mengisi email
    cy.get('button').contains(/^Register$/).click();

    // memverifikasi window.alert untuk menampilkan pesan dari API
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"email" is not allowed to be empty');
    });
  });

  it('should display alert when password is empty', () => {
    // mengisi name
    cy.get('input[placeholder="Name"]').type('testuser@gmail.com');
    // mengisi email
    cy.get('input[placeholder="Email"]').type('testuser');

    // klik tombol register tanpa mengisi password
    cy.get('button').contains(/^Register$/).click();

    // memverifikasi window.alert untuk menampilkan pesan dari API
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"password" is not allowed to be empty');
    });
  });

  it('should display alert when email is already taken', () => {
    // mengisi name
    cy.get('input[placeholder="Name"]').type('yoo');

    // mengisi email
    cy.get('input[placeholder="Email"]').type('yoo@gmail.com');

    // mengisi password yang salah
    cy.get('input[placeholder="Password"]').type('yoo1234');

    // menekan tombol Register
    cy.get('button').contains(/^Register$/).click();

    // memverifikasi window.alert untuk menampilkan pesan dari API
    cy.on('window:alert', (str) => {
      expect(str).to.equal('email is already taken');
    });
  });

  // it('should display when register successed', () => {
  //   // mengisi name
  //   cy.get('input[placeholder="Name"]').type('testuser');

  //   // mengisi email
  //   cy.get('input[placeholder="Email"]').type('testuser@gmail.com');

  //   // mengisi password
  //   cy.get('input[placeholder="Password"]').type('test123456');

  //   // menekan tombol Register
  //   cy.get('button').contains(/^Register$/).click();

  //   // memverifikasi bahwa elemen yang berada di loginpage ditampilkan
  //   cy.get('img[alt="logo"]').should('be.visible');
  //   cy.get('input[placeholder="Email"]').should('be.visible');
  //   cy.get('input[placeholder="Password"]').should('be.visible');
  //   cy.get('button').contains(/^Login$/).should('be.visible');
  // });
});
