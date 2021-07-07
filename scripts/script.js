window.onload = function(){

/*--------------------------------- variables ------------------------------------*/
//small screennavbar variables
const smallNav = $(".nav-2");
var label = $(".label");
var subMenuLabel = $(".sub-menu-label");
var backBtn = $(".back")

//hamburger menu variables
const menuBtn = $('.menu-btn');
let menuOpen = false;
const pageOverlay = $(".page-overlay");

//adjusting the width of the large screen nav
const largeNavBrand = $("#large-screen-nav .brand");
const largeScreenFirstUl = $("#large-screen-nav .first-ul");
const largeScreenNav = $("#large-screen-nav .container");

//large sreen navbar variables
var firstSubLabel = $(".first-sub-label");
var secondSubLabel = $(".second-sub-label");

//header variables
var windowWidth = $(window).width();
var windowHeight = $(window).height();
var header = $('#home-header');

//open extra products in home-page
var loadMoreBtn = $("#products .load-more-a");
var productsRow = $(".products-row");
let homeExtraProducts = false;

//product images variables
var productImg = $(".product-img img");
// var otherProductsImg = $(".other-products img");
var otherProductsImg = $(".product-img-small");
//card imgs variables
var cardImg = $(".product-img");
var listImg = $(".image-list img");

/* ----- order now modal variables ----- */
//order-now modal variables
var orderNowModalH5 = $(".order-now-modal h5");
var itemName = $(".item-title h2");
//view the other modal face variables
var orderNowModalBtn = $(".order-now-modal .modal-footer button");
var orderNowSubmitBtn = $("#order-now-form input[type=submit]");
var modalChecked = $(".modal-checked");
//blur order now button
var orderNowbtn = $(".order-now");
//add class checked
var orderNowForm = $("#order-now-form");

//adjust minimum main tag height
var main = $("main");
var footer = $("footer");



//filter-form variables
var filter = $(".filter");
var openFilterBtn = $(".filter-button .btn");
var closeFilterBtn = $("#filter-form .close");
var closeFilterTimes = $("#filter-form .close-times");

//quick-msg-form variables
const quickMsgFormSubmitBtn = $("#quick-msg-form-submit-form");


//category-search-swiper variables
const firstCategorySwiperSlide = $(".first-swiper-slide");
const goToFirstSlideBtn = $(".go-to-first-slide-btn");
var categorySearchSwiper = $(".category-search-swiper");


/*--------------------------------- functions ------------------------------------*/

//add titles to sub-menu
for(i=0; i<label.length; i++){
    label[i].innerText = $(label[i]).closest("ul").siblings(".sub-menu-label").children("span").text();
}
//add multi level slides to the navbar
subMenuLabel.click(function(e){
    e.preventDefault();
    $(this).siblings('ul').addClass("opened")
})
backBtn.click(function(){
    $(this).closest("ul").removeClass("opened")
})
//for adding text to get back button
for(i=0; i<backBtn.length; i++){
    let thisBackBtn = $(backBtn[i]);
    let backBtnParent = thisBackBtn.parents().parents("ul").eq(0);
    let backBtnText = backBtnParent.siblings(".sub-menu-label").children("span").text();

    if(backBtnParent.hasClass("first-ul")){
        thisBackBtn.children('span').text("القائمة الرئيسية");
    } else {
        thisBackBtn.children('span').text(backBtnText);
    }
}

//hamburger menu function
function smallScreenNavOpen(){
    if(!menuOpen){
        menuBtn.addClass('open');
        smallNav.addClass('nav-open');
        pageOverlay.addClass("opened");
        menuOpen = true;
    } else {
        menuBtn.removeClass('open');
        smallNav.removeClass('nav-open');
        pageOverlay.removeClass("opened");
        menuOpen = false;
        if(subMenuLabel.siblings('ul').hasClass("opened")){
            subMenuLabel.siblings('ul').removeClass("opened")
        }
    };
};
menuBtn.click(smallScreenNavOpen);
pageOverlay.click(smallScreenNavOpen);


//adjusting the width of the large screen nav
function adjustingWidthOfLargeNav(){
    largeScreenFirstUl.width(largeScreenNav.width() - (largeNavBrand.width() + 100))
}
adjustingWidthOfLargeNav()


//large sreen navbar
firstSubLabel.click(function(e){
    e.preventDefault();
    $(".second-sub").removeClass("second-sub-open");
    if(!$(this).closest(".first-sub").hasClass("first-sub-open")){
        $(".first-sub").removeClass("first-sub-open");
        $(".first-sub").removeClass("nav-item-first");
        $(".first-sub").addClass("nav-item-first");
        $(this).closest(".first-sub").addClass("first-sub-open");
        $(this).closest(".nav-item").removeClass("nav-item-first");
    } else {
        $(this).closest(".first-sub").removeClass("first-sub-open");
        $(this).closest(".nav-item").addClass("nav-item-first");
        $(this).blur()
    }
})
secondSubLabel.click(function(e){
    e.preventDefault();
    
    if(!$(this).closest(".second-sub").hasClass("second-sub-open")){
        $(".second-sub").removeClass("second-sub-open");
        $(this).closest(".second-sub").addClass("second-sub-open");
    } else {
        $(this).closest(".second-sub").removeClass("second-sub-open");
        $(this).blur();
    }
})



var nav = $("#navbars");
// add the scroll effect on the nav bar
$(window).scroll(function(){
    var sc = $(window).scrollTop();
    if (sc > 100){
        nav.addClass("sticky")
    }else{
        nav.removeClass("sticky")
    }
});//end of menu scroll effect

//header height
function headerHeight(){
    if (windowWidth/windowHeight <= 1 && windowWidth > 600){
        header.height(windowHeight/2);

        //remove scroll button
        $(".scroll-for-products-contaier").css('display', 'none')
        $("#home-header p").css('padding-bottom', '0')
    } else {
        header.height(windowHeight - $("#navbars").height());
        $(".scroll-for-products-contaier").css('display', 'flex')
        $("#home-header p").css('padding-bottom', '40px')
    }
}
// headerHeight();


//open serach 
let formOpen = false;
$(".open-nav-btn i").click(openSearch);
$(".nav-search-form button").click(function(e){
    e.preventDefault()
});
function openSearch(){
    if(!formOpen){
        $(".nav-search-form").addClass("opened");
        $(".for-styling").addClass("opened");
        formOpen = true;
    } else{
        $(".nav-search-form").removeClass("opened");
        $(".for-styling").removeClass("opened");
        formOpen = false;
    }
};

//make scroll down link work
$(".scroll-for-products").click(function(e){
    $(this).blur();
    e.preventDefault();
    $([document.documentElement, document.body]).animate({
        scrollTop: ($("main").offset().top - $("#navbars").height() - 60)
    }, 1000)
    
});


//open extra products in home-page
function openHomeExtraProducts(){
    if(!homeExtraProducts){
        productsRow.addClass("show");
        loadMoreBtn.text("اعرض اقل")
        homeExtraProducts = true;
    } else {
        productsRow.removeClass("show");
        loadMoreBtn.text("اعرض المزيد")
        homeExtraProducts = false;

        $([document.documentElement, document.body]).animate({
            scrollTop: ($("main").offset().top + $("main").height() - $("#navbars").height() - 300)
        }, 10)
    }
}
loadMoreBtn.click(function(e){
    $(this).blur();
    openHomeExtraProducts();
})


//product images update
function updateProductImg(){
    productImg.attr('src', $(this).attr('src'));
    productImg.attr('alt', $(this).attr('alt'));
}
listImg.click(updateProductImg);



/* ----- order now modal functions ----- */
//rename modal header
function renameThat(nameToReplace, name){
    nameToReplace.text(name.text());
};
renameThat(orderNowModalH5, itemName);
//blur order now button function
orderNowbtn.click(function(){
    $(this).blur();
});
//view the other modal face
orderNowModalBtn.click(function(e){
    e.preventDefault()
    orderNowSubmitBtn.trigger("click");
});
//add class checked
orderNowForm.submit(function(e){
    e.preventDefault();
    modalChecked.addClass("checked");
    $('#order-now-form input[type="text"], textarea').val('')
    $('#order-now-form input[type="number"]').val('')
})
//remove class checked
$('#exampleModal').on('hidden.bs.modal', function () {
    orderNowbtn.blur();
    if(modalChecked.hasClass("checked")){
        modalChecked.removeClass("checked");
    }
});



//filter-form functions
//open filter in small screen
function openFilter(){
    filter.addClass("filter-opened");
    $([document.documentElement, document.body]).animate({
        scrollTop: ($("main").offset().top - $("#navbars").height())
    }, 1000);
};
openFilterBtn.click(function(e){
    e.preventDefault();
    openFilter();
});
//close filter in small screen
function closeFilter(){
    filter.removeClass("filter-opened");
    $([document.documentElement, document.body]).animate({
        scrollTop: ($(".other-products").offset().top - $("#navbars").height())
    }, 1000);
}
closeFilterBtn.click(function(e){
    e.preventDefault();
    closeFilter();
})
closeFilterTimes.click(function(e){
    e.preventDefault();
    closeFilter();
})


//trigger quick-msg-form 
quickMsgFormSubmitBtn.click(function(e){
    e.preventDefault();
    $("#quick-msg-form input[type=submit]").trigger("click");
})

//toggle class disapled to go-to-first-swiper-slide-btn
categorySearchSwiper.click(function(){
    if(!firstCategorySwiperSlide.hasClass("swiper-slide-active")){
        goToFirstSlideBtn.removeClass("disabled");
    } else if(firstCategorySwiperSlide.hasClass("swiper-slide-active") && !goToFirstSlideBtn.hasClass("disabled")){
        goToFirstSlideBtn.addClass("disabled");
    }
})
//add functionality to go-to-first-swiper-slide-btn
goToFirstSlideBtn.click(function(){
    swiper3.slideTo(0, 0, false);
    $(this).addClass("disabled");
    $(this).blur();
})


//function to adjust minimum main tag height
function adjustMinMainHeight(){
    let minHeight = windowHeight - (footer.height() + $("header").height() + nav.height());
    main.css("min-height", minHeight);
}
adjustMinMainHeight()

//square img function
function squareImg(img){
    img.height(img.width());
};

squareImg(cardImg);
squareImg(listImg);
// squareImg(otherProductsImg);


$(window).resize(function(){
    adjustingWidthOfLargeNav();
    // headerHeight();
    squareImg(cardImg);
    squareImg(listImg);
    adjustMinMainHeight();
});
/*--------------------------------- impeded functions ------------------------------------*/

//swiper
var swiper1 = new Swiper('.swiper-1', {
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,
    effect: 'fade',
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
      clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});







//swiper for other products which appears in product page
var swiper2 = new Swiper('.other-products-swiper', {
    slidesPerView: 2,
    spaceBetween: 10,
    // init: false,
    pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        hide: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        disabledClass: '.',
      },
    breakpoints: {
      640: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },
    allowTouchMove: true,
});


// swiper3 for category and search page
var swiper3 = new Swiper('.category-search-swiper', {
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      },
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    speed: 0,
    allowTouchMove: false,
});





/*--------------------------------- trail functions ------------------------------------*/










//remove loader
const loader = $("#loader-background");
loader.addClass("hidden");
$("body").removeClass("non-over-flow");
//end of onload function
};