<footer class="site-footer">
	<div class="container">
		<div class="footer-grid">
			<!-- Brand -->
			<div class="footer-brand">
				<div class="site-logo" style="margin-bottom: 1rem;">
					<div class="logo-icon">JD</div>
					<div class="logo-text">
						<strong style="color: #fff;">JD Plumbing</strong>
						<small style="color: rgba(255,255,255,0.7);">&amp; Heating</small>
					</div>
				</div>
				<p>Trusted plumbing, heating &amp; gas services for homeowners and landlords. Available for emergencies 24/7.</p>
			</div>

			<!-- Quick Links -->
			<div class="footer-links">
				<h4>Quick Links</h4>
				<nav>
					<a href="#hero">Home</a>
					<a href="#services">Services</a>
					<a href="#about">About Us</a>
					<a href="#contact">Contact</a>
				</nav>
			</div>

			<!-- Contact -->
			<div class="footer-contact">
				<h4>Get in Touch</h4>
				<a href="tel:<?php echo esc_attr( jd_get_phone( true ) ); ?>" class="footer-contact-item">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
					<?php echo esc_html( jd_get_phone() ); ?>
				</a>
				<a href="mailto:<?php echo esc_attr( jd_get_email() ); ?>" class="footer-contact-item">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
					<?php echo esc_html( jd_get_email() ); ?>
				</a>
				<span class="footer-contact-item">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
					<?php echo esc_html( jd_get_service_area() ); ?>
				</span>
			</div>
		</div>

		<div class="footer-bottom">
			&copy; <?php echo date( 'Y' ); ?> JD Plumbing &amp; Heating. All rights reserved. Gas Safe Registered.
		</div>
	</div>
</footer>

<!-- Mobile Call Bar -->
<div class="mobile-call-bar">
	<a href="tel:<?php echo esc_attr( jd_get_phone( true ) ); ?>">
		<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
		Call Now &mdash; <?php echo esc_html( jd_get_phone() ); ?>
	</a>
</div>

<?php wp_footer(); ?>
</body>
</html>
