// Category IDs follow the 44 sections of the user-provided master directory.
const categoryNames = [
'National Government Portals','Identity & Personal Documents','Complaints, Rights & Accountability','Tax, Money & Public Finance','Jobs, Employment & Skills','Education & Student Resources','Health, Hospitals & Medical Services','Agriculture, Farmers & Rural Services','Housing, Ration, Water & Utilities','Transport, Railways & Travel','State Government & Regional Portals','Social Welfare & Accessibility','Environment, Weather & Disaster','Culture, Tourism, Sports & Public Media','Banking & Financial Services','Investing, Insurance & Personal Finance','Shopping & Consumer Services','Telecom, Internet & Cloud','Programming & Web Development','Cybersecurity & Ethical Hacking','Data Science, AI & Research','Community & Knowledge Sharing','Media, Design & Creative Tools','Productivity, Storage & Online Tools','International Government Portals','International Organisations','Maps & Geography','Travel, Hotels & International Transport','News & Fact Checking','Nonprofits & NGOs','Volunteering & Social Impact','Law & Human Rights','Open Data & Statistics','Science, Space & Astronomy','Environment, Wildlife & Climate','Standards & Digital Rights','Accessibility & Inclusive Technology','Food & Nutrition','Public Libraries & Books','Communication & Collaboration','Online Learning & Career Development','Software & Utilities','Design, Fonts & Icons','Domain & Website Testing'];
// Format: category number | name | URL. More entries can be added without changing the UI.
const rawLinks = `
1|National Portal of India|https://www.india.gov.in/
1|Government Services Directory|https://services.india.gov.in/
1|Government Website Directory|https://igod.gov.in/
1|UMANG|https://web.umang.gov.in/
1|DigiLocker|https://www.digilocker.gov.in/
1|ServicePlus|https://serviceonline.gov.in/
1|Digital India|https://www.digitalindia.gov.in/
1|MyGov India|https://www.mygov.in/
1|National e-Governance Division|https://negd.gov.in/
1|National Informatics Centre|https://www.nic.gov.in/
1|Press Information Bureau|https://pib.gov.in/
1|India Code|https://www.indiacode.nic.in/
1|e-Gazette of India|https://egazette.nic.in/
1|Open Government Data|https://data.gov.in/
2|UIDAI Aadhaar|https://uidai.gov.in/
2|My Aadhaar|https://myaadhaar.uidai.gov.in/
2|Passport Seva|https://www.passportindia.gov.in/
2|Voters Services Portal|https://voters.eci.gov.in/
2|Election Commission of India|https://www.eci.gov.in/
2|Income Tax PAN|https://www.incometax.gov.in/
2|Protean PAN Services|https://tinpan.proteantech.in/
2|UTIITSL PAN Services|https://www.pan.utiitsl.com/
2|Civil Registration System|https://crsorgi.gov.in/
2|Jeevan Pramaan|https://jeevanpramaan.gov.in/
2|e-Shram|https://eshram.gov.in/
2|APAAR Student ID|https://apaar.education.gov.in/
3|CPGRAMS Public Grievances|https://pgportal.gov.in/
3|RTI Online|https://rtionline.gov.in/
3|Central Information Commission|https://cic.gov.in/
3|National Human Rights Commission|https://nhrc.nic.in/
3|National Legal Services Authority|https://nalsa.gov.in/
3|eCourts Services|https://ecourts.gov.in/
3|Supreme Court of India|https://www.sci.gov.in/
3|National Consumer Helpline|https://consumerhelpline.gov.in/
3|Cyber Crime Reporting Portal|https://cybercrime.gov.in/
3|CERT-In|https://www.cert-in.org.in/
3|National Commission for Women|https://ncw.nic.in/
4|Income Tax e-Filing|https://www.incometax.gov.in/
4|GST Portal|https://www.gst.gov.in/
4|Reserve Bank of India|https://www.rbi.org.in/
4|SEBI|https://www.sebi.gov.in/
4|Public Financial Management System|https://pfms.nic.in/
4|BharatKosh|https://bharatkosh.gov.in/
4|Government e-Marketplace|https://gem.gov.in/
4|NPCI|https://www.npci.org.in/
4|Pradhan Mantri Jan Dhan Yojana|https://pmjdy.gov.in/
5|National Career Service|https://www.ncs.gov.in/
5|UPSC|https://upsc.gov.in/
5|Staff Selection Commission|https://ssc.gov.in/
5|Railway Recruitment Boards|https://www.rrbcdg.gov.in/
5|IBPS|https://www.ibps.in/
5|National Testing Agency|https://nta.ac.in/
5|Employment News|https://employmentnews.gov.in/
5|Skill India Digital Hub|https://www.skillindiadigital.gov.in/
5|Apprenticeship India|https://www.apprenticeshipindia.gov.in/
5|AICTE Internship Portal|https://internship.aicte-india.org/
6|Ministry of Education|https://www.education.gov.in/
6|CBSE|https://www.cbse.gov.in/
6|NCERT|https://ncert.nic.in/
6|UGC|https://www.ugc.gov.in/
6|National Digital Library of India|https://ndl.iitkgp.ac.in/
6|SWAYAM|https://swayam.gov.in/
6|National Scholarship Portal|https://scholarships.gov.in/
6|IGNOU|https://www.ignou.ac.in/
6|NTA Exams|https://exams.nta.ac.in/
6|JEE Main|https://jeemain.nta.nic.in/
7|Ministry of Health|https://mohfw.gov.in/
7|National Health Authority|https://nha.gov.in/
7|National Health Mission|https://nhm.gov.in/
7|ICMR|https://www.icmr.gov.in/
7|AIIMS New Delhi|https://www.aiims.edu/
7|eSanjeevani Telemedicine|https://esanjeevani.mohfw.gov.in/
7|e-RaktKosh|https://eraktkosh.mohfw.gov.in/
7|Ayushman Bharat Digital Mission|https://abdm.gov.in/
7|World Health Organization|https://www.who.int/
8|Ministry of Agriculture|https://agriwelfare.gov.in/
8|PM-KISAN|https://pmkisan.gov.in/
8|e-NAM|https://enam.gov.in/
8|PM Fasal Bima Yojana|https://pmfby.gov.in/
8|Indian Council of Agricultural Research|https://icar.org.in/
8|Soil Health Card|https://soilhealth.dac.gov.in/
8|MGNREGA|https://nrega.nic.in/
9|Ministry of Housing|https://mohua.gov.in/
9|PM Awas Yojana Urban|https://pmay-urban.gov.in/
9|PM Awas Yojana Gramin|https://pmayg.nic.in/
9|Jal Jeevan Mission|https://jaljeevanmission.gov.in/
9|Ministry of Power|https://powermin.gov.in/
9|National Food Security Portal|https://nfsa.gov.in/
10|Indian Railways|https://indianrailways.gov.in/
10|IRCTC Train Booking|https://www.irctc.co.in/
10|National Train Enquiry System|https://enquiry.indianrail.gov.in/
10|Rail Madad|https://railmadad.indianrailways.gov.in/
10|Parivahan|https://parivahan.gov.in/
10|VAHAN|https://vahan.parivahan.gov.in/
10|SARATHI|https://sarathi.parivahan.gov.in/
10|Incredible India|https://www.incredibleindia.gov.in/
10|India Post|https://www.indiapost.gov.in/
11|Uttar Pradesh Government|https://up.gov.in/
11|UP e-District|https://edistrict.up.gov.in/
11|UP Police|https://uppolice.gov.in/
11|UP Scholarship|https://scholarship.up.gov.in/
11|Uttarakhand Government|https://uk.gov.in/
11|Delhi Government|https://delhi.gov.in/
11|Rajasthan Government|https://rajasthan.gov.in/
11|Maharashtra Government|https://maharashtra.gov.in/
11|Tamil Nadu Government|https://www.tn.gov.in/
11|West Bengal Government|https://wb.gov.in/
12|Ministry of Women and Child Development|https://wcd.gov.in/
12|Mission Shakti|https://missionshakti.wcd.gov.in/
12|Unique Disability ID|https://www.swavlambancard.gov.in/
12|EPFO|https://www.epfindia.gov.in/
12|ESIC|https://www.esic.gov.in/
12|myScheme|https://www.myscheme.gov.in/
13|India Meteorological Department|https://mausam.imd.gov.in/
13|Central Pollution Control Board|https://cpcb.nic.in/
13|National Disaster Management Authority|https://ndma.gov.in/
13|National Disaster Response Force|https://ndrf.gov.in/
13|National Centre for Seismology|https://seismo.gov.in/
14|Ministry of Culture|https://indiaculture.gov.in/
14|Archaeological Survey of India|https://asi.nic.in/
14|National Archives of India|https://nationalarchives.nic.in/
14|Sports Authority of India|https://sportsauthorityofindia.nic.in/
14|BCCI|https://www.bcci.tv/
14|Prasar Bharati|https://prasarbharati.gov.in/
15|State Bank of India|https://sbi.co.in/
15|SBI Internet Banking|https://onlinesbi.sbi/
15|Punjab National Bank|https://pnbindia.in/
15|Bank of Baroda|https://www.bankofbaroda.in/
15|HDFC Bank|https://www.hdfcbank.com/
15|ICICI Bank|https://www.icicibank.com/
15|Axis Bank|https://www.axisbank.com/
15|Paytm|https://paytm.com/
15|PhonePe|https://www.phonepe.com/
16|National Stock Exchange|https://www.nseindia.com/
16|Bombay Stock Exchange|https://www.bseindia.com/
16|LIC India|https://licindia.in/
16|CIBIL|https://www.cibil.com/
16|Groww|https://groww.in/
16|Zerodha|https://zerodha.com/
17|Amazon India|https://www.amazon.in/
17|Flipkart|https://www.flipkart.com/
17|Myntra|https://www.myntra.com/
17|Blinkit|https://blinkit.com/
17|Zepto|https://www.zepto.com/
17|Meesho|https://www.meesho.com/
17|IndiaMART|https://www.indiamart.com/
17|Practo|https://www.practo.com/
18|Department of Telecommunications|https://dot.gov.in/
18|TRAI|https://www.trai.gov.in/
18|BSNL|https://www.bsnl.co.in/
18|Reliance Jio|https://www.jio.com/
18|Airtel|https://www.airtel.in/
18|Cloudflare|https://www.cloudflare.com/
18|Google Cloud|https://cloud.google.com/
18|AWS|https://aws.amazon.com/
18|Vercel|https://vercel.com/
18|Netlify|https://www.netlify.com/
18|Firebase|https://firebase.google.com/
18|Supabase|https://supabase.com/
19|GitHub|https://github.com/
19|GitLab|https://gitlab.com/
19|Stack Overflow|https://stackoverflow.com/
19|MDN Web Docs|https://developer.mozilla.org/
19|W3Schools|https://www.w3schools.com/
19|freeCodeCamp|https://www.freecodecamp.org/
19|CodePen|https://codepen.io/
19|Replit|https://replit.com/
19|LeetCode|https://leetcode.com/
19|GeeksforGeeks|https://www.geeksforgeeks.org/
20|OWASP|https://owasp.org/
20|PortSwigger Web Security Academy|https://portswigger.net/web-security
20|TryHackMe|https://tryhackme.com/
20|Hack The Box|https://www.hackthebox.com/
20|picoCTF|https://picoctf.org/
20|MITRE ATT&CK|https://attack.mitre.org/
20|Kali Linux|https://www.kali.org/
20|Wireshark|https://www.wireshark.org/
20|VirusTotal|https://www.virustotal.com/
20|Have I Been Pwned|https://haveibeenpwned.com/
21|Google AI Studio|https://aistudio.google.com/
21|Google Colab|https://colab.research.google.com/
21|Kaggle|https://www.kaggle.com/
21|Hugging Face|https://huggingface.co/
21|OpenAI|https://openai.com/
21|TensorFlow|https://www.tensorflow.org/
21|PyTorch|https://pytorch.org/
21|Google Scholar|https://scholar.google.com/
21|arXiv|https://arxiv.org/
21|PubMed|https://pubmed.ncbi.nlm.nih.gov/
22|Reddit|https://www.reddit.com/
22|Quora|https://www.quora.com/
22|Stack Exchange|https://stackexchange.com/
22|Hacker News|https://news.ycombinator.com/
22|DEV Community|https://dev.to/
22|Product Hunt|https://www.producthunt.com/
22|Arduino Forum|https://forum.arduino.cc/
22|Discord|https://discord.com/
23|Canva|https://www.canva.com/
23|Adobe|https://www.adobe.com/
23|Figma|https://www.figma.com/
23|Photopea|https://www.photopea.com/
23|Blender|https://www.blender.org/
23|OBS Studio|https://obsproject.com/
23|YouTube|https://www.youtube.com/
23|Internet Archive|https://archive.org/
23|Unsplash|https://unsplash.com/
24|Google Drive|https://drive.google.com/
24|Google Docs|https://docs.google.com/
24|Microsoft 365|https://www.microsoft.com/microsoft-365
24|Dropbox|https://www.dropbox.com/
24|Notion|https://www.notion.so/
24|Trello|https://trello.com/
24|Bitwarden|https://bitwarden.com/
24|Firefox|https://www.mozilla.org/firefox/
24|Google Search|https://www.google.com/
25|USA.gov|https://www.usa.gov/
25|GOV.UK|https://www.gov.uk/
25|Government of Canada|https://www.canada.ca/
25|Singapore Government|https://www.gov.sg/
25|Government of Japan|https://www.japan.go.jp/
25|UAE Government|https://u.ae/
26|United Nations|https://www.un.org/
26|World Health Organization|https://www.who.int/
26|UNESCO|https://www.unesco.org/
26|UNICEF|https://www.unicef.org/
26|World Bank|https://www.worldbank.org/
26|International Monetary Fund|https://www.imf.org/
27|Google Maps|https://maps.google.com/
27|OpenStreetMap|https://www.openstreetmap.org/
27|Apple Maps|https://maps.apple.com/
27|Google Earth|https://earth.google.com/
27|NASA Worldview|https://worldview.earthdata.nasa.gov/
28|Booking.com|https://www.booking.com/
28|Agoda|https://www.agoda.com/
28|Airbnb|https://www.airbnb.com/
28|MakeMyTrip|https://www.makemytrip.com/
28|Skyscanner|https://www.skyscanner.net/
28|Uber|https://www.uber.com/
29|Reuters|https://www.reuters.com/
29|Associated Press|https://apnews.com/
29|BBC News|https://www.bbc.com/news
29|The Hindu|https://www.thehindu.com/
29|The Indian Express|https://indianexpress.com/
29|Alt News|https://www.altnews.in/
30|Indian Red Cross Society|https://indianredcross.org/
30|UNICEF India|https://www.unicef.org/india/
30|Goonj|https://goonj.org/
30|Pratham|https://www.pratham.org/
30|Akshaya Patra Foundation|https://www.akshayapatra.org/
30|CRY|https://www.cry.org/
31|UN Volunteers|https://www.unv.org/
31|VolunteerMatch|https://www.volunteermatch.org/
31|GlobalGiving|https://www.globalgiving.org/
31|GiveIndia|https://give.do/
31|Robin Hood Army|https://robinhoodarmy.com/
31|Doctors Without Borders|https://www.msf.org/
32|Indian Kanoon|https://indiankanoon.org/
32|Bar Council of India|https://www.barcouncilofindia.org/
32|Cornell Legal Information Institute|https://www.law.cornell.edu/
32|Electronic Frontier Foundation|https://www.eff.org/
32|Transparency International|https://www.transparency.org/
33|World Bank Open Data|https://data.worldbank.org/
33|UN Data|https://data.un.org/
33|Our World in Data|https://ourworldindata.org/
33|Gapminder|https://www.gapminder.org/
33|FAOSTAT|https://www.fao.org/faostat/
34|NASA|https://www.nasa.gov/
34|ISRO|https://www.isro.gov.in/
34|European Space Agency|https://www.esa.int/
34|James Webb Space Telescope|https://science.nasa.gov/mission/webb/
34|CERN|https://home.cern/
34|Nature|https://www.nature.com/
35|World Wildlife Fund|https://www.worldwildlife.org/
35|The Nature Conservancy|https://www.nature.org/
35|Global Forest Watch|https://www.globalforestwatch.org/
35|IPCC|https://www.ipcc.ch/
35|UN Climate Change|https://unfccc.int/
36|ISO|https://www.iso.org/
36|IEEE|https://www.ieee.org/
36|W3C|https://www.w3.org/
36|Creative Commons|https://creativecommons.org/
36|Tor Project|https://www.torproject.org/
37|W3C Web Accessibility Initiative|https://www.w3.org/WAI/
37|WebAIM|https://webaim.org/
37|NV Access|https://www.nvaccess.org/
37|Be My Eyes|https://www.bemyeyes.com/
37|Microsoft Accessibility|https://www.microsoft.com/accessibility
38|FSSAI|https://www.fssai.gov.in/
38|Food and Agriculture Organization|https://www.fao.org/
38|USDA FoodData Central|https://fdc.nal.usda.gov/
38|Nutrition.gov|https://www.nutrition.gov/
38|Open Food Facts|https://world.openfoodfacts.org/
39|Project Gutenberg|https://www.gutenberg.org/
39|Open Library|https://openlibrary.org/
39|Internet Archive|https://archive.org/
39|WorldCat|https://search.worldcat.org/
39|National Library of India|https://nationallibrary.gov.in/
39|National Digital Library of India|https://ndl.iitkgp.ac.in/
40|Gmail|https://mail.google.com/
40|Outlook|https://outlook.live.com/
40|Proton Mail|https://proton.me/mail
40|Zoom|https://zoom.us/
40|Google Meet|https://meet.google.com/
40|Microsoft Teams|https://www.microsoft.com/microsoft-teams/
40|Signal|https://signal.org/
40|WhatsApp|https://www.whatsapp.com/
41|Khan Academy|https://www.khanacademy.org/
41|MIT OpenCourseWare|https://ocw.mit.edu/
41|Harvard Online|https://pll.harvard.edu/
41|Cisco Networking Academy|https://www.netacad.com/
41|Microsoft Learn|https://learn.microsoft.com/
41|GitHub Skills|https://skills.github.com/
42|LibreOffice|https://www.libreoffice.org/
42|ONLYOFFICE|https://www.onlyoffice.com/
42|Nextcloud|https://nextcloud.com/
42|FileZilla|https://filezilla-project.org/
42|VLC Media Player|https://www.videolan.org/vlc/
42|FFmpeg|https://ffmpeg.org/
43|Google Fonts|https://fonts.google.com/
43|Lucide Icons|https://lucide.dev/
43|Font Awesome|https://fontawesome.com/
43|Iconify|https://iconify.design/
43|LottieFiles|https://lottiefiles.com/
43|Coolors|https://coolors.co/
44|ICANN Lookup|https://lookup.icann.org/
44|DNS Checker|https://dnschecker.org/
44|SSL Labs Server Test|https://www.ssllabs.com/ssltest/
44|Google PageSpeed Insights|https://pagespeed.web.dev/
44|W3C Markup Validator|https://validator.w3.org/
44|Can I Use|https://caniuse.com/
44|CyberChef|https://gchq.github.io/CyberChef/
44|Draw.io|https://www.drawio.com/

1|Government Data Portal|https://www.data.gov.in/
2|National Academic Depository|https://nad.gov.in/
2|National Population Register|https://censusindia.gov.in/
3|Department of Justice|https://doj.gov.in/
3|Central Vigilance Commission|https://cvc.gov.in/
3|National Commission for Protection of Child Rights|https://ncpcr.gov.in/
3|National Commission for Scheduled Castes|https://ncsc.nic.in/
3|National Commission for Scheduled Tribes|https://ncst.nic.in/
3|Indian Cyber Crime Coordination Centre|https://i4c.mha.gov.in/
4|Central Board of Indirect Taxes and Customs|https://www.cbic.gov.in/
4|Insurance Regulatory Authority|https://irdai.gov.in/
4|Pension Fund Regulatory Authority|https://www.pfrda.org.in/
4|National Pension System|https://www.npscra.nsdl.co.in/
4|Financial Services Department|https://financialservices.gov.in/
5|Directorate General of Training|https://dgt.gov.in/
5|National Institute of Electronics and Information Technology|https://www.nielit.gov.in/
6|National Council for Teacher Education|https://ncte.gov.in/
6|All India Survey on Higher Education|https://aishe.gov.in/
6|National Board of Accreditation|https://www.nbaind.org/
6|SWAYAM Prabha|https://swayamprabha.gov.in/
6|Shodhganga|https://shodhganga.inflibnet.ac.in/
6|INFLIBNET|https://inflibnet.ac.in/
6|e-ShodhSindhu|https://ess.inflibnet.ac.in/
7|National Medical Commission|https://www.nmc.org.in/
7|Indian Nursing Council|https://indiannursingcouncil.org/
7|NIMHANS|https://nimhans.ac.in/
7|PGIMER|https://pgimer.edu.in/
7|JIPMER|https://jipmer.edu.in/
7|National AIDS Control Organisation|https://naco.gov.in/
7|National Centre for Disease Control|https://ncdc.mohfw.gov.in/
7|Ministry of AYUSH|https://ayush.gov.in/
7|National Organ and Tissue Transplant Organisation|https://notto.mohfw.gov.in/
7|MedlinePlus|https://medlineplus.gov/
8|Agriculture Infrastructure Fund|https://agriinfra.dac.gov.in/
8|Indian Agricultural Research Institute|https://www.iari.res.in/
8|National Horticulture Board|https://nhb.gov.in/
8|Department of Animal Husbandry and Dairying|https://dahd.gov.in/
8|Department of Fisheries|https://dof.gov.in/
8|National Dairy Development Board|https://www.nddb.coop/
8|NABARD|https://www.nabard.org/
8|National Seeds Corporation|https://www.indiaseeds.com/
9|Swachh Bharat Mission Urban|https://sbmurban.org/
9|Swachh Bharat Mission Gramin|https://swachhbharatmission.ddws.gov.in/
9|Central Ground Water Board|https://cgwb.gov.in/
9|Central Water Commission|https://cwc.gov.in/
9|Bureau of Energy Efficiency|https://beeindia.gov.in/
9|Ministry of New and Renewable Energy|https://mnre.gov.in/
9|Indian Oil|https://iocl.com/
9|Bharat Petroleum|https://www.bharatpetroleum.in/
9|Hindustan Petroleum|https://www.hindustanpetroleum.com/
10|Dedicated Freight Corridor Corporation|https://dfccil.com/
10|National Highways Authority of India|https://nhai.gov.in/
10|FASTag Information|https://ihmcl.co.in/
10|Directorate General of Civil Aviation|https://www.dgca.gov.in/
10|Airports Authority of India|https://www.aai.aero/
10|Air India|https://www.airindia.com/
10|IndiGo|https://www.goindigo.in/
10|IRCTC Tourism|https://www.irctctourism.com/
11|Uttar Pradesh Public Service Commission|https://uppsc.up.nic.in/
11|Haryana Government|https://haryana.gov.in/
11|Punjab Government|https://punjab.gov.in/
11|Madhya Pradesh Government|https://mp.gov.in/
11|Bihar Government|https://state.bihar.gov.in/
11|Jharkhand Government|https://jharkhand.gov.in/
11|Gujarat Government|https://gujaratindia.gov.in/
11|Goa Government|https://www.goa.gov.in/
11|Karnataka Government|https://karnataka.gov.in/
11|Kerala Government|https://kerala.gov.in/
11|Telangana Government|https://www.telangana.gov.in/
11|Andhra Pradesh Government|https://www.ap.gov.in/
11|Odisha Government|https://odisha.gov.in/
11|Assam Government|https://assam.gov.in/
12|Ministry of Social Justice and Empowerment|https://socialjustice.gov.in/
12|National Social Assistance Programme|https://nsap.nic.in/
12|Pensioners Portal|https://pensionersportal.gov.in/
12|Ministry of Labour and Employment|https://labour.gov.in/
13|National Green Tribunal|https://greentribunal.gov.in/
13|Forest Survey of India|https://fsi.nic.in/
13|National Biodiversity Authority|https://nbaindia.org/
13|International Union for Conservation of Nature|https://www.iucn.org/
14|Sahitya Akademi|https://sahitya-akademi.gov.in/
14|Central Board of Film Certification|https://cbfcindia.gov.in/
15|Canara Bank|https://canarabank.com/
15|Union Bank of India|https://www.unionbankofindia.bank.in/
15|Bank of India|https://bankofindia.co.in/
15|Indian Bank|https://indianbank.in/
15|Central Bank of India|https://centralbankofindia.co.in/
15|Indian Overseas Bank|https://www.iob.in/
15|UCO Bank|https://www.ucobank.com/
15|IDFC FIRST Bank|https://www.idfcfirstbank.com/
15|IndusInd Bank|https://www.indusind.com/
15|Yes Bank|https://www.yesbank.in/
15|Federal Bank|https://www.federalbank.co.in/
15|India Post Payments Bank|https://www.ippbonline.com/
16|National Securities Depository|https://nsdl.co.in/
16|Central Depository Services|https://www.cdslindia.com/
16|Association of Mutual Funds in India|https://www.amfiindia.com/
16|Star Health Insurance|https://www.starhealth.in/
16|HDFC Life|https://www.hdfclife.com/
16|SBI Life|https://www.sbilife.co.in/
16|Policybazaar|https://www.policybazaar.com/
16|Upstox|https://upstox.com/
17|Tata CLiQ|https://www.tatacliq.com/
17|Reliance Digital|https://www.reliancedigital.in/
17|Croma|https://www.croma.com/
17|JioMart|https://www.jiomart.com/
17|BigBasket|https://www.bigbasket.com/
17|Swiggy Instamart|https://www.swiggy.com/instamart
17|Nykaa|https://www.nykaa.com/
17|FirstCry|https://www.firstcry.com/
17|Urban Company|https://www.urbancompany.com/
17|Justdial|https://www.justdial.com/
17|PharmEasy|https://pharmeasy.in/
17|OLX India|https://www.olx.in/
18|Vi|https://www.myvi.in/
18|Microsoft Azure|https://azure.microsoft.com/
18|DigitalOcean|https://www.digitalocean.com/
18|MongoDB|https://www.mongodb.com/
18|Docker|https://www.docker.com/
19|Bitbucket|https://bitbucket.org/
19|The Odin Project|https://www.theodinproject.com/
19|Codecademy|https://www.codecademy.com/
19|Coursera|https://www.coursera.org/
19|edX|https://www.edx.org/
19|Udemy|https://www.udemy.com/
19|HackerRank|https://www.hackerrank.com/
19|Codeforces|https://codeforces.com/
19|CodeChef|https://www.codechef.com/
19|Python Documentation|https://docs.python.org/3/
20|OWASP Web Security Testing Guide|https://owasp.org/www-project-web-security-testing-guide/
20|OverTheWire|https://overthewire.org/wargames/
20|National Vulnerability Database|https://nvd.nist.gov/
20|Nmap|https://nmap.org/
20|Burp Suite|https://portswigger.net/burp
21|Semantic Scholar|https://www.semanticscholar.org/
21|Europe PMC|https://europepmc.org/
21|Crossref|https://www.crossref.org/
21|OpenAlex|https://openalex.org/
21|Directory of Open Access Journals|https://doaj.org/
21|CORE Research Papers|https://core.ac.uk/
22|Super User|https://superuser.com/
22|Ask Ubuntu|https://askubuntu.com/
22|Hashnode|https://hashnode.com/
22|XDA Developers|https://xdaforums.com/
23|Adobe Express|https://www.adobe.com/express/
23|Penpot|https://penpot.app/
23|GIMP|https://www.gimp.org/
23|Inkscape|https://inkscape.org/
23|Krita|https://krita.org/
23|DaVinci Resolve|https://www.blackmagicdesign.com/products/davinciresolve
23|Audacity|https://www.audacityteam.org/
23|Spotify|https://open.spotify.com/
23|Pexels|https://www.pexels.com/
24|Google Sheets|https://sheets.google.com/
24|Google Slides|https://slides.google.com/
24|Asana|https://asana.com/
24|Todoist|https://todoist.com/
24|Obsidian|https://obsidian.md/
24|Proton Mail|https://proton.me/mail
24|Brave Browser|https://brave.com/
24|DuckDuckGo|https://duckduckgo.com/
24|Wayback Machine|https://web.archive.org/
25|Australian Government|https://www.australia.gov.au/
25|New Zealand Government|https://www.govt.nz/
25|Government of France|https://www.service-public.fr/
25|German Government|https://www.bundesregierung.de/
25|Government of Ireland|https://www.gov.ie/
25|Government of South Africa|https://www.gov.za/
25|Government of Brazil|https://www.gov.br/
26|World Trade Organization|https://www.wto.org/
26|International Labour Organization|https://www.ilo.org/
26|Food and Agriculture Organization|https://www.fao.org/
26|UN Women|https://www.unwomen.org/
27|Bing Maps|https://www.bing.com/maps
27|Mapbox|https://www.mapbox.com/
27|NASA Earth Observatory|https://earthobservatory.nasa.gov/
27|Copernicus Data Space|https://dataspace.copernicus.eu/
28|Expedia|https://www.expedia.com/
28|Tripadvisor|https://www.tripadvisor.com/
28|Cleartrip|https://www.cleartrip.com/
28|Rome2Rio|https://www.rome2rio.com/
29|Deutsche Welle|https://www.dw.com/
29|France 24|https://www.france24.com/
29|The Guardian|https://www.theguardian.com/
29|Hindustan Times|https://www.hindustantimes.com/
29|Times of India|https://timesofindia.indiatimes.com/
29|BOOM FactCheck|https://www.boomlive.in/
30|Teach For India|https://teachforindia.org/
30|Smile Foundation|https://www.smilefoundationindia.org/
30|HelpAge India|https://www.helpageindia.org/
30|WWF India|https://www.wwfindia.org/
31|Idealist|https://www.idealist.org/
31|Charity Navigator|https://www.charitynavigator.org/
31|Donatekart|https://www.donatekart.com/
31|Amnesty International|https://www.amnesty.org/
31|Human Rights Watch|https://www.hrw.org/
32|FindLaw|https://www.findlaw.com/
32|Justia|https://www.justia.com/
32|CourtListener|https://www.courtlistener.com/
33|OECD Data|https://data.oecd.org/
33|Eurostat|https://ec.europa.eu/eurostat
33|US Census Bureau|https://www.census.gov/data.html
33|FRED|https://fred.stlouisfed.org/
33|Data Commons|https://datacommons.org/
34|Hubble Space Telescope|https://science.nasa.gov/mission/hubble/
34|NASA APOD|https://apod.nasa.gov/
34|NASA JPL|https://www.jpl.nasa.gov/
34|National Geographic|https://www.nationalgeographic.com/
35|Conservation International|https://www.conservation.org/
35|Climate Action Tracker|https://climateactiontracker.org/
35|NOAA|https://www.noaa.gov/
35|World Resources Institute|https://www.wri.org/
36|IEC|https://www.iec.ch/
36|IETF|https://www.ietf.org/
36|ICANN|https://www.icann.org/
36|WHATWG|https://whatwg.org/
36|Unicode Consortium|https://www.unicode.org/
36|Open Source Initiative|https://opensource.org/
37|A11Y Project|https://www.a11yproject.com/
37|Seeing AI|https://www.seeingai.com/
37|AbilityNet|https://abilitynet.org.uk/
37|Apple Accessibility|https://www.apple.com/accessibility/
38|Harvard Nutrition Source|https://nutritionsource.hsph.harvard.edu/
38|World Central Kitchen|https://wck.org/
38|Feeding America|https://www.feedingamerica.org/
39|Library of Congress|https://www.loc.gov/
39|British Library|https://www.bl.uk/
39|Europeana|https://www.europeana.eu/
39|Wikibooks|https://www.wikibooks.org/
39|Britannica|https://www.britannica.com/
40|Yahoo Mail|https://mail.yahoo.com/
40|Zoho Mail|https://www.zoho.com/mail/
40|Jitsi Meet|https://meet.jit.si/
40|Telegram|https://telegram.org/
41|OpenLearn|https://www.open.edu/openlearn/
41|FutureLearn|https://www.futurelearn.com/
41|Alison|https://alison.com/
41|Saylor Academy|https://www.saylor.org/
41|AWS Skill Builder|https://skillbuilder.aws/
41|IBM SkillsBuild|https://skillsbuild.org/
42|Apache OpenOffice|https://www.openoffice.org/
42|CryptPad|https://cryptpad.org/
42|Syncthing|https://syncthing.net/
42|7-Zip|https://www.7-zip.org/
42|HandBrake|https://handbrake.fr/
42|GNU Project|https://www.gnu.org/
43|Font Squirrel|https://www.fontsquirrel.com/
43|Fontshare|https://www.fontshare.com/
43|Tabler Icons|https://tabler.io/icons
43|Heroicons|https://heroicons.com/
43|Material Design|https://m3.material.io/
43|SVG Repo|https://www.svgrepo.com/
43|Adobe Color|https://color.adobe.com/
44|DNSViz|https://dnsviz.net/
44|MXToolbox|https://mxtoolbox.com/
44|Mozilla Observatory|https://observatory.mozilla.org/
44|WebPageTest|https://www.webpagetest.org/
44|Regex101|https://regex101.com/
44|Excalidraw|https://excalidraw.com/
44|Mermaid|https://mermaid.js.org/
`; 
const directory = rawLinks.trim().split('\n').map(line=>{const [id,name,url]=line.split('|');return {id:Number(id),name,url,category:categoryNames[Number(id)-1]}}).filter(x=>x.name&&/^https:\/\//.test(x.url));
