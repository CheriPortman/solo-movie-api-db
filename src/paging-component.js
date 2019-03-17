const pagingSection = document.getElementById('paging-section');
const previousButton = document.getElementById('previous-button');
const nextButton = document.getElementById('next-button');
const currentPage = document.getElementById('current-page');
const totalPages = document.getElementById('total-pages');

const PER_PAGE = 20;
let totalPageCount = 0;
let currentPageNumber = 0;


export function updatePagingInfo(pagingInfo) {
    pagingSection.classList.remove('hidden');
    totalPageCount = pagingInfo.totalPages;
    currentPageNumber = pagingInfo.page;
    currentPage.textContent = currentPageNumber;
    nextButton.disabled = currentPageNumber === totalPageCount;
    previousButton.disabled = currentPageNumber === 1;
    totalPages.textContent = totalPageCount;
}

export default function loadPaging(callback) {
    
    function callPagingCallback() {
        const pagingOptions = {
            page: currentPageNumber,
            perPage: PER_PAGE
        };
        
        callback(pagingOptions);  //so we're passing pagingOptions up to index.js via butten event listener?
    }

    nextButton.addEventListener('click', () => {
        currentPageNumber++;
        callPagingCallback();
    });
    
    previousButton.addEventListener('click', () => {
        currentPageNumber--;
        callPagingCallback();
    });
        
}
    

// const totalPageCount = Math.ceil(totalCount / PER_PAGE);