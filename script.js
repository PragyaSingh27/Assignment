const cardData = [
    { title: "Holistic Development", content: "Right Mix of Curricular and Co-Curricular Activities.", imageUrl: "media/1.jpg" },
    { title: "Proven and Tested Centralized Curriculum", content: "CBSE school with balanced traditional & contemporary curriculum to foster growth in all its students.", imageUrl: "media/2.png" },
    { title: "Innovative and Challenging learning Methodologies", content: "CBSE school with balanced traditional & contemporary curriculum to foster growth in all its students.", imageUrl: "media/3.png" },
    { title: "Faculty Enrichment Program", content: "Regular teacher training and curriculum workshops", imageUrl: "media/4.png" }
];

function createCard(title, content, imageUrl) {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');

    const imageElement = document.createElement('img');
    imageElement.src = imageUrl;
    cardDiv.appendChild(imageElement);

    const titleElement = document.createElement('h2');
    titleElement.innerHTML = title.replace(/\b(Development|Proven|Tested|Innovative|Challenging|Faculty)\b/g, '<span class="highlight">$1</span>');
    cardDiv.appendChild(titleElement);

    const contentElement = document.createElement('p');
    contentElement.textContent = content;
    cardDiv.appendChild(contentElement);

    const dynamicHeading = document.createElement('h1');
    dynamicHeading.classList.add('dynamic-heading');
    dynamicHeading.textContent = title; 
    cardDiv.appendChild(dynamicHeading);

    cardDiv.addEventListener('mouseenter', () => {
        dynamicHeading.style.opacity = '1';
    });

    cardDiv.addEventListener('mouseleave', () => {
        dynamicHeading.style.opacity = '0';
    });

    return cardDiv;
}

function renderCards() {
    const cardContainer = document.getElementById('cardContainer');
    cardData.forEach(card => {
        const cardElement = createCard(card.title, card.content, card.imageUrl);
        cardContainer.appendChild(cardElement);
    });
}

window.onload = renderCards;