/*Kate SEA меняю стили header*/
import refs from './refs';


const Theme = {
    HOME: 'header__home__theme',
    MYLIBRARY: 'header__ml__theme',
};

refs.logoLink.addEventListener('click', onHomeClick);
refs.libraryLink.addEventListener('click', onMyLibraryClick);
refs.homeLink.addEventListener('click', onHomeClick);

function onHomeClick(event) {
    event.preventDefault();
    refs.headerForm.classList.remove('none');
    refs.button.classList.add('none');

    changeHeadersTheme(Theme.HOME);    
}

function onMyLibraryClick(event) {
    event.preventDefault();
    refs.button.classList.remove('none');
    refs.headerForm.classList.add('none');   
    
    changeHeadersTheme(Theme.MYLIBRARY); 
}


function changeHeadersTheme(theme) { 
    if(theme === Theme.HOME) {
        refs.header.classList.remove(Theme.MYLIBRARY);
        refs.header.classList.add(Theme.HOME);
        refs.homeLink.classList.add('nav__item--current');
        refs.libraryLink.classList.remove('nav__item--current');

    }  else {
        refs.header.classList.remove(Theme.HOME);
        refs.header.classList.add(Theme.MYLIBRARY);
        refs.homeLink.classList.remove('nav__item--current');
        refs.libraryLink.classList.add('nav__item--current');
    } 
}

