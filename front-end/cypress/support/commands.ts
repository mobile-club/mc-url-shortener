/// <reference types="cypress" />
import './index';

Cypress.Commands.add('dataCy', (value: string) => cy.get(`[data-cy=${value}]`));
