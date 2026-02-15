<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="description" content="<?php bloginfo( 'description' ); ?>">
	<?php wp_head(); ?>
</head>
<body <?php body_class( 'pb-mobile' ); ?>>
<?php wp_body_open(); ?>

<header class="site-header">
	<div class="container header-inner">
		<!-- Logo -->
		<a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="site-logo">
			<div class="logo-icon">JD</div>
			<div class="logo-text">
				<strong>JD Plumbing</strong>
				<small>&amp; Heating</small>
			</div>
		</a>

		<!-- Desktop Nav -->
		<nav class="main-nav">
			<a href="#hero" class="active">Home</a>
			<a href="#services">Services</a>
			<a href="#about">About</a>
			<a href="#contact">Contact</a>
		</nav>

		<!-- Desktop CTA -->
		<div class="header-cta">
			<a href="tel:<?php echo esc_attr( jd_get_phone( true ) ); ?>" class="header-phone">
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
				<?php echo esc_html( jd_get_phone() ); ?>
			</a>
			<a href="#contact" class="btn btn-cta">Get a Quote</a>
		</div>

		<!-- Mobile Toggle -->
		<button class="mobile-toggle" id="menu-toggle" aria-label="Toggle menu">
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" id="menu-icon"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
		</button>
	</div>

	<!-- Mobile Nav -->
	<div class="mobile-nav" id="mobile-nav">
		<a href="#hero" class="active">Home</a>
		<a href="#services">Services</a>
		<a href="#about">About</a>
		<a href="#contact">Contact</a>
		<div class="mobile-nav-cta">
			<a href="tel:<?php echo esc_attr( jd_get_phone( true ) ); ?>" class="mobile-call-btn">
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
				Call Now
			</a>
			<a href="#contact" class="btn btn-cta btn-full">Get a Quote</a>
		</div>
	</div>
</header>
