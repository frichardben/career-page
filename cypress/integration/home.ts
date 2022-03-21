/// <reference types="cypress" />

describe('Home', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('click the link "Vagas em aberto"', () => {
    cy.contains('Vagas em aberto').click()
  })

  it('Job opportunities', () => {
    cy.scrollTo(0, 2500)
    cy.get('#opportunity').scrollTo('bottom', { ensureScrollable: false })

    cy.get('#opportunity > li').should(($lis) => {
      expect($lis).to.have.length(4)
      expect($lis.eq(0)).to.contain(
        'Desenvolvedor Mobile Senior (Android e iOS)'
      )
      expect($lis.eq(1)).to.contain('Desenvolvedor Java Senior')
      expect($lis.eq(2)).to.contain('Desenvolvedor Front end')
      expect($lis.eq(3)).to.contain('Desenvolvedor Java Junior')
    })
  })
})
