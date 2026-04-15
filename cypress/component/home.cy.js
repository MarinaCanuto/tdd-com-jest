import Home from '../../src/app/page'

describe('Home Component', () => {
  it('deve renderizar corretamente', () => {
    cy.mount(<Home />)
    // Se no seu page.js tiver um texto "Bem-vindo", use:
    cy.contains('Olá Marina').should('be.visible')
  })
})