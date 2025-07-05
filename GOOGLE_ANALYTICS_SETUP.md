# Google Analytics Setup Guide

## Prerequisites

1. A Google Analytics 4 (GA4) account
2. A GA4 property created for your website
3. Your GA4 Measurement ID (starts with "G-")

## Setup Steps

### 1. Get Your Google Analytics 4 Measurement ID

1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new property or use an existing one
3. Go to Admin → Data Streams → Web
4. Create a new stream or use existing one
5. Copy your Measurement ID (format: G-XXXXXXXXXX)

### 2. Update Your Code

Replace `G-XXXXXXXXXX` with your actual Measurement ID in these files:

- `public/index.html` (line with `gtag/js?id=`)
- `public/index.html` (line with `gtag('config', '')`)
- `src/components/GoogleAnalytics.js` (line with `ReactGA.initialize('')`)

### 3. Test Your Setup

1. Run your development server: `npm start`
2. Open your website
3. Check the Network tab in browser dev tools for requests to `google-analytics.com`
4. Check your Google Analytics Real-Time reports

## Usage Examples

### Track Button Clicks

```javascript
import { trackButtonClick } from "./utils/analytics";

// In your component
<button onClick={() => trackButtonClick("Contact Form Submit")}>Submit</button>;
```

### Track Form Submissions

```javascript
import { trackFormSubmission } from "./utils/analytics";

// In your form submit handler
const handleSubmit = (e) => {
  e.preventDefault();
  trackFormSubmission("Contact Form");
  // ... rest of your form logic
};
```

### Track External Links

```javascript
import { trackExternalLink } from "./utils/analytics";

// In your component
<a
  href="https://example.com"
  onClick={() => trackExternalLink("https://example.com", "Example Link")}
  target="_blank"
  rel="noopener noreferrer"
>
  Example Link
</a>;
```

### Track Language Changes

```javascript
import { trackLanguageChange } from "./utils/analytics";

// In your language switcher
const handleLanguageChange = (language) => {
  trackLanguageChange(language);
  // ... rest of your language change logic
};
```

## What's Being Tracked Automatically

- Page views (when users navigate between pages)
- Initial page load
- User sessions
- User demographics (if available)
- Device and browser information

## Privacy Considerations

- This setup respects user privacy settings
- Users can opt out through browser settings
- Consider adding a privacy policy mentioning Google Analytics usage
- For GDPR compliance, consider adding a cookie consent banner

## Troubleshooting

1. **No data appearing**: Check that your Measurement ID is correct
2. **Events not tracking**: Ensure the component is properly imported and rendered
3. **Development vs Production**: Analytics work in both environments, but you may want to use different IDs for testing

## Additional Features

You can extend the analytics by:

- Adding more custom events
- Tracking user engagement metrics
- Setting up conversion goals
- Creating custom dimensions and metrics
- Setting up e-commerce tracking (if applicable)
