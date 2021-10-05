
jQuery(document).ready(function($) {

     $('#clients-client_merc').select2({
        'multiple': true,
        'initValueText': 'select all',
        'theme': 'krajee',
        'attributes': 'tags',
        'tags': true,
        'allowClear': true,
        'minimumInputLength': 2,
        'tokenSeparators': [','],
        'escapeMarkup': function (markup) { return markup; },
        'templateResult': function(Tags) { return Tags.text; },
        'templateSelection': function (Tags) { return Tags.text; }
    });
});