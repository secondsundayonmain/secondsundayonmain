jQuery(document).ready(function($) {

    $(".telephone").inputmask();
    // $('.telephone').inputmask('(999) 999-9999');
    // (07) 3323 3988, or 0450 123 456
    // $('.telephone').inputmask('(99) 9999-9999');

    $('input[type="file"]').each(function (index, content) {
        if(content.id.search("dynamicmodel-lic_id_") !== -1) {
            var fileInputJs = function(id) {
                $('#' + id).fileinput({
                    "allowedFileExtension": ["doc", "pdf", "docx"],
                    "showPreview": false,
                    "showCaption": true,
                    "showRemove": true,
                    "showUpload": false,
                    "mainClass": "input-group-md",
                    "browseClass": "btn btn-success",
                    "uploadClass": "btn btn-info",
                    "removeClass": "btn btn-danger",
                    "removeIcon": '<i class="fa fa-trash-o"></i>',
                    "multiple": false,
                    "language": "en",
                    "purifyHtml": true
                });
            };

            content.setAttribute("data-krajee-fileinput", fileInputJs(content.id));
        }
    });

    $(".amenity-label :checkbox").click(function(){
        var id = $(this).attr('id');
        var isChecked = $(this).is(":checked");
        var amen_a = id.split("_");
        var amenity = $("#amenity_qty_"+amen_a[2]);
        isChecked ? amenity.removeAttr("disabled") : amenity.attr("disabled", true);
    });
});

jQuery("#upload_get_skip_url").click(function(e){
    e.preventDefault();
    var url = document.getElementById('skipFilesUpload');
    window.location.assign(url);
});

function toMap(url) {
    window.location.assign(url);
}
