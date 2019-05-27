$('document').ready(function(){
    alert("HTML DOCUMENT READY .....!!!");

      document.addEventListener('deviceready',function(){
      navigator.notification.alert("Device is ready now for Developement");
    window.addEventListener('batterystatus',function(status){
    	alert("battery Status....!!");
    	$('#batLevel').html(status.level);
    	$('#batIsConnected').html(status.isPlugged);

    });

    window.addEventListener('deviceorientation',function(orientation){
    	
    	$('#alpha').html(orientation.alpha);
    	$('#beta').html(orientation.beta);
    	$('#gamma').html(orientation.gamma);
    });
  
        //alert("Device Info:  "+device.serial);
        //alert("Device Info:  "+device.model);
      
       $('#getDevInfo').on('click',function(){
       	alert("Button Clicked....!!!");
       	$('#devSerial').html(device.serial);
        $('#devModel').html(device.model);
        $('#devVersion').html(device.version);

       });
       $('#beep').on('click',function(){
       	navigator.notification.beep(5);
       });

       $('#vibrate').on('click',function(){
       	navigator.vibrate([2000]);
       });

       $('#getPicCamera').on('click',function() {
       	navigator.camera.getPicture(function(imgData) {
       		$('#cameraOutput').attr('src',imgData);
       	},function (error) {
       		alert("Error: "+error);
       	},{
       		"sourceType":1
       		//"cameraDirection":0
       })

       });

       document.addEventListener('online',function(){
       	navigator.notification.alert("App is @Online......!!!!");
       });
       document.addEventListener('offline',function(){
       	navigator.notification.alert("App is @Offline...!!!");
       });

       $('#conType').html(navigator.connection.type);

       $('#capAudio').on('click',function(){
       	navigator.device.capture.captureAudio(function(mediaFile)
       	{
       		alert("No.of.Files :" + mediaFile.length);
       		alert("File Path :" + mediaFile[0].fullPath);
       	});
       });
    });
});