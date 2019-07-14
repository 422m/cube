(function($) {
  $(function() {
  	$('#orderModal form').on('submit', function(){
			$.ajax({
			  method: "POST",
			  url: "calculation.php",
			  data: {contact : $(this).serializeArray(), device : $( "#select-device option:selected" ).text(), model : $( "#select-model option:selected" ).text(), malfunction : $( "#select-malfunction option:selected" ).text(), master : $( "#dep-master" ).val()},
			  dataType: 'json'
			}).done(function( data ) {
		    if(!data.error)
		    {
		    	$('#orderModal form').html('<div class="title"><div class="text-center">Thank you for your request!</div></div>')
		    }
		    else
		    {
		    	$('<div class="alert alert-danger" role="alert">' +
  					  data.error_msg.message +
					 	'</div>').prependTo('#orderModal form');
		    }
		  });
		  return false;
		});
  	$('#calculation form').on('submit', function(){
			$.ajax({
			  method: "POST",
			  url: "calculation.php",
			  data: {contact : $(this).serializeArray(), device : $( "#select-device option:selected" ).text(), model : $( "#select-model option:selected" ).text(), malfunction : $( "#select-malfunction option:selected" ).text(), master : $( "#dep-master" ).val()},
			  dataType: 'json'
			}).done(function( data ) {
		    if(!data.error)
		    {
		    	$('#calculation form').html('<div class="title"><div class="text-center">Thank you for your request!</div></div>')
		    }
		    else
		    {
		    	$('<div class="alert alert-danger" role="alert">' +
  					  data.error_msg.message +
					 	'</div>').prependTo('#calculation form');
		    }
		  });
		  return false;
		});
		$('#callbackModal form').on('submit', function(){
			$.ajax({
			  method: "POST",
			  url: "callback.php",
			  data: $(this).serialize(),
			  dataType: 'json'
			}).done(function( data ) {
		    if(!data.error)
		    {
		    	$('#callbackModal .modal-body').html('<div class="form"><div class="text-center">Thank you for your request!</div></div>')
		    }
		    else
		    {
		    	$('<div class="alert alert-danger" role="alert">' +
  					  data.error_msg.message +
					 	'</div>').prependTo('#callbackModal .modal-body');
		    }
		  });
		  return false;
		});
		$('#masterModal form').on('submit', function(){
			$.ajax({
			  method: "POST",
			  url: "master.php",
			  data: $(this).serialize(),
			  dataType: 'json'
			}).done(function( data ) {
		    if(!data.error)
		    {
		    	$('#masterModal .modal-body').html('<div class="form"><div class="text-center">Thank you for your request!</div></div>')
		    }
		    else
		    {
		    	$('<div class="alert alert-danger" role="alert">' +
  					  data.error_msg.message +
					 	'</div>').prependTo('#masterModal .modal-body');
		    }
		  });
		  return false;
		});
		$('#courierModal form').on('submit', function(){
			$.ajax({
			  method: "POST",
			  url: "master.php",
			  data: $(this).serialize(),
			  dataType: 'json'
			}).done(function( data ) {
		    if(!data.error)
		    {
		    	$('#courierModal .modal-body').html('<div class="form"><div class="text-center">Thank you for your request!</div></div>')
		    }
		    else
		    {
		    	$('<div class="alert alert-danger" role="alert">' +
  					  data.error_msg.message +
					 	'</div>').prependTo('#courierModal .modal-body');
		    }
		  });
		  return false;
		});
		$('#changeModal form').on('submit', function(){
			$.ajax({
			  method: "POST",
			  url: "change.php",
			  data: $(this).serialize(),
			  dataType: 'json'
			}).done(function( data ) {
		    if(!data.error)
		    {
		    	$('#changeModal .form').html('<div class="form"><div class="text-center">Thank you for your request!</div></div>')
		    }
		    else
		    {
		    	$('<div class="alert alert-danger" role="alert">' +
  					  data.error_msg.message +
					 	'</div>').prependTo('#changeModal .form');
		    }
		  });
		  return false;
		});
		$('#changeForm form').on('submit', function(){
			$.ajax({
			  method: "POST",
			  url: "change.php",
			  data: $(this).serialize(),
			  dataType: 'json'
			}).done(function( data ) {
		    if(!data.error)
		    {
		    	$('#changeForm').html('<div class="form"><div class="text-center">Thank you for your request!</div></div>')
		    }
		    else
		    {
		    	$('<div class="alert alert-danger" role="alert">' +
  					  data.error_msg.message +
					 	'</div>').prependTo('#changeForm');
		    }
		  });
		  return false;
		});
		$('#wsForm form').on('submit', function(){
			$.ajax({
			  method: "POST",
			  url: "msg.php",
			  data: $(this).serialize(),
			  dataType: 'json'
			}).done(function( data ) {
		    if(!data.error)
		    {
		    	$('#wsForm').html('<div class="form"><div class="text-center">Thank you for your request!</div></div>')
		    }
		    else
		    {
		    	$('<div class="alert alert-danger" role="alert">' +
  					  data.error_msg.message +
					 	'</div>').prependTo('#wsForm');
		    }
		  });
		  return false;
		});
  });
})(jQuery);