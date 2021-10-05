jQuery(document).ready(function($){

    var steps=document.getElementById('steps');

    if ( steps != null && typeof steps !== "undefined"){
        var lis=steps.getElementsByTagName('li');
        for(i = 0; i<lis.length; i++) {
            lis[i].onclick=applyJump;
        }
    }

    function applyJump()
    {
        //alert(this.getElementsByTagName('a')[0]);
        //alert(this.id+' has been clicked !');
        window.location = this.getElementsByTagName('a')[0];
    }

    function acceptCheck(checkbox,button) {
        var chk = checkbox.is(":checked");
        button.prop("disabled", !chk).toggleClass("blue-button19",chk);  // possibly add .button('refresh'); for JQM
    }

    jQuery("#terms_agree_sign").on("click", function() {
        acceptCheck($(this), $("#btnAccept"));
    });
    // if user checks, leaves and returns, we need to enable the button
    acceptCheck($("#TermAcceptCheckBox"), $("#btnAccept"));

    /*
    $(':checkbox').on('change', function () {
        $('input[type="submit"]').prop('disabled', !$(':checkbox:checked').length);
    }).change();

    //// only apply to step-1

    if($("#clients-value-apply_step1").val()){
        $(".btn").attr("disabled", !$('input[name="Clients[client_applic_type][]"]').is(":checked"));

        // disable submit unless at least one client_type is selected
        $('input[name="Clients[client_applic_type][]"]').click(function() {
            $(".btn").attr("disabled", !$('input[name="Clients[client_applic_type][]"]').is(":checked"));
        });
    }
    */

    jQuery('.group-hover').hover(
        function(){
            $(this).addClass('group-hover-on-input');
        },
        function(){
            if ($(this).find('input').is(':focus')){
                return false;
            }
            $(this).removeClass('group-hover-on-input');
        }).find('input').focus(
        function(){
            $(this).closest('.group-hover').addClass('group-hover-on-input');
        }).blur(
        function(){
            $(this).closest('.group-hover').removeClass('group-hover-on-input');
        }
    );

    /*
    * https://craftpip.github.io/jquery-confirm/
    * */
    jQuery('a.maprel').confirm({
        escapeKey: true,
        backgroundDismiss: true,
        content: 'This will release your map reservation and allow others to select it.',
        useBootstrap: false,
        boxWidth: '300px',
        buttons: {
            Yes: function(){
                location.href = this.$target.attr('href');
            },
            No: function(){
                // return false;
            }
        }
    });

    jQuery('#clients-form').parsley({
        excluded: '.pair-value-input'
    });

    jQuery('.btn-form-download').click(function(){
        var url = $(this).attr('href');
        window.open(url, '_blank');
        return false; //stop Propagation
    });

    jQuery('.btn-form-register').click(function(){
        var url = $(this).attr('href');
        window.open(url, '_self');
        return false; //stop Propagation
    });

	new jBox('Tooltip', {
	  attach: '.tooltip',
      maxWidth: '300px',
      pointer: 'left:15',
	});

    jQuery(".amenity_qty").spinner({
        min: 0
    });

    jQuery('.amenity_qty').on("spinstop", function(){
        var qty = $(this).spinner('value');
        var spin_chkbox_id = $(this).attr('id').replace('qty', 'type');
        var note_id =  $(this).attr('id').replace('amenity_qty_', 'badge_note_');
        if(qty > 0){
            $("#"+spin_chkbox_id).prop('checked', true);
            $("#"+note_id).css("display","initial");
        }else{
            $("#"+spin_chkbox_id).prop('checked', false);
            $("#"+note_id).css("display","none");
        }
    });

    jQuery(".amenity_qty_single").spinner({
        min: 0,
        max: 1,
        change: function(event, ui){

            var qty_id = $(this).attr('id');
            min = 0;
            max = 1;
            var value = this.value;

            if (!value.match(/^\d+$/)){ // Value is non-numerical
                /** Set the value to the previous value */
                value = 0;

            } else { // Value is numerical

                /** Check that value falls within min and max range */
                if(value > min){
                    value = max;
                } else if(value < min){
                    value = min;
                }
            }

            /** Send the correct value to the spinner (if it needs changing) */
            if(value !== $("#"+qty_id).val){
                $("#"+qty_id).val(value);
            }
        }
    });

    jQuery(".amenity_qty_single").on("spinstop", function(){
        var qty = $(this).spinner('value');
        var spin_chkbox_id = $(this).attr('id').replace('qty', 'type');
        if(qty > 0){
            $("#"+spin_chkbox_id).prop('checked', true);
        }else{
            $("#"+spin_chkbox_id).prop('checked', false);
        }
    });

    jQuery('.amenity_type:checkbox').on('change', function () {
        var checkbox_id = $(this).attr('id');
        var qty_id = $(this).attr('id').replace('type', 'qty');
        var note_id = qty_id.replace('amenity_qty_', 'badge_note_');

        if ($(this).is(":checked")) {
            $("#"+qty_id).val("1");
            $("#"+note_id).css("display","initial");
        }else{
            $("#"+qty_id).val("0");
            $("#"+note_id).css("display","none");
        }
    });

    jQuery('.amenity_type:radio').on('change', function () {
        var checkbox_id = $(this).attr('id');
        var qty_id = $(this).attr('id').replace('type', 'qty');
        if ($(this).is(":checked")) {
            $("#"+qty_id).val("1");

            $('.amenity_type:radio').not(":checked").each(function() {
                var checkbox_id = $(this).attr('id');
                var qty_id = $(this).attr('id').replace('type', 'qty');
                $("#"+qty_id).val("0");
            });
        }
    });
});