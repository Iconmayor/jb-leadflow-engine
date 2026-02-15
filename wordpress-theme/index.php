<?php
/**
 * Main Index Template
 *
 * Falls back to front-page.php for the homepage.
 * For a one-page theme this simply loads front-page.php.
 *
 * @package JD_Plumbing
 */

get_header();

if ( is_front_page() || is_home() ) {
	get_template_part( 'front-page' );
} else {
	// Basic post loop fallback
	?>
	<main class="section">
		<div class="container">
			<?php if ( have_posts() ) : ?>
				<?php while ( have_posts() ) : the_post(); ?>
					<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
						<h1><?php the_title(); ?></h1>
						<div><?php the_content(); ?></div>
					</article>
				<?php endwhile; ?>
			<?php else : ?>
				<p><?php esc_html_e( 'No content found.', 'jd-plumbing' ); ?></p>
			<?php endif; ?>
		</div>
	</main>
	<?php
	get_footer();
}
