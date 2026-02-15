<?php
/**
 * JD Plumbing & Heating Theme Functions
 *
 * @package JD_Plumbing
 * @version 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/* ---------- Theme Setup ---------- */
function jd_plumbing_setup() {
	add_theme_support( 'title-tag' );
	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'custom-logo', array(
		'height'      => 80,
		'width'       => 200,
		'flex-height' => true,
		'flex-width'  => true,
	) );
	add_theme_support( 'html5', array( 'search-form', 'comment-form', 'gallery', 'caption', 'style', 'script' ) );

	register_nav_menus( array(
		'primary' => __( 'Primary Navigation', 'jd-plumbing' ),
	) );
}
add_action( 'after_setup_theme', 'jd_plumbing_setup' );

/* ---------- Enqueue Styles & Scripts ---------- */
function jd_plumbing_scripts() {
	// Google Fonts
	wp_enqueue_style(
		'jd-google-fonts',
		'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Outfit:wght@600;700;800&display=swap',
		array(),
		null
	);

	// Theme stylesheet (required by WP)
	wp_enqueue_style(
		'jd-plumbing-style',
		get_stylesheet_uri(),
		array( 'jd-google-fonts' ),
		wp_get_theme()->get( 'Version' )
	);

	// Custom styles
	wp_enqueue_style(
		'jd-plumbing-main',
		get_template_directory_uri() . '/assets/css/main.css',
		array( 'jd-plumbing-style' ),
		wp_get_theme()->get( 'Version' )
	);

	// Theme JS
	wp_enqueue_script(
		'jd-plumbing-script',
		get_template_directory_uri() . '/assets/js/main.js',
		array(),
		wp_get_theme()->get( 'Version' ),
		true
	);

	// Localize for AJAX form
	wp_localize_script( 'jd-plumbing-script', 'jdPlumbing', array(
		'ajaxUrl' => admin_url( 'admin-ajax.php' ),
		'nonce'   => wp_create_nonce( 'jd_quote_nonce' ),
	) );
}
add_action( 'wp_enqueue_scripts', 'jd_plumbing_scripts' );

/* ---------- Customizer Settings ---------- */
function jd_plumbing_customize_register( $wp_customize ) {

	// --- Contact Info Section ---
	$wp_customize->add_section( 'jd_contact_info', array(
		'title'    => __( 'Contact Information', 'jd-plumbing' ),
		'priority' => 30,
	) );

	// Phone
	$wp_customize->add_setting( 'jd_phone', array(
		'default'           => '0123 456 789',
		'sanitize_callback' => 'sanitize_text_field',
	) );
	$wp_customize->add_control( 'jd_phone', array(
		'label'   => __( 'Phone Number', 'jd-plumbing' ),
		'section' => 'jd_contact_info',
		'type'    => 'text',
	) );

	// Phone (raw for tel: links)
	$wp_customize->add_setting( 'jd_phone_raw', array(
		'default'           => '01234567890',
		'sanitize_callback' => 'sanitize_text_field',
	) );
	$wp_customize->add_control( 'jd_phone_raw', array(
		'label'   => __( 'Phone Number (digits only)', 'jd-plumbing' ),
		'section' => 'jd_contact_info',
		'type'    => 'text',
	) );

	// Email
	$wp_customize->add_setting( 'jd_email', array(
		'default'           => 'info@jdplumbing.co.uk',
		'sanitize_callback' => 'sanitize_email',
	) );
	$wp_customize->add_control( 'jd_email', array(
		'label'   => __( 'Email Address', 'jd-plumbing' ),
		'section' => 'jd_contact_info',
		'type'    => 'email',
	) );

	// Service Area
	$wp_customize->add_setting( 'jd_service_area', array(
		'default'           => 'Serving Greater London & Surrounding Areas',
		'sanitize_callback' => 'sanitize_text_field',
	) );
	$wp_customize->add_control( 'jd_service_area', array(
		'label'   => __( 'Service Area Text', 'jd-plumbing' ),
		'section' => 'jd_contact_info',
		'type'    => 'text',
	) );

	// --- Hero Section ---
	$wp_customize->add_section( 'jd_hero', array(
		'title'    => __( 'Hero Section', 'jd-plumbing' ),
		'priority' => 35,
	) );

	$wp_customize->add_setting( 'jd_hero_heading', array(
		'default'           => 'Reliable Plumbing, Heating & Gas Services You Can Trust',
		'sanitize_callback' => 'sanitize_text_field',
	) );
	$wp_customize->add_control( 'jd_hero_heading', array(
		'label'   => __( 'Hero Heading', 'jd-plumbing' ),
		'section' => 'jd_hero',
		'type'    => 'text',
	) );

	$wp_customize->add_setting( 'jd_hero_subheading', array(
		'default'           => 'Emergency & scheduled services available. Gas Safe registered engineers across Greater London.',
		'sanitize_callback' => 'sanitize_text_field',
	) );
	$wp_customize->add_control( 'jd_hero_subheading', array(
		'label'   => __( 'Hero Subheading', 'jd-plumbing' ),
		'section' => 'jd_hero',
		'type'    => 'textarea',
	) );

	$wp_customize->add_setting( 'jd_hero_image', array(
		'default'           => '',
		'sanitize_callback' => 'esc_url_raw',
	) );
	$wp_customize->add_control( new WP_Customize_Image_Control( $wp_customize, 'jd_hero_image', array(
		'label'   => __( 'Hero Background Image', 'jd-plumbing' ),
		'section' => 'jd_hero',
	) ) );

	// Notification email
	$wp_customize->add_setting( 'jd_notification_email', array(
		'default'           => get_option( 'admin_email' ),
		'sanitize_callback' => 'sanitize_email',
	) );
	$wp_customize->add_control( 'jd_notification_email', array(
		'label'       => __( 'Quote Notification Email', 'jd-plumbing' ),
		'description' => __( 'Where quote requests are sent.', 'jd-plumbing' ),
		'section'     => 'jd_contact_info',
		'type'        => 'email',
	) );
}
add_action( 'customize_register', 'jd_plumbing_customize_register' );

