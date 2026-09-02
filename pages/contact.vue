<script setup lang="ts">
const title = "Hubungi Narevo Coffee | Contact & Social Media";
const description =
  "Hubungi Narevo Coffee melalui WhatsApp, Instagram, TikTok, atau email untuk pertanyaan, acara, dan kolaborasi.";
useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  twitterTitle: title,
  twitterDescription: description,
});
const subject = ref("General inquiry");
</script>
<template>
  <div>
    <UiPageHero
      eyebrow="Talk to Narevo"
      title="Let’s Start a Conversation."
      description="Pertanyaan, kolaborasi, atau sekadar ingin menyapa? Kami senang mendengar kabar darimu."
      image="https://images.unsplash.com/photo-1511081692775-05d0f180a065?auto=format&fit=crop&w=2000&q=85"
      index="05"
    /><HomeContactSection />
    <section class="pb-24">
      <div class="container-site">
        <div
          class="grid overflow-hidden rounded-[2.5rem] bg-coffee text-white lg:grid-cols-[.8fr_1.2fr]"
        >
          <div class="relative min-h-[480px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=85"
              alt="Kopi Narevo"
              class="absolute inset-0 image-cover"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
            ></div>
            <div class="absolute bottom-0 p-8 md:p-10">
              <p class="text-xs uppercase tracking-[.25em] text-[#e4b48f]">
                A warmer hello
              </p>
              <h2 class="mt-4 font-display text-4xl">
                Better yet,<br />see us in person.
              </h2>
              <NuxtLink to="/location" class="btn-light mt-7"
                >View Location →</NuxtLink
              >
            </div>
          </div>
          <form
            class="p-8 md:p-12"
            action="mailto:hello@narevocoffee.com"
            method="post"
            enctype="text/plain"
          >
            <div class="mb-9">
              <p class="text-xs uppercase tracking-[.25em] text-caramel">
                Send a note
              </p>
              <h2 class="mt-3 font-display text-3xl">What can we help with?</h2>
            </div>
            <div class="grid gap-6 sm:grid-cols-2">
              <label class="grid gap-2 text-xs text-white/50"
                >Your name<input
                  name="name"
                  required
                  class="border-b border-white/20 bg-transparent py-3 text-base text-white outline-none transition focus:border-caramel"
                  placeholder="Nama lengkap" /></label
              ><label class="grid gap-2 text-xs text-white/50"
                >Email address<input
                  name="email"
                  type="email"
                  required
                  class="border-b border-white/20 bg-transparent py-3 text-base text-white outline-none transition focus:border-caramel"
                  placeholder="email@example.com"
              /></label>
            </div>
            <label class="mt-7 grid gap-2 text-xs text-white/50"
              >I want to talk about<select
                v-model="subject"
                name="subject"
                class="border-b border-white/20 bg-coffee py-3 text-base text-white outline-none focus:border-caramel"
              >
                <option>General inquiry</option>
                <option>Event & reservation</option>
                <option>Brand collaboration</option>
                <option>Feedback</option>
              </select></label
            ><label class="mt-7 grid gap-2 text-xs text-white/50"
              >Your message<textarea
                name="message"
                required
                rows="4"
                class="resize-none border-b border-white/20 bg-transparent py-3 text-base text-white outline-none transition focus:border-caramel"
                placeholder="Tulis pesan Anda..."
              ></textarea></label
            ><button
              class="mt-9 inline-flex min-h-12 items-center rounded-full bg-white px-7 text-sm font-semibold text-coffee transition hover:bg-caramel hover:text-white"
            >
              Send Message →
            </button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>
