// Time Picker
jQuery('#fromTime').timepicker({
    showMeridian: false,
    icons: {
        up: 'mdi mdi-chevron-up',
        down: 'mdi mdi-chevron-down'
    }
});
jQuery('#toTime').timepicker({
    showMeridian: false,
    icons: {
        up: 'mdi mdi-chevron-up',
        down: 'mdi mdi-chevron-down'
    }
});


// Date Picker
jQuery('#fromDate').datepicker({
    autoclose: true,
    todayHighlight: true,
    format: 'dd/mm/yyyy',
    templates: {
        leftArrow: '<i class="mdi mdi-chevron-left"></i>',
        rightArrow: '<i class="mdi mdi-chevron-right"></i>'
    }
});
jQuery('#toDate').datepicker({
    autoclose: true,
    todayHighlight: true,
    format: 'dd/mm/yyyy',
    templates: {
        leftArrow: '<i class="mdi mdi-chevron-left"></i>',
        rightArrow: '<i class="mdi mdi-chevron-right"></i>'
    }
});