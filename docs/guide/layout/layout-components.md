# Layout Components

## Overview

On this page, you'll get to know how the layout components are rendered so that it would be easy for you to override these layout components.

## Vertical Layout Components

Vertical Layout is formed with the following layout components. Let's understand each one of them:

### 1. Navigation Menu (left sidebar)

Navigation menu is created with the following components:

- Menu Header which uses `VerticalNavHeader` component

  ![vertical-menu-header](/images/layouts/vertical-menu-header.png)

- `VerticalNavItems` component is used to categorize whether an item is a section header, navigation group or navigation link
- Navigation Section Header which uses `VerticalNavSectionTitle` component

  ![vertical-menu-section-header](/images/layouts/vertical-menu-section-header.png)

- Navigation Group which uses `VerticalNavGroup` component

  ![vertical-menu-group](/images/layouts/vertical-menu-group.png)

- Navigation Link which uses `VerticalNavLink` component

  ![vertical-menu-link](/images/layouts/vertical-menu-link.png)

### 2. Navbar (or AppBar)

AppBar is created with the following components:

#### Left side section

- Template Search which uses `Autocomplete` component

#### Right side section

- Light and Dark Mode Toggler which uses `ModeToggler` component
- Notifications of the User which uses `NotificationDropdown` component
- User Actions which uses `UserDropdown` component

### 3. Footer

Footer is created with the following components:

1. Copyright on left side
2. Important links of the company on right side

## Horizontal Layout Components

Horizontal Layout is formed with the following layout components. Let's understand each one of them:

### 1. Navbar (or AppBar)

AppBar is created with the following components:

#### Left side section

- Company Logo and Company Name

#### Right side section

- Template Search which uses `Autocomplete` component
- Light and Dark Mode Toggler which uses `ModeToggler` component
- Notifications of the User which uses `NotificationDropdown` component
- User Actions which uses `UserDropdown` component

### 2. Navigation Menu

Navigation menu is created with the following components:

- `HorizontalNavItems` component is used to categorize whether an item is a navigation group or navigation link
- Navigation Group which uses `HorizontalNavGroup` component

  <img width='500' alt='horizontal-menu-group' src='/images/layouts/horizontal-menu-group.png'>

- Navigation Link which uses `HorizontalNavLink` component

  <img width='500' alt='horizontal-menu-link' src='/images/layouts/horizontal-menu-link.png'>

### 3. Footer

Footer is created with the following components:

- Copyright on left side
- Important links of the company on right side

## Blank Layout with AppBar Component

Blank Layout with AppBar provides only appBar (at top of the page) which contains Company logo and Company name only.
