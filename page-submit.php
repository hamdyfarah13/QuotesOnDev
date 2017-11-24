<?php




get_header(); ?>

<div id="primary" class="primary">
  <main id="main" class="site-main">
    <section>
      <header>
        <?php the_title('<h1 class="entry-title">', '</h1>'); ?>
      </header>

        <!-- Initialize statement that allows logged in users to comment -->
    <?php if( is_user_logged_in() && current_user_can( 'edit_posts' ) ): ?>

      <div class="quote-submission-wrapper">
        <form name="quoteForm" id="quote-submission-form">

          <div>
            <label for="quote-author">Author of Quote</label>
            <input type="text" name="quote_author" id="quote-author">
          </div>

          <div>
            <label for="quote-content">Quote</label>
            <textarea rows="3" cols="20" name="quote_author" id="quote-content"></textarea>
          </div>

          <div>
            <label for="quote-source">Where did you find this quote?</label>
            <input type="text" name="quote_source" id="quote-source">
          </div>

          <div>
            <label for="quote-source-url">You can say whatever you want here</label>
            <input type="url" name="quote_source_url" id="quote-source-url">
          </div>

          <input class="submit" type="submit" value="Submit Quote">
        </form>
      
        <p class="submit-success-message" style="display: none;"></p>
      
      </div>

    <?php else: ?>

  <p>None shall post!</p>

            <!-- Placeholder allows dynamic updating of quote source url -->
  <p><?php echo sprintf('<a href="%1s">%2s</a>', esc_url( wp_login_url()), 'Click here to login.' ); ?></p>


<?php endif; ?>





    </section>
  </main>
</div>



<?php  get_footer();  ?>