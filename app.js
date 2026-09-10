const realms = [
  {name:"Crimson Dominion",signal:"Crimson Signals",image:"01-crimson-dominion.png",lore:["Crimson Dominion was the first Realm recorded after The Fracture. Beneath its dark red skies, cracked moons hang over black fortresses while rivers of energy run through the ground like veins of fire.","Its Sprites learned to hold their frequency against a world that constantly tries to rewrite them. Deep below the central fortress stands the Crimson Gate, marked with ten symbols. When one Mythic Signal approached, the first symbol ignited in white—and another Realm answered."]},
  {name:"Void Eclipse",signal:"Void Signals",image:"02-void-eclipse.png",lore:["Void Eclipse formed closest to the center of The Fracture, where failed frequencies drift through an endless violet eclipse. Here, the Realm does not attack the body. It attacks identity.","Echo Drift creates false memories, moving shadows, and copies known as Null Echoes. At the Eclipse Core, the second node awakened—but something beyond the network answered with it. The Fracture may not have been an accident."]},
  {name:"Ember Wasteland",signal:"Ember Signals",image:"03-ember-wasteland.png",lore:["Ember Wasteland was forged from the thermal remains of The Fracture. Beneath its ash storms, the ancient Furnace Network still converts planetary energy into raw Signal pulses.","When the First Furnace reactivated, it revealed a message left before the collapse: “If the network reconnects, burn the path.” Then the fire went cold and coordinates appeared, pointing toward a Realm consumed by living growth."]},
  {name:"Fungal Wilds",signal:"Spore Signals",image:"04-fungal-wilds.png",lore:["In Fungal Wilds, The Signal fused with living organisms. Bioluminescent spores fill the air, roots pierce ancient machines, and the Realm breathes through a vast biological network called the Living Circuit.","Its oldest memory revealed the truth: The Fracture was an act of isolation, designed to trap a foreign pattern between worlds. The pattern survived—and with four nodes active, it began moving again."]},
  {name:"Frozen Moon",signal:"Frost Signals",image:"05-frozen-moon.png",lore:["Frozen Moon exists in permanent night. Its cold can slow The Signal itself, leaving ancient data suspended in the air as frozen light.","Inside the Silent Observatory, Frost Signals discovered an erased eleventh node and a sleeping core. When touched, it delivered a message that changed their history: “You were not created after The Fracture. You were created because of it.”"]},
  {name:"Golden Citadel",signal:"Golden Signals",image:"06-golden-citadel.png",lore:["Golden Citadel is a city built from order, light, and recorded history. Its Golden Signals believe that order protects The Signal, yet even their Aureum Archive contained a hidden chamber.","The Origin Vault revealed that Signal Sprites once served as Signal Custodians. When an anomaly invaded the network, the Fracture Protocol divided the Realms and erased the Custodians’ memories. Someone had ordered the separation—and hidden the Core."]},
  {name:"Shadow Abyss",signal:"Shadow Signals",image:"07-shadow-abyss.png",lore:["Shadow Abyss lies in the deepest layer of the old network. Light is absorbed, broadcasts weaken, and every transmission risks attracting something below.","Within the Black Vault, an ancient Custodian revealed The Hollow: an anomaly that survived by learning to copy Signal frequencies. Seven nodes were active. If all ten reconnected, containment would fail and the Core would open."]},
  {name:"Verdant Sanctuary",signal:"Verdant Signals",image:"08-verdant-sanctuary.png",lore:["Verdant Sanctuary is a living world built around balance. Its Worldroot connects every river, mountain, and luminous forest to the old network.","The Hollow followed the eighth connection and created the Black Bloom, learning to grow through biological systems. The Verdant Signals severed half their Realm to contain it—but the anomaly had already moved toward a world of memory and dreams."]},
  {name:"Sakura Horizon",signal:"Sakura Signals",image:"09-sakura-horizon.png",lore:["Sakura Horizon appears peaceful, yet its Mirror Lake reflects the past, the future, and events that never happened. Here, The Hollow learned to build identity from memory.","The Memory Shrine finally revealed The First Signal, the Custodian who initiated The Fracture to protect the Sprites. The memory wipe was not punishment. It was protection. Then Neon Nexus opened—the final Realm and the doorway to the Core."]},
  {name:"Neon Nexus",signal:"Neon Signals",image:"10-neon-nexus.png",lore:["Neon Nexus is an endless city living directly inside The Signal. At its center, the Nexus Spire receives one energy path from every Realm.","Ten original frequencies were transmitted together, producing a light The Hollow had never encountered and could not imitate. The Core was restored, but three unknown pulses remained inside it. The strongest carried one number, one classification, and one name: 3333. Mythic. Final Signal."]}
];

const grid=document.querySelector("#realm-grid");
const dialog=document.querySelector("#realm-dialog");
const dialogImage=document.querySelector("#dialog-image");
realms.forEach((realm,index)=>{
  const button=document.createElement("button");
  button.className="realm-card";
  button.innerHTML=`<img src="${realm.image}" alt="${realm.name} Realm artwork" loading="lazy"><div><span>Realm ${String(index+1).padStart(2,"0")}</span><strong>${realm.name}</strong></div>`;
  button.addEventListener("click",()=>openRealm(realm,index));
  grid.appendChild(button);
});
function openRealm(realm,index){
  document.querySelector("#dialog-number").textContent=`Realm ${String(index+1).padStart(2,"0")} · Transmission`;
  document.querySelector("#dialog-title").textContent=realm.name;
  document.querySelector("#dialog-lore").innerHTML=realm.lore.map(p=>`<p>${p}</p>`).join("");
  document.querySelector("#dialog-signal").textContent=realm.signal;
  dialogImage.src=realm.image;
  dialogImage.alt=`${realm.name} Realm artwork`;
  dialog.showModal();
}
function closeRealm(){dialogImage.removeAttribute("src");dialog.close()}
document.querySelector(".dialog-close").addEventListener("click",closeRealm);
dialog.addEventListener("click",e=>{if(e.target===dialog)closeRealm()});
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&dialog.open)closeRealm()});

const menu=document.querySelector("#site-nav");
const toggle=document.querySelector(".menu-toggle");
toggle.addEventListener("click",()=>{const open=menu.classList.toggle("open");toggle.setAttribute("aria-expanded",String(open))});
menu.addEventListener("click",()=>{menu.classList.remove("open");toggle.setAttribute("aria-expanded","false")});

const launch=new Date("2026-09-10T12:50:00Z").getTime();
const countdown=document.querySelector("#countdown");
function updateCountdown(){
  const distance=Math.max(0,launch-Date.now());
  const values=[Math.floor(distance/86400000),Math.floor(distance/3600000)%24,Math.floor(distance/60000)%60,Math.floor(distance/1000)%60];
  const labels=["Days","Hours","Minutes","Seconds"];
  countdown.innerHTML=values.map((v,i)=>`<span>${String(v).padStart(2,"0")}<small>${labels[i]}</small></span>`).join("");
  if(distance===0)document.querySelector(".countdown-label").textContent="GTD phase has begun";
}
updateCountdown();
setInterval(updateCountdown,1000);
