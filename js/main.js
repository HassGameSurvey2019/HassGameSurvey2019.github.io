
(function ($) {
    "use strict";


    /*==================================================================
    [ Focus Contact2 ]*/
    /*
    $('.input3').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })    
    })
    */


    /*==================================================================
    [ Chose Radio ]*/

    $("#radio1").on('change', function () {
        if ($(this).is(":checked")) {
            $('.input3-select').slideUp(300);
        }
    });

    $("#radio2").on('change', function () {
        if ($(this).is(":checked")) {
            $('.input3-select').slideDown(300);
        }
    });




    /*==================================================================
    [ Validate ]*/
    var name = $('.validate-input input[name="name"]');
    var email = $('.validate-input input[name="email"]');
    var message = $('.validate-input textarea[name="message"]');

    /*
    $('.validate-form').on('submit',function(){
        var check = true;

        if($(name).val().trim() == ''){
            showValidate(name);
            check=false;
        }


        if($(email).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
            showValidate(email);
            check=false;
        }

        if($(message).val().trim() == ''){
            showValidate(message);
            check=false;
        }

        return check;
    });


    $('.validate-form .input3').each(function(){
        $(this).focus(function(){
           hideValidate(this);
       });
    });

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    */

    $("html").css({
        "touch-action": "pan-down"
    });

})(jQuery);

document.getElementById("Pretest").hidden = true;
document.getElementById("Post-test").hidden = true;
document.getElementById("Leaderboard").hidden = true;
document.getElementById("full_game").hidden = true;
document.getElementById("next_btn2").hidden = true;

document.getElementById("next_btn").onclick = function () {
    document.getElementById("Informed_Consent").hidden = true;
    document.getElementById("next_btn").hidden = true;

    document.getElementById("Pretest").hidden = false;
    document.getElementById("next_btn2").hidden = false;
    console.log("NEXT");
}

document.getElementById("next_btn2").onclick = function () {
    document.getElementById("Pretest").hidden = true;
    document.getElementById("next_btn2").hidden = true;
    document.getElementById("full_form").hidden = true;

    document.getElementById("full_game").hidden = false;
    console.log("NEXT");
}

function onLeaderboard() {
    console.log("LB");
    document.getElementById("full_game").hidden = true;
    document.getElementById("Leaderboard").hidden = false;
    //document.getElementById("full_form").hidden = false;
    //document.getElementById("Post-test").hidden = false;
}

document.getElementById("next_btn3").onclick = function () {
    document.getElementById("Leaderboard").hidden = true;

    document.getElementById("full_form").hidden = false;
    document.getElementById("Post-test").hidden = false;
}

