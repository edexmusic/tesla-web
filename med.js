(function() {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 40) {
            header.classList.add('header_moved')
        } else
        header.classList.remove('header_moved')
    }
  }());