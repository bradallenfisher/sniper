<div class="header">
  <a class="title" href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home" class="site-name">
    BRAGGS APPLE CIDER VINEGAR BENEFITS
  </a>

  <div class="menu">
    <?php print render($page['menu']); ?>
  </div>
</div>

<div class="page">
  <?php print $messages; ?>
  <?php print render($tabs); ?>

    <div class="content" role="main">

      <a id="main-content"></a>

      <?php print render($page['content']); ?>

    </div>

    <div class="side">
      <?php print render($page['side']);?>
    </div>

  <footer class="footer" role="contentinfo">
    <?php print render($page['footer']); ?>
  </footer>

</div>

