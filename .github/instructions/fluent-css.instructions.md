---
applyTo: '*'
---

# Fluent.css

A css-only implementation of Microsoft's Fluent Design Language.

Fluent.css automatically styles native HTML elements (buttons, inputs, dialogs, etc.) into Fluent themed components.
It provides utility classes for theming, sizing, and variants, with built-in light/dark theme support.
Works standalone or integrates seamlessly with Tailwind CSS using the same utility class syntax.

## Import

Import from CDN in HTML head (recommended):

```html
<link rel="stylesheet" href="https://esm.sh/gh/aipx-proto/fluent-css@main/build/fluent.css?raw" />
```

Or in CSS:

```css
@import "https://esm.sh/gh/aipx-proto/fluent-css@main/build/fluent.css?raw";
```

---

## Tailwind Integration (Optional)

Fluent.css integrates cleanly with Tailwind using the same class syntax and CSS @layer definitions. Tailwind is **NOT** required.

### Import Order (CRITICAL):

```html
<!-- 1. Tailwind first -->
<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>

<!-- 2. Fluent.css MUST come after Tailwind for proper CSS cascade -->
<link rel="stylesheet" href="https://esm.sh/gh/aipx-proto/fluent-css@main/build/fluent.css?raw" />
```

### Usage Rules:

- Use Tailwind classes for layout, flexbox, grid, spacing
- Use Fluent.css for component styling
- Write **only** semantic HTML with utility classes
- **DO NOT** write CSS in `<style>` elements, `.css` files, or `style=""` attributes
- **DO NOT** write tailwind CSS in `<style>` elements—it will not apply.

---

## Component Usage

### Default HTML Element Styling

Native HTML elements (`a`, `button`, `input`, `select`, `textarea`, `details`, `progress`, `table`, etc.) are automatically styled as Fluent components. Classed based components are also pre-styled (`.tab`).

**DO NOT** apply additional visual styles, interactive styles, or Tailwind classes to these component elements—it will break their styling.

- **DO NOT** apply visual classes (`.bg-*`, `.text-*`, `.border-*`, `.font-*`, etc.) to component elements
- **DO NOT** apply interactive classes (`.hover:*`, `.active:*`, `.focus:*`) to component elements
- **DO NOT** apply Tailwind classes to table elements (`table`, `thead`, `tr`, `td`, etc.)
- **DO NOT** style the component elements in any way

### Component Classes

#### Type Modifiers

Use `.type-{type}` to modify component appearance:

- `.type-default`: Default style (no-op class)
- `.type-primary`: Blue brand background for primary actions (use once per page)
- `.type-outline`: Outlined with no background
- `.type-subtle`: Less intense version
- `.type-transparent`: No background, only foreground color

Applies to: `button`, `.btn`, `.btn-group`, `input`, `.input`, `.tab`, `.tabs`

#### Size Modifiers

- `.size-sm`: Smaller size
- `.size-md`: Default size (no-op class)
- `.size-lg`: Larger size

#### State Classes

- `.selected`: Shows active/toggled state
- `.disabled`: Disabled state for elements without `disabled` attribute
- `.interactive`: Adds hover/active states to non-interactive elements
- `.icon-only`: Square 1:1 aspect ratio for single-icon buttons/tabs (add `title` attribute for accessibility)

**Parent Inheritance**: Applying type/size/state to parent elements affects all children. Example: `.btn-group.size-sm` makes all child buttons small.

#### Position Classes

Control popover positioning with `.position-{direction}-{alignment}` classes:

**Above**: `.position-above-start`, `.position-above` (center), `.position-above-end`
**Below**: `.position-below-start`, `.position-below` (center), `.position-below-end`
**Before**: `.position-before-top`, `.position-before` (center), `.position-before-bottom`
**After**: `.position-after-top`, `.position-after` (center), `.position-after-bottom`

Default positioning: popovers use `position-above-start`, menus use `position-below-end`.

---

## Utility Classes

### Semantic Colors

**Background**: `.bg-page`, `.bg-panel`, `.bg-card`
**Border**: `.border-border` (normal), `.border-outline` (emphasis)  
**Text**: `.text-heading`, `.text-body`, `.text-muted`
**Brand**: `.bg-brand`, `.text-link`

**DO NOT** use raw color classes like `.bg-neutral-100` - this breaks theming.

#### Color Meanings

- `card`: Background for dialogs, popovers, tooltips
- `panel`: Content panel backgrounds
- `page`: Shell/navigation backgrounds
- `border`: Dividing content/outlining cards
- `outline`: Intense borders for attention
- `muted/body/heading`: Text hierarchy
- `link/brand`: Blue brand colors
- `input/selected/hover/active`: Interaction states

### Light/Dark Theme

App defaults to light theme. Add `.dark` class to root element for dark theme.

### Typography

- Font sizes: `.text-{xs|sm|md|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl}`
- Font weight: `.text-{normal|semibold|bold}` (prefer `semibold` over `bold`)
- Font family: `.text-{sans|mono|serif}` (prefer `sans`)

### Elevation & Borders

