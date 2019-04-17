function clearForm(oForm) {
    var form_elements = oForm.elements;

    for (i=0; i<form_elements.length; i++) {
        field_type = form_elements[i].type.toLowerCase();
        switch (field_type) {
            case "checkbox":
                $(form_elements[i]).attr("checked", false);
                break;
            case "text":
                $(form_elements[i]).attr("value", "");
                break;
            case "select-one":
            case "select-multiple":
                $(form_elements[i]).find('option').removeAttr('selected').filter('[value=""]').attr('selected', true);
                break;
            default:
                break;
        }
    }
}
