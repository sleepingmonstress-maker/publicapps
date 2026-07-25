(function(){
  const SOURCES={
    yaleHistory:'https://yalebiblestudy.org/courses/the-books-of-samuel/lessons/history-and-literature-study-guide/',
    yaleDeut:'https://yalebiblestudy.org/courses/the-books-of-samuel/lessons/introduction-study-guide-2/',
    merneptah:'https://www.museumofthebible.org/book-minute/the-merneptah-stele',
    teldan:'https://thejewishmuseum.org/exhibitions/tel-dan-stele/',
    blackObelisk:'https://www.britishmuseum.org/collection/object/W_1848-1104-1',
    sennacherib:'https://www.britishmuseum.org/collection/object/W_1855-1003-1',
    sennacheribMet:'https://www.metmuseum.org/exhibitions/listings/2014/assyria-to-iberia/blog/posts/sennacherib-and-jerusalem',
    exile:'https://www.metmuseum.org/perspectives/cyrus-and-the-judean-diaspora',
    alyahudu:'https://www.blmj.org/en/Exhibition/jerusalem-in-babylon/',
    cyrus:'https://www.britishmuseum.org/collection/object/W_1880-0617-1941',
    pilate:'https://www.museumofthebible.org/book-minute/the-pilate-stone',
    dnaCanaan:'https://www.cell.com/cell/fulltext/S0092-8674%2820%2930487-6',
    dnaPhilistine:'https://pmc.ncbi.nlm.nih.gov/articles/PMC6609216/',
    siloam:'https://www.nature.com/articles/news030908-9',
    scrollDna:'https://www.cell.com/cell/fulltext/S0092-8674%2820%2930552-3',
    belfour:'https://catalog.archives.gov.il/site/publication/balfour-decleration/',
    holocaust:'https://encyclopedia.ushmm.org/content/en/article/introduction-to-the-holocaust',
    partition:'https://www.un.org/unispal/document/auto-insert-185393/',
    israelDeclaration:'https://main.knesset.gov.il/about/occasion/pages/declaration.aspx',
    res242:'https://digitallibrary.un.org/record/90717',
    oslo:'https://www.un.org/unispal/document/auto-insert-180015/',
    unHistory:'https://www.un.org/unispal/history/',
    ocha:'https://www.ochaopt.org/publications/humanitarian-situation-update',
    ochaLatest:'https://www.ochaopt.org/content/humanitarian-situation-report-23-july-2026',
    icj:'https://www.icj-cij.org/taxonomy/term/406',
    icc:'https://www.icc-cpi.int/palestine',
    unSpotlight:'https://www.un.org/en/spotlight-on-gaza'
  };
  function e(s){return String(s??'').replace(/[&<>\"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]))}
  function source(label,url){return `<a class="ixSource" href="${url}" target="_blank" rel="noopener">${e(label)} ↗</a>`}
  function evidenceRow(level,title,desc){return `<div class="ixEvidenceRow"><span class="ixDensity ${level}"></span><div><strong>${e(title)}</strong><p>${e(desc)}</p></div></div>`}
  function intersectionCard(icon,date,title,bible,world,meeting,limit,links){return `<article class="ixIntersectionCard"><div class="ixIntersectionTop"><span>${icon}</span><div><small>${e(date)}</small><h4>${e(title)}</h4></div></div><div class="ixCompare"><div><b>Biblical / Jewish record</b><p>${e(bible)}</p></div><div><b>Wider-world record</b><p>${e(world)}</p></div></div><div class="ixMeeting"><strong>Where they meet</strong><p>${e(meeting)}</p></div><div class="ixLimit"><strong>What this still does not prove</strong><p>${e(limit)}</p></div><div class="ixLinks">${links.map(([a,b])=>source(a,b)).join('')}</div></article>`}
  const crossroads=[
    ['🪨','c. 1208 BCE','Israel first appears in an Egyptian royal inscription','The biblical story locates Israel’s beginnings earlier, in the patriarchal and Exodus traditions.','The Merneptah Stele names a people usually read as Israel in Canaan.','By the late thirteenth century BCE, a people called Israel was known in Canaan.','It does not identify Moses, narrate the Exodus or settle how Israel emerged in Canaan.',[['Merneptah Stele',SOURCES.merneptah]]],
    ['👑','9th century BCE','Israel and Judah enter named international history','Kings narrates the Omrides, Ahab, Jehu and the divided kingdoms; Samuel preserves the Davidic founding story.','Moabite, Aramean and Assyrian inscriptions refer to Omri’s house, Ahab, Jehu, Israel and the House of David.','The kingdoms belonged to the same diplomatic and military world as Moab, Damascus and Assyria.','An inscription naming a dynasty or king does not verify every biblical episode or the exact scale of David’s kingdom.',[['Tel Dan Stele',SOURCES.teldan],['Black Obelisk',SOURCES.blackObelisk]]],
    ['🏹','701 BCE','Hezekiah and Sennacherib','2 Kings, Chronicles and Isaiah describe Assyria devastating Judah but failing to take Jerusalem.','Sennacherib’s prism records tribute from Hezekiah; Assyrian reliefs show Lachish conquered.','The king, campaign, tribute and destruction of Judahite cities converge closely.','The records interpret Jerusalem’s survival differently and cannot test the theological claim of divine deliverance.',[['Sennacherib Prism',SOURCES.sennacherib],['Met Museum study',SOURCES.sennacheribMet],['Siloam dating',SOURCES.siloam]]],
    ['🔥','597–586 BCE','Babylon destroys Jerusalem and deports Judeans','Kings, Jeremiah, Ezekiel and Lamentations narrate conquest, temple destruction, exile and trauma.','Babylonian court records anchor the 597 capture; ration and Al-Yahudu tablets document Judean exiles.','Named kings, deportation, exile communities and Persian-era continuity align strongly.','The tablets reveal ordinary lives, not every theological interpretation or every number in the biblical account.',[['Cyrus and Judean diaspora',SOURCES.exile],['Al-Yahudu archive',SOURCES.alyahudu]]],
    ['📜','539–515 BCE','Persia, return and the Second Temple','Ezra and prophetic texts portray Cyrus and Persian rule as opening a path to return and rebuilding.','The Cyrus Cylinder records Babylon’s conquest and a wider policy of restoring sanctuaries and cult images.','Persian imperial policy provides a credible world-historical setting for Judean restoration.','The cylinder does not name Judah or reproduce Ezra’s decree word for word.',[['Cyrus Cylinder',SOURCES.cyrus]]],
    ['🏺','332–63 BCE','Greek rule and Jewish resistance','Daniel’s visions, 1–2 Maccabees and later Jewish memory interpret Hellenistic oppression and temple profanation.','Coins, inscriptions and Greco-Roman histories densely document Alexander’s successors, Antiochus IV and Hasmonean rule.','This is a strongly integrated part of Mediterranean history.','Disagreement remains over the date and predictive reach of Daniel’s visions.',[]],
    ['🦅','63 BCE–135 CE','Roman Judea, Jesus, temple destruction and revolt','The Gospels, Acts and New Testament letters arise within Roman Judea; Jewish sources remember the temple and later revolts.','Pilate’s inscription, Josephus, Tacitus, coins, ruins and the Arch of Titus anchor the Roman setting.','Rulers, offices, places, execution practices and the destruction of 70 CE belong firmly to Roman history.','Archaeology cannot by itself adjudicate resurrection, messiahship or the theological meaning of 70 CE.',[['Pilate Stone',SOURCES.pilate]]],
    ['📚','2nd–19th centuries','Diaspora continuity without continuous sovereignty','Rabbinic literature, liturgy and Jewish memory maintain Torah, Jerusalem and peoplehood across dispersion.','Manuscripts, synagogues, cemeteries, legal archives and community records trace Jewish life across many empires.','There is substantial religious, textual and communal continuity, including continuing orientation towards Zion.','There was no uninterrupted Israelite or Jewish sovereign state, and diaspora communities were diverse.',[['Dead Sea Scroll parchment DNA',SOURCES.scrollDna]]],
    ['🚢','1880s–1948','Zionism, empire, Holocaust and state formation','Jewish religious memory of return meets modern Jewish national movements, while Palestinian Arab society develops its own modern national history.','Ottoman and British archives, the Balfour Declaration, Holocaust documentation, UN partition and war records are extensive.','Modern Israel arose within modern nationalism, imperial policy, persecution, migration, diplomacy and war.','It is not historically sound to jump directly from an ancient prophecy to 1948 while bypassing Palestinians, empires and modern political agency.',[['Balfour Declaration',SOURCES.belfour],['Holocaust Encyclopedia',SOURCES.holocaust],['UN partition',SOURCES.partition],['Israel Declaration',SOURCES.israelDeclaration]]],
    ['🌍','1948–present','A modern state inside international history','Modern Jews and Christians interpret statehood, land and gathering through different theological frameworks.','The State of Israel, Palestinian displacement, wars, occupation, peace agreements and current conflict are documented by governments, the UN, courts, archives and media.','Modern Israel is a real historical successor in Jewish national memory, but also a modern nation-state governed by modern law and institutions.','The state is not automatically identical to covenant Israel, and military outcomes do not prove divine approval.',[['UN history',SOURCES.unHistory],['Resolution 242',SOURCES.res242],['Oslo Accord',SOURCES.oslo],['Current OCHA reports',SOURCES.ocha]]]
  ];
  function renderIntersectionsHub(mode='desktop'){
    const compact=mode==='mobile';
    return `<div class="intersectionsHub ${compact?'mobileIx':''}">
      <section class="ixHero">
        <div><div class="ixKicker">A second way through the app</div><h2>Bible, world history, archaeology and the present</h2><p>Follow the <strong>bridges</strong> rather than the timeline: where Scripture meets Egyptian, Assyrian, Babylonian, Persian, Greek, Roman, scientific and modern documentary evidence.</p></div>
        <div class="ixVerdict"><strong>Are the histories seamless?</strong><span>No—not as one uninterrupted modern archive.</span><small>They are overlapping histories with different kinds and densities of evidence.</small></div>
      </section>
      <div class="ixCompanionRoute"><div><strong>Ready to ask what it all means?</strong><span>Explore Jewish survival, return, prophetic fulfilment, evidence gaps and the Dead Sea Scrolls.</span></div><button type="button" onclick="openSignificancePath()">Open the Significance path →</button></div>
      <nav class="ixRouteNav" aria-label="Intersection study routes">
        <a href="#ixFit">How the records fit</a><a href="#ixBridges">World intersections</a><a href="#ixScience">Science lab</a><a href="#ixModern">Ancient to modern</a><a href="#ixCurrent">Current world</a>
      </nav>
      <section id="ixFit" class="ixPanel"><div class="ixSectionHead"><span>01</span><div><h3>How the different histories fit</h3><p>The Bible and secular history are not rival versions of the same kind of book.</p></div></div>
        <div class="ixSixGrid">
          <div><b>Biblical history</b><p>Selects and interprets events through covenant, sin, judgment, mercy and promise.</p></div>
          <div><b>Royal inscriptions</b><p>Record rulers, campaigns and tribute—but are also imperial propaganda.</p></div>
          <div><b>Archaeology</b><p>Recovers settlements, destruction, pottery, architecture, inscriptions and everyday life.</p></div>
          <div><b>Science</b><p>Dates materials, studies ancient DNA and analyses manuscripts or environments.</p></div>
          <div><b>Modern archives</b><p>Preserve laws, censuses, diplomacy, military records, testimony and institutional decisions.</p></div>
          <div><b>Theology</b><p>Asks what events reveal about God and human beings—a question material evidence cannot answer by itself.</p></div>
        </div>
        <div class="ixMethodCallout"><strong>The governing rule:</strong> convergence strengthens historical confidence, but the absence of a matching inscription is not automatically disproof; nor does a matching name prove every narrative detail.</div>
        <div class="ixLinks">${source('Yale: history and literature',SOURCES.yaleHistory)}${source('Yale: Deuteronomistic History',SOURCES.yaleDeut)}</div>
      </section>
      <section class="ixPanel"><div class="ixSectionHead"><span>02</span><div><h3>Evidence density through time</h3><p>The record becomes progressively denser; it does not have the same resolution in every age.</p></div></div>
        <div class="ixEvidenceScale">
          ${evidenceRow('sparse','Primeval and patriarchal narratives','Theological and ancestral memory; cultural setting can be illuminated, but named individuals are not externally attested.')}
          ${evidenceRow('context','Exodus, wilderness and settlement','Israel is externally known in Canaan by c. 1208 BCE, but route, scale, conquest pattern and chronology are debated.')}
          ${evidenceRow('bridge','Monarchy and divided kingdoms','Named rulers, dynasties, battles and tribute create multiple bridges into regional history.')}
          ${evidenceRow('dense','Assyrian, Babylonian and Persian periods','Imperial annals, tablets, destruction layers and administrative archives allow close synchronisation.')}
          ${evidenceRow('dense','Greek and Roman periods','Coins, inscriptions, historians, ruins and manuscripts create abundant evidence.')}
          ${evidenceRow('archive','Modern period','The problem is no longer scarcity but volume, bias, legal complexity and rapidly changing information.')}
        </div>
      </section>
      <section id="ixBridges" class="ixPanel"><div class="ixSectionHead"><span>03</span><div><h3>Where Israel’s story intersects world history</h3><p>Each card shows the biblical record, the wider-world record, their meeting point and the remaining limit.</p></div></div><div class="ixCrossroads">${crossroads.map(c=>intersectionCard(...c)).join('')}</div></section>
      <section id="ixScience" class="ixPanel"><div class="ixSectionHead"><span>04</span><div><h3>Science and archaeology: what they add</h3><p>Scientific tools refine dates and populations, but must not be turned into theological or political shortcuts.</p></div></div>
        <div class="ixLabGrid">
          <article><span>🧬</span><h4>Bronze Age southern Levant DNA</h4><p>Genome-wide data show related but mobile and mixed populations across the region often called Canaan.</p><b>It can illuminate:</b><p>Population relationships and movement.</p><b>It cannot decide:</b><p>Covenant identity, ethnicity as the Bible uses it, or modern territorial rights.</p>${source('Cell study',SOURCES.dnaCanaan)}</article>
          <article><span>🧬</span><h4>Early Iron Age Ashkelon</h4><p>Ancient DNA detected a transient European-related contribution among early Philistines, followed by rapid local mixture.</p><b>It can illuminate:</b><p>Migration and mixture behind material change.</p><b>It cannot decide:</b><p>Every Philistine’s origin or the meaning of biblical conflicts.</p>${source('Science Advances / PMC',SOURCES.dnaPhilistine)}</article>
          <article><span>⏱️</span><h4>Siloam Tunnel dating</h4><p>Radiometric work placed the tunnel around 700 BCE, fitting Hezekiah’s Assyrian-crisis setting.</p><b>It can illuminate:</b><p>Engineering chronology and siege preparation.</p><b>It cannot decide:</b><p>How Jerusalem was delivered or whether a miracle occurred.</p>${source('Nature report',SOURCES.siloam)}</article>
          <article><span>📜</span><h4>Dead Sea Scroll parchment DNA</h4><p>DNA from animal skins helps group fragments and test whether pieces likely came from the same manuscript or region.</p><b>It can illuminate:</b><p>Manuscript production and fragment relationships.</p><b>It cannot decide:</b><p>Whether the theology of a scroll is true.</p>${source('Cell study',SOURCES.scrollDna)}</article>
        </div>
        <div class="ixWarning"><strong>Three category errors to avoid:</strong><ol><li>Genetic ancestry is not the same thing as biblical covenant identity.</li><li>A destruction layer does not identify its destroyer without further evidence.</li><li>Archaeology can test material claims; it cannot directly measure God’s action, purpose or presence.</li></ol></div>
      </section>
      <section id="ixModern" class="ixPanel"><div class="ixSectionHead"><span>05</span><div><h3>From biblical Israel to the modern State of Israel</h3><p>There is real continuity, but not simple identity.</p></div></div>
        <div class="ixContinuity">
          <div class="ixContinuityFlow"><span>Ancient Israel and Judah</span><i>→</i><span>Exile and Second Temple Judaism</span><i>→</i><span>Rabbinic and diaspora communities</span><i>→</i><span>Modern Jewish national movements</span><i>→</i><span>State of Israel, 1948</span></div>
          <div class="ixContinuityGrid"><article class="yes"><h4>Important continuities</h4><ul><li>Jewish peoplehood and historical memory</li><li>Hebrew Scripture, liturgy and law</li><li>Jerusalem and the land in prayer and identity</li><li>Hebrew language, later revived as a modern vernacular</li><li>Jewish presence in the land across changing periods</li></ul></article><article class="no"><h4>Important discontinuities</h4><ul><li>No uninterrupted sovereign Israelite state</li><li>Changing empires, borders, populations and legal orders</li><li>The modern state is a twentieth-century political institution</li><li>Its citizens are religiously and ethnically diverse</li><li>Its policies are not automatically equivalent to God’s covenant will</li></ul></article></div>
          <div class="ixPalestinian"><strong>Palestinian history is part of this path, not an appendix.</strong><p>The same land also contains centuries of Arab, Muslim and Christian life, and a modern Palestinian national history. Any coherent account of Zionism, 1948, displacement, occupation and conflict must include both Jewish and Palestinian experiences.</p></div>
        </div>
        <div class="ixLinks">${source('Israel’s 1948 Declaration',SOURCES.israelDeclaration)}${source('UN history of Palestine',SOURCES.unHistory)}${source('UN partition plan',SOURCES.partition)}${source('Holocaust history',SOURCES.holocaust)}</div>
      </section>
      <section id="ixCurrent" class="ixPanel ixCurrent"><div class="ixSectionHead"><span>06</span><div><h3>Current Israel, Palestine and the real world</h3><p>This panel is date-sensitive. Its job is to keep current events connected to history without forcing them into prophecy.</p></div></div>
        <div class="ixCurrentDate">Research checkpoint: <strong>25 July 2026</strong></div>
        <div class="ixCurrentGrid">
          <article><h4>Humanitarian record</h4><p>Use current UN reporting for displacement, access, health, casualties and infrastructure—and retain each source’s attribution and caveats.</p>${source('OCHA live updates',SOURCES.ocha)}${source('OCHA report, 23 July 2026',SOURCES.ochaLatest)}</article>
          <article><h4>International law</h4><p>Distinguish allegations, provisional measures, advisory opinions, warrants, procedural rulings and final judgments.</p>${source('ICJ case records',SOURCES.icj)}${source('ICC Palestine situation',SOURCES.icc)}</article>
          <article><h4>Diplomatic framework</h4><p>Read 1947 partition, 1967 Resolution 242 and Oslo as actual documents, not slogans.</p>${source('Resolution 181',SOURCES.partition)}${source('Resolution 242',SOURCES.res242)}${source('Oslo text',SOURCES.oslo)}</article>
          <article><h4>Theological discipline</h4><p>Do not equate a modern government with God, call every battle fulfilment, or use prophecy to make civilian suffering invisible.</p>${source('UN current Gaza portal',SOURCES.unSpotlight)}</article>
        </div>
        <div class="ixSourceDiscipline"><strong>Current-events source discipline</strong><ol><li>Date-stamp every claim.</li><li>Separate reported figures from independently verified figures.</li><li>Read Israeli, Palestinian, international and legal records together.</li><li>Distinguish history, moral judgment, law and eschatological interpretation.</li><li>Update before public distribution.</li></ol></div>
      </section>
      <section class="ixClosing"><h3>A coherent picture—but not a flattened one</h3><p>The strongest account lets all the lenses converge without forcing them to say the same thing. Scripture gives theological meaning; empires leave self-serving records; archaeology recovers material life; science tests limited questions; modern archives preserve competing experiences; theology asks what the whole story means before God.</p></section>
    </div>`;
  }
  window.renderIntersectionsHub=renderIntersectionsHub;
  window.openIntersectionsPath=function(){
    const mobile=window.matchMedia('(max-width: 767px)').matches && document.getElementById('mobileExperience') && getComputedStyle(document.getElementById('mobileExperience')).display!=='none';
    if(mobile && typeof window.mobileSetTab==='function'){
      window.mobileSetTab('world');
      return false;
    }
    const dialog=document.getElementById('intersectionsDialog');
    const body=document.getElementById('intersectionsDialogContent');
    if(!dialog||!body)return false;
    body.innerHTML=renderIntersectionsHub('desktop');
    document.documentElement.classList.add('intersections-open');
    if(typeof dialog.showModal==='function'){if(!dialog.open)dialog.showModal()}else{dialog.setAttribute('open','');dialog.style.display='block'}
    requestAnimationFrame(()=>dialog.querySelector('.intersectionsClose')?.focus({preventScroll:true}));
    return false;
  };
  window.closeIntersectionsPath=function(){
    const dialog=document.getElementById('intersectionsDialog');
    if(dialog){if(typeof dialog.close==='function'&&dialog.open)dialog.close();else{dialog.removeAttribute('open');dialog.style.display='none'}}
    document.documentElement.classList.remove('intersections-open');
    document.getElementById('intersectionsHeroButton')?.focus({preventScroll:true});
  };
  document.addEventListener('DOMContentLoaded',()=>{
    const d=document.getElementById('intersectionsDialog');
    d?.addEventListener('close',()=>document.documentElement.classList.remove('intersections-open'));
    d?.addEventListener('cancel',()=>document.documentElement.classList.remove('intersections-open'));
  });
})();
