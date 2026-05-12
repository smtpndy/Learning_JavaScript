/*
JavaScript Date and Time Guide
==============================
This file covers essential Date/Time concepts in JavaScript,
from basic usage to advanced formatting and best practices.
*/
// ******************* Video Notes **********************
const myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());





// ******************************************************
// 1. Creating Date objects
// ------------------------
// Using the current date/time
const now = new Date();
console.log('Now:', now);

// Using a date-time string
const fromString = new Date('2026-05-12T15:30:00');
console.log('From string:', fromString);

// Using year, month, day, hours, minutes, seconds, milliseconds
// Month is zero-based: 0 = January, 11 = December
const preciseDate = new Date(2026, 4, 12, 15, 30, 0, 0);
console.log('Precise date:', preciseDate);

// Using milliseconds since Unix epoch (Jan 1, 1970 UTC)
const epochDate = new Date(0);
console.log('Epoch date:', epochDate);

// 2. Getting date/time components
// --------------------------------
console.log('Year:', now.getFullYear());
console.log('Month index:', now.getMonth());
console.log('Month name:', ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][now.getMonth()]);
console.log('Date:', now.getDate());
console.log('Day of week:', now.getDay()); // 0 = Sunday, 6 = Saturday
console.log('Hours:', now.getHours());
console.log('Minutes:', now.getMinutes());
console.log('Seconds:', now.getSeconds());
console.log('Milliseconds:', now.getMilliseconds());

// UTC getters give the same components in UTC timezone
console.log('UTC year:', now.getUTCFullYear());
console.log('UTC month index:', now.getUTCMonth());
console.log('UTC date:', now.getUTCDate());
console.log('UTC hours:', now.getUTCHours());

// 3. Setting date/time components
// --------------------------------
const modified = new Date(now);
modified.setFullYear(2030);
modified.setMonth(11); // December
modified.setDate(25);
modified.setHours(9, 45, 0, 0);
console.log('Modified date:', modified);

// UTC setters
const modifiedUTC = new Date(now);
modifiedUTC.setUTCFullYear(2030);
modifiedUTC.setUTCMonth(11);
modifiedUTC.setUTCDate(25);
console.log('Modified UTC date:', modifiedUTC);

// 4. Working with timestamps
// --------------------------
console.log('Timestamp (ms since epoch):', now.getTime());
console.log('Timestamp via valueOf():', now.valueOf());

const addedDays = 5;
const oneDayMs = 24 * 60 * 60 * 1000;
const future = new Date(now.getTime() + addedDays * oneDayMs);
console.log(`Date after ${addedDays} days:`, future);

// 5. Comparison and equality
// --------------------------
const dateA = new Date('2026-05-12T10:00:00');
const dateB = new Date('2026-05-12T12:00:00');
console.log('A < B:', dateA < dateB);
console.log('A > B:', dateA > dateB);
console.log('A equals B:', dateA.getTime() === dateB.getTime());

// 6. Parsing and formatting
// -------------------------
const isoString = now.toISOString();
console.log('ISO string:', isoString);

console.log('Locale string:', now.toLocaleString());
console.log('Locale date string:', now.toLocaleDateString());
console.log('Locale time string:', now.toLocaleTimeString());

// Custom formatting helper
function pad(number) {
  return String(number).padStart(2, '0');
}
function formatDate(date) {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}` +
         ` ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
}
console.log('Custom formatted date:', formatDate(now));

// 7. Time zones and UTC differences
// ----------------------------------
console.log('Local timezone offset (minutes):', now.getTimezoneOffset());
console.log('Local timezone offset (hours):', now.getTimezoneOffset() / 60);

const utcDate = new Date(Date.UTC(2026, 4, 12, 15, 30, 0));
console.log('UTC constructed date:', utcDate);

// Convert a local date to UTC components
console.log('Local date string:', now.toString());
console.log('UTC date string:', now.toUTCString());

// 8. Date arithmetic examples
// ---------------------------
function addMilliseconds(date, ms) {
  return new Date(date.getTime() + ms);
}
function addDays(date, days) {
  return addMilliseconds(date, days * oneDayMs);
}
function addMonths(date, months) {
  const result = new Date(date);
  const desiredMonth = result.getMonth() + months;
  result.setMonth(desiredMonth);
  return result;
}
console.log('Add 10 days:', addDays(now, 10));
console.log('Add 3 months:', addMonths(now, 3));

// 9. Best practices for date math
// -------------------------------
// Always work with timestamps for arithmetic and use UTC when possible to avoid DST issues.
// Use local get/set methods only when showing or parsing user-facing values.

// Example: compute difference in days
const start = new Date('2026-05-01T00:00:00');
const end = new Date('2026-05-12T00:00:00');
const diffMs = end - start;
const diffDays = diffMs / oneDayMs;
console.log('Difference in days:', diffDays);

// 10. Advanced formatting with Intl.DateTimeFormat
// -----------------------------------------------
const formatter = new Intl.DateTimeFormat('en-US', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  timeZoneName: 'short',
});
console.log('Intl formatted:', formatter.format(now));

// Specific locales and options
console.log('German style:', new Intl.DateTimeFormat('de-DE').format(now));
console.log('Japanese style:', new Intl.DateTimeFormat('ja-JP', { dateStyle: 'full' }).format(now));

// 11. Valid date checks
// ---------------------
function isValidDate(d) {
  return d instanceof Date && !Number.isNaN(d.getTime());
}
console.log('Valid date?', isValidDate(new Date('2026-05-12')));
console.log('Invalid date?', isValidDate(new Date('invalid date string')));

// 12. Working with strings and parsing caveats
// -------------------------------------------
// Avoid using Date.parse with non-ISO strings because implementations may differ.
// Prefer ISO 8601 strings or manual parsing for consistent results.

// Example manual parsing of YYYY-MM-DD
function parseYYYYMMDD(value) {
  const [year, month, day] = value.split('-').map(Number);
  return new Date(year, month - 1, day);
}
console.log('Parsed date:', parseYYYYMMDD('2026-05-12'));

// 13. Modern JavaScript: Temporal API overview (if available)
// ----------------------------------------------------------
// If your runtime supports the Temporal API, it is safer and easier for complex date/time needs.
// Example usage appears here as an optional reference.
if (typeof Temporal !== 'undefined') {
  const temporalNow = Temporal.Now.plainDateTimeISO();
  console.log('Temporal PlainDateTime:', temporalNow.toString());
  const temporalZoned = Temporal.Now.zonedDateTimeISO();
  console.log('Temporal ZonedDateTime:', temporalZoned.toString());
} else {
  console.log('Temporal API is not available in this environment.');
}

// 14. Summary
// ----------
// - Use Date to create and inspect moments in time.
// - Prefer UTC for arithmetic and storage.
// - Use Intl.DateTimeFormat for localization.
// - Use custom format helpers for consistent string output.
// - Validate date objects before using them.
// - Consider Temporal for advanced date/time handling when available.
