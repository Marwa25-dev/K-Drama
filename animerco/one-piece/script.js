let episodes = [];

fetch('one_piece.json')
    .then(response => {
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return response.json();
    })
    .then(data => {
        episodes = data;
        displayData(episodes);
    })
    .catch(error => {
        console.error('Error fetching the JSON data:', error);
    });

function displayData(data) {
    const container = document.getElementById('download-links');
    container.innerHTML = '';

    for (let item of data) {
        const episodeDiv = document.createElement('div');
        episodeDiv.classList.add('episode');

        const numHeader = document.createElement('h3');
        numHeader.textContent = item.num;
        episodeDiv.appendChild(numHeader);

        const ul = document.createElement('ul');
        item.downloadLinks.forEach(linkItem => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = linkItem.link;
            a.textContent = linkItem.website;
            a.target = "_blank";
            li.appendChild(a);
            ul.appendChild(li);
        });

        episodeDiv.appendChild(ul);
        container.appendChild(episodeDiv);
    }
}

// Add search functionality
document.getElementById('search').addEventListener('input', function (e) {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = episodes.filter(ep =>
        ep.num.toLowerCase().includes(searchTerm)
    );
    displayData(filtered);
});
