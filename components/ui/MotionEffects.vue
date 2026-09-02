<script setup lang="ts">
const route = useRoute();
let cleanups: Array<() => void> = [];

function cleanup() {
  cleanups.forEach((fn) => fn());
  cleanups = [];
}

function initMotion() {
  cleanup();
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const revealTargets = document.querySelectorAll<HTMLElement>(
    "main section:not(:first-child) h2, main section:not(:first-child) article, main section:not(:first-child) figure, main section:not(:first-child) form, main section:not(:first-child) iframe",
  );
  revealTargets.forEach((element, index) => {
    element.classList.add("scroll-reveal");
    element.style.setProperty("--reveal-delay", `${(index % 4) * 70}ms`);
  });
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -45px" },
  );
  revealTargets.forEach((element) => observer.observe(element));
  cleanups.push(() => observer.disconnect());

  const tiltTargets = document.querySelectorAll<HTMLElement>(
    "article, main a.group",
  );
  tiltTargets.forEach((card) => {
    card.classList.add("tilt-card");
    const move = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      card.style.setProperty("--rx", `${y * -7}deg`);
      card.style.setProperty("--ry", `${x * 7}deg`);
      card.style.setProperty("--mx", `${(x + 0.5) * 100}%`);
      card.style.setProperty("--my", `${(y + 0.5) * 100}%`);
    };
    const leave = () => {
      card.style.setProperty("--rx", "0deg");
      card.style.setProperty("--ry", "0deg");
    };
    card.addEventListener("pointermove", move);
    card.addEventListener("pointerleave", leave);
    cleanups.push(() => {
      card.removeEventListener("pointermove", move);
      card.removeEventListener("pointerleave", leave);
    });
  });

  const hero = document.querySelector<HTMLElement>(
    "main > div > section:first-child img, main > section:first-child img",
  );
  if (hero) {
    const parallax = () =>
      hero.style.setProperty(
        "--hero-shift",
        `${Math.min(window.scrollY * 0.13, 75)}px`,
      );
    window.addEventListener("scroll", parallax, { passive: true });
    parallax();
    cleanups.push(() => window.removeEventListener("scroll", parallax));
  }
}

function ripple(event: MouseEvent) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const target = (event.target as HTMLElement).closest<HTMLElement>(
    "button, .btn-primary, .btn-light",
  );
  if (!target) return;
  const rect = target.getBoundingClientRect();
  const circle = document.createElement("span");
  const size = Math.max(rect.width, rect.height) * 1.5;
  circle.className = "click-ripple";
  circle.style.width = circle.style.height = `${size}px`;
  circle.style.left = `${event.clientX - rect.left - size / 2}px`;
  circle.style.top = `${event.clientY - rect.top - size / 2}px`;
  target.appendChild(circle);
  circle.addEventListener("animationend", () => circle.remove(), {
    once: true,
  });
}

onMounted(() => {
  nextTick(initMotion);
  document.addEventListener("click", ripple);
});
watch(
  () => route.fullPath,
  () => nextTick(initMotion),
);
onBeforeUnmount(() => {
  cleanup();
  document.removeEventListener("click", ripple);
});
</script>

<template><span aria-hidden="true" class="hidden"></span></template>
