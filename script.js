//your JS code here. If required.
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
const bandList = document.getElementById('band');

// Append each sorted band as an 'li'
sortedBands.forEach(band => {
    const li = document.createElement('li');
    li.textContent = band;
    bandList.appendChild(li);
});

