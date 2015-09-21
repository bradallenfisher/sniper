<?php

/**
 * Implements hook_preprocess_page().
 */
function sniper_preprocess_page(&$variables) {
  // You can use preprocess hooks to modify the variables before they are passed
  // to the theme function or template file.
    $skin = variable_get('skin', NULL);
    drupal_add_css(drupal_get_path('theme', 'sniper') . '/css/_skins/'.$skin.'.css', array('group' => CSS_THEME, 'type' => 'file'));

}
