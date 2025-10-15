function links() {
  function copyToClipboard(id) {
    const el = document.getElementById(id);
    const text = el?.innerText;
    navigator.clipboard.writeText(text).then(() => {
      // Better feedback than alert
      const original = el.innerHTML;
      el.innerHTML = '✓ Copied!';
      el.classList.add('text-green-600');
      setTimeout(() => {
        el.innerHTML = original;
        el.classList.remove('text-green-600');
      }, 2000);
    });
  }

  function toggleItem(btn) {
    const next = btn.nextElementSibling;
    const arrow = btn.querySelector('span:last-child');
    next.classList.toggle('hidden');
    arrow.textContent = next.classList.contains('hidden') ? '▸' : '▾';
  }

  function openRequest() {
    document.getElementById('request-modal').classList.remove('hidden');
  }

  function closeRequest() {
    document.getElementById('request-modal').classList.add('hidden');
  }

  function submitRequest(e) {
    e.preventDefault();
    const name = document.getElementById('req-name').value;
    const song = document.getElementById('req-song').value;
    alert(`Thanks${name ? ' ' + name : ''}! Request received: "${song}"`);
    closeRequest();
  }
}
export default links();