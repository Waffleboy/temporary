$(function() {
    //----- OPEN
    $('[data-popup-open]').on('click', function(e)  {
        var targeted_popup_class =
            jQuery(this).attr('data-popup-open');
        $('[data-popup="' + targeted_popup_class +
            '"]').fadeIn(350);

        e.preventDefault();
    });

    //----- CLOSE
    $('[data-popup-close]').on('click',
        function(e)  {
            var
            targeted_popup_class =
                jQuery(this).attr('data-popup-close');
            $('[data-popup="'
                +
                    targeted_popup_class
                    +
                    '"]').fadeOut(350);

            e.preventDefault();
        });

				$('.trigger-load').on('click', function() {
						$('body').addClass("loading");
				});
});

function updatetext(html_ele) {
    var curr_text = $(".modal-formula")[0].value;
    $(".modal-formula").val(curr_text + html_ele).focus();
}
function updateformula() {
    var formula = $(".modal-formula")[0].value;
    $(".o-rank-box input").val(formula).attr("size", formula.length+1);
}
