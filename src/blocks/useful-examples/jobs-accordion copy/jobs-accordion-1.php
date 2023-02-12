<?php

add_action('init', function(){  
   register_block_type( 'ourplugin/jobs-accordion', array( //*** 
      //  'api_version' => 2,
       'render_callback' => function($attributes){

         //ACF Fields
         $stelle = get_field( "stelle" ); //*** 
         $bold_description = get_field( "stelle_beschreibung_bold" ); //*** 
         $description = get_field( "stelle_beschreibung" ); //*** 

         ob_start(); ?>

         <div class="jobs-accordion-container">
            <div class="jobs-accordion-wrapper">

               <div class="accordion-container">
                  <div class="columns">
                     <div class="column-1">
                        <img class="accordion-arrow" src="<?php echo MY_PLUGIN_PATH . "src/blocks/jobs-accordion/assets/pfeil_accordion.png"; ?>" alt="no-arrow">
                     </div>
                     <div class="column-2">
                        <div class="title">
                           <p><?php echo $stelle?></p>  
                        </div>
                        <div class="description-bold-container hide">
                           <p class="bold_description"> <?php echo $bold_description?></h2> 
                        </div>
                        <div class="description-container hide">
                           <p class="description"> <?php echo $description?></p> 
                        </div>
                     </div>
                  </div>
               </div>
               
            </div>
         </div>
         
         <?php return ob_get_clean();
      }    
   ));
});
  

 
