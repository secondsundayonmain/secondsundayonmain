jQuery(document).ready(function($) {

    $('#clients-description').trumbowyg({
        btns: ['viewHTML', '|', 'undo', 'redo', '|', 'formatting', 'bold', 'italic', 'underline', '|', 'unorderedList', 'orderedList', 'link', '|', 'justifyLeft', 'justifyCenter', 'justifyRight', '|', 'horizontalRule', 'removeformat']
    });

    $('.rich-textarea').trumbowyg({
        btns: ['viewHTML', '|', 'undo', 'redo', '|', 'formatting', 'bold', 'italic', 'underline', '|', 'unorderedList', 'orderedList', 'link', '|', 'justifyLeft', 'justifyCenter', 'justifyRight', '|', 'horizontalRule', 'removeformat']
    });
});
