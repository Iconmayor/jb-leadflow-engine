<?php
/**
 * Front Page Template (one-page layout)
 *
 * @package JD_Plumbing
 */

get_header();

$hero_image = get_theme_mod( 'jd_hero_image', '' );
$hero_heading = get_theme_mod( 'jd_hero_heading', 'Reliable Plumbing, Heating & Gas Services You Can Trust' );
$hero_sub = get_theme_mod( 'jd_hero_subheading', 'Emergency & scheduled services available. Gas Safe registered engineers across Greater London.' );
?>

<!-- ===== Hero ===== -->
<section id="hero" class="hero">
	<?php if ( $hero_image ) : ?>
		<img src="<?php echo esc_url( $hero_image ); ?>" alt="Professional plumber servicing a boiler" class="hero-bg">
	<?php endif; ?>
	<div class="container">
		<div class="hero-content">
			<h1><?php echo esc_html( $hero_heading ); ?></h1>
			<p><?php echo esc_html( $hero_sub ); ?></p>
			<div class="hero-buttons">
				<a href="#contact" class="btn btn-cta btn-lg">Request a Quote</a>
				<a href="tel:<?php echo esc_attr( jd_get_phone( true ) ); ?>" class="btn btn-outline btn-lg">
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
					Call Now
				</a>
			</div>
		</div>
	</div>
</section>

<!-- ===== Trust Badges ===== -->
<section class="container trust-badges">
	<div class="badges-grid">
		<div class="badge-card">
			<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
			<span>Gas Safe Registered</span>
		</div>
		<div class="badge-card">
			<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
			<span>24/7 Emergency</span>
		</div>
		<div class="badge-card">
			<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
			<span>15+ Years Experience</span>
		</div>
		<div class="badge-card">
			<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"/></svg>
			<span>5★ Rated Service</span>
		</div>
	</div>
</section>

<!-- ===== Services ===== -->
<section id="services" class="section">
	<div class="container">
		<div class="section-header">
			<h2>Our Services</h2>
			<p>Professional solutions for every plumbing, heating and gas need.</p>
		</div>
		<div class="services-grid">
			<?php
			$services = array(
				array( 'title' => 'Plumbing Repairs', 'desc' => 'From leaky taps to full installations — fast and reliable.', 'icon' => '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>' ),
				array( 'title' => 'Boiler Services', 'desc' => 'Installation, repairs and annual servicing for all boiler brands.', 'icon' => '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>' ),
				array( 'title' => 'Central Heating', 'desc' => 'Radiator installs, powerflushes and full heating system upgrades.', 'icon' => '<path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"/>' ),
				array( 'title' => 'Gas Safety', 'desc' => 'CP12 certificates, gas leak detection and appliance checks.', 'icon' => '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>' ),
				array( 'title' => 'Emergency Callouts', 'desc' => "24/7 emergency response — we're here when you need us most.", 'icon' => '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" x2="12" y1="9" y2="13"/><line x1="12" x2="12.01" y1="17" y2="17"/>' ),
			);
			foreach ( $services as $s ) : ?>
				<a href="#contact" class="service-card">
					<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><?php echo $s['icon']; ?></svg>
					<h3><?php echo esc_html( $s['title'] ); ?></h3>
					<p><?php echo esc_html( $s['desc'] ); ?></p>
					<span class="learn-more">Learn more →</span>
				</a>
			<?php endforeach; ?>
		</div>
	</div>
</section>

<!-- ===== Why Choose Us ===== -->
<section id="about" class="section section-alt">
	<div class="container">
		<div class="section-header">
			<h2>Why Choose JD Plumbing &amp; Heating?</h2>
			<p>We're committed to quality, safety, and your satisfaction.</p>
		</div>
		<div class="why-grid">
			<?php
			$why = array(
				array( 'title' => 'Fast Response', 'desc' => 'Same-day service for most jobs. Emergency? We aim for under 1 hour.' ),
				array( 'title' => 'Transparent Pricing', 'desc' => 'No hidden fees. We quote before we start so there are no surprises.' ),
				array( 'title' => 'Qualified & Insured', 'desc' => 'Gas Safe registered, fully insured, and DBS checked engineers.' ),
				array( 'title' => 'Guaranteed Work', 'desc' => 'All our work comes with a warranty for your complete peace of mind.' ),
			);
			foreach ( $why as $w ) : ?>
				<div class="why-card">
					<h3><?php echo esc_html( $w['title'] ); ?></h3>
					<p><?php echo esc_html( $w['desc'] ); ?></p>
				</div>
			<?php endforeach; ?>
		</div>
	</div>
