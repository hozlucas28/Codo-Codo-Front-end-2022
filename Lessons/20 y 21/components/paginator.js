//Paginador - HTML.
function getPaginator(props) {
	const { page, total_pages } = props;

	const prevBtn = `
        <li class="page-item ${page > 1 ? '' : 'disabled'}">
            <a class="page-link" href="#" tabindex="-1" aria-disabled="true" onclick="getAPIRest(${page - 1});">
                Previous
            </a>
        </li>
    `;

	const nextBtn = `
        <li class="page-item ${page === total_pages ? 'disabled' : ''}">
            <a class="page-link" href="#" onclick="getAPIRest(${page + 1});">Next</a>
        </li>
    `;

	const html = `
        <nav aria-label="...">
            <ul class="pagination justify-content-center">
                ${prevBtn}
                ${getPagesButtons(page, total_pages)}
                ${nextBtn}
            </ul>
        </nav>
    `;

	return html;
}

//Botones de las páginas - Utilidad.
function getPagesButtons(currentPage, totalPages) {
	let html = ``;

	for (let i = 1; i <= totalPages; i++) {
		html += `
            <li class='page-item ${i === currentPage ? 'active' : ''}' aria-current='page'>
			    <a class='page-link' href='#' onclick="getAPIRest(${i});">${i}</a>
		    </li>
        `;
	}
	return html;
}
