<div class="header">
  <div class="title">
  <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home">
APPLE CIDER VINEGAR MIRACLE
  </a>
</div>

<div class="menu-expander"><i class="fa fa-bars"></i></div>

<div class="navigation">
  <?php print render($page['menu']); ?>
</div>
</div>
<div class="page">
  <?php print $messages; ?>
  <?php print render($tabs); ?>

    <div class="content" role="main">

      <a id="main-content"></a>
      <h1><?php print $title;?></h1>
      <?php print render($page['content']); ?>

    </div>

    <div class="side">
      <?php print render($page['side']);?>
    </div>

  <footer class="footer" role="contentinfo">
    <?php print render($page['footer']); ?>
  </footer>

</div>

