self.addEventListener('install', (e) => {
  self.skipWaiting();
});
self.addEventListener('fetch', (e) => {
  // مجرد ملف فاضي عشان يحقق شروط المتصفح للتثبيت
});
