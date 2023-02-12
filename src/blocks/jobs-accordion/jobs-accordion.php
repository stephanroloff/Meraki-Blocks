<?php

add_action('init', function(){  
   register_block_type( 'ourplugin/jobs-accordion', array(             //*** 
      'api_version'     => 2,
      'supports'    => array( 'color' => true, 'align' => true ),
      'attributes' => [
         'amountSelected' => [
            'type' => 'string',
            'default' => -1
         ],
         'offset' => [
            'type' => 'string',
            'default' => 0
         ]
      ],
      'render_callback' => function($attributes){
         
         ob_start();
         
         $wrapper_attributes = get_block_wrapper_attributes();

         $homepagePosts = new WP_Query(array(
            'post_type' => 'jobs',                                 //*** 
            'orderby' => 'date',
            'order' => 'DESC',
            'offset' => $attributes['offset'], 
            'posts_per_page' => $attributes['amountSelected'],       
            // 'posts_per_page' => 3,
         ));
         ?>

         <div <?php echo $wrapper_attributes?>>
            <div class="jobs-accordion-container">                   <!-- *** -->
            <div class="jobs-accordion-wrapper">                     <!-- *** -->

               <?php
               while($homepagePosts->have_posts()){
                  $homepagePosts->the_post(); 

               //ACF Fields (De los Post del tipo "jobs")
               $stelle = get_field( "stelle" ); //*** 
               $bold_description = get_field( "stelle_beschreibung_bold" ); //*** 
               $description = get_field( "stelle_beschreibung" ); //*** 
               ?>

                  <div class="accordion-container">
                     <div class="columns">
                        <div class="column-1">
                           <img class="accordion-arrow" src="<?php echo MY_PLUGIN_PATH . "src/blocks/jobs-accordion/assets/pfeil_accordion.png"; ?>" alt="no-arrow">
                        </div>
                        <div class="column-2">
                           <div class="title">
                              <p><?php echo $stelle?></p>  
                           </div>
                           <div class="description-bold-container">
                              <p class="bold_description"> <?php echo $bold_description?></h2> 
                           </div>
                           <div class="description-container">
                              <p class="description"> <?php echo $description?></p> 
                           </div>
                           <div class="link">
                              <p>
                                 <a href="<?php the_permalink();?>">Mehr erfahren</a>
                              </p> 
                           </div>
                        </div>
                     </div>
                  </div>

         <?php
         } 
         wp_reset_postdata();
         ?>
            </div>
            </div>
         </div>
         <?php
   
         return ob_get_clean();
      }    
   ));
});
  

 







  

 
