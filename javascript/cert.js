document.addEventListener('DOMContentLoaded', () => {
    const certificateGrid = document.getElementById('certificateGrid');
    const overlay = document.getElementById('overlay');
    const popupImage = document.getElementById('popupImage');
    const closeBtn = document.getElementById('closeBtn');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    // Certificate data using local images from assets folder
    const certificates = [
        { title: 'Bsc Computer Science', image: 'assets/images/' },
        { title: 'Data Science', image: 'assets/images/css.png' },
        { title: 'Machine Learning', image: 'assets/images/cert.jpg' },
        { title: 'UI/UX Design', image: 'assets/images/cert.jpg' },
        { title: 'Project Management', image: 'assets/images/cert.jpg' },
    ];

    let currentIndex = 0;

    // Populate certificate grid
    certificates.forEach((cert, index) => {
        const certElement = document.createElement('div');
        certElement.classList.add('certificate');
        certElement.innerHTML = `
            <img src="${cert.image}" alt="${cert.title}">
            <h3>${cert.title}</h3>
        `;
        certElement.addEventListener('click', () => openPopup(index));
        certificateGrid.appendChild(certElement);
    });

    function openPopup(index) {
        currentIndex = index;
        popupImage.src = certificates[currentIndex].image;
        overlay.style.display = 'block';
    }

    function closePopup() {
        overlay.style.display = 'none';
    }

    function showPrevious() {
        currentIndex = (currentIndex - 1 + certificates.length) % certificates.length;
        popupImage.src = certificates[currentIndex].image;
    }

    function showNext() {
        currentIndex = (currentIndex + 1) % certificates.length;
        popupImage.src = certificates[currentIndex].image;
    }

    closeBtn.addEventListener('click', closePopup);
    prevBtn.addEventListener('click', showPrevious);
    nextBtn.addEventListener('click', showNext);

    // Close popup when clicking outside the image
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            closePopup();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (overlay.style.display === 'block') {
            switch (e.key) {
                case 'ArrowLeft':
                    showPrevious();
                    break;
                case 'ArrowRight':
                    showNext();
                    break;
                case 'Escape':
                    closePopup();
                    break;
            }
        }
    });
});