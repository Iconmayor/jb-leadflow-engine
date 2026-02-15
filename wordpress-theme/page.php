<?php
/**
 * Standard Page Template
 *
 * @package JD_Plumbing
 */

get_header();
?>

<main class="section">
	<div class="container">
		<?php while ( have_posts() ) : the_post(); ?>
			<article id="page-<?php the_ID(); ?>" <?php post_class( 'page-content' ); ?>>
				<h1><?php the_title(); ?></h1>
				<div class="entry-content">
					<?php the_content(); ?>
				</div>
			</article>
		<?php endwhile; ?>
	</div>
</main>

<?php get_footer(); ?>
