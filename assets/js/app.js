
AOS.init({ once: true });
document.getElementById('year').textContent = new Date().getFullYear();

// Daily Mantra (weekday-based)
const mantras = {
  0: { text: "ॐ नमो भगवते वासुदेवाय", deity: "श्री विष्णु", place: "मुख्य मंडप" }, // Sunday
  1: { text: "ॐ नमः शिवाय", deity: "भगवान शिव", place: "गर्भगृह" },             // Monday
  2: { text: "ॐ श्री हनुमते नमः", deity: "हनुमान जी", place: "हनुमान मंदिर" }, // Tuesday
  3: { text: "ॐ नमो नारायणाय", deity: "श्री हरि", place: "उत्तर द्वार" },       // Wednesday
  4: { text: "ॐ दुं दुर्गायै नमः", deity: "माँ दुर्गा", place: "देवी प्रांगण" },// Thursday
  5: { text: "ॐ श्रीं ह्रीं क्लीं", deity: "महालक्ष्मी", place: "धन्य कक्ष" },   // Friday
  6: { text: "ॐ नमो भगवते रुद्राय", deity: "महादेव", place: "यज्ञ वेदी" }      // Saturday
};
const d = new Date();
const today = d.getDay();
const m = mantras[today];

function setMantra() {
  const ticker = document.getElementById('mantra-ticker');
  const hero = document.getElementById('hero-mantra');
  const foot = document.getElementById('footer-mantra');
  const modal = document.getElementById('modal-mantra');
  if (ticker) ticker.innerHTML = `🔔 आज का मंत्र: <strong>${m.text}</strong> • देवता: ${m.deity} • स्थान: ${m.place}`;
  if (hero) hero.innerHTML = `आज का मंत्र: <strong>${m.text}</strong>`;
  if (foot) foot.innerHTML = `<div><div class="fw-semibold mb-1">${m.text}</div><div class="small opacity-75">देवता: ${m.deity} • स्थान: ${m.place}</div></div>`;
  if (modal) modal.innerHTML = `<div class="display-6">${m.text}</div><div class="mt-2 text-muted">देवता: ${m.deity} • स्थान: ${m.place}</div>`;
}
setMantra();
// Optional: show modal on first visit of the day
try{
  const key = 'mantra_seen_'+d.toISOString().slice(0,10);
  if(localStorage.getItem(key)!=='1'){
    const modal = new bootstrap.Modal(document.getElementById('mantraModal'));
    modal.show();
    localStorage.setItem(key,'1');
  }
}catch(e){}

// Branches data (editable)
const branches = [
  { name:"मुख्य आश्रम - झरिना", head:"महंत जी", time:"5 AM – 9 PM", map:"https://maps.google.com/?q=Jharina,Hardoi", img:"branch1.jpg" },
  { name:"लखनऊ शाखा", head:"शाखा प्रमुख", time:"6 AM – 8 PM", map:"https://maps.google.com/?q=Lucknow", img:"branch2.jpg" },
  { name:"हरिद्वार शाखा", head:"शाखा प्रमुख", time:"6 AM – 9 PM", map:"https://maps.google.com/?q=Haridwar", img:"branch3.jpg" },
  { name:"प्रयागराज शाखा", head:"शाखा प्रमुख", time:"6 AM – 9 PM", map:"https://maps.google.com/?q=Prayagraj", img:"branch4.jpg" },
  { name:"वाराणसी शाखा", head:"शाखा प्रमुख", time:"6 AM – 9 PM", map:"https://maps.google.com/?q=Varanasi", img:"branch5.jpg" },
  { name:"कानपुर शाखा", head:"शाखा प्रमुख", time:"6 AM – 9 PM", map:"https://maps.google.com/?q=Kanpur", img:"branch6.jpg" }
];

function renderBranches(){
  const grid = document.getElementById('branches-grid');
  if(!grid) return;
  grid.innerHTML = branches.map(b => `
    <div class="col-md-6 col-lg-4">
      <div class="card h-100 shadow-sm">
        <img src="assets/img/${b.img}" class="card-img-top" alt="${b.name}" onerror="this.src='assets/img/branch-placeholder.jpg'">
        <div class="card-body">
          <h5 class="card-title">${b.name}</h5>
          <p class="card-text small mb-2">प्रमुख: ${b.head}</p>
          <span class="badge bg-bhagwa mb-2">${b.time}</span>
          <div><a target="_blank" class="btn btn-sm btn-bhagwa" href="${b.map}">Google Map</a></div>
        </div>
      </div>
    </div>
  `).join('');
}
renderBranches();
