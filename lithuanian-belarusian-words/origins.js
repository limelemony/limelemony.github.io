
(() => {
"use strict";
const dictionary="https://etimologija.baltnexus.lt/?w=";
const verified={
"suknelė":["Slavic clothing family","Lithuanian suknelė is a diminutive of suknia, a Slavic-origin word. Compare Polish suknia and the older sukno (‘cloth’). Belarusian сукенка belongs to the same clothing-word family. This is a relationship shaped by historical contact, not simply two unchanged ancient cognates.",dictionary+"suknel%C4%97"],
"galva":["Ancient Baltic–Slavic word family","Lithuanian galva and Belarusian галава continue an ancient Baltic–Slavic word for ‘head’. The different vowel patterns arose as the Slavic and Baltic branches developed separately.",dictionary+"galva"],
"žiema":["Ancient Baltic–Slavic word family","Lithuanian žiema and Belarusian зіма share an old word for ‘winter’. Historical Baltic and Slavic reconstructions show that the similarity predates the modern languages.",dictionary+"%C5%BEiema"],
"medus":["Old Indo-European word","Lithuanian medus and Belarusian мёд are relatives descending from an old Indo-European honey/mead word often reconstructed as *medhu-. Related words are found far beyond the Baltic and Slavic languages.",dictionary+"medus"],
"beržas":["Old Indo-European word","Lithuanian beržas and Belarusian бяроза are inherited cognates. Etymological scholarship connects their word family with a prehistoric root associated with whiteness or brightness, fitting the pale bark of birch.",dictionary+"ber%C5%BEas"],
"turgus":["Slavic loan into Lithuanian","Lithuanian turgus ‘market’ was borrowed from Slavic trade vocabulary related to Belarusian торг. The Lithuanian etymological database records this as a historical Slavic loan.",dictionary+"turgus"]
};
const examples={
"agrastas":["Regional fruit-name borrowing","Lithuanian agrastas and Belarusian агрэст resemble Polish agrest. These words are part of a borrowed European fruit-name family, although the exact route into each language still needs checking."],
"arbata":["A travelling word for tea","Lithuanian arbata and Belarusian гарбата (regional or older usage) are connected with the widely borrowed tea name represented by Polish herbata. Their similarity is not an ancient inherited root."],
"blynas":["Regional pancake name","Lithuanian blynas and Belarusian блін share a common regional culinary stem. Slavic influence is relevant to the Lithuanian form, but the exact route still needs source checking."],
"skrynia":["A shared regional chest name","Lithuanian skrynia and Belarusian скрыня resemble Polish skrzynia. These forms belong to a long history of borrowing across neighbouring languages."],
"šeima":["A family-word connection","Lithuanian šeima and Belarusian сям’я both mean family. They are considered historically related, though an exact reconstruction needs individual etymological verification."],
"agurkas":["A travelling food name","Lithuanian agurkas and Belarusian агурок belong to a broader cucumber-name family borrowed around Europe. Their close similarity does not demonstrate direct borrowing between the two modern languages."],
"grybas":["A contact-era word candidate","Lithuanian grybas and Belarusian грыб have almost identical forms. Historical Baltic–Slavic language contact is a promising explanation, but its exact direction is not established in this note."],
"bulvė":["Regional potato vocabulary","Lithuanian bulvė and Belarusian бульба share a recognisable stem. As European potato terms spread relatively recently, borrowed regional vocabulary is a promising explanation."],
"paltas":["European coat-name family","Lithuanian paltas and Belarusian паліто belong to a European family of names for coats connected with French paletot. Their paths into the two languages can differ."],
"šalikas":["Shared clothing vocabulary","Lithuanian šalikas and Belarusian шалік resemble Polish szalik. These words illustrate how names for clothing circulate between neighbouring languages."],
"Kalėdos":["Historical calendar vocabulary","Lithuanian Kalėdos and Belarusian Каляды belong to an old calendar/Christmas vocabulary family often traced through Slavic to Latin calendae. The exact path of transmission needs checking."],
"Velykos":["Religious contact vocabulary","Lithuanian Velykos and Belarusian Вялікдзень (‘Great Day’) reflect the Slavic family of words for ‘great’. The meanings coincide, but the modern words use different formations."],
"kava":["International drink name","Lithuanian kava and Belarusian кава share an international name for coffee. That reflects trade and borrowing rather than prehistoric Baltic–Slavic inheritance."]
};
const inherited=new Set("sūris liepa sniegas ledas rasa vilkas bebras ūdra linas žąsis avis vanduo akmuo motina brolis sesuo sūnus duktė žvaigždė ežeras mirtis barzda nosis žentas varna karvė žemė ugnis diena naktis vakaras būti duoti sėdėti nešti vežti bėgti žinoti jaunas baltas geltonas žalias pilnas gyvas sausas trys dešimt šimtas tūkstantis naujas du keturi penki šeši devyni tu mes ne sėsti stovėti stoti mirti prašyti sėti virti tekėti mėsa šventas žmona ranka".split(" "));
const international=new Set("kakava tortas bananas citrina studentas profesorius direktorius daktaras aktorius artistas autorius turistas ministras sekretorius prezidentas kolega lempa sofa vaza bankas parkas balkonas garažas telefonas kompiuteris televizorius radijas muziejus kostiumas sandalai ryžiai vynas pipiras karpis".split(" "));
const contact=new Set("burokas baravykas česnakas cukrus karalius ponas knyga kruopos sodas kopūstas morka butelis kilimas katilas šventė žvakė stiklinė".split(" "));
function note(w){
const lt=w[1],be=w[2],en=w[3].toLowerCase();
if(verified[lt]){const v=verified[lt];return {kind:"documented",title:v[0],description:v[1],source:v[2]}}
if(examples[lt]){const e=examples[lt];return {kind:"candidate",title:e[0],description:e[1]}}
if(international.has(lt))return {kind:"candidate",title:"Shared international vocabulary",description:lt+" and "+be+" ("+en+") resemble one another because both languages use a word circulating in European or international vocabulary. The specific loan routes have not been checked for this pair."};
if(contact.has(lt))return {kind:"candidate",title:"Possible borrowing through contact",description:lt+" and "+be+" ("+en+") occur in languages with centuries of contact. A shared or parallel borrowing through Baltic, Slavic or Polish usage is plausible, but its direction and date need a dictionary source."};
if(inherited.has(lt))return {kind:"candidate",title:"Possible ancient cognates",description:"The resemblance between "+lt+" and "+be+" ("+en+") may reflect an old Baltic–Slavic or wider Indo-European root. Later sound changes and grammatical endings account for some differences. This reconstruction has not yet been independently verified for the individual pair."};
return {kind:"review",title:"An intriguing resemblance",description:lt+" and "+be+" have a similar form or meaning ("+en+"). That similarity alone cannot tell us whether this is an inherited cognate, a historical loan or an accidental match. This entry needs individual etymological verification."};
}
const dialog=document.getElementById("origin-dialog"),tbody=document.getElementById("rows");if(!dialog||!tbody||!Array.isArray(words))return;
const el=id=>document.getElementById(id),visible=()=>[...tbody.querySelectorAll("[data-origin]")].map(b=>Number(b.dataset.origin));
let current=0,lastFocus=null;
function show(index){
current=index;const w=words[index],n=note(w);
el("origin-title").textContent=w[1]+" — "+w[2];
el("origin-translation").textContent=w[3]+" · "+w[0];
el("origin-type").className="origin-type "+n.kind;
el("origin-type").textContent=({documented:"Source-checked",candidate:"Provisional explanation",review:"Not yet researched"})[n.kind];
el("origin-heading").textContent=n.title;
el("origin-description").textContent=n.description;
el("origin-disclaimer").textContent=n.kind==="documented"?"Explanation based on the referenced etymological source.":"A provisional learning note, not a source-verified entry. Please consult an etymological dictionary before citing the explanation as fact.";
el("origin-source").href=n.source||(dictionary+encodeURIComponent(w[1]));
el("origin-source").textContent=n.source?"Read etymological source ↗":"Look up this word in the Lithuanian dictionary ↗";
const list=visible(),pos=list.indexOf(index);
el("origin-counter").textContent=pos>=0?(pos+1)+" / "+list.length:"";
el("origin-prev").disabled=pos<=0;el("origin-next").disabled=pos<0||pos>=list.length-1;
}
function move(d){const list=visible(),p=list.indexOf(current),n=p+d;if(n>=0&&n<list.length)show(list[n])}
tbody.addEventListener("click",event=>{const btn=event.target.closest("[data-origin]");if(!btn)return;lastFocus=btn;show(Number(btn.dataset.origin));if(!dialog.open)dialog.showModal()});
el("origin-prev").addEventListener("click",()=>move(-1));el("origin-next").addEventListener("click",()=>move(1));
el("origin-close").addEventListener("click",()=>dialog.close());
dialog.addEventListener("click",e=>{if(e.target===dialog)dialog.close()});
dialog.addEventListener("close",()=>{if(lastFocus&&lastFocus.isConnected)lastFocus.focus()});
})();
