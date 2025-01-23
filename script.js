// Populate the bands list
const bands = [
    'The Plot in You',
    'The Devil Wears Prada',
    'Pierce the Veil',
    'Norma Jean',
    'The Bled',
    'Say Anything',
    'The Midway State',
    'We Came as Romans',
    'Counterparts',
    'Oh, Sleeper',
    'A Skylit Drive',
    'Anywhere But Here',
    'An Old Dog'
];

// Function to strip 'a', 'an', 'the' from the beginning of a string
function strip(article) {
    return article.replace(/^(a |an |the )/i, '').trim();
}

// Sort the bands array
const sortedBands = bands.sort((a, b) => strip(a).localeCompare(strip(b)));

// Select the UL element
const bandList = document.getElementById('bands');

// Append each sorted band as an 'li'
sortedBands.forEach(band => {
    const li = document.createElement('li');
    li.textContent = band;
    bandList.appendChild(li);
});

// Cypress test logic (only included in this file due to restriction)
if (typeof Cypress !== 'undefined') {
    describe('Article List Tests', () => {
        const baseUrl = 'http://localhost:3000';

        it('Checks if the band list is visible', () => {
            cy.visit(baseUrl + "/index.html");
            cy.get('#bands', { timeout: 6000 }).should('be.visible');
        });

        it('Validates the order of sorted bands', () => {
            cy.visit(baseUrl + "/index.html");

            cy.get('ul li:nth-child(1)').should('contain', 'Anywhere But Here');
            cy.get('ul li:nth-child(2)').should('contain', 'The Bled');
            cy.get('ul li:nth-child(3)').should('contain', 'Counterparts');
            cy.get('ul li:nth-child(4)').should('contain', 'The Devil Wears Prada');
            cy.get('ul li:nth-child(5)').should('contain', 'The Midway State');
            cy.get('ul li:nth-child(6)').should('contain', 'Norma Jean');
            cy.get('ul li:nth-child(7)').should('contain', 'Oh, Sleeper');
            cy.get('ul li:nth-child(8)').should('contain', 'An Old Dog');
        });
    });
}
