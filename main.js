// selecteerd de bow tie knop met interactie naam toggleSearch
let toggleSearch = document.querySelector('.bow-tie')
// selecteerd de searchbar-fold div met interactie naam targettedDiv
let targettedDiv = document.querySelector('.searchbar');

// eventlistener voor toggleSearch via click, function naam ''fold''
toggleSearch.addEventListener('click', fold)

// function fold toggle classlist ''Jump''
function fold(e) {
    targettedDiv.classList.toggle('show')
}