/* ---------- AJAX Quote Form Handler ---------- */
function jd_handle_quote_form() {
	check_ajax_referer( 'jd_quote_nonce', 'nonce' );

	// Honeypot
	if ( ! empty( $_POST['website'] ) ) {
		wp_send_json_error( 'Spam detected.' );
	}

	$name    = sanitize_text_field( wp_unslash( $_POST['name'] ?? '' ) );
	$phone   = sanitize_text_field( wp_unslash( $_POST['phone'] ?? '' ) );
	$email   = sanitize_email( wp_unslash( $_POST['email'] ?? '' ) );
	$service = sanitize_text_field( wp_unslash( $_POST['service'] ?? '' ) );
	$message = sanitize_textarea_field( wp_unslash( $_POST['message'] ?? '' ) );

	// Validate required fields
	$errors = array();
	if ( empty( $name ) )    $errors[] = 'Name is required.';
	if ( empty( $phone ) )   $errors[] = 'Phone is required.';
	if ( empty( $service ) ) $errors[] = 'Please select a service.';

	if ( ! empty( $errors ) ) {
		wp_send_json_error( implode( ' ', $errors ) );
	}

	// Build email
	$to      = get_theme_mod( 'jd_notification_email', get_option( 'admin_email' ) );
	$subject = sprintf( '[JD Plumbing] New Quote Request from %s', $name );
	$body    = "New quote request:\n\n";
	$body   .= "Name: {$name}\n";
	$body   .= "Phone: {$phone}\n";
	$body   .= "Email: {$email}\n";
	$body   .= "Service: {$service}\n";
	$body   .= "Message: {$message}\n";
	$headers = array( 'Content-Type: text/plain; charset=UTF-8' );

	if ( ! empty( $email ) ) {
		$headers[] = "Reply-To: {$name} <{$email}>";
	}

	$sent = wp_mail( $to, $subject, $body, $headers );

	if ( $sent ) {
		wp_send_json_success( 'Thank you! We\'ll be in touch shortly.' );
	} else {
		wp_send_json_error( 'Something went wrong. Please call us directly.' );
	}
}
add_action( 'wp_ajax_jd_quote_form', 'jd_handle_quote_form' );
add_action( 'wp_ajax_nopriv_jd_quote_form', 'jd_handle_quote_form' );

/* ---------- Helper: Get Phone ---------- */
function jd_get_phone( $raw = false ) {
	return $raw
		? get_theme_mod( 'jd_phone_raw', '01234567890' )
		: get_theme_mod( 'jd_phone', '0123 456 789' );
}

function jd_get_email() {
	return get_theme_mod( 'jd_email', 'info@jdplumbing.co.uk' );
}

function jd_get_service_area() {
	return get_theme_mod( 'jd_service_area', 'Serving Greater London & Surrounding Areas' );
}
