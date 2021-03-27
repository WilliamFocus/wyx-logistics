window.addEventListener('load', function () {
    var aboutNav = document.querySelectorAll('.about_center > a');
    var aboutBody = document.querySelector('.about > .about_body')
    var ul = aboutBody.querySelector('.about_body > ul');
    var cultureBox = aboutBody.querySelectorAll('.about_culture .culture_box');
    var Width = aboutBody.offsetWidth;
    function animate(obj, target) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var step = (target - obj.offsetLeft) / 20;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            if (obj.offsetLeft == target) {
                clearInterval(obj.timer);
            }
            obj.style.left = obj.offsetLeft + step + 'px';
        }, 15);
    };
    for (var i = 0; i < aboutNav.length; i++) {
        aboutNav[i].setAttribute('data-index', i);
        aboutNav[i].addEventListener('click', function () {
            var index = this.getAttribute('data-index');
            for (var i = 0; i < aboutNav.length; i++) {
                aboutNav[i].classList.remove('about_cur');
            };
            this.classList.add('about_cur');
            animate(ul, -index * Width);
            if (-index * Width == -1 * Width) {
                for (var i = 0; i < cultureBox.length; i++) {
                    cultureBox[i].style.animation = 'mymove 1s ease-in-out ' + i + 's forwards';
                }
            } else {
                for (var i = 0; i < cultureBox.length; i++) {
                    cultureBox[i].style.top = '350px';
                    cultureBox[i].style.animation = 'none';
                }
            }
        })
    }
    // 返回顶部
    var sidebar = document.querySelector('.sidebar');
    var goTop = sidebar.querySelector('.go_top');
    var header = document.querySelector('.header');
    var headerHeight = header.offsetHeight;
    document.addEventListener('scroll', function () {
        if (window.pageYOffset >= headerHeight) {
            sidebar.style.display = 'block';
        } else {
            sidebar.style.display = 'none';
        }
    });
    goTop.addEventListener('click', function () {
        clearInterval(window.goTopTimer);
        window.goTopTimer = setInterval(function () {
            var step = (0 - window.pageYOffset) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            if (window.pageYOffset == 0) {
                clearInterval(goTopTimer);
            }
            window.scroll(0, window.pageYOffset + step);
        }, 15)
    });
})