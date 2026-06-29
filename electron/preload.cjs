const { contextBridge } = require('electron');

// Clear saved session so PIN screen shows on every launch
try {
  localStorage.removeItem('pos_user');
  localStorage.removeItem('pos_token');
  localStorage.removeItem('pos_state');
} catch (_) {}

const overlayCSS = `
#__pos_overlay {
  position: fixed; top: 0; left: 0; right: 0; bottom: 0;
  z-index: 999999;
  display: flex; align-items: center; justify-content: center;
  background: #0b1120;
  font-family: 'Segoe UI', Arial, sans-serif;
  transition: opacity 0.6s ease;
}
#__pos_overlay.hide { opacity: 0; pointer-events: none; }
#__pos_overlay ._w { text-align: center; }
#__pos_overlay ._l {
  width: 180px; height: 180px; margin: 0 auto 32px;
  position: relative; display: flex; align-items: center; justify-content: center;
}
#__pos_overlay ._lb {
  position: absolute; inset: 0; border-radius: 48px;
  background: linear-gradient(135deg, rgba(251,191,36,0.10), rgba(251,191,36,0.04));
  border: 1px solid rgba(251,191,36,0.15);
}
#__pos_overlay ._r1 {
  position: absolute; inset: -4px; border-radius: 52px;
  border: 3px solid transparent;
  border-top-color: #fbbf24; border-right-color: #fcd34d;
  animation: _s1 2.5s ease infinite;
}
#__pos_overlay ._r2 {
  position: absolute; inset: -11px; border-radius: 58px;
  border: 2px solid transparent;
  border-bottom-color: rgba(251,191,36,0.25);
  border-left-color: rgba(251,191,36,0.15);
  animation: _s2 3.5s ease infinite reverse;
}
@keyframes _s1 { to { transform: rotate(360deg); } }
@keyframes _s2 { to { transform: rotate(360deg); } }
#__pos_overlay ._sv { position: relative; z-index: 1; }
#__pos_overlay ._sv svg { width: 80px; height: 80px; }
#__pos_overlay ._t { font-size: 32px; font-weight: 700; color: #f1f5f9; margin-bottom: 6px; }
#__pos_overlay ._t span { color: #fbbf24; }
#__pos_overlay ._st { font-size: 14px; color: #64748b; letter-spacing: 4px; text-transform: uppercase; margin-bottom: 40px; }
#__pos_overlay ._d { display: flex; gap: 12px; justify-content: center; margin-bottom: 36px; }
#__pos_overlay ._d span {
  width: 10px; height: 10px; border-radius: 50%;
  background: #fbbf24; opacity: 0.3;
  animation: _dp 2s ease-in-out infinite;
}
#__pos_overlay ._d span:nth-child(2) { animation-delay: 0.5s; }
#__pos_overlay ._d span:nth-child(3) { animation-delay: 1s; }
@keyframes _dp {
  0%, 100% { opacity: 0.2; transform: scale(0.8); }
  50% { opacity: 1; transform: scale(1.2); }
}
#__pos_overlay ._msg { font-size: 14px; color: #64748b; min-height: 22px; }
#__pos_overlay ._msg.ok { color: #4ade80; }
#__pos_overlay ._br {
  width: 280px; height: 3px; margin: 20px auto 0;
  background: rgba(255,255,255,0.06); border-radius: 4px; overflow: hidden;
}
#__pos_overlay ._fl {
  height: 100%; width: 15%; border-radius: 4px;
  background: linear-gradient(90deg, #fbbf24, #fcd34d);
  transition: width 0.8s;
}
`;

const overlayHTML = `
<div id="__pos_overlay">
  <div class="_w">
    <div class="_l">
      <div class="_lb"></div><div class="_r1"></div><div class="_r2"></div>
      <div class="_sv">
        <svg viewBox="0 0 24 24" fill="none" stroke="#fbbf24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z" fill="rgba(251,191,36,0.15)" stroke="#fbbf24"/>
        </svg>
      </div>
    </div>
    <div class="_t">Virtual <span>kassa</span></div>
    <div class="_st">POS Terminal</div>
    <div class="_d"><span></span><span></span><span></span></div>
    <div class="_msg" id="__pos_msg">Загрузка...</div>
    <div class="_br"><div class="_fl" id="__pos_fl"></div></div>
  </div>
</div>
`;

function injectOverlay() {
  const style = document.createElement('style');
  style.textContent = overlayCSS;
  document.head.appendChild(style);
  const div = document.createElement('div');
  div.innerHTML = overlayHTML;
  document.body.prepend(div.firstElementChild);
}

function updateOverlay(msg, pct, done) {
  const el = document.getElementById('__pos_msg');
  const fl = document.getElementById('__pos_fl');
  if (el) el.textContent = msg;
  if (fl) fl.style.width = pct + '%';
  if (done) {
    if (el) el.className = '_msg ok';
    if (fl) fl.style.width = '100%';
    setTimeout(() => {
      const o = document.getElementById('__pos_overlay');
      if (o) o.classList.add('hide');
    }, 600);
  }
}

// Expose overlay control to page context
contextBridge.exposeInMainWorld('__posOverlay', { update: updateOverlay });

// Inject overlay early
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', injectOverlay);
} else {
  injectOverlay();
}
