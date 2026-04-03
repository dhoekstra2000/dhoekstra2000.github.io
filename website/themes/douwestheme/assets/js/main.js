// Resolve cross-references after page load
document.addEventListener('DOMContentLoaded', function() {
    console.log('Resolving cross-references...');
  // Find all xref placeholders
  const placeholders = document.querySelectorAll('.xref-placeholder');

  placeholders.forEach(function(placeholder) {
    const label = placeholder.getAttribute('data-xref-label');

    // Find the target element
    const target = document.getElementById(label);
    if (target) {
      // Extract the number from the target element's text
      const header = target.querySelector('.font-semibold');
      if (header) {
        const text = header.textContent;
        // Extract number from "Theorem 1: Title" or similar
        const match = text.match(new RegExp(`(\\w+\\s+\\d+):?`));
        if (match) {
          const name = match[1];
          // Replace placeholder with actual link
          const link = document.createElement('a');
          link.href = '#' + label;
          link.textContent = name;
          placeholder.parentNode.replaceChild(link, placeholder);
        }
      }
    } else {
      // Target not found, show error
      placeholder.textContent = `[unknown ref '${label}']`;
      placeholder.className = 'text-red-600';
    }
  });
});
