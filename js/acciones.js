jQuery(document).ready(function()
		
					   {
		
			function operacion(capital,tna,cien,anio,dias)
			{						
				var op1= tna/cien;
				var op2= dias/anio; 
				var op3= op1*op2;
				var op4= capital*op3;
				var op5= (op4*cien)/capital;
		
				document.getElementById('interes').innerHTML = op4.toFixed(2);
				document.getElementById('porcentaje').innerHTML = op5.toFixed(2);
			}
			
			jQuery('#calcula').click(function(){		
					var capital = parseInt(jQuery('#capital').val(),10); 
					var tna = parseFloat(jQuery('#tna').val(),10); 
					var cien = 100; 
					var anio = 365;
					var dias = parseInt(jQuery('#dias').val(),10);
					operacion(capital,tna,cien,anio,dias);				
			});
	
		});		


		function ActualizarTNA() {
			var x = document.getElementById("banco").value;
			document.getElementById("tna").value = x;
			document.getElementById("tna").innerHTML = x;
		}

   $("#calcula").click(function(event) {
  document.getElementById('signo').style.visibility='visible'
  document.getElementById('signo2').style.visibility='visible'
   });	

   $("#btnLimpiar").click(function(event) {
 document.getElementById('signo').style.visibility='hidden'
  document.getElementById('signo2').style.visibility='hidden'
   });	

   $("#btnLimpiar").click(function(event) {
	   $("#formEjemplo")[0].reset();
	   $("#tna").empty()
	   $("#interes").empty()
	   $("#porcentaje").empty()
   });