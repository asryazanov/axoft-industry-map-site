/* Modal keyboard support for the buildless catalog. */
(() => {
  let current = null, returnFocus = null, previousOverflow = '', disabled = [];
  const controls = dialog => [...dialog.querySelectorAll('button,a[href],input,select,textarea,[tabindex]')]
    .filter(el => !el.disabled && el.tabIndex >= 0 && el.getClientRects().length && !el.closest('[inert]'));
  function restore() {
    for (const [el, value] of disabled) el.inert = value;
    disabled = [];
    document.body.style.overflow = previousOverflow;
  }
  function sync() {
    const dialogs = [...document.querySelectorAll('[data-ux-dialog]')];
    const next = dialogs.at(-1) || null;
    if (next === current) return;
    const wasOpen = !!current;
    if (wasOpen) restore();
    if (!wasOpen && next) returnFocus = document.activeElement;
    current = next;
    if (next) {
      previousOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      let branch = next;
      while (branch.parentElement && branch.parentElement !== document.documentElement) {
        for (const sibling of branch.parentElement.children) {
          if (sibling === branch || sibling.tagName === 'SCRIPT' || sibling.tagName === 'STYLE' || sibling.hasAttribute('data-ux-backdrop')) continue;
          disabled.push([sibling, sibling.inert]); sibling.inert = true;
        }
        branch = branch.parentElement;
      }
      (controls(next)[0] || next).focus();
    } else if (returnFocus?.isConnected) {
      returnFocus.focus(); returnFocus = null;
    }
  }
  document.addEventListener('keydown', event => {
    if (!current || event.key !== 'Tab') return;
    const items = controls(current), first = items[0], last = items.at(-1);
    if (!first) { event.preventDefault(); current.focus(); return; }
    if (event.shiftKey && (document.activeElement === first || !current.contains(document.activeElement))) {
      event.preventDefault(); last.focus();
    } else if (!event.shiftKey && (document.activeElement === last || !current.contains(document.activeElement))) {
      event.preventDefault(); first.focus();
    }
  });
  new MutationObserver(sync).observe(document.body, {childList:true,subtree:true});
  sync();
})();
