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

// Remove "A", "An", "The" for sorting purposes
function strip(article) {
    return article.replace(/^(a |an |the )/i, '').trim();
}

// Sort the bands alphabetically
const sortedBands = bands.sort((a, b) => strip(a).localeCompare(strip(b)));

// Populate the list
const bandList = document.getElementById('bands');
sortedBands.forEach(band => {
    const li = document.createElement('li');
    li.textContent = band;
    bandList.appendChild(li);
});
