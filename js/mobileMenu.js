// JQuery script to open and close mobile menu on click
$(function()
{
	var menu_is_visible = false;

	$('#hamburger a').click(function()
	{
		if(menu_is_visible)
		{
			$('#menu a').css({'display':'none'});
			menu_is_visible = false;
			return;
		}

		$("#menu").fadeToggle();
		$("#hamburger a").fadeToggle();
		menu_is_visible = true;
	});

	$('#menu').click(function()
	{
		$(this).fadeToggle();
		$("#hamburger a").fadeToggle();
		menu_is_visible = false;
	});
});