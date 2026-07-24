# Israel Through Time — Mobile Whole Map Fix v3

This version addresses the real-device failure more defensively:

- the decorative hero overlay cannot intercept taps;
- the control sits above decorative layers;
- mobile detection follows the active layout rather than one width reading;
- the JavaScript filenames are new, preventing old mobile-browser cache reuse;
- the control is also a normal HTML anchor to a static list of all 34 periods, so it still opens a map even if an older or failed script is loaded.

When current JavaScript loads, **See the whole map** opens the mobile Timeline tab. The static list is a no-JavaScript / stale-cache fallback.

Deploy the entire folder.
