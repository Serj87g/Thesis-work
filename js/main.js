
$(document).ready(() => {

                                            //КАРУСЕЛЬ
    $('.masters-slick').slick({
        infinite: true,
        dots: true,
        centerMode: true,
        adaptiveHeight: true,
        speed: 800,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    centerMode: false,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    infinite: true,
                    dots: false
                }
            }
        ]
    });

                                            //АНИМАЦИЯЯ WOW
    new WOW().init();


                                            //jquery data
    $( function() {
        $( "#datepicker" ).datepicker();
    } );


                                            //МЕНЮ БУРГЕР
    $('#burger').click(() => {
        $('.menu-open, #header-close').show();
    });

    $('#header-close').click(() => {
        $('.menu-open, #header-close').hide();
    });


                                            //ПОЛУЧЕНИЕ СКИДКИ
    var discount = $('.button')[2];
    $(discount).click(() => {
        $('#discount-popup').css('display', 'flex');
    });
    $('#discount-close').click(() => {
        $('#discount-popup').hide();
    });


                                            //ФОРМА ЗАЯВКИ
    var buttonOnline = $('.button')[0];                 /*записаться онлайн*/
    var buttonForm = $('.button')[3];                   /*оформить заявку*/
    var buttonMaster = $('.master-button');             /*записаться*/
    var masterClose = $('.close')[0];
    var input = $('input,select', '#application-container');

    $(buttonOnline).click(function () {
        $('#application-popup').css('display', 'flex');
        console.log('form')
    });
    $(masterClose).click(() => {
        $('#application-popup').css('display', 'none');
    });
    $(buttonMaster).click(function () {
        $('#application-popup').css('display', 'flex');
        console.log('form')
    });
    $(masterClose).click(() => {
        $('#application-popup').css('display', 'none');
    });


                                            //ОТПРАВКА ФОРМЫ
    var name = $('#name');
    var cervice = $('#cervice');
    var datepickerForm = $('#datepicker');
    var number = $('#number');
    var masterApp = $('#master-app');
    var time = $('#time-app');
    $(buttonForm).click(() => {
        $('.error-input').hide();
        input.css('border-color', '#AE8959FF');

        if (!name.val()) {                              //Если нет значения
            name.siblings('.error-input').css('display', 'flex');    //Ближайший блок отобразить
            name.css('border-color', 'red');
        }
        if (!cervice.val()) {
            cervice.siblings('.error-input').css('display', 'flex');
            cervice.css('border-color', 'red');
        }
        if (!datepickerForm.val()) {
            datepickerForm.siblings('.error-input').css('display', 'flex');
            datepickerForm.css('border-color', 'red');
        }
        if (!number.val()) {
            number.siblings('.error-input').css('display', 'flex');
            number.css('border-color', 'red');
        }
        if (!masterApp.val()) {
            masterApp.siblings('.error-input').css('display', 'flex');
            masterApp.css('border-color', 'red');
        }
        if (!time.val()) {
            time.siblings('.error-input').css('display', 'flex');
            time.css('border-color', 'red');
            return;
        }
        else {
            var loader = $('#loader');
            loader.css('display', 'flex');

            $.ajax({
                method: "POST",
                url: "admin@barbershop.com",
                data: {                                 //Передача данных при GET можно не передавать и удалить строку
                    name: name.val(), cervice: cervice.val(), datepickerForm: datepickerForm.val(),
                    number: number.val(), masterApp: masterApp.val(), time: time.val()}
            })

            $('#application-popup').css('display', 'none');
            loader.hide();
            $('#thanks-popup').css('display', 'flex');

            $($('.close')[1]).click(() => {
                $('#thanks-popup').css('display', 'none');
                console.log('close');
            });
        }
    });
});

