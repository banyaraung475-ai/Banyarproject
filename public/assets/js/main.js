document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.heritage-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const selected = button.dataset.filter;

            filterButtons.forEach(item => item.classList.toggle('active', item === button));

            cards.forEach(card => {
                const match = selected === 'All' || card.dataset.category === selected;
                card.classList.toggle('hidden', !match);
            });
        });
    });
});
