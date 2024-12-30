const seasons = {
    spring: {
        months: ['March', 'April', 'May'],
        background: 'url(./images/spring.jpg)'
    },
    summer: {
        months: ['June', 'July', 'August'],
        background: 'url(./images/summer.jpg)'
    },
    autumn: {
        months: ['September', 'October', 'November'],
        background: 'url(./images/autumn.jpg)'
    },
    winter: {
        months: ['December', 'January', 'February'],
        background: 'url(./images/winter.jpg)'
    }
};

function showSeason(season) {
    const container = document.getElementById('months-container');
    const seasonData = seasons[season];


    container.innerHTML = '';

    seasonData.months.forEach(month => {
        const div = document.createElement('div');
        div.className = `month ${season}`;
        div.textContent = month;
        container.appendChild(div);
    });

    document.body.style.backgroundImage = seasonData.background;
}
