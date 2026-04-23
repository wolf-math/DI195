const banner = document.getElementById('sales-banner');

function showBanner() {
  banner.style.display = 'block';
  setTimeout(hideBanner, 5000);
}

function hideBanner() {
  banner.style.display = 'none';
}

setTimeout(showBanner, 5000);
