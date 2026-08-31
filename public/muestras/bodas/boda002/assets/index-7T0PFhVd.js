(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function a(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=a(n);fetch(n.href,r)}})();const l={couple:{partnerA:"Valentina",partnerB:"Rodrigo",monogram:"V & R",hashtag:"#ValeYRodrigoSeCasan"},hero:{eyebrow:"Con la bendición de Dios y de nuestras familias",title:"Nos casamos",quote:"“Este es el día en que actuó el Señor; nos gozaremos y alegraremos en él.”",quoteSource:"Salmos 118:24",photo:"https://res.cloudinary.com/tnxqwvsy/image/upload/v1788215193/Pareja_Foto_Jonathan_Borba_1.webp",photoAlt:"Valentina y Rodrigo"},event:{dateISO:"2026-11-14T17:00:00-06:00",dateDisplay:"14 de noviembre de 2026",ceremony:{label:"Ceremonia religiosa",time:"5:00 p.m.",venue:"Parroquia de San Jerónimo",address:"Av. San Jerónimo 263, La Otra Banda, CDMX",mapUrl:"https://maps.google.com/?q=Parroquia+de+San+Jer%C3%B3nimo+CDMX"},reception:{label:"Recepción",time:"7:00 p.m.",venue:"Hacienda de los Morales",address:"Vázquez de Mella 525, Del Bosque, CDMX",mapUrl:"https://maps.google.com/?q=Hacienda+de+los+Morales"},dressCode:"Formal / Etiqueta rigurosa",notes:"No niños, por favor. Agradecemos tu comprensión."},story:[{year:"2019",title:"Un café que se alargó tres horas",text:"Nos presentó un amigo en común. Lo que iba a ser un café rápido terminó siendo una tarde entera de conversación.",photo:"https://res.cloudinary.com/tnxqwvsy/image/upload/v1788215194/Pareja_Foto_Gratis_1.webp"},{year:"2021",title:"El primer viaje juntos",text:"Oaxaca nos enseñó que viajábamos igual de bien de lo que conversábamos: sin prisa y siempre buscando el siguiente mezcal.",photo:"https://res.cloudinary.com/tnxqwvsy/image/upload/v1788215193/Pareja_Foto_Gratis.webp"},{year:"2024",title:"La pregunta",text:"Una tarde de domingo, sin anuncios ni cámaras escondidas, Rodrigo preguntó y Valentina dijo que sí antes de que terminara la frase.",photo:"https://res.cloudinary.com/tnxqwvsy/image/upload/v1788215134/Pareja_Foto_Jonathan_Borba.webp"}],gallery:{title:"Momentos",photos:[{src:"https://res.cloudinary.com/tnxqwvsy/image/upload/v1788215193/Pareja_Foto_Jonathan_Borba_3.webp",alt:"Valentina y Rodrigo, retrato",span:"tall"},{src:"https://res.cloudinary.com/tnxqwvsy/image/upload/v1788215193/Pareja_Foto_Jonathan_Borba_4.webp",alt:"Paseo por la playa",span:"wide"},{src:"https://res.cloudinary.com/tnxqwvsy/image/upload/v1788215193/Pareja_Foto_Jonathan_Borba_3.webp",alt:"Cena de aniversario",span:"normal"},{src:"https://res.cloudinary.com/tnxqwvsy/image/upload/v1788215194/Pareja_Foto_Gratis_2.webp",alt:"Viaje a Oaxaca",span:"normal"},{src:"https://res.cloudinary.com/tnxqwvsy/image/upload/v1788215194/Pareja_Foto_Gratis_2.webp",alt:"Compromiso",span:"wide"},{src:"https://res.cloudinary.com/tnxqwvsy/image/upload/v1788215134/Pareja_Foto_Jonathan_Borba.webp",alt:"Familia",span:"tall"}]},music:{src:"./audio/Lunar Eclipse Winter Lake Music.mp3",title:"Lunar Eclipse Winter Lake Music"},rsvp:{endpoint:"",fallbackEmail:"boda.valeyrodrigo@example.com",deadlineDisplay:"15 de octubre de 2026",maxGuestsPerInvite:2,askDietaryRestrictions:!0,askSongRequest:!0},registry:{title:"Mesa de regalos",text:"Tu presencia es el regalo más importante. Si deseas obsequiarnos algo más, contamos con mesa de regalos en Liverpool y sobre para lluvia de sobres.",links:[{label:"Mesa de regalos Liverpool",url:"https://www.liverpool.com.mx"}]},theme:{colors:{ink:"#16241F",paper:"#F3ECDC",accent:"#7C2D3B",gold:"#C7A159",sage:"#9FB3A6"},fonts:{display:"'Fraunces', 'Georgia', serif",body:"'Work Sans', system-ui, sans-serif",eyebrow:"'Space Mono', monospace"}}};function v(t){const e=document.createElement("div");e.id="envelope",e.className="fixed inset-0 z-50 flex items-center justify-center bg-ink text-paper transition-opacity duration-[900ms] ease-out",e.innerHTML=`
    <div class="relative flex flex-col items-center gap-8 px-6 text-center">
      <span class="font-eyebrow text-[11px] tracking-widest2 uppercase text-gold">${l.couple.hashtag}</span>
      <div class="envelope-seal flex h-24 w-24 items-center justify-center rounded-full border border-gold/60">
        <span class="font-display text-2xl tracking-wide">${l.couple.monogram}</span>
      </div>
      <button
        id="open-envelope-btn"
        class="group flex flex-col items-center gap-3 font-eyebrow text-xs uppercase tracking-widest2 text-paper/80 transition hover:text-gold"
      >
        <span>Toca para abrir</span>
        <span class="h-8 w-px bg-gold/60 transition-all group-hover:h-10"></span>
      </button>
    </div>
  `,document.body.appendChild(e),e.querySelector("#open-envelope-btn").addEventListener("click",()=>{e.classList.add("pointer-events-none","opacity-0"),document.body.classList.remove("overflow-hidden"),t(),setTimeout(()=>e.remove(),950)})}function b(t,e=120,a=34,s=420){const n=Math.ceil(t/(s/2));let r=`M ${e/2} 0`,o=0,i=1;for(let d=0;d<n;d++){const c=Math.min(o+s/2,t),u=o+(c-o)/2,p=e/2+a*i;r+=` C ${p} ${u}, ${p} ${u}, ${e/2} ${c}`,o=c,i*=-1}return{d:r,segments:n}}function y(t,e,a){const s=t+a*22,n=e-10;return`<path d="M ${t} ${e} Q ${s} ${n} ${t+a*4} ${e-26}" stroke-linecap="round" />`}function h(t){const e=document.createElement("div");e.id="botanical-spine",e.setAttribute("aria-hidden","true"),e.className="pointer-events-none absolute inset-x-0 top-0 -z-10 hidden md:block",t.appendChild(e);function a(){const s=document.documentElement.scrollHeight,n=120,{d:r,segments:o}=b(s,n);let i="";const d=s/(o*2);for(let c=1;c<o*2;c++){const u=c*d,p=c%2===0?1:-1;i+=y(n/2,u,p)}e.style.height=`${s}px`,e.innerHTML=`
      <svg
        width="100%"
        height="${s}"
        viewBox="0 0 ${n} ${s}"
        preserveAspectRatio="none"
        data-parallax="0.06"
        class="opacity-[0.16]"
      >
        <g stroke="rgb(var(--color-gold))" stroke-width="1" fill="none">
          <path id="botanical-spine-path" d="${r}" stroke-width="1.4" />
          ${i}
        </g>
      </svg>
    `}return a(),window.addEventListener("resize",()=>{clearTimeout(window.__spineResizeT),window.__spineResizeT=setTimeout(a,200)}),a}function w(){const{hero:t,couple:e,event:a}=l;return`
  <section id="inicio" class="relative flex min-h-screen items-center justify-center overflow-hidden bg-ink text-paper">
    <div class="absolute inset-0" data-parallax="0.35">
      <img
        src="${t.photo}"
        alt="${t.photoAlt}"
        class="h-[130%] w-full object-cover opacity-70"
      />
    </div>
    <div class="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/40 to-ink"></div>

    <div class="relative z-10 mx-auto flex max-w-content flex-col items-center px-6 text-center" data-reveal>
      <p class="font-eyebrow text-[11px] uppercase tracking-widest2 text-gold">${t.eyebrow}</p>

      <h1 class="mt-8 font-display text-6xl italic leading-none text-paper sm:text-7xl md:text-8xl">
        ${e.partnerA}
        <span class="mx-3 not-italic text-gold">&amp;</span>
        ${e.partnerB}
      </h1>

      <p class="mt-6 font-eyebrow text-xs uppercase tracking-widest2 text-sage">${t.title} · ${a.dateDisplay}</p>

      <div class="mt-12 flex items-center gap-4">
        <span class="h-px w-10 bg-gold/60"></span>
        <p class="max-w-md font-display text-lg italic text-paper/90">${t.quote}</p>
        <span class="h-px w-10 bg-gold/60"></span>
      </div>
      <p class="mt-3 font-eyebrow text-[10px] uppercase tracking-widest2 text-sage">${t.quoteSource}</p>
    </div>

    <a
      href="#historia"
      class="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 font-eyebrow text-[10px] uppercase tracking-widest2 text-paper/70 transition hover:text-gold"
    >
      <span class="flex flex-col items-center gap-2">
        Desliza
        <span class="h-6 w-px animate-pulse bg-gold/70"></span>
      </span>
    </a>
  </section>
  `}function $(){return`
  <section id="historia" class="bg-paper px-6 py-20 md:py-28">
    <div class="mx-auto max-w-content">
      <header class="text-center" data-reveal>
        <span class="font-eyebrow text-xs uppercase tracking-widest2 text-accent">Nuestra historia</span>
        <h2 class="mt-4 font-display text-4xl italic text-ink md:text-5xl">Cómo llegamos aquí</h2>
      </header>
      <div class="mt-4">${l.story.map((e,a)=>`
      <div class="relative grid gap-6 py-14 md:grid-cols-2 md:gap-16 md:py-20 ${a%2===1?"md:[&>*:first-child]:order-2":""}" data-reveal>
        <div class="overflow-hidden rounded-sm" data-parallax="0.12">
          <img src="${e.photo}" alt="${e.title}" class="h-72 w-full object-cover md:h-96" />
        </div>
        <div class="flex flex-col justify-center">
          <span class="font-eyebrow text-xs uppercase tracking-widest2 text-accent">${e.year}</span>
          <h3 class="mt-3 font-display text-3xl italic text-ink md:text-4xl">${e.title}</h3>
          <p class="mt-4 max-w-md leading-relaxed text-ink/75">${e.text}</p>
        </div>
      </div>
    `).join('<div class="mx-auto h-px w-24 bg-gold/40"></div>')}</div>
    </div>
  </section>
  `}const k=[{key:"days",label:"Días"},{key:"hours",label:"Horas"},{key:"minutes",label:"Min"},{key:"seconds",label:"Seg"}];function E(){return`
  <section class="bg-ink px-6 py-16 text-paper md:py-20">
    <div class="mx-auto max-w-content text-center" data-reveal>
      <span class="font-eyebrow text-xs uppercase tracking-widest2 text-gold">Faltan</span>
      <div id="countdown" class="mt-8 flex flex-wrap items-start justify-center gap-6 md:gap-14">
        ${k.map(t=>`
          <div class="flex flex-col items-center">
            <span data-unit="${t.key}" class="font-display text-5xl text-paper md:text-6xl">00</span>
            <span class="mt-2 font-eyebrow text-[10px] uppercase tracking-widest2 text-sage">${t.label}</span>
          </div>
        `).join('<span class="pt-2 font-display text-3xl text-gold/60 md:text-4xl">·</span>')}
      </div>
      <p class="mt-10 font-eyebrow text-xs uppercase tracking-widest2 text-sage">${l.event.dateDisplay}</p>
    </div>
  </section>
  `}function q(){const t=new Date(l.event.dateISO).getTime(),e=document.getElementById("countdown");if(!e)return;function a(){const s=Math.max(t-Date.now(),0),n=Math.floor(s/864e5),r=Math.floor(s%864e5/36e5),o=Math.floor(s%36e5/6e4),i=Math.floor(s%6e4/1e3);Object.entries({days:n,hours:r,minutes:o,seconds:i}).forEach(([c,u])=>{const p=e.querySelector(`[data-unit="${c}"]`);p&&(p.textContent=String(u).padStart(2,"0"))})}a(),setInterval(a,1e3)}function x({label:t,time:e,venue:a,address:s,mapUrl:n}){return`
    <div class="flex-1 rounded-sm border border-ink/10 bg-paper px-8 py-10 text-center shadow-[0_1px_0_0_rgba(199,161,89,0.4)]">
      <span class="font-eyebrow text-xs uppercase tracking-widest2 text-accent">${t}</span>
      <p class="mt-4 font-display text-2xl italic text-ink">${e}</p>
      <p class="mt-4 font-body text-base font-medium text-ink">${a}</p>
      <p class="mt-1 text-sm leading-relaxed text-ink/65">${s}</p>
      <a
        href="${n}"
        target="_blank"
        rel="noopener"
        class="mt-6 inline-flex items-center gap-2 font-eyebrow text-[10px] uppercase tracking-widest2 text-accent transition hover:text-gold"
      >
        Ver mapa
        <span aria-hidden="true">↗</span>
      </a>
    </div>
  `}function S(){const{event:t}=l;return`
  <section id="detalles" class="relative bg-paper px-6 py-20 md:py-28">
    <div class="mx-auto max-w-content" data-reveal>
      <header class="text-center">
        <span class="font-eyebrow text-xs uppercase tracking-widest2 text-accent">Cuándo y dónde</span>
        <h2 class="mt-4 font-display text-4xl italic text-ink md:text-5xl">${t.dateDisplay}</h2>
      </header>

      <div class="mt-14 flex flex-col gap-6 md:flex-row">
        ${x(t.ceremony)}
        ${x(t.reception)}
      </div>

      <div class="mt-14 flex flex-col items-center gap-2 text-center">
        <p class="font-eyebrow text-[11px] uppercase tracking-widest2 text-ink/60">${t.dressCode}</p>
        <p class="text-sm text-ink/50">${t.notes}</p>
      </div>
    </div>
  </section>
  `}const _={tall:"md:row-span-2 aspect-[3/4]",wide:"md:col-span-2 aspect-[16/10]",normal:"aspect-square"},g=[.08,.18,.1,.22,.14,.09];function C(){const{gallery:t}=l,e=t.photos.map((a,s)=>`
      <div class="group relative overflow-hidden rounded-sm ${_[a.span]||""}" data-reveal>
        <img
          src="${a.src}"
          alt="${a.alt}"
          data-parallax="${g[s%g.length]}"
          class="h-full w-full scale-125 object-cover transition duration-700 group-hover:scale-[1.32]"
        />
        <div class="absolute inset-0 bg-ink/0 transition group-hover:bg-ink/10"></div>
      </div>
    `).join("");return`
  <section id="galeria" class="bg-ink px-6 py-20 text-paper md:py-28">
    <div class="mx-auto max-w-content">
      <header class="text-center" data-reveal>
        <span class="font-eyebrow text-xs uppercase tracking-widest2 text-gold">${t.title}</span>
        <h2 class="mt-4 font-display text-4xl italic md:text-5xl">Capturas de nosotros</h2>
      </header>

      <div class="mt-14 grid grid-cols-2 gap-3 auto-rows-max md:grid-cols-4 md:gap-4 gallery-grid">
        ${e}
      </div>
    </div>
  </section>
  `}function j(){const{rsvp:t}=l,e=Array.from({length:t.maxGuestsPerInvite},(a,s)=>s+1).map(a=>`<option value="${a}">+${a} ${a===1?"acompañante":"acompañantes"}</option>`).join("");return`
  <section id="confirmar" class="bg-paper px-6 py-20 md:py-28">
    <div class="mx-auto max-w-xl" data-reveal>
      <header class="text-center">
        <span class="font-eyebrow text-xs uppercase tracking-widest2 text-accent">Confirma tu asistencia</span>
        <h2 class="mt-4 font-display text-4xl italic text-ink md:text-5xl">¿Nos acompañas?</h2>
        <p class="mt-4 text-sm text-ink/60">
          Por favor confirma antes del <strong class="text-ink">${t.deadlineDisplay}</strong>.
        </p>
      </header>

      <form id="rsvp-form" class="mt-12 flex flex-col gap-5" novalidate>
        <div class="flex flex-col gap-1.5">
          <label for="rsvp-name" class="font-eyebrow text-[10px] uppercase tracking-widest2 text-ink/60">Nombre completo</label>
          <input
            id="rsvp-name" name="name" type="text" required
            class="rsvp-input"
            placeholder="Tu nombre y apellido"
          />
        </div>

        <div class="flex flex-col gap-1.5">
          <label for="rsvp-email" class="font-eyebrow text-[10px] uppercase tracking-widest2 text-ink/60">Correo electrónico</label>
          <input
            id="rsvp-email" name="email" type="email" required
            class="rsvp-input"
            placeholder="tu@correo.com"
          />
        </div>

        <fieldset class="flex flex-col gap-2">
          <legend class="font-eyebrow text-[10px] uppercase tracking-widest2 text-ink/60">¿Asistirás?</legend>
          <div class="flex gap-3">
            <label class="rsvp-radio">
              <input type="radio" name="attending" value="si" required /> Con gusto asistiré
            </label>
            <label class="rsvp-radio">
              <input type="radio" name="attending" value="no" required /> No podré asistir
            </label>
          </div>
        </fieldset>

        <div class="flex flex-col gap-1.5">
          <label for="rsvp-guests" class="font-eyebrow text-[10px] uppercase tracking-widest2 text-ink/60">Acompañantes</label>
          <select id="rsvp-guests" name="guests" class="rsvp-input">
            <option value="0">Solo yo</option>
            ${e}
          </select>
        </div>

        
        <div class="flex flex-col gap-1.5">
          <label for="rsvp-diet" class="font-eyebrow text-[10px] uppercase tracking-widest2 text-ink/60">Restricciones alimenticias</label>
          <input id="rsvp-diet" name="diet" type="text" class="rsvp-input" placeholder="Vegetariano, alergias, etc. (opcional)" />
        </div>

        
        <div class="flex flex-col gap-1.5">
          <label for="rsvp-song" class="font-eyebrow text-[10px] uppercase tracking-widest2 text-ink/60">¿Qué canción no debe faltar?</label>
          <input id="rsvp-song" name="song" type="text" class="rsvp-input" placeholder="Tu petición musical (opcional)" />
        </div>

        <button
          type="submit"
          class="mt-4 inline-flex items-center justify-center gap-2 rounded-sm bg-ink px-8 py-4 font-eyebrow text-xs uppercase tracking-widest2 text-paper transition hover:bg-accent disabled:opacity-50"
        >
          <span data-btn-label>Enviar confirmación</span>
        </button>

        <p id="rsvp-status" class="text-center text-sm" role="status" aria-live="polite"></p>
      </form>
    </div>
  </section>
  `}function L(){const t=document.getElementById("rsvp-form");if(!t)return;const e=document.getElementById("rsvp-status"),a=t.querySelector('button[type="submit"]'),s=t.querySelector("[data-btn-label]"),{rsvp:n}=l;t.addEventListener("submit",async r=>{r.preventDefault();const o=Object.fromEntries(new FormData(t).entries());if(!t.checkValidity()){e.textContent="Por favor completa los campos requeridos.",e.className="text-center text-sm text-accent",t.reportValidity();return}a.disabled=!0,s.textContent="Enviando…";try{const i=JSON.parse(localStorage.getItem("rsvp-backup")||"[]");i.push({...o,submittedAt:new Date().toISOString()}),localStorage.setItem("rsvp-backup",JSON.stringify(i))}catch{}try{if(!n.endpoint){const i=encodeURIComponent(`Confirmación de asistencia — ${o.name}`),d=encodeURIComponent(`Nombre: ${o.name}
Correo: ${o.email}
Asistencia: ${o.attending}
Acompañantes: ${o.guests}
${o.diet?`Restricciones: ${o.diet}
`:""}${o.song?`Canción: ${o.song}
`:""}`);window.location.href=`mailto:${n.fallbackEmail}?subject=${i}&body=${d}`}e.textContent=o.attending==="si"?`¡Gracias, ${o.name}! Nos dará mucho gusto celebrar contigo.`:`Gracias por avisarnos, ${o.name}. Te extrañaremos.`,e.className="text-center text-sm text-ink",t.reset(),s.textContent="Confirmación enviada ✓"}catch{e.textContent=`No pudimos enviar tu confirmación automáticamente. Escríbenos a ${n.fallbackEmail}.`,e.className="text-center text-sm text-accent",s.textContent="Reintentar",a.disabled=!1}})}function M(){const{music:t}=l;return`
    <audio id="bg-audio" src="${t.src}" loop preload="none"></audio>
    <button
      id="music-toggle"
      aria-label="Reproducir música de fondo"
      aria-pressed="false"
      class="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full border border-gold/50 bg-ink/90 text-paper shadow-lg backdrop-blur transition hover:border-gold"
    >
      <span id="music-icon" class="vinyl-icon block h-7 w-7 rounded-full border-2 border-gold">
        <span class="mx-auto mt-[9px] block h-1.5 w-1.5 rounded-full bg-gold"></span>
      </span>
    </button>
    <div
      id="music-hint"
      class="fixed bottom-24 right-6 z-40 max-w-[11rem] rounded-sm bg-ink/90 px-3 py-2 text-right font-eyebrow text-[10px] uppercase tracking-widest2 text-paper/80 shadow-lg transition-opacity"
    >
      ${t.title}
    </div>
  `}function P(){const t=document.getElementById("bg-audio"),e=document.getElementById("music-toggle"),a=document.getElementById("music-icon"),s=document.getElementById("music-hint");if(!t||!e)return;t.volume=.55;let n=!1;function r(o){n=o,e.setAttribute("aria-pressed",String(o)),e.setAttribute("aria-label",o?"Pausar música de fondo":"Reproducir música de fondo"),a.classList.toggle("is-spinning",o),s&&(s.style.opacity=o?"0":"1")}e.addEventListener("click",async()=>{try{n?(t.pause(),r(!1)):(await t.play(),r(!0))}catch{}}),document.addEventListener("invitation:opened",async()=>{try{await t.play(),r(!0)}catch{r(!1)}})}function A(){const{couple:t,registry:e,event:a}=l;return`
  <footer class="bg-ink px-6 pb-10 pt-16 text-center text-paper">
    ${`
    <div class="mx-auto mb-14 max-w-md" data-reveal>
      <span class="font-eyebrow text-xs uppercase tracking-widest2 text-gold">${e.title}</span>
      <p class="mt-4 text-sm leading-relaxed text-paper/70">${e.text}</p>
      ${e.links.map(s=>`<a href="${s.url}" target="_blank" rel="noopener" class="mt-4 inline-block font-eyebrow text-[10px] uppercase tracking-widest2 text-gold transition hover:text-paper">${s.label} ↗</a>`).join("")}
    </div>`}

    <p class="font-display text-3xl italic text-paper">${t.monogram}</p>
    <p class="mt-3 font-eyebrow text-[10px] uppercase tracking-widest2 text-sage">${a.dateDisplay} · ${t.hashtag}</p>
    <p class="mt-8 text-xs text-paper/40">Hecho con cariño para nuestra boda.</p>
  </footer>
  `}const m=window.matchMedia("(prefers-reduced-motion: reduce)").matches;function D(){const t=Array.from(document.querySelectorAll("[data-parallax]"));if(!t.length||m)return;let e=!1;function a(){const n=window.innerHeight;t.forEach(r=>{const o=parseFloat(r.dataset.parallax)||.3,i=r.getBoundingClientRect(),c=(i.top+i.height/2-n/2)*-o*.15;r.style.transform=`translate3d(0, ${c.toFixed(1)}px, 0)`}),e=!1}function s(){e||(requestAnimationFrame(a),e=!0)}window.addEventListener("scroll",s,{passive:!0}),window.addEventListener("resize",s,{passive:!0}),a()}function I(){const t=Array.from(document.querySelectorAll("[data-reveal]"));if(!t.length)return;if(m){t.forEach(a=>a.classList.add("is-visible"));return}const e=new IntersectionObserver(a=>{a.forEach(s=>{s.isIntersecting&&(s.target.classList.add("is-visible"),e.unobserve(s.target))})},{threshold:.15,rootMargin:"0px 0px -8% 0px"});t.forEach(a=>e.observe(a))}function f(t="#botanical-spine-path"){const e=document.querySelector(t);if(!e)return;const a=e.getTotalLength();if(e.style.strokeDasharray=`${a}`,e.style.strokeDashoffset=m?"0":`${a}`,m)return;let s=!1;function n(){const o=window.scrollY,i=document.documentElement.scrollHeight-window.innerHeight,d=Math.min(Math.max(o/i,0),1);e.style.strokeDashoffset=`${a*(1-d)}`,s=!1}function r(){s||(requestAnimationFrame(n),s=!0)}window.addEventListener("scroll",r,{passive:!0}),window.addEventListener("resize",r,{passive:!0}),n()}function R(t){const e=t.replace("#",""),a=parseInt(e.substring(0,2),16),s=parseInt(e.substring(2,4),16),n=parseInt(e.substring(4,6),16);return`${a} ${s} ${n}`}function B(){const t=document.documentElement,{colors:e,fonts:a}=l.theme;Object.entries(e).forEach(([s,n])=>t.style.setProperty(`--color-${s}`,R(n))),Object.entries(a).forEach(([s,n])=>t.style.setProperty(`--font-${s}`,n))}function F(){const t=document.getElementById("app");t.innerHTML=`
    <main class="relative overflow-x-hidden">
      ${w()}
      ${$()}
      ${E()}
      ${S()}
      ${C()}
      ${j()}
      ${A()}
    </main>
  `;const e=t.querySelector("main"),a=h(e);return document.body.insertAdjacentHTML("beforeend",M()),{drawSpine:a}}function O(t){q(),L(),P(),D(),I(),f(),window.addEventListener("load",()=>{t(),f()})}function T(){B(),document.body.classList.add("overflow-hidden");const{drawSpine:t}=F();O(t),v(()=>{document.dispatchEvent(new CustomEvent("invitation:opened"))})}T();
