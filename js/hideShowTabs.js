// JQuery script to hide and show tabs from the
// desktop sidebar or the mobile menu
$(document).ready
(
    function()
    {
        $("#sidebar .maincategory a").click(function()
        {
            var x = this.id;

        	$("#textarea").children().hide();
            $("#" + x + "Tab").fadeToggle();
            $("#" + x + "Tab").parent().css('z-index', 3); // non-poems tab standing above photos
        });

        $("#sidebar .poemsubcategory a").click(function()
        {
        	var x = this.id;

        	$("#textarea").children().hide();
            $("#poemsTab").fadeToggle();
        });


        $("#menu .maincategory a").click(function()
        {
            var x = this.id;

            $("#textarea").children().hide();
            $("#" + x + "Tab").fadeToggle();
            $("#" + x + "Tab").parent().css('z-index', 3); // non-poems tab standing above photos
        });

        $("#menu .poemsubcategory a").click(function()
        {
            var x = this.id;

            $("#textarea").children().hide();
            $("#poemsTab").fadeToggle();
        });
    }
);