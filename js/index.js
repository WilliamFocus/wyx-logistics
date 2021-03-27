window.addEventListener('load',function() {
    // 封装动画函数(目标元素-目标位置-结束回调)
    function animate(obj, target, callback) {    
        clearInterval(obj.timer);
        obj.timer = setInterval(function() {
            var step = (target - obj.offsetLeft) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            if (obj.offsetLeft == target) {
                clearInterval(obj.timer);
                callback && callback();
            }
            obj.style.left = obj.offsetLeft + step + 'px';
        }, 15);
    };

    // 轮播图片功能
    var slider  = document.querySelector('.slider');
    var btnLeft = slider.querySelector('.btn_left');
    var btnRight = slider.querySelector('.btn_right');
    var sliderWidth = slider.offsetWidth;
    slider.addEventListener('mouseenter',function() {
        btnLeft.style.display = 'block';
        btnRight.style.display = 'block';
        clearInterval(timer);
        timer = null;
    });
    slider.addEventListener('mouseleave',function() {
        btnLeft.style.display = 'none';
        btnRight.style.display = 'none';
        timer = setInterval(function() {
            btnRight.click();
        },3000)
    });
    // 小圆点切换
    var sliderUl = slider.querySelector('ul');
    var sliderOl = slider.querySelector('.circle');
    for(var i = 0; i < sliderUl.children.length; i++) {
        var li = document.createElement('li');
        li.setAttribute('data-index',i);
        sliderOl.appendChild(li);
        li.addEventListener('click',function() {
            for(var i = 0; i < sliderOl.children.length; i++) {
                sliderOl.children[i].classList.remove('slider_current');
            }
            this.classList.add('slider_current');
            var index = this.getAttribute('data-index');
            circle = num = index;
            animate(sliderUl,-index * sliderWidth);
        })
    }
    sliderOl.children[0].classList.add('slider_current');
    var firstImg = sliderUl.children[0].cloneNode(true);
    sliderUl.appendChild(firstImg);
    // 左右按钮
    var num = 0;
    var circle = 0;
    var flag = true;
    // 圆点切换函数
    function circleChange() {
        for(var i = 0; i < sliderOl.children.length; i++) {
            sliderOl.children[i].classList.remove('slider_current');
        }
        sliderOl.children[circle].classList.add('slider_current');
    };
    btnLeft.addEventListener('click',function() {
        // 节流阀
        if(flag) {
            flag = false;
            if(num == 0) {
                num = sliderUl.children.length - 1;
                sliderUl.style.left = -num * sliderWidth + 'px';
            }
            num--;
            animate(sliderUl,-num * sliderWidth,function() {
                flag = true;
            });
            circle--;
            circle = circle < 0 ? sliderOl.children.length - 1 : circle;
            circleChange();
        }
    });
    btnRight.addEventListener('click',function() {
        // 节流阀
        if(flag) {
            flag = false;
            if(num == sliderUl.children.length - 1) {
                sliderUl.style.left = 0;
                num = 0;
            }
            num++;
            animate(sliderUl,-num * sliderWidth,function() {
                flag = true;
            });
            circle++;
            circle = num == sliderOl.children.length ? 0 : circle;
            circleChange();
        }
    });
    // 自动播放
    var timer = setInterval(function() {
        btnRight.click();
    },3000);

    // 为什么选我们
    var choose = document.querySelector('.choose');
    var chooseDls = choose.querySelectorAll('.tab > dl');
    var chooseUl = choose.querySelector('.items > ul')
    var chooseWidth = choose.offsetWidth;
    for(var i = 0; i < chooseDls.length; i++) {
        chooseDls[i].setAttribute('data-index',i);
        chooseDls[i].addEventListener('mouseenter',function() {
            var index = this.getAttribute('data-index');
            for(var i = 0; i < chooseDls.length; i++) {
                chooseDls[i].classList.remove('tab_current');
            }
            this.classList.add('tab_current');
            animate(chooseUl,-index*chooseWidth);
        })
    }

    // 新闻
    var news = document.querySelector('.news');
    var newsTitle = news.querySelectorAll('.news_msg > span');
    var newsList = news.querySelector('.news_list');
    var newsWidth = news.offsetWidth;
    for(var i = 0; i < newsTitle.length; i++) {
        newsTitle[i].setAttribute('data-index',i);
        newsTitle[i].addEventListener('mouseenter',function() {
            var index = this.getAttribute('data-index');
            for(var i = 0; i < newsTitle.length; i++) {
                newsTitle[i].classList.remove('news_current');
            }
            this.classList.add('news_current');
            animate(newsList,-index*newsWidth);
        })
    }

    // 返回顶部
    var sidebar = document.querySelector('.sidebar');
    var goTop = sidebar.querySelector('.go_top');
    document.addEventListener('scroll',function() {
        if (window.pageYOffset >= slider.offsetTop) {
            sidebar.style.display = 'block';
        } else {
            sidebar.style.display = 'none';
        }
    })
    goTop.addEventListener('click',function() {
        clearInterval(window.goTopTimer);
        window.goTopTimer = setInterval(function() {
            var step = (0 - window.pageYOffset) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            if(window.pageYOffset == 0) {
                clearInterval(goTopTimer);
            }
            window.scroll(0,window.pageYOffset + step)
        },15)
    });

})