- Box shadow: `.shadow-{none|2xs|xs|sm|md|lg|xl|2xl}`
- Border radius: `.rounded-{none|xs|sm|md|lg|xl|2xl|3xl|4xl|full}`

### CSS Variables

All utility values available as CSS custom properties:

- Colors: `--color-{name}`
- Text: `--text-{size|weight|family}`
- Shadow: `--shadow-{size}`
- Radius: `--radius-{size}`

---

## Icons

Use emoji in spans: `<span class="emojicon">❤️</span>`

---

## Component Examples

### Buttons

```html
<button class="type-primary">Primary</button>
<button>Default</button>
<button class="type-outline">Outline</button>
<button class="type-subtle">Subtle</button>
<button class="type-transparent">Transparent</button>
<button class="icon-only" title="Close">&times;</button>

<!-- Other elements as buttons -->
<input type="submit" value="Submit" />
<a href="#" class="btn">Link Button</a>
<select class="btn">
  <option>Select Button</option>
</select>
```

### Button Groups

```html
<!-- USE SPARINGLY: Only for toolbars or split buttons, NOT for all button sets -->
<div class="btn-group">
  <button class="selected">Bold</button>
  <button>Italic</button>
  <button>Underline</button>
</div>
```

### Inputs

```html
<input type="text" placeholder="Default" />
<input type="text" placeholder="Outline" class="type-outline" />
<input type="text" placeholder="Subtle" class="type-subtle" />
<input type="text" placeholder="Transparent" class="type-transparent" />

<!-- Composite input: ONLY for including icons/buttons inside inputs -->
<div class="input">
  <span class="emojicon">🔍</span>
  <input type="text" placeholder="Search" />
  <button class="size-sm">Submit</button>
</div>

<select>
  <option>Select Option</option>
</select>
<textarea placeholder="Enter text"></textarea>
```

### Checkbox

```html
<label><input type="checkbox" checked />Checkbox</label> <label><input type="checkbox" />Unchecked</label>
```

### Radio Buttons

```html
<label><input type="radio" name="option" value="1" checked />Option 1</label>
<label><input type="radio" name="option" value="2" />Option 2</label>
<label><input type="radio" name="option" value="3" />Option 3</label>
```

### Switch

```html
<label><input type="checkbox" class="switch" checked />On</label>
<label><input type="checkbox" class="switch" />Off</label>
```

### Slider

```html
<input type="range" min="0" max="100" value="50" /> <input type="range" min="0" max="100" value="75" step="5" />
```

### Progress & Loading

```html
<progress value="33" max="100"></progress>
<progress indeterminate></progress>
<progress class="spinner" indeterminate></progress>
```

### Accordion

```html
<details>
  <summary>Accordion Item</summary>
  <p>Content here</p>
</details>

<details open>
  <summary class="marker-end">Right Arrow</summary>
  <p>Content here</p>
</details>
```

### Tabs

```html
<!-- ALWAYS use this pattern for tabs - do not recreate tab functionality -->
<nav class="tabs">
  <button class="tab selected">Tab 1</button>
  <button class="tab">Tab 2</button>
  <button class="tab">Tab 3</button>
</nav>

<nav class="tabs vertical">
  <a href="#" class="tab selected">Tab 1</a>
  <a href="#" class="tab">Tab 2</a>
</nav>
```

### Dialog

```html
<dialog closedby="any">
  <header>
    <h3>Dialog Title</h3>
    <button class="dialog-close type-subtle icon-only" title="Close">&times;</button>
  </header>
  <main>
    <!-- Main element scrolls automatically when content overflows -->
    <p>Dialog content with automatic scrolling when overflowing.</p>
  </main>
  <footer>
    <button class="type-primary">Primary</button>
    <button>Cancel</button>
  </footer>
</dialog>
```

### Popover & Menus

#### Basic Popovers (Tooltips, Info Cards)

Use plain `popover` attribute for tooltips and informational content. **DO NOT** add `.menu` class to basic popovers.

```html
<!-- Tooltip/Info Popover (NO .menu class) -->
<div popover id="tooltip">How to use the system...</div>
<button class="icon-only type-subtle" popovertarget="tooltip" title="Help">
  <span class="emojicon">ℹ️</span>
</button>

<!-- Info Card Popover -->
<div popover id="info" class="position-above">
  <h4>Feature Details</h4>
  <p>This feature helps you...</p>
</div>
<button popovertarget="info">Learn More</button>
```

#### Menus

Use `.menu` class **ONLY** for interactive menus with buttons/links. Menus default to `position-below-end` positioning.

```html
<!-- Split Button with Menu -->
<div class="btn-group type-primary">
  <button>Split Button</button>
  <button class="icon-only" popovertarget="menu" title="More Actions">•••</button>
</div>

<div popover class="menu" id="menu">
  <button>Add</button>
  <button>Edit</button>
  <button>Duplicate</button>
  <hr />
  <button>Remove</button>
</div>
```

### Table

```html
<table>
  <!-- Use semantic table elements: thead, tbody, tr, th, td -->
</table>
```