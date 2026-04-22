---
name: Vibrant Cravings
colors:
  surface: '#fff8f5'
  surface-dim: '#edd5ca'
  surface-bright: '#fff8f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff1ea'
  surface-container: '#ffeadf'
  surface-container-high: '#fbe3d7'
  surface-container-highest: '#f6ded2'
  on-surface: '#251912'
  on-surface-variant: '#584235'
  inverse-surface: '#3b2d26'
  inverse-on-surface: '#ffede5'
  outline: '#8c7263'
  outline-variant: '#e0c0af'
  surface-tint: '#994700'
  primary: '#994700'
  on-primary: '#ffffff'
  primary-container: '#ff7a00'
  on-primary-container: '#5c2800'
  inverse-primary: '#ffb68b'
  secondary: '#006e1c'
  on-secondary: '#ffffff'
  secondary-container: '#91f78e'
  on-secondary-container: '#00731e'
  tertiary: '#006399'
  on-tertiary: '#ffffff'
  tertiary-container: '#00a8ff'
  on-tertiary-container: '#003a5c'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbc8'
  primary-fixed-dim: '#ffb68b'
  on-primary-fixed: '#321200'
  on-primary-fixed-variant: '#753400'
  secondary-fixed: '#94f990'
  secondary-fixed-dim: '#78dc77'
  on-secondary-fixed: '#002204'
  on-secondary-fixed-variant: '#005313'
  tertiary-fixed: '#cde5ff'
  tertiary-fixed-dim: '#95ccff'
  on-tertiary-fixed: '#001d32'
  on-tertiary-fixed-variant: '#004a75'
  background: '#fff8f5'
  on-background: '#251912'
  surface-variant: '#f6ded2'
typography:
  h1:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  h2:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  h3:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Be Vietnam Pro
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Be Vietnam Pro
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  caption:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.01em
  button:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  margin-mobile: 20px
  gutter: 16px
---

## Brand & Style

The design system is engineered to evoke immediate hunger and energy. It targets a modern, fast-paced audience that values both speed and the quality of fresh ingredients. The brand personality is optimistic, helpful, and high-energy.

The visual style follows a **Modern Corporate** aesthetic with a tactile twist. It prioritizes high-quality food photography by utilizing a clean, expansive layout with generous whitespace. To differentiate from utilitarian delivery apps, it employs soft, organic shapes and subtle depth to make UI elements feel approachable and "clickable," mimicking the physical satisfaction of a well-prepared meal.

## Colors

The color palette is designed to be "appetizing." The **Energetic Orange** serves as the primary driver for action, stimulating appetite and urgency. **Fresh Green** is used strategically to denote health, fresh ingredients, and successful states (e.g., "Order Placed"). 

**Warm White** is the foundation for all backgrounds, providing a softer, more premium feel than a stark #FFFFFF, while **Deep Charcoal** ensures high legibility and a grounded, sophisticated feel for all typographic elements.

## Typography

The typography uses a dual-font approach to balance personality with readability. **Plus Jakarta Sans** is used for headlines and labels to provide a friendly, modern, and slightly rounded geometric feel. **Be Vietnam Pro** is used for body copy to ensure maximum legibility at smaller sizes, maintaining a contemporary and warm tone.

A strong visual hierarchy is maintained by using significant weight differences between headings and body text. Use H1 for primary screen titles, H2 for section headers (like "Featured Restaurants"), and Body-md for the majority of descriptions and menu item details.

## Layout & Spacing

This design system utilizes an **8pt grid system** (with 4pt increments for fine-tuning) to ensure consistent rhythm across all screens. 

- **Grid Model:** A fluid column grid for mobile (4 columns) and tablet (8 columns) is recommended.
- **Margins:** Standardize on a 20px outer margin for mobile devices to prevent content from feeling cramped against the screen edge.
- **Vertical Rhythm:** Use 16px (md) spacing between related elements in a list, and 32px (xl) spacing between major sections.

## Elevation & Depth

To create a sense of tangibility and "appetizing" depth, the design system uses **Ambient Shadows**. Shadows should never be pure black; instead, they use a very low-opacity version of the Deep Charcoal or a slightly tinted orange for primary elements.

- **Level 1 (Default):** Flat surfaces against the Warm White background.
- **Level 2 (Cards/Inputs):** A subtle 4px Y-offset shadow with 12px blur at 4% opacity.
- **Level 3 (Floating Action Buttons/Active States):** A more pronounced 8px Y-offset with 20px blur at 8% opacity.

Avoid harsh borders. Instead, use soft tonal shifts and these diffused shadows to define boundaries.

## Shapes

The shape language is defined by a consistent **16px (1rem)** corner radius for all primary containers, cards, and buttons. This "Rounded" level makes the interface feel soft, safe, and friendly.

- **Primary Radius:** 16px (for cards and main buttons).
- **Secondary Radius:** 8px (for small tags, chips, and selection indicators).
- **Full Radius (Pill):** Used exclusively for search bars and specific promotional badges to draw the eye.

## Components

### Buttons
- **Primary:** Background #FF7A00, Text #FFFFFF. 16px rounded corners. High-impact for "Add to Cart" or "Checkout."
- **Secondary:** Background #4CAF50, Text #FFFFFF. Used for secondary actions like "View Receipt."
- **Ghost:** No background, #FF7A00 border (1px) or just text. Used for "Add more items" or "Cancel."

### Cards
All restaurant or menu items must be housed in cards with 16px rounded corners. Use a 1px #EEEEEE border or the Level 2 shadow defined in Elevation. Food images should bleed to the top edges of the card with the same corner radius.

### Input Fields
Inputs should have a 12px corner radius, a #FCFCFC background, and a subtle 1px border (#EEEEEE). On focus, the border transitions to #FF7A00.

### Chips & Tags
Use for categories (e.g., "Burger", "Vegan"). Use 8px rounded corners with a light tint of the primary or secondary color (e.g., 10% opacity) and full-strength text color.

### Progress Indicators
Delivery tracking should use a custom-styled line with the Fresh Green (#4CAF50) to indicate progress, paired with rounded icons for milestones.