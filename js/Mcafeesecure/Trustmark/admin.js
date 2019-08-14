var $j = jQuery.noConflict();

//-----------------------------------------------------------------------------------------------------------------
$j(document).ready(function() {
   load_page();
});
//-----------------------------------------------------------------------------------------------------------------
function load_page() {
   var host = $j('#mcafeesecure').attr('data-host');

   $j.getJSON('https://www.mcafeesecure.com/rpc/ajax?do=lookup-site-status&jsoncallback=?&rand='+new Date().getTime()+'&host=' + encodeURIComponent(host),function(data) {
      console.log('mfes lookup ' + host + ' is ' + data.status);
      $j('#mfes-loading').hide();
      if(data.status == 'secure') {
         $j('#mfes-signup').hide();
         $j('#mfes-secure').show();
         $j('#mfes-notsecure').hide();
         $j('#mfes-overlimit').hide();
         $j('#mfes-login').show();
         save_active();
      } else if(data.status == 'notsecure') {
         $j('#mfes-signup').hide();
         $j('#mfes-secure').hide();
         $j('#mfes-notsecure').show();
         $j('#mfes-overlimit').hide();
         $j('#mfes-login').show();
         save_active();
      } else if(data.status == 'overlimit') {
         $j('#mfes-signup').hide();
         $j('#mfes-secure').hide();
         $j('#mfes-notsecure').hide();
         $j('#mfes-overlimit').show();
         $j('#mfes-login').show();
         save_active();
      } else {
         $j('#mfes-signup').show();
         $j('#mfes-secure').hide();
         $j('#mfes-notsecure').hide();
         $j('#mfes-overlimit').hide();
         $j('#mfes-login').hide();
         window.setTimeout(function() { load_page() },30000);
      }
   });
}
//-----------------------------------------------------------------------------------------------------------------
function save_active() {
   var url = document.location + '&active=1';
   $j.get(url);
}
//-----------------------------------------------------------------------------------------------------------------
