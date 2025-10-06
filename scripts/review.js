document.addEventListener('DOMContentLoaded', () => {
    const reviewCountElement = document.getElementById('reviewCount');
    let reviewCount = localStorage.getItem('reviewCount') || 0;
    reviewCount = parseInt(reviewCount) + 1;
    localStorage.setItem('reviewCount', reviewCount);
    reviewCountElement.textContent = reviewCount;

    document.getElementById('year').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;
});
