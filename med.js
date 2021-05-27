(function() {
    const header = document.querySelector('.header');
    const  line = document.querySelector('.line');
    window.onscroll = () => {
        if (window.pageYOffset > 40) {
            line.classList.add('moved'),
            header.classList.add('header_moved')
        } else
        line.classList.remove('moved'),
        header.classList.remove('header_moved')
    }
  }());

    const nav = document.querySelector('.nav');
    document.querySelector('.hamburger-menu').onclick = function() {
        this.classList.toggle('active-one');
        nav.classList.toggle('active');
    }