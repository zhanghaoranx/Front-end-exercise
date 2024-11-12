const DISTANCE = 100;
const DURATION = 500;
const map = new WeakMap();
const ob = new IntersectionObserver((entries) => {
  console.log(entries);
  for (const entry of entries) {
    if (entry.isIntersecting) {
      //播放动画 entry.target
      const animation = map.get(entry.target);
      console.log(animation);
      animation && animation.play();
      ob.unobserve(entry.target);
    }
  }
});

function isBelowViewport(el) {
  const rect = el.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  return rect.top > windowHeight;
}

export default {
  mounted(el) {
    if (!isBelowViewport(el)) {
      return;
    }
    /*
     * 关键帧：@keyframes
     * 动画配置：animation
     * */
    const animation = el.animate(
      [
        {
          transform: `translateY(${DISTANCE}px)`,
          opacity: 0.5,
        },
        {
          transform: `translateY(0)`,
          opacity: 1,
        },
      ],
      {
        duration: DURATION,
        easing: "ease-out",
        fill: "forwards",
      }
    );
    animation.pause();
    map.set(el, animation);
    ob.observe(el);
    console.log(el);
  },
  unmounted(el) {
    ob.unobserve(el);
  },
};
