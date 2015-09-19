<div class="header">
  BRAGGS APPLE CIDER VINEGAR BENEFITS
</div>

<div class="page">
  <?php print $messages; ?>
  <?php print render($tabs); ?>

  <div class="main">

    <div class="content" role="main">



      <div class="menu">
        <?php print render($page['menu']);?>
      </div>

      <a id="main-content"></a>

      <?php if(!$is_front):?>
        <h1><?php print $title; ?></h1>
      <?php endif;?>

      <?php print render($page['content']); ?>

    </div>

    <div class="side">
      <?php print render($page['side']);?>
    </div>

  </div>

  <footer class="footer" role="contentinfo">
    <?php print render($page['footer']); ?>
  </footer>
</div>

