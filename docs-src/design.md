---
title: Design - Docs - DROPIFY®
---

# Design

The Design page allows you to customise the visual appearance of your countdown landing page, including branding, typography, forms, visual effects, legal terms, and advanced styling options.

<img src="/assets/dropify-tour-design.gif" alt="Design Overview" style="box-shadow: none !important; filter: none !important; -webkit-filter: none !important; border: none !important; background: none !important;" />

## Logo

Upload your brand logo to appear on the countdown page.

**Supported Formats**: SVG, PNG, WEBP, JPG  
**Maximum Size**: 1.5MB  
**Recommendation**: Use SVG or WEBP format for best quality and performance

Uploaded logos are stored in Shopify's file system and delivered via CDN for optimal loading speeds.

## Background

Choose from preset backgrounds or upload your own custom image or video.

### Preset Backgrounds

Five curated background options are available for immediate use, including both static images and video backgrounds.

### Custom Uploads

**Supported Formats**: JPG, PNG, WEBP, SVG, MP4  
**Maximum Size**: 5MB  
**Recommendation**: Use 16:9 aspect ratio (1920×1080) for best results

Videos should be in MP4 format and will auto-play with muted audio for the best user experience.

## Typography

### Font Selection

Choose from bundled fonts or upload your own custom font files:

- **Bundled Fonts**: Pre-loaded font families with multiple weights
- **Custom Upload**: Upload TTF, OTF, WOFF, or WOFF2 font files
- **Font Weights**: Select from available weights (100-900)

### Heading Text

Set the main heading that appears above the countdown timer.

- **Character Limit**: 50 characters
- **Visibility Toggle**: Show or hide the heading
- **Example**: "Our next merchandise drop goes live in..."

### Sub-heading Text

Set descriptive text that appears below the countdown timer.

- **Character Limit**: 100 characters
- **Visibility Toggle**: Show or hide the sub-heading
- **Example**: "Drop017 × CollabBrand is the next instalment in our series of bespoke apparel..."

## Form Configuration

Configure customer data collection to build your audience before the drop.

### Email Collection

- **Always Enabled by Default**: Email collection is standard
- **Placeholder Text**: Customise the input placeholder
- **Default**: "Email address"

### Phone Collection

- **Optional**: Enable phone number collection for SMS marketing
- **Country Code Selection**: Configure preferred country codes for your market
- **Placeholder Text**: Customise the phone input placeholder
- **Default**: "Phone number"

::: tip Recommended
Enable phone number collection and use SMS notifications. Our case studies show a 32.8% sales uplift when customers receive text alerts at drop time.
:::

### Preferred Country Codes

Configure which country codes appear first in the phone number dropdown:

- **Primary Market**: The first code selected will be visible on page load
- **Order**: Codes appear in your chosen order
- **Fallback**: All other countries appear after your preferred list in A-Z order

### Form Messaging

- **Button Text**: Customise the submit button (default: "GET UPDATES")
- **Success Message**: Message shown after successful submission (default: "Successfully subscribed")

## Visual

Control the visual appearance and overlay effects of your countdown page.

### Background Overlay

Configure the overlay that appears over your background image or video:

- **Colour Selection**: Choose any colour with the colour picker
- **Opacity Control**: Adjust transparency level using the alpha slider
- **Purpose**: Improves text legibility and contrast over busy backgrounds
- **Toggle**: Enable or disable the overlay entirely

### Corner Dots

Customise the decorative corner dots that appear on your countdown page:

- **Colour Selection**: Choose any colour for the corner dots
- **Default**: White dots
- **Toggle**: Enable or disable corner dots entirely

## Legal Terms

Include legal disclaimers and terms for your email and SMS collection.

### Rich Text Editor

- **Formatting Options**: Bold, italic, strikethrough, links, and text alignment
- **Character Limit**: 200 characters (HTML tags not counted)
- **Link Handling**: All links automatically open in new tabs
- **Visibility Toggle**: Show or hide legal terms

### Common Use Cases

- SMS opt-in disclaimers
- Privacy policy links
- Terms of service references
- Marketing consent language

::: tip
Some SMS providers require specific legal language. Check with your SMS service provider for required disclaimers.
:::

## Advanced Customisation

### Custom CSS

Add custom styling to override default appearance:

- **Code Editor**: Monaco editor with syntax highlighting
- **No Tags Required**: Don't include `<style>` tags
- **Real-time**: Changes apply when settings are saved

### Custom JavaScript

Add custom functionality or tracking:

- **Code Editor**: Monaco editor with syntax highlighting
- **No Tags Required**: Don't include `<script>` tags
- **Execution**: Runs after page load

::: warning
Custom code runs on your customer-facing page. Test thoroughly before enabling.
:::
