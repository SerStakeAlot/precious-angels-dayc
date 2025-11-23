# Planning Guide

A professional, warm, and trustworthy website for Precious Angels Daycare that showcases their facility, curriculum, and provides easy contact access for parents seeking quality childcare.

**Experience Qualities**:
1. **Trustworthy** - Parents need to feel confident leaving their children in the daycare's care through professional presentation and clear information
2. **Warm** - The design should reflect the nurturing, caring environment that a quality daycare provides
3. **Accessible** - Information should be easy to find with clear navigation and simple contact methods

**Complexity Level**: Content Showcase (information-focused)
  - The site primarily displays information about the daycare with simple navigation between home, about/curriculum, and contact sections

## Essential Features

### Home Page with Image Gallery
- **Functionality**: Displays hero section with daycare information and a gallery of facility photos
- **Purpose**: First impression that showcases the physical environment and establishes credibility
- **Trigger**: User lands on the website
- **Progression**: View hero with daycare name and tagline → Scroll through facility photos → Navigate to other sections via menu
- **Success criteria**: Images load properly, hero is visually appealing, navigation is intuitive

### About/Curriculum Section
- **Functionality**: Details the daycare's educational approach and daily activities
- **Purpose**: Helps parents understand the learning environment and daily structure
- **Trigger**: User clicks "About" or "Curriculum" in navigation
- **Progression**: Navigate to About page → Read curriculum details → Review program structure → Navigate to contact if interested
- **Success criteria**: Information is organized clearly, easy to read, and conveys educational value

### Contact Section
- **Functionality**: Provides owner contact information (phone, email, address) and optional contact form
- **Purpose**: Makes it easy for interested parents to reach out
- **Trigger**: User clicks "Contact" in navigation
- **Progression**: Navigate to Contact page → View contact details → Call/email or submit form
- **Success criteria**: Contact information is prominently displayed, form submissions work properly (if included)

## Edge Case Handling
- **Missing Images**: Display placeholder with daycare name if photos aren't uploaded yet
- **Long Content**: Use scrollable sections to maintain layout integrity
- **Mobile Navigation**: Collapsible menu for smaller screens
- **Form Errors**: Clear validation messages for any required contact fields

## Design Direction
The design should evoke feelings of safety, warmth, and professionalism - like a caring grandmother's home but with modern educational standards. It should feel nurturing and friendly while maintaining credibility, using soft colors, rounded elements, and generous whitespace to create a calm, welcoming atmosphere.

## Color Selection
Analogous warm palette (soft pastels moving from purple to pink to peach) to create a gentle, cohesive, and child-friendly feeling that still maintains professionalism.

- **Primary Color**: Soft lavender `oklch(0.75 0.08 295)` - Communicates calm, nurturing care and gentle professionalism
- **Secondary Colors**: Warm blush `oklch(0.80 0.06 15)` for accents - Adds warmth and approachability without overwhelming
- **Accent Color**: Coral pink `oklch(0.72 0.12 25)` - Draws attention to call-to-action elements like contact buttons with warmth and friendliness
- **Foreground/Background Pairings**:
  - Background (Cream white `oklch(0.98 0.01 85)`): Dark slate text `oklch(0.25 0.02 260)` - Ratio 13.8:1 ✓
  - Card (Pure white `oklch(1 0 0)`): Dark slate text `oklch(0.25 0.02 260)` - Ratio 15.2:1 ✓
  - Primary (Soft lavender `oklch(0.75 0.08 295)`): Dark purple text `oklch(0.20 0.05 290)` - Ratio 11.5:1 ✓
  - Secondary (Warm blush `oklch(0.80 0.06 15)`): Dark brown text `oklch(0.25 0.03 30)` - Ratio 10.2:1 ✓
  - Accent (Coral pink `oklch(0.72 0.12 25)`): White text `oklch(1 0 0)` - Ratio 5.1:1 ✓

## Font Selection
Soft, rounded sans-serif fonts that feel approachable and modern while maintaining readability - using Nunito for headings (friendly, rounded) and Inter for body text (clean, professional).

- **Typographic Hierarchy**:
  - H1 (Daycare Name): Nunito Bold/48px/tight letter spacing
  - H2 (Section Titles): Nunito SemiBold/36px/normal letter spacing
  - H3 (Subsections): Nunito SemiBold/24px/normal letter spacing
  - Body Text: Inter Regular/16px/relaxed line height (1.7)
  - Navigation: Inter Medium/15px/normal letter spacing

## Animations
Subtle, gentle animations that enhance usability without distraction - soft fades and smooth transitions that mirror the calm, nurturing environment. Motion should feel organic and unhurried, reflecting the patient care given to children.

- **Purposeful Meaning**: Gentle fades and slides communicate a calm, thoughtful environment. Hover states on images and buttons provide clear feedback without jarring movements
- **Hierarchy of Movement**: Hero section fades in on load, navigation items have subtle hover states, images scale slightly on hover, contact form elements have focus animations

## Component Selection

- **Components**:
  - Card: For curriculum sections and contact information display with soft shadows
  - Button: Primary CTA for contact actions with rounded corners
  - Navigation: Horizontal menu with mobile-responsive drawer
  - Separator: Subtle dividers between content sections
  - Scroll Area: For any lengthy content sections
  - Hover Card: Optional tooltips for additional curriculum details
  
- **Customizations**:
  - Custom image grid layout for facility photos
  - Custom hero section with overlaid text
  - Curriculum cards with icons using Phosphor icons
  
- **States**:
  - Buttons: Soft scale on hover (1.02), slight shadow increase on hover, disabled state with reduced opacity
  - Images: Subtle scale (1.05) and brightness increase on hover
  - Navigation: Underline animation on hover, active page indicator
  - Form inputs: Soft glow on focus, border color change
  
- **Icon Selection**:
  - House (home navigation)
  - BookOpen (curriculum/education)
  - Phone, Envelope (contact methods)
  - Heart (care/nurturing elements)
  - Users (community/family)
  
- **Spacing**:
  - Section padding: py-16 md:py-24
  - Card padding: p-6 md:p-8
  - Content max-width: max-w-6xl for readability
  - Grid gaps: gap-6 md:gap-8
  
- **Mobile**:
  - Single column layout on mobile (< 768px)
  - Hamburger menu for navigation
  - Stacked image grid (1 column) → 2 columns on tablet → 3 columns on desktop
  - Touch-friendly button sizes (min 44px height)
  - Full-width cards on mobile with adequate padding
