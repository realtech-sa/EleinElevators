/* ==========================================================
   Elein Elevators — i18n (AR default / EN), WhatsApp links,
   mobile nav, scroll reveal, gallery lightbox.
   ========================================================== */
(function () {
  "use strict";

  var WA_NUMBER = "966543960602";
  var STORAGE_KEY = "elein-lang";
  document.documentElement.classList.add("js");

  /* ---------- Dictionaries ----------
     Arabic wording comes from the client's logo and image headlines.
     English below is a translation. TRANSLATED: review */
  var I18N = {
    ar: {
      metaTitle: "شركة الين للمصاعد | تركيب وصيانة المصاعد",
      metaDesc: "شركة الين للمصاعد: تركيب وصيانة المصاعد، كبائن فخمة وتصاميم متنوعة، مصاعد المستشفيات، خامات إيطالية وتكنولوجيا حديثة. تواصل معنا عبر واتساب.",
      skip: "تخطَّ إلى المحتوى",
      brandAria: "شركة الين للمصاعد — الرئيسية",
      logoAlt: "شعار شركة الين للمصاعد",
      brandName: "شركة الين للمصاعد",
      navAria: "القائمة الرئيسية",
      footerNavAria: "روابط التذييل",
      navWhy: "لماذا نحن",
      navServices: "خدماتنا",
      navGallery: "أعمالنا",
      navContact: "تواصل معنا",
      menuOpen: "فتح القائمة",
      menuClose: "إغلاق القائمة",
      langBtn: "EN",
      langBtnLang: "en",
      langBtnAria: "Switch to English",
      heroEyebrow: "تركيب وصيانة المصاعد",
      heroTitle: "شركة الين للمصاعد",
      heroLead: "ليس مجرد مصعد! تصاميم متنوعة تناسب ذوقك، بخامات إيطالية وتكنولوجيا حديثة.",
      heroMotto: "أمان عائلتك مسؤوليتنا",
      ctaWhatsApp: "تواصل عبر واتساب",
      ctaGallery: "شاهد أعمالنا",
      whyEyebrow: "عن الين",
      whyTitle: "لماذا نحن؟",
      whySub: "نظام أمان عالٍ وتكنولوجيا حديثة.",
      why1: "الأمن والسلامة",
      why2: "تكنولوجيا حديثة",
      why3: "أسعار تنافسية",
      why4: "خامات إيطالية",
      servicesEyebrow: "خدماتنا",
      servicesTitle: "حلول مصاعد تناسب احتياجك",
      s1Title: "تركيب المصاعد",
      s1Desc: "تركيب المصاعد بخامات إيطالية وتكنولوجيا حديثة.",
      s2Title: "صيانة المصاعد",
      s2Desc: "صيانة المصاعد مع اهتمام بالأمن والسلامة.",
      s3Title: "مصاعد المستشفيات",
      s3Desc: "تصميم مصاعد المستشفيات بكبائن واسعة للأغراض المتنوعة.",
      s4Title: "كبائن فخمة",
      s4Desc: "كبائن فخمة حسب ذوقك وطلبك، ولوحات فنية متحركة تنتقل بين الطوابق.",
      s5Title: "مصاعد حسب الطلب",
      s5Desc: "مصاعد مصممة خصيصاً لتلبية احتياجاتك.",
      askWhatsApp: "استفسر عبر واتساب",
      galleryEyebrow: "أعمالنا",
      galleryTitle: "معرض الصور",
      gallerySub: "اضغط على أي صورة لعرضها بحجم أكبر.",
      altLuxury: "كابينة مصعد فخمة بتشطيبات معدنية لامعة — كبائن فخمة حسب ذوقك وطلبك",
      altVaried: "مدخل مصعد بواجهة رخامية وإضاءة سقف زخرفية — تصاميم متنوعة تناسب ذوقك",
      altArt: "كابينة مصعد بتشطيب خشبي وذهبي وشعار النخلة والسيفين — لوحات فنية متحركة تنتقل بين الطوابق",
      altHospital: "مصعد واسع لمريض على كرسي متحرك مع طبيبين ونقالة — تصميم مصاعد المستشفيات",
      altCustom: "مصعد معدني يحمل صناديق كرتونية — مصاعد مصممة خصيصاً لتلبية احتياجاتك",
      altSafety: "كابينة مصعد معدنية واسعة بإضاءة سقف — نظام أمان عالٍ وتكنولوجيا حديثة",
      altFamily: "عائلة داخل كابينة مصعد معدنية — أمان عائلتك مسؤوليتنا",
      altWhy: "كابينة مصعد مع مزايا الشركة: الأمن والسلامة، تكنولوجيا حديثة، أسعار تنافسية، خامات إيطالية",
      contactEyebrow: "تواصل معنا",
      contactTitle: "جاهزون لخدمتك",
      contactLead: "راسلنا مباشرة عبر واتساب للاستفسار عن التركيب أو الصيانة أو تصميم الكبائن.",
      rights: "جميع الحقوق محفوظة.",
      waFloatAria: "تواصل معنا عبر واتساب",
      lightboxAria: "عارض الصور",
      lbClose: "إغلاق",
      lbPrev: "الصورة السابقة",
      lbNext: "الصورة التالية",
      lbCount: "{n} من {t}",
      waGeneral: "مرحباً شركة الين للمصاعد، أود الاستفسار عن خدماتكم.",
      waService: "مرحباً شركة الين للمصاعد، أود الاستفسار عن خدمة: {s}"
    },

    /* TRANSLATED: review — English translation of the Arabic source text */
    en: {
      metaTitle: "Elein Elevators | Elevator Installation & Maintenance",
      metaDesc: "Elein Elevators: elevator installation and maintenance, luxury cabins and varied designs, hospital elevators, Italian materials and modern technology. Contact us on WhatsApp.",
      skip: "Skip to content",
      brandAria: "Elein Elevators — Home",
      logoAlt: "Elein Elevators logo",
      brandName: "Elein Elevators",
      navAria: "Main navigation",
      footerNavAria: "Footer links",
      navWhy: "Why us",
      navServices: "Services",
      navGallery: "Our work",
      navContact: "Contact",
      menuOpen: "Open menu",
      menuClose: "Close menu",
      langBtn: "ع",
      langBtnLang: "ar",
      langBtnAria: "التبديل إلى العربية",
      heroEyebrow: "Elevator installation & maintenance",
      heroTitle: "Elein Elevators",
      heroLead: "Not just an elevator! Varied designs to suit your taste, built with Italian materials and modern technology.",
      heroMotto: "Your family's safety is our responsibility",
      ctaWhatsApp: "Chat on WhatsApp",
      ctaGallery: "See our work",
      whyEyebrow: "About Elein",
      whyTitle: "Why choose us?",
      whySub: "A high safety system and modern technology.",
      why1: "Safety & security",
      why2: "Modern technology",
      why3: "Competitive prices",
      why4: "Italian materials",
      servicesEyebrow: "Our services",
      servicesTitle: "Elevator solutions for your needs",
      s1Title: "Elevator installation",
      s1Desc: "Elevator installation with Italian materials and modern technology.",
      s2Title: "Elevator maintenance",
      s2Desc: "Elevator maintenance with a focus on safety and security.",
      s3Title: "Hospital elevators",
      s3Desc: "Hospital elevator design with spacious cabins for a range of uses.",
      s4Title: "Luxury cabins",
      s4Desc: "Luxury cabins made to your taste and request, with moving works of art that travel between floors.",
      s5Title: "Made-to-order elevators",
      s5Desc: "Elevators designed specifically to meet your needs.",
      askWhatsApp: "Ask on WhatsApp",
      galleryEyebrow: "Our work",
      galleryTitle: "Gallery",
      gallerySub: "Tap any image to view it larger.",
      altLuxury: "Luxury elevator cabin with polished metal finishes — luxury cabins made to your taste",
      altVaried: "Elevator entrance with marble surround and decorative ceiling lights — varied designs to suit your taste",
      altArt: "Elevator cabin in wood and gold with the palm-and-swords emblem — moving works of art between floors",
      altHospital: "Spacious elevator with a patient in a wheelchair, two doctors and a stretcher — hospital elevator design",
      altCustom: "Steel elevator carrying cardboard boxes — elevators designed to meet your needs",
      altSafety: "Spacious steel elevator cabin with ceiling lighting — high safety system and modern technology",
      altFamily: "A family inside a steel elevator cabin — your family's safety is our responsibility",
      altWhy: "Elevator cabin with the company's strengths: safety, modern technology, competitive prices, Italian materials",
      contactEyebrow: "Contact us",
      contactTitle: "Ready to help",
      contactLead: "Message us directly on WhatsApp about installation, maintenance or cabin design.",
      rights: "All rights reserved.",
      waFloatAria: "Contact us on WhatsApp",
      lightboxAria: "Image viewer",
      lbClose: "Close",
      lbPrev: "Previous image",
      lbNext: "Next image",
      lbCount: "{n} of {t}",
      waGeneral: "Hello Elein Elevators, I'd like to ask about your services.",
      waService: "Hello Elein Elevators, I'd like to ask about: {s}"
    }
  };

  var currentLang = "ar";

  function waLink(text) {
    return "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(text);
  }

  function setMeta(selector, value) {
    var el = document.querySelector(selector);
    if (el) el.setAttribute("content", value);
  }

  function applyLang(lang) {
    var t = I18N[lang] || I18N.ar;
    currentLang = I18N[lang] ? lang : "ar";
    var html = document.documentElement;
    html.lang = currentLang;
    html.dir = currentLang === "ar" ? "rtl" : "ltr";
    document.title = t.metaTitle;
    setMeta('meta[name="description"]', t.metaDesc);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var v = t[el.getAttribute("data-i18n")];
      if (v != null) el.textContent = v;
    });
    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      var v = t[el.getAttribute("data-i18n-alt")];
      if (v != null) el.setAttribute("alt", v);
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var v = t[el.getAttribute("data-i18n-aria")];
      if (v != null) el.setAttribute("aria-label", v);
    });

    // WhatsApp links: general or per-service message in the active language
    document.querySelectorAll("[data-wa]").forEach(function (el) {
      var key = el.getAttribute("data-wa");
      var msg = key === "general" ? t.waGeneral : t.waService.replace("{s}", t[key] || "");
      el.setAttribute("href", waLink(msg));
    });

    var btn = document.getElementById("lang-toggle");
    if (btn) {
      btn.textContent = t.langBtn;
      btn.setAttribute("lang", t.langBtnLang);
      btn.setAttribute("aria-label", t.langBtnAria);
    }
    syncMenuLabel();
    if (lightbox && lightbox.open) showImage(lbIndex);
  }

  function saveLang(lang) {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* storage blocked */ }
  }
  function loadLang() {
    try {
      var p = new URLSearchParams(window.location.search).get("lang");
      if (p === "ar" || p === "en") return p;
    } catch (e) { /* old browser */ }
    try {
      var s = localStorage.getItem(STORAGE_KEY);
      if (s === "ar" || s === "en") return s;
    } catch (e) { /* storage blocked */ }
    return "ar";
  }

  /* ---------- Mobile nav ---------- */
  var menuBtn = document.getElementById("menu-toggle");
  var nav = document.getElementById("main-nav");

  function syncMenuLabel() {
    if (!menuBtn) return;
    var open = menuBtn.getAttribute("aria-expanded") === "true";
    menuBtn.setAttribute("aria-label", I18N[currentLang][open ? "menuClose" : "menuOpen"]);
  }
  function setMenu(open) {
    menuBtn.setAttribute("aria-expanded", String(open));
    nav.classList.toggle("open", open);
    syncMenuLabel();
  }
  if (menuBtn && nav) {
    menuBtn.addEventListener("click", function () {
      setMenu(menuBtn.getAttribute("aria-expanded") !== "true");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) setMenu(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("open")) { setMenu(false); menuBtn.focus(); }
    });
  }

  /* ---------- Header shadow on scroll ---------- */
  var header = document.querySelector(".site-header");
  function onScroll() { header.classList.toggle("scrolled", window.scrollY > 8); }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Reveal on scroll ---------- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add("in"); io.unobserve(entry.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    reveals.forEach(function (el, i) {
      el.style.transitionDelay = (i % 4) * 70 + "ms";
      io.observe(el);
    });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---------- Lightbox ---------- */
  var lightbox = document.getElementById("lightbox");
  var lbImg = document.getElementById("lb-img");
  var lbCap = document.getElementById("lb-caption");
  var lbCount = document.getElementById("lb-count");
  var items = Array.prototype.slice.call(document.querySelectorAll(".g-item"));
  var lbIndex = 0;
  var lastFocus = null;

  function showImage(i) {
    lbIndex = (i + items.length) % items.length;
    var src = items[lbIndex].querySelector("img");
    lbImg.src = src.getAttribute("src");
    lbImg.alt = src.getAttribute("alt");
    lbImg.setAttribute("width", src.getAttribute("width"));
    lbImg.setAttribute("height", src.getAttribute("height"));
    lbCap.textContent = src.getAttribute("alt");
    lbCount.textContent = I18N[currentLang].lbCount
      .replace("{n}", lbIndex + 1).replace("{t}", items.length);
  }

  function openLightbox(i) {
    lastFocus = document.activeElement;
    showImage(i);
    if (typeof lightbox.showModal === "function") lightbox.showModal();
    else lightbox.setAttribute("open", "");
    document.body.style.overflow = "hidden";
    document.getElementById("lb-close").focus();
  }
  function closeLightbox() {
    if (typeof lightbox.close === "function" && lightbox.open) lightbox.close();
    else lightbox.removeAttribute("open");
  }

  if (lightbox && items.length) {
    items.forEach(function (btn, i) {
      btn.addEventListener("click", function () { openLightbox(i); });
    });
    document.getElementById("lb-close").addEventListener("click", closeLightbox);
    document.getElementById("lb-prev").addEventListener("click", function () { showImage(lbIndex - 1); });
    document.getElementById("lb-next").addEventListener("click", function () { showImage(lbIndex + 1); });
    lightbox.addEventListener("close", function () {
      document.body.style.overflow = "";
      if (lastFocus) lastFocus.focus();
    });
    // click on the dark backdrop area closes
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox || e.target.classList.contains("lb-figure")) closeLightbox();
    });
    lightbox.addEventListener("keydown", function (e) {
      var rtl = document.documentElement.dir === "rtl";
      if (e.key === "ArrowRight") showImage(lbIndex + (rtl ? -1 : 1));
      else if (e.key === "ArrowLeft") showImage(lbIndex + (rtl ? 1 : -1));
      else if (e.key === "Escape" && !lightbox.showModal) closeLightbox();
    });
    // swipe
    var x0 = null;
    lightbox.addEventListener("touchstart", function (e) { x0 = e.touches[0].clientX; }, { passive: true });
    lightbox.addEventListener("touchend", function (e) {
      if (x0 === null) return;
      var dx = e.changedTouches[0].clientX - x0;
      var rtl = document.documentElement.dir === "rtl";
      if (Math.abs(dx) > 50) showImage(lbIndex + ((dx < 0) !== rtl ? 1 : -1));
      x0 = null;
    }, { passive: true });
  }

  /* ---------- Language toggle ---------- */
  var langBtn = document.getElementById("lang-toggle");
  if (langBtn) {
    langBtn.addEventListener("click", function () {
      var next = currentLang === "ar" ? "en" : "ar";
      applyLang(next);
      saveLang(next);
    });
  }

  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  applyLang(loadLang());
})();
