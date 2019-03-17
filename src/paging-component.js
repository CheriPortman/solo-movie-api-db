const pagingSection = document.getElementById('paging-section');
const previousButton = document.getElementById('previous-button');
const nextButton = document.getElementById('next-button');
const currentPage = document.getElementById('current-page');
const totalPages = document.getElementById('total-pages');

let currentPageNumber = 0;

export function updatePagingInfo(pagingInfo) {
    pagingSection.classList.remove('hidden');
    currentPageNumber = pagingInfo.page;
    currentPage.textContent = currentPageNumber;
    totalPages.textContent = pagingInfo.totalPages;
    nextButton.disabled = currentPageNumber === pagingInfo.totalPages;
}

export default function loadPaging(callback) {
    nextButton.addEventListener('click', () => {
        callback({ page: currentPageNumber + 1 }); //so current page number is passed up to index.js via eventlistener?
    });
    
    previousButton.addEventListener('click', () => {
        callback({ page: currentPageNumber - 1 });
    });       
}