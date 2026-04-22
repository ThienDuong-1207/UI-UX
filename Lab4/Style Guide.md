---
name: Precision Engineering
colors:
  surface: '#fcf8fa'
  surface-dim: '#dcd9db'
  surface-bright: '#fcf8fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f5'
  surface-container: '#f0edef'
  surface-container-high: '#eae7e9'
  surface-container-highest: '#e4e2e4'
  on-surface: '#1b1b1d'
  on-surface-variant: '#45464d'
  inverse-surface: '#303032'
  inverse-on-surface: '#f3f0f2'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#0058be'
  on-secondary: '#ffffff'
  secondary-container: '#2170e4'
  on-secondary-container: '#fefcff'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#271901'
  on-tertiary-container: '#98805d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#adc6ff'
  on-secondary-fixed: '#001a42'
  on-secondary-fixed-variant: '#004395'
  tertiary-fixed: '#fcdeb5'
  tertiary-fixed-dim: '#dec29a'
  on-tertiary-fixed: '#271901'
  on-tertiary-fixed-variant: '#574425'
  background: '#fcf8fa'
  on-background: '#1b1b1d'
  surface-variant: '#e4e2e4'
typography:
  h1:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h2:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  h3:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: '1.4'
  body:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  price-lg:
    fontFamily: JetBrains Mono
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1'
  price-sm:
    fontFamily: JetBrains Mono
    fontSize: 16px
    fontWeight: '500'
    lineHeight: '1'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 48px
  xl: 80px
  container-max: 1280px
  gutter: 24px
---

## Brand & Style
The design system is built on the pillars of technical precision, reliability, and high-performance aesthetics. It targets a sophisticated demographic of professionals and tech enthusiasts who value specifications as much as style. 

The visual direction follows a **Corporate/Modern** style with **Minimalist** influences. By prioritizing clarity and high-quality whitespace, the interface mirrors the premium hardware it showcases. The aesthetic avoids unnecessary flourishes, focusing instead on structural integrity, sharp information hierarchy, and a "spec-first" presentation that instills user confidence.

## Colors
This design system utilizes a high-contrast palette to distinguish between technical data and actionable elements.

- **Primary:** Deep Navy (#0F172A) is the foundation for headers, sidebars, and high-level navigation, providing a grounded, professional atmosphere.
- **Secondary:** Blue (#3B82F6) is used strategically for interactive elements, icons, and informational status updates.
- **Accent:** Green (#22C55E) is reserved strictly for conversion-oriented actions like "Buy Now" and "In Stock" indicators to create a clear behavioral trigger.
- **Surface:** A clean white background ensures product photography remains the focal point, supported by Dark Gray text for optimal legibility.

## Typography
The typography strategy employs a dual-font system to separate narrative from data. 

**Inter** serves as the primary typeface for all UI copy and headings, offering a neutral, utilitarian feel that ensures technical readability across all screen sizes. 

**JetBrains Mono** is introduced as a specialized functional face. It must be used exclusively for prices, product SKU numbers, and technical specifications (RAM, Clock Speed, Storage). This distinction helps users scan for hardware specs quickly without them getting lost in the descriptive body text.

## Layout & Spacing
The design system utilizes a **Fixed Grid** model for desktop to maintain a premium, editorial feel, transitioning to a fluid model for mobile devices.

A 12-column grid is standard, with a 24px gutter to provide ample breathing room between product cards and technical spec columns. Spacing follows a strict 8px rhythmic scale. Components should favor generous internal padding (MD or LG) to emphasize a "luxury" tech retail experience where information is never crowded.

## Elevation & Depth
Depth in this design system is achieved through **Low-contrast outlines** and subtle tonal layering rather than heavy shadows.

- **Level 0 (Base):** Pure White (#FFFFFF) background.
- **Level 1 (Cards/Containers):** Use a 1px border (#E2E8F0) to define sections. 
- **Level 2 (Interaction):** On hover, elements may gain a soft, neutral-tinted shadow (0px 4px 20px rgba(15, 23, 42, 0.05)) to suggest lift.
- **Depth Scoping:** Use the neutral gray (#F1F5F9) for "well" sections where technical tables or secondary details are housed, creating a recessed visual effect.

## Shapes
The shape language is defined as **Soft (Level 1)**. This uses a 0.25rem (4px) base radius for standard components like input fields and buttons. 

This specific radius is chosen to maintain a sense of technical precision and "engineered" edges, avoiding the overly friendly appearance of pill-shaped or highly rounded elements. It mimics the industrial design of high-end computer chassis and peripherals—sturdy, intentional, and sharp.

## Components
- **Buttons:** Primary buttons use the Deep Navy background with white text. "Buy Now" or "Add to Cart" actions must use the Green accent color. Secondary buttons should be outlined in Blue.
- **Input Fields:** Use 1px borders with the Soft (4px) corner radius. Focus states are indicated by a 2px Blue border.
- **Product Cards:** Feature a subtle 1px border. The JetBrains Mono font should be used for the price, anchored to the bottom right of the card.
- **Status Chips:** Small, low-saturation backgrounds with high-saturation text (e.g., light green background with dark green text) to denote stock levels or shipping status.
- **Spec Tables:** Alternating row highlights using the Neutral Gray to ensure complex data remains readable.
- **Technical Badges:** Use for highlighting key features (e.g., "RTX 4090," "DDR5") using a small, capitalized label style.