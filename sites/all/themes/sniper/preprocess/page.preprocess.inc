<?php

/**
 * Implements hook_preprocess_page().
 */
function sniper_preprocess_page(&$variables) {
  // You can use preprocess hooks to modify the variables before they are passed
  // to the theme function or template file.
    $skin = variable_get('skin', NULL);
    drupal_add_css(drupal_get_path('theme', 'sniper') . '/css/_skins/'.$skin.'.css', array('group' => CSS_THEME, 'type' => 'file'));

   drupal_add_css('//fonts.googleapis.com/css?family=Josefin+Sans:700', array('group' => CSS_THEME));
   drupal_add_css('//fonts.googleapis.com/css?family=Open+Sans:400,800', array('group' => CSS_THEME));

}

