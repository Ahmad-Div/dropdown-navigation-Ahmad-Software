$(document).ready(function () {

    //show menu in mobile
    $("#nav-menu").click(function () {
        $(".menu-nav").toggle({
            "display": "flex",
        })
    })


    //drop down menu for computer

    //drop down menu of featurs
    $("#f-up-arrow").click(function () {
        $("#f-list-items").toggle({
            "display": "flex"
        })
        if ($("#f-up-arrow").hasClass("rotate-arrow")) {
            $("#f-up-arrow").removeClass("rotate-arrow");
        } else {
            $("#f-up-arrow").addClass("rotate-arrow");
        }
    })

    //drop down menu of featurs

    $("#c-up-arrow").click(function () {
        $("#c-list-items").toggle({
            "display": "flex"
        })
        if ($("#c-up-arrow").hasClass("rotate-arrow")) {
            $("#c-up-arrow").removeClass("rotate-arrow");
        } else {
            $("#c-up-arrow").addClass("rotate-arrow");
        }
    })


    //drop down menu for mobile

    //feature drop down menu

    $("#f-mob-up-arrow").click(function () {
        console.log("hello")
        $("#f-mob-list-items").toggle({
            "display": "grid"
        })
        if ($("#f-mob-up-arrow").hasClass("rotate-arrow")) {
            $("#f-mob-up-arrow").removeClass("rotate-arrow");
        } else {
            $("#f-mob-up-arrow").addClass("rotate-arrow");
        }
    })


    //company drop down menu




    $("#c-mob-up-arrow").click(function () {
        console.log("hello")
        $("#c-mob-list-items").toggle({
            "display": "flex"
        })
        if ($("#c-mob-up-arrow").hasClass("rotate-arrow")) {
            $("#c-mob-up-arrow").removeClass("rotate-arrow");
        } else {
            $("#c-mob-up-arrow").addClass("rotate-arrow");
        }
    })




})