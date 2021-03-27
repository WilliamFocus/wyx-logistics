window.addEventListener('load', function () {
    // 左侧菜单显示
    var jieshao = document.querySelector('.left_box > .jieshao');
    var zengzhi = document.querySelector('.left_box > .zengzhi');
    var menuone = document.querySelector('.left_box > .one');
    var menutwo = document.querySelector('.left_box > .two');
    var jieshaoimg = jieshao.querySelector('img');
    var zengzhiimg = zengzhi.querySelector('img');
    var oneHeight = menuone.offsetHeight;
    var twoHeight = menutwo.offsetHeight;
    var flagone = true;
    var flagtwo = true;
    jieshao.addEventListener('click', function () {
        if (flagone) {
            menuone.style.height = '0px';
            jieshaoimg.style.transform = 'rotateZ(-90deg) scale(0.3)';
            flagone = false;
        } else {
            menuone.style.height = oneHeight + 'px';
            jieshaoimg.style.transform = 'rotateZ(90deg) scale(0.3)';
            flagone = true;
        }
    })
    zengzhi.addEventListener('click', function () {
        if (flagtwo) {
            menutwo.style.height = '0px';
            zengzhiimg.style.transform = 'rotateZ(-90deg) scale(0.3)';
            flagtwo = false;
        } else {
            menutwo.style.height = twoHeight + 'px';
            zengzhiimg.style.transform = 'rotateZ(90deg) scale(0.3)';
            flagtwo = true;
        }
    })
    // 服务页切换
    var serverTitle = document.querySelectorAll('.server_title > li');
    var serverContent = document.querySelectorAll('.right_box > div');
    for (var i = 0; i < serverTitle.length; i++) {
        serverTitle[i].setAttribute('data-index', i);
        serverTitle[i].addEventListener('click', function () {
            for (var i = 0; i < serverTitle.length; i++) {
                serverTitle[i].classList.remove('cur');
            }
            this.classList.add('cur');
            var index = this.getAttribute('data-index');
            for (var i = 0; i < serverContent.length; i++) {
                serverContent[i].style.display = 'none';
            }
            serverContent[index].style.display = 'block';
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
    })
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