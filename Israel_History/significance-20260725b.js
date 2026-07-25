(function(){
  const S={
    iaa:'https://www.deadseascrolls.org.il/', featured:'https://www.deadseascrolls.org.il/featured-scrolls', intro:'https://www.deadseascrolls.org.il/learn-about-the-scrolls/introduction',
    locIntro:'https://www.loc.gov/exhibits/scrolls/intr.html', locToday:'https://www.loc.gov/exhibits/scrolls/today.html', dna:'https://www.cell.com/cell/fulltext/S0092-8674%2820%2930552-3',
    declaration:'https://main.knesset.gov.il/en/about/pages/declaration.aspx', jewishContinuity:'https://www.ajc.org/news/who-are-the-jews', hebrew:'https://eng.hebrew-academy.org.il/overview-of-hebrew/hebrew-through-the-ages/', benYehuda:'https://hebrew-academy.org.il/wp-content/uploads/BY-UNESCO.pdf',
    dp:'https://encyclopedia.ushmm.org/content/en/article/displaced-persons', state:'https://encyclopedia.ushmm.org/content/en/article/postwar-refugee-crisis-and-the-establishment-of-the-state-of-israel', belfour:'https://catalog.archives.gov.il/site/publication/balfour-decleration/', partition:'https://www.un.org/unispal/document/auto-insert-185393/', recognition:'https://history.state.gov/milestones/1945-1952/creation-israel',
    jewishMessiah:'https://www.myjewishlearning.com/article/jewish-messianism/', landYes:'https://www.thegospelcoalition.org/article/israel-land-promise-mcdermott/', landNo:'https://www.thegospelcoalition.org/article/israel-land-promise-beale/', views:'https://www.thegospelcoalition.org/themelios/review/perspectives-on-israel-and-the-church-4-views/',
    fossil:'https://www.nhm.ac.uk/discover/what-is-a-fossil.html', fossilMethod:'https://www.nhm.ac.uk/discover/what-can-scientists-learn-about-dinosaurs-and-how.html', historyMethod:'https://www.cambridge.org/core/books/teaching-history-in-higher-education/what-kinds-of-problems-do-historians-solve/5A07931EF1DBE522784B6C304D3FD1FD', poland:'https://2009-2017.state.gov/outofdate/bgn/poland/197879.htm',
    current:'https://www.ochaopt.org/publications/humanitarian-situation-update', icj:'https://www.icj-cij.org/case/192', icc:'https://www.icc-cpi.int/palestine', pew:'https://www.pewresearch.org/religion/2021/05/11/jewish-americans-in-2020/', pewMarriage:'https://www.pewresearch.org/religion/2021/05/11/marriage-families-and-children/', dssDiscovery:'https://www.deadseascrolls.org.il/learn-about-the-scrolls/discovery-and-publication', dssLanguages:'https://www.deadseascrolls.org.il/learn-about-the-scrolls/languages-and-scripts', greatIsaiah:'https://dss.collections.imj.org.il/isaiah', revelationViews:'https://learn.ligonier.org/articles/interpreting-revelation', israelChurchViews:'https://www.thegospelcoalition.org/themelios/review/perspectives-on-israel-and-the-church-4-views/', yaleRevelation:'https://yalebiblestudy.org/courses/revelation/'
  };
  function e(v){return String(v??'').replace(/[&<>\"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]))}
  function src(label,url){return `<a class="sigSource" href="${url}" target="_blank" rel="noopener">${e(label)} ↗</a>`}
  function section(no,title,sub,body,id=''){return `<section ${id?`id="${id}"`:''} class="sigPanel"><div class="sigSectionHead"><span>${no}</span><div><h3>${title}</h3><p>${sub}</p></div></div>${body}</section>`}
  function verdict(label,text,kind=''){return `<div class="sigVerdict ${kind}"><strong>${label}</strong><p>${text}</p></div>`}
  function renderSignificanceHub(mode='desktop'){
    const mobile=mode==='mobile';
    return `<div class="significanceHub ${mobile?'mobileSig':''}">
      <section class="sigHero">
        <div><div class="sigKicker">A third route through the app</div><h2>Evidence, survival, return, prophecy and the Dead Sea Scrolls</h2><p>This path separates facts, historical inference and theological interpretation before asking the questions behind them: <strong>How did Jewish peoplehood endure?</strong> Is the return historically unique? Can it reasonably be called providential or prophetic? What do gaps in the record mean? And why are the Dead Sea Scrolls so important?</p></div>
        <div class="sigHeroTruth"><strong>The most accurate starting point</strong><span>The Jewish state vanished. The Jewish people did not.</span><small>Sovereignty was interrupted; identity, Scripture, worship, communal memory and attachment to Zion persisted in many forms.</small></div>
      </section>
      <nav class="sigRouteNav"><a href="#sigReturn">Return</a><a href="#sigProphecy">Prophecy</a><a href="#sigEvidence">Evidence gaps</a><a href="#sigScrolls">Dead Sea Scrolls</a><a href="#sigMeaning">Meaning</a></nav>

      ${section('00','How to read every claim objectively','Four categories prevent facts and theology from being silently mixed.',`
        <div class="sigClaimLadder">
          <article><span>1</span><h4>Historically established</h4><p>What inscriptions, manuscripts, archaeology, contemporary documents or broad scholarly agreement can support.</p></article>
          <article><span>2</span><h4>Historical inference</h4><p>The best explanation of incomplete evidence—for example, why identity endured or how different causes combined.</p></article>
          <article><span>3</span><h4>Theological interpretation</h4><p>Providence, miracle, covenant and prophetic fulfilment. These may be rationally argued, but historical method alone cannot compel them.</p></article>
          <article><span>4</span><h4>Uncertain or disputed</h4><p>Questions where chronology, textual interpretation, archaeology, law or theology remain genuinely contested.</p></article>
        </div>
        ${verdict('Objectivity rule','The app should never present a theological inference as though it were an inscription, nor pretend that a secular method has disproved a claim simply because the claim exceeds that method.','blue')}
      `,'sigMethod')}

      ${section('V','The same evidence through different worldviews','Each lens notices real features, but none should be disguised as the only neutral reading.',`
        <div class="sigViewpointGrid">
          <article><h4>Methodological secular historian</h4><p>Explains Jewish continuity and state formation through institutions, memory, nationalism, migration, persecution, diplomacy and war. It suspends judgment about divine causation.</p></article>
          <article><h4>Religious Jewish / providential</h4><p>May see survival, Hebrew revival, ingathering and renewed sovereignty as divine faithfulness or the beginning of redemption, while Jewish traditions differ over the modern state.</p></article>
          <article><h4>Christian Zionist / dispensational</h4><p>Often treats modern return as significant fulfilment or preparation for promises concerning ethnic Israel, land and future conversion.</p></article>
          <article><h4>Covenantal / amillennial Christian</h4><p>May regard the return as remarkable providence while locating the fulfilment of land, temple and kingdom chiefly in Christ, the church and new creation.</p></article>
          <article><h4>Palestinian and postcolonial historical lens</h4><p>Emphasises the existing Arab population, imperial decisions, displacement, occupation and the danger of using biblical claims to silence present rights and suffering.</p></article>
          <article><h4>Open or agnostic theological reading</h4><p>May judge the convergence extraordinary and remain open to providence without claiming that prophecy has been demonstrably fulfilled.</p></article>
        </div>
        <div class="sigLinks">${src('Five approaches to Revelation',S.revelationViews)}${src('Israel and church: four views',S.israelChurchViews)}${src('Yale Revelation course',S.yaleRevelation)}${src('Jewish messianism',S.jewishMessiah)}</div>
      `,'sigViews')}

      ${section('01','Did a nation vanish and reappear?','Yes and no—the distinction between a state and a people is essential.',`
        <div class="sigStatePeople">
          <article><span>🏛️</span><h4>What disappeared</h4><p>Independent Jewish sovereignty, first in the ancient kingdoms and later in the Hasmonean state, ended under successive empires. Borders, administrations and ruling institutions did not continue unbroken into 1948.</p></article>
          <article><span>🕯️</span><h4>What endured</h4><p>Jewish communities retained Scripture, law, liturgy, calendar, festivals, shared ancestry and memory, Hebrew learning, and prayers oriented towards Jerusalem. Jewish presence in the land also continued, though at changing scale.</p></article>
          <article><span>🌍</span><h4>What was dispersed</h4><p>Jewish life became a network of diverse communities across the Middle East, North Africa, Europe and later the wider world. Many assimilated partly or fully; many others sustained a recognisably Jewish identity.</p></article>
          <article><span>🇮🇱</span><h4>What reappeared</h4><p>A modern Jewish-majority nation-state arose through migration, institution-building, diplomacy, war and international recognition—under modern law, not by simply restarting David’s monarchy.</p></article>
        </div>
        <div class="sigLinks">${src('Jewish peoplehood and diaspora continuity',S.jewishContinuity)}${src('Israel’s Declaration of Independence',S.declaration)}${src('Hebrew through the ages',S.hebrew)}</div>
      `)}

      ${section('02','Why would people return to a difficult and vulnerable land?','Because return was driven by several forces at once—not romantic pride alone.',`
        <div id="sigReturn" class="sigCauseWheel">
          <div class="sigWheelCenter"><strong>Return</strong><span>Aliyah</span></div>
          <article><b>Inherited memory</b><p>Jerusalem, Zion and the land were embedded in prayer, Passover, mourning, Scripture and communal imagination.</p></article>
          <article><b>Peoplehood</b><p>Jewish identity was not only a private religion. It carried ancestry, law, language, communal obligation and historical memory.</p></article>
          <article><b>Persecution and refuge</b><p>Pogroms, antisemitism, the Holocaust, postwar displacement and expulsions from several countries made political security urgent.</p></article>
          <article><b>Modern Zionism</b><p>Political movements translated ancient attachment into organised migration, land purchase, Hebrew education, economic institutions and state-building.</p></article>
          <article><b>Concrete networks</b><p>Return became possible because earlier immigrants built towns, farms, schools, unions, defence organisations and governing bodies.</p></article>
          <article><b>Language revival</b><p>Hebrew’s transformation from sacred and literary language into a modern vernacular created a shared public culture among immigrants from many regions.</p></article>
        </div>
        <div class="sigMethodCallout"><strong>Important:</strong> many Jews did assimilate, many remained committed diaspora Jews, and most did not immediately move to the land. The historical wonder lies not in universal return, but in the survival of enough identity, memory, organisation and will to make large-scale return possible.</div>
        <div class="sigLinks">${src('Jewish displaced persons and Zionism',S.dp)}${src('Survivors and the establishment of Israel',S.state)}${src('Hebrew language revival',S.benYehuda)}</div>
      `,'sigReturn')}

      ${section('03','Is Israel’s restoration historically unique?','The claim needs precision: there are parallels, but the combination is extraordinary.',`
        <div class="sigUniqueGrid">
          <article><h4>Not the only restored sovereignty</h4><p>Poland, Armenia, Greece and other peoples regained statehood after foreign rule or political disappearance. So “no other nation has ever reappeared” is too absolute.</p>${src('Poland regained independence',S.poland)}</article>
          <article><h4>What is unusually concentrated here</h4><ul><li>A very long interval without sovereignty</li><li>A geographically dispersed people</li><li>Persistent liturgical memory of a specific ancestral land</li><li>Revival of an ancient sacred language as a national vernacular</li><li>Large-scale ingathering from many continents</li><li>State formation after genocide and refugee crisis</li><li>Immediate war and survival</li></ul></article>
          <article class="wide"><h4>The careful conclusion</h4><p>Israel is not unique because every component has no parallel. It is exceptional because <strong>so many rare components converge in one case</strong>. Historical comparison makes the event more intelligible without making it ordinary.</p></article>
        </div>
      `)}

      ${section('04','Miracle, providence or political history?','These are not mutually exclusive descriptions, but they answer different questions.',`
        <div class="sigTwoLens">
          <article><span>🔎</span><h4>What history can say</h4><p>The outcome depended on human agency: identity preservation, Zionist organisation, migration, British policy, the Holocaust, UN diplomacy, military mobilisation, international recognition and regional war.</p></article>
          <article><span>✨</span><h4>What faith may say</h4><p>A believer may see the improbable convergence of those causes as providence—God working through ordinary and extraordinary historical means. Historical method cannot prove or disprove that theological judgment.</p></article>
        </div>
        ${verdict('My considered judgment','It is reasonable for a Christian or Jew to call Jewish survival and return providential and astonishing. Calling it a “miracle” is a theological interpretation, not a conclusion archaeology can compel.','gold')}
        <div class="sigLinks">${src('Balfour Declaration archive',S.belfour)}${src('UN partition plan',S.partition)}${src('U.S. history of Israel’s creation',S.recognition)}</div>
      `)}

      ${section('05','Is it prophetic fulfilment?','The answer depends on how one reads exile-and-return prophecy and what counts as complete fulfilment.',`
        <div id="sigProphecy" class="sigProphecyMap">
          <article><span>1</span><h4>Original return horizon</h4><p>Many texts first address Assyrian or Babylonian dispersion and the Persian-period return. This must not be skipped.</p></article>
          <article><span>2</span><h4>Layered or typological horizon</h4><p>The return from Babylon was real but incomplete, so later readers see exile-and-return patterns widening towards Messiah, Spirit, resurrection and final restoration.</p></article>
          <article><span>3</span><h4>Modern national application</h4><p>Dispensational, Christian Zionist and many Messianic Jewish readers see modern ingathering as direct, partial or preparatory fulfilment.</p></article>
          <article><span>4</span><h4>Christ-and-new-creation application</h4><p>Covenantal and amillennial readers usually locate fulfilment principally in Christ, the multi-ethnic people of God and the renewed creation, not a twentieth-century state.</p></article>
          <article><span>5</span><h4>Jewish messianic expectation</h4><p>Traditional Jewish hope includes ingathering, Jerusalem, redemption and peace, while Jewish interpretations of the modern state range from religious fulfilment to secular national achievement or incomplete preparation.</p></article>
          <article><span>6</span><h4>A cautious synthesis</h4><p>Modern return can plausibly be treated as a striking providential correspondence or partial sign. It should not be called the complete fulfilment while the prophetic package of repentance, Spirit, justice, peace, Messiah and healed nations remains incomplete.</p></article>
        </div>
        <div class="sigFulfilmentTests"><h4>Six tests before declaring “fulfilled”</h4><div><span>Gathering</span><span>Cleansing and new heart</span><span>Justice</span><span>Peace</span><span>Messianic rule</span><span>Blessing of nations</span></div></div>
        <div class="sigLinks">${src('Jewish messianic expectations',S.jewishMessiah)}${src('Continuing-land view',S.landYes)}${src('New-creation / universalised-land view',S.landNo)}${src('Four Israel–church views',S.views)}</div>
      `,'sigProphecy')}

      ${section('06','Do gaps and discontinuities support authenticity?','They can count against a simplistic fabrication theory—but they are not proof by themselves.',`
        <div id="sigEvidence" class="sigEvidenceLogic">
          <div class="sigLogicRow"><b>Expected of genuine antiquity</b><span>→</span><p>Lost archives, damaged sites, selective royal records, conflicting perspectives, copy variants, incomplete genealogies and uneven preservation.</p></div>
          <div class="sigLogicRow"><b>Potential mark of candour</b><span>→</span><p>The Bible preserves national failure, corrupt kings, prophetic rejection, civil war, exile and unresolved tensions that idealised propaganda would tend to suppress.</p></div>
          <div class="sigLogicRow"><b>But not automatic proof</b><span>→</span><p>A fabricated work could imitate roughness; an authentic work could still contain error. Discontinuity increases plausibility only as part of a cumulative case.</p></div>
          <div class="sigLogicRow"><b>Stronger historical indicators</b><span>→</span><p>Independent synchronisms, hostile witnesses, linguistic and cultural fit, archaeology, manuscript age, geographic accuracy and explanatory coherence.</p></div>
        </div>
        ${verdict('Best formulation','The imperfections of the record are compatible with—and sometimes suggestive of—genuine ancient transmission. The case for historical reliability rests on cumulative convergence, not on gaps alone.','blue')}
        <div class="sigLinks">${src('Historical evidence is fragmentary',S.historyMethod)}</div>
      `,'sigEvidence')}

      ${section('07','Why the dinosaur comparison is partly right','Palaeontology and ancient history both infer a past from incomplete surviving traces.',`
        <div class="sigCompareTable">
          <div class="head">Question</div><div class="head">Dinosaurs</div><div class="head">Biblical history</div>
          <div><b>Record</b></div><div>Fossils, tracks, eggs, coprolites, geology</div><div>Texts, inscriptions, settlements, pottery, archives, monuments</div>
          <div><b>Completeness</b></div><div>Highly incomplete and preservation-biased</div><div>Highly incomplete and preservation-biased</div>
          <div><b>Method</b></div><div>Multiple independent traces converge</div><div>Multiple independent traces and sources converge</div>
          <div><b>Claim limits</b></div><div>Physical and biological reconstruction</div><div>Physical events plus human testimony; theological meaning is a further question</div>
          <div><b>Fair standard</b></div><div>Not every dinosaur requires a complete skeleton</div><div>Not every biblical episode requires its own external inscription</div>
        </div>
        <div class="sigMethodCallout"><strong>The key correction:</strong> scientists do not accept dinosaurs merely despite gaps. They accept them because many independent lines of evidence converge. Biblical history deserves the same cumulative, claim-sensitive standard—not automatic scepticism, but not exemption from scrutiny either.</div>
        <div class="sigLinks">${src('The fossil record is incomplete',S.fossil)}${src('How dinosaur evidence converges',S.fossilMethod)}</div>
      `)}

      ${section('08','The Dead Sea Scrolls: a detailed guide','Why manuscripts hidden in desert caves transformed the study of the Bible, Judaism and Christianity.',`
        <div id="sigScrolls" class="sigScrollHero"><figure><img src="assets/isaiah_scroll.webp" alt="A section of the Great Isaiah Scroll"><figcaption>The Great Isaiah Scroll represents the astonishing preservation of an ancient biblical manuscript tradition.</figcaption></figure><div><div class="sigScrollStat"><strong>1947</strong><span>first cave discovery</span></div><div class="sigScrollStat"><strong>11 caves</strong><span>thousands of manuscript fragments</span></div><div class="sigScrollStat"><strong>3rd c. BCE–1st c. CE</strong><span>the Qumran manuscript horizon</span></div><div class="sigScrollStat"><strong>~1,000 years</strong><span>older than previously available complete medieval Hebrew manuscripts</span></div></div></div>
        <div class="sigDssFacts"><article><strong>11 caves</strong><span>Qumran manuscript discoveries</span></article><article><strong>900+ texts</strong><span>represented by complete manuscripts and thousands of fragments</span></article><article><strong>Hebrew, Aramaic, Greek</strong><span>the principal manuscript languages</span></article><article><strong>Every Hebrew Bible book except Esther</strong><span>represented among identified biblical manuscripts</span></article><article><strong>54 columns / all 66 Isaiah chapters</strong><span>in the Great Isaiah Scroll</span></article><article><strong>c. 125 BCE</strong><span>approximate date of the Great Isaiah Scroll</span></article></div><div class="sigLinks">${src('Official discovery history',S.dssDiscovery)}${src('Languages and scripts',S.dssLanguages)}${src('Explore the Great Isaiah Scroll',S.greatIsaiah)}</div><div class="sigScrollGrid">
          <article><span>📖</span><h4>1. They take us much closer to the biblical text’s ancient transmission</h4><p>Qumran yielded fragments of every Hebrew Bible book except Esther. Some copies are remarkably close to the later Masoretic Text; others preserve genuine variants. The result is neither “the text changed completely” nor “every letter was always identical.” It is strong continuity within a living manuscript tradition that had not yet become completely standardised.</p></article>
          <article><span>🧾</span><h4>2. They show how textual criticism actually works</h4><p>Scholars compare Qumran manuscripts with the Masoretic Text, Septuagint, Samaritan Pentateuch and later versions. Variants can reveal copying errors, alternative editions or earlier readings. Most do not overturn central biblical narratives or theology, but they improve translation and historical understanding.</p></article>
          <article><span>🕍</span><h4>3. They reveal the diversity of Second Temple Judaism</h4><p>Community rules, biblical commentaries, prayers, calendars, legal texts, apocalyptic writings and war expectations show that Jewish life before 70 CE was not monolithic. The scrolls illuminate a world of covenant renewal, purity concerns, priestly disputes, messianic hope and scriptural interpretation.</p></article>
          <article><span>✝️</span><h4>4. They illuminate the Jewish world of Jesus and the early church</h4><p>The scrolls do not contain a lost Gospel or direct testimony about Jesus. Their value is contextual: they show that themes such as ritual washing, communal meals, apocalyptic expectation, “sons of light,” messianic figures and intense scriptural interpretation belonged to the wider Jewish environment. Similarity does not prove direct dependence.</p></article>
          <article><span>🧬</span><h4>5. Modern science can interrogate ancient manuscripts</h4><p>Radiocarbon dating, palaeography, multispectral imaging and parchment DNA help date scrolls, recover faded writing, group fragments and identify whether pieces came from the same animal skin. DNA work suggests some manuscripts were brought to Qumran from elsewhere, widening the collection beyond one isolated sect.</p></article>
          <article><span>🕯️</span><h4>6. They embody preservation across catastrophe</h4><p>These manuscripts survived the destruction of the Second Temple world in caves for roughly two millennia. They make visible the continuity of Scripture across conquest, revolt, dispersion and later textual standardisation.</p></article>
        </div>
        <div class="sigScrollNuance"><h4>What the Scrolls do—and do not—show</h4><div class="sigDoDont"><div><strong>They do show</strong><ul><li>Ancient biblical manuscripts substantially continuous with later Hebrew tradition</li><li>Real textual variants and multiple editions</li><li>A diverse Jewish religious world before 70 CE</li><li>The ancient setting of ideas later encountered in the New Testament</li><li>The power of modern imaging and DNA in manuscript reconstruction</li></ul></div><div><strong>They do not show</strong><ul><li>That every modern translation is identical</li><li>That no copyist ever made an error</li><li>A direct Qumran origin for Christianity</li><li>Archaeological proof of every biblical event</li><li>Scientific proof that biblical theology is true</li></ul></div></div></div>
        <div class="sigLinks">${src('IAA Digital Library',S.iaa)}${src('IAA featured biblical scrolls',S.featured)}${src('IAA introduction',S.intro)}${src('Library of Congress overview',S.locIntro)}${src('Judaism and Christianity significance',S.locToday)}${src('Parchment DNA study',S.dna)}</div>
      `,'sigScrolls')}

      ${section('08B','Modern Israel, Palestinians and the live present','Historical significance does not end the moral argument; it intensifies responsibility.',`
        <div class="sigModernGrid"><article><h4>Jewish continuity and refuge</h4><p>Modern Israel cannot be understood apart from long Jewish attachment, antisemitism, the Holocaust, displaced persons, migration from Europe and the large departure of Jews from Middle Eastern and North African countries.</p></article><article><h4>Palestinian continuity and dispossession</h4><p>Palestinian society, displacement in 1948, military occupation after 1967, settlement, statelessness and repeated war are not side notes. They belong inside the same modern history.</p></article><article><h4>Current humanitarian record</h4><p>Casualty, displacement, hunger and aid-access figures change. Use live official reporting and date every number.</p></article><article><h4>Current legal record</h4><p>Distinguish allegations, provisional measures, jurisdiction, warrants, trials and final judgments. Legal processes do not all carry the same meaning.</p></article></div>
        <div class="sigLinks">${src('Live OCHA updates',S.current)}${src('Official ICJ case record',S.icj)}${src('Official ICC Palestine record',S.icc)}</div>
        ${verdict('Moral consequence','If Jewish survival and return are providentially significant, covenant calling implies greater accountability to justice—not immunity from it. Palestinian civilians are not obstacles in a prophecy chart; they are human beings bearing God’s image.','gold')}
      `,'sigModern')}

      ${section('09','What is the significance of all this?','The historical and theological implications are larger than “archaeology proves the Bible.”',`
        <div id="sigMeaning" class="sigMeaningGrid">
          <article><span>1</span><h4>History is not closed to providence</h4><p>Human agency, diplomacy, migration and war can be genuine historical causes while still being interpreted by faith as instruments within providence.</p></article>
          <article><span>2</span><h4>Covenant memory can outlast institutions</h4><p>Temple, monarchy and sovereignty can collapse while Scripture, worship, communal practice and hope preserve identity.</p></article>
          <article><span>3</span><h4>Judgment is not necessarily annihilation</h4><p>Israel’s biblical story repeatedly joins severe judgment with preservation of a remnant and renewed possibility.</p></article>
          <article><span>4</span><h4>Evidence invites confidence and humility</h4><p>There are enough external anchors to reject the idea that Israel’s history floats free of the ancient world, and enough gaps to prevent archaeology from becoming coercive proof.</p></article>
          <article><span>5</span><h4>Restoration is morally demanding</h4><p>In the prophets, return to land is never a licence for injustice. Holiness, mercy, protection of the vulnerable and peace remain part of the test.</p></article>
          <article><span>6</span><h4>The end goal is larger than one state</h4><p>The biblical horizon is not endless national conflict but the reign of God, resurrection, reconciliation, justice and healing of the nations.</p></article>
        </div>
        ${verdict('Theological synthesis','Jewish survival and return are historically extraordinary. A secular historian can establish the exceptional convergence of continuity, migration, diplomacy, catastrophe and state-building; a believer may additionally interpret that convergence as providentially luminous. They may reasonably be read as partial or preparatory fulfilment within some theological systems. But they do not make a modern state morally infallible, erase Palestinian history, complete every restoration prophecy, or replace the Bible’s final horizon of repentance, justice, Messiah, peace and renewed creation.','final')}
        <div class="sigCurrentCaution"><strong>Present-day ethical consequence:</strong><p>Awe at Jewish survival should deepen opposition to antisemitism. It should also deepen—rather than weaken—the biblical demand to tell the truth about Palestinian suffering, protect civilians and refuse selective grief.</p>${src('Current humanitarian reporting',S.current)}</div>
      `,'sigMeaning')}
    </div>`;
  }
  window.renderSignificanceHub=renderSignificanceHub;
  window.openSignificancePath=function(){
    const mobile=window.matchMedia('(max-width: 767px)').matches && document.getElementById('mobileExperience') && getComputedStyle(document.getElementById('mobileExperience')).display!=='none';
    if(mobile && typeof window.setMobileWorldRoute==='function'){
      window.setMobileWorldRoute('significance');
      if(typeof window.mobileSetTab==='function') window.mobileSetTab('world');
      return false;
    }
    const dialog=document.getElementById('significanceDialog'), body=document.getElementById('significanceDialogContent');
    if(!dialog||!body)return false;
    body.innerHTML=renderSignificanceHub('desktop');
    document.documentElement.classList.add('significance-open');
    if(typeof dialog.showModal==='function'){if(!dialog.open)dialog.showModal()}else{dialog.setAttribute('open','');dialog.style.display='block'}
    requestAnimationFrame(()=>dialog.querySelector('.significanceClose')?.focus({preventScroll:true}));
    return false;
  };
  window.closeSignificancePath=function(){
    const d=document.getElementById('significanceDialog');
    if(d){if(typeof d.close==='function'&&d.open)d.close();else{d.removeAttribute('open');d.style.display='none'}}
    document.documentElement.classList.remove('significance-open');
    document.getElementById('significanceHeroButton')?.focus({preventScroll:true});
  };
  document.addEventListener('DOMContentLoaded',()=>{
    const d=document.getElementById('significanceDialog');
    d?.addEventListener('close',()=>document.documentElement.classList.remove('significance-open'));
    d?.addEventListener('cancel',()=>document.documentElement.classList.remove('significance-open'));
  });
})();