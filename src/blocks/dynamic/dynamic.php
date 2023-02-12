<?php

add_action('init', function(){  
   register_block_type( 'ourplugin/dynamic', array(
      //  'api_version' => 2,
       'render_callback' => function($attributes){
         ob_start(); ?>
         <div class="dynamic-wrapper">
            <h3 className="text-paragraph-frontend">The Sky is Green</h3>
         </div>
         <?php return ob_get_clean();
      }    
   ));
});
  

 
