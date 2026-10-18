export function debounce(fn, delay = 500) {
  let timerId;

  const debounced = (...args) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => fn(...args), delay);
  };

  debounced.cancel = () => clearTimeout(timerId);

  return debounced;
}
