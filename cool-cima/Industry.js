// Fetch and display the JSON data
fetch('Industry.json')
    .then(response => {
        // Check if the fetch request was successful
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json(); // Parse the JSON data
    })
    .then(data => {
        displayData(data); // Call the function to display data
    })
    .catch(error => {
        console.error('Error fetching the JSON data:', error);
    });

// Function to display the JSON data
function displayData(data) {
    const container = document.getElementById('download-links');
    console.log(data);
    
    for (let i = data.length - 1; i >= 0; i--) {
        console.log(i);
        
        item = data[i]
        const numHeader = document.createElement('h3');
        numHeader.textContent = item.title;
        container.appendChild(numHeader);

        // Create a list for download links
        const ul = document.createElement('ul');

        item.links.forEach(linkItem => {
            const li = document.createElement('li');
            const a = document.createElement('a');

            a.href = linkItem.link;
            a.textContent = linkItem.website;
            a.target = "_blank"; // Open the link in a new tab

            li.appendChild(a);
            ul.appendChild(li);
        });

        container.appendChild(ul);
    }
}