</section>

<!-- ===== Testimonials ===== -->
<section class="section">
	<div class="container">
		<div class="section-header">
			<h2>What Our Customers Say</h2>
		</div>
		<div id="testimonials-slider">
			<?php
			$testimonials = array(
				array( 'text' => 'Brilliant service from start to finish. The engineer arrived within the hour and had our boiler fixed in no time. Highly recommend!', 'name' => 'Sarah M., Croydon' ),
				array( 'text' => 'Very professional and tidy. Installed a new bathroom suite and the quality of workmanship was top-notch. Fair price too.', 'name' => 'David T., Bromley' ),
				array( 'text' => 'Called them for an emergency leak at 11pm and they were here within 45 minutes. Absolute lifesavers. 5 stars!', 'name' => 'Emma R., Greenwich' ),
			);
			foreach ( $testimonials as $i => $t ) : ?>
				<div class="testimonial-card" data-slide="<?php echo $i; ?>" style="<?php echo $i > 0 ? 'display:none;' : ''; ?>">
					<div class="testimonial-stars">★★★★★</div>
					<blockquote>&ldquo;<?php echo esc_html( $t['text'] ); ?>&rdquo;</blockquote>
					<cite>— <?php echo esc_html( $t['name'] ); ?></cite>
				</div>
			<?php endforeach; ?>
		</div>
		<div class="testimonials-nav" id="testimonials-nav">
			<?php for ( $i = 0; $i < count( $testimonials ); $i++ ) : ?>
				<button data-slide="<?php echo $i; ?>" class="<?php echo $i === 0 ? 'active' : ''; ?>" aria-label="Testimonial <?php echo $i + 1; ?>"></button>
			<?php endfor; ?>
		</div>
	</div>
</section>

<!-- ===== Quote Form ===== -->
<section id="contact" class="section section-alt">
	<div class="container">
		<div class="quote-form-wrapper">
			<div class="section-header">
				<h2>Get a Free Quote</h2>
				<p>Tell us what you need and we'll get back to you fast.</p>
			</div>
			<div class="quote-form-card">
				<form id="jd-quote-form" novalidate>
					<!-- Honeypot -->
					<input type="text" name="website" class="honeypot" tabindex="-1" autocomplete="off">

					<div class="form-row">
						<div class="form-group">
							<input type="text" name="name" placeholder="Your Name *" required>
							<div class="form-error" data-error="name"></div>
						</div>
						<div class="form-group">
							<input type="tel" name="phone" placeholder="Phone Number *" required>
							<div class="form-error" data-error="phone"></div>
						</div>
					</div>
					<div class="form-group">
						<input type="email" name="email" placeholder="Email (optional)">
						<div class="form-error" data-error="email"></div>
					</div>
					<div class="form-group">
						<select name="service" required>
							<option value="">Select a Service *</option>
							<option value="plumbing">Plumbing Repairs &amp; Installation</option>
							<option value="boiler">Boiler Installation &amp; Repair</option>
							<option value="heating">Central Heating</option>
							<option value="gas">Gas Engineering &amp; Safety</option>
							<option value="emergency">Emergency Callout</option>
							<option value="other">Other</option>
						</select>
						<div class="form-error" data-error="service"></div>
					</div>
					<div class="form-group">
						<textarea name="message" placeholder="Tell us about your issue (optional)"></textarea>
					</div>
					<button type="submit" class="btn btn-cta btn-full btn-lg">Request a Free Quote</button>
				</form>
				<div class="form-success" id="form-success" style="display:none;">
					<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
					<h3>Quote Request Received!</h3>
					<p>We'll get back to you as soon as possible.</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- ===== Service Area ===== -->
<section class="service-area">
	<div class="container">
		<h2><?php echo esc_html( jd_get_service_area() ); ?></h2>
		<p>We cover all London boroughs and the Home Counties. Not sure if we cover your area? Give us a call and we'll let you know.</p>
		<a href="tel:<?php echo esc_attr( jd_get_phone( true ) ); ?>" class="btn btn-cta btn-lg">
			<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
			<?php echo esc_html( jd_get_phone() ); ?>
		</a>
	</div>
</section>

<?php get_footer(); ?>
