# 9th Manhattan Masonic District Redesign Mockup

This is a premium, modern redesign concept for [noble9th.org](https://noble9th.org). It features a clean, responsive layout, structured grids, interactive elements, and a design system centered on traditional Masonic blue and gold.

## Mockup Pages Created

1. **Homepage (`index.html`):** 
   - A prestigious hero section with masonic values.
   - An "Our Heritage" section highlighting the German Masonic roots.
   - An **interactive filterable lodge directory** where users can filter the 11 lodges by location (All, Whitestone, Manhattan, Sparkill).
   - District Leadership profiles.
2. **About Freemasonry (`about.html`):**
   - A clean, reader-focused editorial article describing the principles, degrees, and the unique German history of the district.
3. **Masonic News (`news.html`):**
   - Details of the printed publication *Ninth Manhattan Masonic News*.
   - A modern card grid for recent publication issues.
   - A sidebar listing publishing committee staff, deadlines, and GMCF charitable contact details.
4. **Contact Us (`contact.html`):**
   - Responsive division between physical executive offices (Whitestone) and a contact form.
   - An **interactive math captcha** for spam protection.
5. **Roster & Forms (`roster.html`):**
   - A mockup of a password-protected portal.
   - Entering the correct password (use **`9thdistrict`**) unlocks a resource area with district forms (petitions, bylaws) and a table roster of lodge officers.

## How to Preview

You can open and view the pages directly in any web browser without needing to run a local web server:

1. Locate the folder `c:\Users\rrwol\Dropbox\Projects` in your file explorer.
2. Double-click **`index.html`** to open the homepage in your web browser.
3. Use the navigation menu at the top to click through the other pages (`About Freemasonry`, `Masonic News`, `Contact`, or the `Roster & Forms` link in the footer).

## Elementor Replicating Guide

Once you are ready to apply this redesign in your WordPress Elementor dashboard:

1. **Global Colors & Fonts:** Configure your global site settings to match the variables defined in `styles.css`:
   - Primary: `#0b1c3c` (Navy)
   - Accent: `#d4af37` (Gold)
   - Font Family (Headings): *Cinzel* or *Playfair Display*
   - Font Family (Body): *Inter* or *Open Sans*
2. **Lodge Directory:** Recreate the directory using Elementor's grid layout or a filterable portfolio plugin, applying our card design.
3. **Custom CSS:** You can copy the styles from `styles.css` into your theme's custom CSS panel or Elementor's page CSS to add smooth hover transformations and clean button borders.
