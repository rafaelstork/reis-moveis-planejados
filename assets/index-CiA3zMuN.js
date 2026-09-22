import{g as c}from"./animation-xgxdCp6f.js";import{W as q,S as F,O as G,P as U,a as W,V as S,M as X,b as R}from"./graphics-CFAObk_t.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();const h=window.matchMedia("(prefers-reduced-motion: reduce)"),o={reducedMotion:h.matches,cleanupThree:null,entryTimeline:null,magneticCleanups:[]};function k(){if(o.entryTimeline?.kill(),o.reducedMotion){c.set("[data-reveal]",{clearProps:"all"});return}const e=c.timeline({defaults:{overwrite:"auto"},onComplete:()=>c.set("[data-reveal]",{clearProps:"transform,opacity,visibility,clipPath"})});e.from('[data-reveal="media"]',{clipPath:"inset(0 100% 0 0 round 10rem 0.8rem 0.8rem 0.8rem)",duration:1.35,ease:"expo.inOut"}).from('[data-reveal="header"]',{autoAlpha:0,y:-18,duration:.72,ease:"power3.out"},.18).from(".eyebrow__line",{scaleX:0,duration:.75,ease:"power3.inOut"},.62).from('[data-reveal="eyebrow"]',{autoAlpha:0,x:-18,duration:.62,ease:"power3.out"},.68).from(".title-line",{autoAlpha:0,yPercent:82,rotate:1.5,duration:.95,stagger:.12,ease:"expo.out"},.72).from(['[data-reveal="support"]','[data-reveal="note"]'],{autoAlpha:0,y:22,duration:.72,stagger:.1,ease:"power3.out"},1.05).from(['[data-reveal="marker"]','[data-reveal="baseline"]'],{autoAlpha:0,duration:.62,stagger:.08,ease:"power2.out"},1.08),o.entryTimeline=e}function O(){o.magneticCleanups.forEach(e=>e()),o.magneticCleanups=[],!(o.reducedMotion||!window.matchMedia("(pointer: fine)").matches)&&document.querySelectorAll(".magnetic").forEach(e=>{const n=s=>{const t=e.getBoundingClientRect(),r=s.clientX-t.left-t.width/2,l=s.clientY-t.top-t.height/2;c.to(e,{x:r*.09,y:l*.12,duration:.35,ease:"power2.out"})},i=()=>c.to(e,{x:0,y:0,duration:.55,ease:"elastic.out(1, 0.45)"});e.addEventListener("pointermove",n),e.addEventListener("pointerleave",i),e.addEventListener("blur",i),o.magneticCleanups.push(()=>{e.removeEventListener("pointermove",n),e.removeEventListener("pointerleave",i),e.removeEventListener("blur",i),c.set(e,{clearProps:"transform"})})})}function A(){o.cleanupThree?.(),o.cleanupThree=null;const e=document.querySelector(".hero__canvas"),n=document.querySelector(".hero__media");if(!e||!n||o.reducedMotion){e?.classList.add("is-fallback");return}let i,s=0,t=!1,r=!0,l=.5,m=.5,p=.5,f=.5;try{i=new q({canvas:e,alpha:!0,antialias:!1,powerPreference:"low-power"})}catch{e.classList.add("is-fallback");return}i.setClearColor(0,0),i.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5));const g=new F,w=new G(-1,1,1,-1,.1,10);w.position.z=1;const y=new U(2,2),d=new W({transparent:!0,depthWrite:!1,uniforms:{uTime:{value:0},uPointer:{value:new S(.5,.5)},uResolution:{value:new S(1,1)}},vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `,fragmentShader:`
      precision highp float;
      varying vec2 vUv;
      uniform float uTime;
      uniform vec2 uPointer;
      uniform vec2 uResolution;

      float softLine(float value, float center, float width) {
        return 1.0 - smoothstep(width, width * 2.6, abs(value - center));
      }

      void main() {
        vec2 uv = vUv;
        float aspect = uResolution.x / max(uResolution.y, 1.0);
        vec2 point = vec2(uPointer.x * aspect, uPointer.y);
        vec2 current = vec2(uv.x * aspect, uv.y);
        float glow = exp(-distance(current, point) * 5.4);

        float vertical = softLine(uv.x, 0.335 + sin(uTime * 0.13) * 0.004, 0.0012);
        vertical += softLine(uv.x, 0.72, 0.0008) * 0.55;
        float horizontal = softLine(uv.y, 0.665, 0.0011) * 0.45;
        float cabinetGrid = (vertical + horizontal) * (0.12 + glow * 0.52);

        float movingLight = pow(max(0.0, 1.0 - abs((uv.y + uv.x * 0.32) - (0.55 + sin(uTime * 0.18) * 0.08))), 18.0);
        vec3 copper = vec3(0.86, 0.43, 0.20);
        vec3 warm = vec3(1.0, 0.78, 0.48);
        vec3 color = mix(copper, warm, glow) * (cabinetGrid + movingLight * 0.065);
        float alpha = clamp(cabinetGrid * 0.42 + movingLight * 0.035, 0.0, 0.32);
        gl_FragColor = vec4(color, alpha);
      }
    `}),z=new X(y,d);g.add(z);const v=()=>{if(t)return;const{width:a,height:u}=n.getBoundingClientRect(),T=Math.max(1,Math.round(a)),C=Math.max(1,Math.round(u));i.setSize(T,C,!1),d.uniforms.uResolution.value.set(T,C)},L=a=>{const u=n.getBoundingClientRect();p=R.clamp((a.clientX-u.left)/u.width,0,1),f=R.clamp(1-(a.clientY-u.top)/u.height,0,1)},b=()=>{p=.5,f=.5},x=a=>{t||(l+=(p-l)*.045,m+=(f-m)*.045,d.uniforms.uPointer.value.set(l,m),d.uniforms.uTime.value=a*.001,r&&!document.hidden&&i.render(g,w),s=window.requestAnimationFrame(x))},E=new IntersectionObserver(([a])=>{r=a.isIntersecting},{threshold:.02}),P=a=>{a.preventDefault(),e.classList.add("is-fallback"),r=!1},M=()=>{e.classList.remove("is-fallback"),r=!0,v()};v(),E.observe(n),n.addEventListener("pointermove",L,{passive:!0}),n.addEventListener("pointerleave",b,{passive:!0}),window.addEventListener("resize",v,{passive:!0}),e.addEventListener("webglcontextlost",P),e.addEventListener("webglcontextrestored",M),s=window.requestAnimationFrame(x),o.cleanupThree=()=>{t=!0,window.cancelAnimationFrame(s),E.disconnect(),n.removeEventListener("pointermove",L),n.removeEventListener("pointerleave",b),window.removeEventListener("resize",v),e.removeEventListener("webglcontextlost",P),e.removeEventListener("webglcontextrestored",M),y.dispose(),d.dispose(),i.dispose(),e.classList.remove("is-fallback")}}function _(e){o.reducedMotion=e.matches,o.entryTimeline?.kill(),c.set("[data-reveal]",{clearProps:"all"}),O(),A()}function Y(){k(),O(),A(),h.addEventListener("change",_)}window.addEventListener("pagehide",()=>{o.entryTimeline?.kill(),o.magneticCleanups.forEach(e=>e()),o.cleanupThree?.(),h.removeEventListener("change",_)});Y();
