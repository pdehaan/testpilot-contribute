export const easeInOutCubic = t => (t < .5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1);

export const scrollTo = (element, duration = 250) => {
	const startY = window.pageYOffset
  const elemY = window.pageYOffset + document.querySelector(element).getBoundingClientRect().top;
  const targetY = document.body.scrollHeight - elemY < window.innerHeight ? document.body.scrollHeight - window.innerHeight : elemY
	const diff = targetY - startY;
  if (!diff) {
    return;
  }
  var startTime;
  const step = timestamp => {
    if (!startTime) {
      startTime = timestamp;
    }
    const time = timestamp - startTime;
    const percent = easeInOutCubic(Math.min(time / duration, 1));
    window.scrollTo(0, startY + diff * percent);
    if (time < duration) {
      window.requestAnimationFrame(step)
    }
  }
	window.requestAnimationFrame(step);
}
