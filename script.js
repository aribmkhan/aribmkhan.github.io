'use strict';
(() => {
  document.querySelectorAll('[data-year]').forEach(el => {el.textContent = String(new Date().getFullYear());});
  const toggle = document.querySelector('.mobile-toggle');
  const nav = document.querySelector('.primary-nav');
  if(toggle && nav) {
    toggle.addEventListener('click', () => {const open = nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});
    nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');}));
  }
  const metrics = {
    revenue: { values: [77.92,18.48,3.59], suffix:'%', max:80, description:'Revenue share', takeaway:'The High-Value Active segment generated 77.92% of historical completed-order revenue.' },
    customers: { values: [42.52,35.63,21.85], suffix:'%', max:50, description:'Customer share', takeaway:'The High-Value Active group contained 42.52% of purchasing customers — a much smaller share than its revenue contribution.' },
    aov: { values: [440.98,468.81,206.63], prefix:'$', max:500, description:'Average order value', takeaway:'Higher-Spend Lapsed customers had the highest average order value at $468.81, despite lower purchase frequency.' },
    recency: { values: [122.46,396.06,350.58], suffix:' days', max:430, description:'Average days since last purchase', takeaway:'Higher-Spend Lapsed customers averaged 396 days since their last purchase; 46.14% had been inactive at least a year.' }
  };
  const segmentNames = ['High-Value Active','Higher-Spend Lapsed','Low-Value Discount-Oriented'];
  const chart = document.getElementById('segment-chart');
  const tabs = document.querySelectorAll('.metric-tab');
  if(chart && tabs.length){
    function updateChart(key){
      const metric = metrics[key];
      chart.textContent = '';
      chart.setAttribute('aria-label', `${metric.description} by customer segment: ${segmentNames.map((name,i)=>name+' '+metric.values[i]).join(', ')}`);
      segmentNames.forEach((name,i)=>{
        const row=document.createElement('div');row.className='bar-entry';
        const label=document.createElement('span');label.className='bar-label';label.textContent=name;
        const track=document.createElement('div');track.className='bar-track';
        const fill=document.createElement('div');fill.className='bar-fill';
        const pct=Math.min(metric.values[i]/metric.max*100,100);
        fill.style.width=`${pct}%`;
        track.appendChild(fill);
        const value=document.createElement('span');value.className='bar-value';
        value.textContent=(metric.prefix||'')+metric.values[i].toLocaleString('en-CA',{minimumFractionDigits:key==='recency'?0:2,maximumFractionDigits:key==='recency'?0:2})+(metric.suffix||'');
        row.append(label,track,value);chart.appendChild(row);
      });
      const takeaway=document.getElementById('chart-takeaway');if(takeaway)takeaway.textContent=metric.takeaway;
      tabs.forEach(tab=>{const active=tab.dataset.metric===key;tab.classList.toggle('active',active);tab.setAttribute('aria-pressed',String(active));});
    }
    tabs.forEach(tab=>tab.addEventListener('click',()=>updateChart(tab.dataset.metric)));
    updateChart('revenue');
  }
  const dialog = document.getElementById('image-dialog');
  if(dialog && typeof dialog.showModal === 'function'){
    const img=dialog.querySelector('img');const caption=dialog.querySelector('.dialog-caption');
    document.querySelectorAll('[data-zoom]').forEach(button=>button.addEventListener('click',()=>{
      img.src=button.dataset.zoom;img.alt=button.querySelector('img')?.alt || 'Expanded screenshot';caption.textContent=button.dataset.caption || 'Dashboard image';dialog.showModal();
    }));
    dialog.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
    dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});
    dialog.addEventListener('close',()=>{img.removeAttribute('src');});
  }
})();
