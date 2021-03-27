window.addEventListener('load', function () {
    // 导航栏切换
    var newsNavs = document.querySelectorAll('.news_nav > a');
    var newsContainer = document.querySelector('.news_box > .news_container');
    var newsMain = newsContainer.querySelector('.news_main');
    for (var i = 0; i < newsNavs.length; i++) {
        newsNavs[i].setAttribute('data-index', i);
        newsNavs[i].addEventListener('click', function () {
            var index = this.getAttribute('data-index');
            for (var i = 0; i < newsNavs.length; i++) {
                newsNavs[i].classList.remove('news_cur');
            }
            this.classList.add('news_cur');
            function animate(obj, target, callback) {
                clearInterval(obj.timer);
                obj.timer = setInterval(function () {
                    var step = (target - obj.offsetLeft) / 10;
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);
                    if (obj.offsetLeft == target) {
                        clearInterval(obj.timer);
                        callback && callback();
                    }
                    obj.style.left = obj.offsetLeft + step + 'px';
                }, 15);
            };
            animate(newsMain, -index * newsContainer.offsetWidth);
        });
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