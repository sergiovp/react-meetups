function assertNumberOfFavorites(number) {
    cy.get('a[href="/favorites"]').contains('span', number);
}

function setFavouriteMeetup(meetup, remove) {
    cy.get('button')
        .contains(remove ? 'Remove from favorites' : 'Add to favorites')
        .eq(meetup)
        .click();
}

context('Navigation var tests', () => {
    before(() => {
        cy.visit('http://localhost:3000');
    });

    it('Updates the number of favorites meetups', () => {
        // At the beginning there should not be any favourites.
        assertNumberOfFavorites(0);

        // Set as favorite the first meet up.
        setFavouriteMeetup(0, false);

        // Now we have 1 favourite meetup.
        assertNumberOfFavorites(1);

        // Remove the favourite meetup.
        setFavouriteMeetup(0, true);

        // Now we have 0 favourite meetups.
        assertNumberOfFavorites(0);
    });
});
