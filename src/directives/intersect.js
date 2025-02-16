// directives/intersect.js
export default {
  mounted(el, binding) {
    // Налаштування опцій: threshold можна передати через binding.value.options
    const options = binding.value?.options || { threshold: 0.1 };
    // Назва класу, який буде доданий (за замовчуванням 'visible')
    const className = binding.value?.class || 'visible';

    // Створюємо спостерігача
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          el.classList.add(className);
          // Якщо більше не потрібно спостерігати цей елемент:
          observer.unobserve(el);
        }
      });
    }, options);

    observer.observe(el);
    // Зберігаємо observer на елементі для можливого очищення
    el._intersectionObserver = observer;
  },
  
  unmounted(el) {
    if (el._intersectionObserver) {
      el._intersectionObserver.disconnect();
    }
  }
};