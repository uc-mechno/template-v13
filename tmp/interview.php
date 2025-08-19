<?php

/**
 * Template Name:社員インタビュー
 */
if (! defined('ABSPATH')) exit;

get_header();
while (have_posts()) :
  the_post();
  $the_id = get_the_ID();
?>
  <main id="main_content" class="l-mainContent l-article">
    <div class="l-mainContent__inner">
      <div class="<?= esc_attr(apply_filters('swell_post_content_class', 'post_content')) ?>">
        <?php the_content(); ?>
      </div>
      <?php
      // ウィジェット
      SWELL_Theme::outuput_content_widget('page', 'bottom');
      ?>
    </div>
  </main>
<?php
endwhile;  // End loop
get_footer();
