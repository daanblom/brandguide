# Brand Guidelines Hugo Theme

A modern, responsive Hugo theme designed for brand guidelines documentation. This theme provides a clean and organized way to present your brand's visual identity.

## Features

- 🎨 Clean, modern design
- 🌓 Dark/Light mode support
- 📱 Fully responsive
- 🎯 Easy-to-use shortcodes for brand elements
- 📝 Markdown-based content
- 🎨 Tailwind CSS for styling
- 🔍 Semantic HTML structure
- ♿ Accessibility focused

## Shortcodes

### Color Palette
```markdown
{{< color-palette >}}
- name: "Primary Blue"
  hex: "#0ea5e9"
  rgb: "14, 165, 233"
  pantone: "P 116-8 C"
{{< /color-palette >}}
```

### Typography
```markdown
{{< typography font="Inter" size="4xl" weight="bold" lineHeight="1.2" >}}
Your text here
{{< /typography >}}
```

### Logo
```markdown
{{< logo image="/images/logo.svg" alt="Logo" width="200" height="60" background="transparent" >}}
Logo description or usage notes
{{< /logo >}}
```

## Installation

1. Create a new Hugo site:
```bash
hugo new site my-brand-guide
cd my-brand-guide
```

2. Clone this theme:
```bash
git clone https://github.com/yourusername/brandguide.git themes/brandguide
```

3. Install dependencies:
```bash
npm install
```

4. Build the CSS:
```bash
npm run build:css
```

5. Start the development server:
```bash
hugo server -D
```

## Configuration

Edit `hugo.toml` to customize your site:

```toml
baseURL = "/"
languageCode = "en-us"
title = "Brand Guidelines"
theme = "brandguide"

[params]
  description = "Brand Guidelines Documentation"
  author = "Your Company"
  company = "Your Company Name"

[menu]
  [[menu.main]]
    identifier = "home"
    name = "Home"
    url = "/"
    weight = 1
```

## Content Structure

Create your content in the `content` directory:

```
content/
├── _index.md
├── colors/
│   └── _index.md
├── typography/
│   └── _index.md
├── logo/
│   └── _index.md
├── imagery/
│   └── _index.md
└── icons/
    └── _index.md
```

## Customization

### Colors
Edit `tailwind.config.js` to customize the theme colors:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          // ... other shades
        },
      },
    },
  },
}
```

### Typography
The theme uses Tailwind's typography plugin. Customize styles in `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            // Custom styles
          },
        },
      },
    },
  },
}
```

## Development

1. Watch for CSS changes:
```bash
npm run watch:css
```

2. Build for production:
```bash
hugo --minify
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This theme is licensed under the MIT License. See the LICENSE file for more information. 
