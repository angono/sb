const buttons = document.querySelectorAll('.newPage');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    window.location.href = 'detail.html';
  });
});

// Simple script for ad type selection
document.querySelectorAll('.border-2.border-gray-200').forEach(item => {
  item.addEventListener('click', function() {
    // Remove selection from all
    document.querySelectorAll('.border-2').forEach(el => {
      el.classList.remove('border-blue-500', 'bg-blue-50');
      el.classList.add('border-gray-200');
    });
    
    // Add selection to clicked
    this.classList.remove('border-gray-200');
    this.classList.add('border-blue-500', 'bg-blue-50');
  });
});

