document.addEventListener("DOMContentLoaded", () => {
  const TRANSLATIONS = {
    en: {
      nav_home: "Home",
      nav_resources: "Resources",
      nav_mentorship: "Mentorship",
      nav_contact: "Contact",
      hero_title: "EduConnect — Bridging Educational Gaps in Rural Goa",
      hero_sub:
        "A responsive digital hub providing curriculum-aligned resources, volunteer mentors, and career guidance for Goa Board students.",
      cta_resources: "Explore Resources",
      cta_mentor: "Join as Mentor",
      problem_heading: "Problem Statement",
      problem_text:
        "In rural parts of Goa, students often face lack of digital access, shortage of trained educators, and limited academic guidance — creating unequal learning outcomes. EduConnect aims to reduce this inequality with accessible tools and local mentorship.",
      features_heading: "Key Features",
      feat_1_title: "Curriculum-Aligned Notes",
      feat_1_text:
        "Free downloadable notes & concise concept videos for Goa Board syllabus.",
      feat_2_title: "Volunteer Mentorship",
      feat_2_text:
        "Connects students to volunteer tutors for doubt clarification.",
    },
    hi: {
      nav_home: "होम",
      nav_resources: "संसाधन",
      nav_mentorship: "परामर्श",
      nav_contact: "संपर्क",
      hero_title: "एडु-कनेक्ट — ग्रामीण गोवा में शिक्षा की खाई को पाटना",
      hero_sub:
        "गोवा बोर्ड के छात्रों के लिए पाठ्यक्रम-संरेखित संसाधन, स्वयंसेवी मेंटर और करियर मार्गदर्शन प्रदान करने वाला उत्तरदायी डिजिटल हब।",
      cta_resources: "संसाधन देखें",
      cta_mentor: "मेंटर के रूप में जुड़ें",
      problem_heading: "समस्या विवरण",
      problem_text:
        "ग्रामीण गोवा में, छात्रों को अक्सर डिजिटल पहुंच की कमी, प्रशिक्षित शिक्षकों की कमी और सीमित शैक्षणिक मार्गदर्शन का सामना करना पड़ता है — जिससे असमान शैक्षणिक परिणाम उत्पन्न होते हैं। एडु-कनेक्ट का उद्देश्य सुलभ उपकरणों और स्थानीय मेंटरशिप के साथ इस असमानता को कम करना है।",
      features_heading: "मुख्य विशेषताएं",
      feat_1_title: "पाठ्यक्रम-संरेखित नोट्स",
      feat_1_text:
        "गोवा बोर्ड के पाठ्यक्रम के लिए निःशुल्क डाउनलोड करने योग्य नोट्स और संक्षिप्त अवधारणा वीडियो।",
      feat_2_title: "स्वयंसेवी मेंटरशिप",
      feat_2_text:
        "छात्रों को संदेह समाधान के लिए स्वयंसेवी ट्यूटर्स से जोड़ता है।",
    },
    ko: {
      nav_home: "होम",
      nav_resources: "संसाधन",
      nav_mentorship: "मार्गदर्शन",
      nav_contact: "संपर्क",
      hero_title: "एडु-कनेक्ट — ग्रामीण गोवाातील शिक्षणातील अंतर कमी करणं",
      hero_sub:
        "गोवा बोर्ड विद्यार्थ्यांसाठी अभ्यासक्रमानुसार साधनं, स्वयंसेवी मार्गदर्शक, आणि करिअर मार्गदर्शन पुरवणारं डिजिटल केंद्र.",
      cta_resources: "संसाधन पाहा",
      cta_mentor: "मार्गदर्शक म्हनून जोडा",
      problem_heading: "समस्या विधान",
      problem_text:
        "ग्रामीण गोव्यात, विद्यार्थ्यांकडे डिजिटल साधनांची कमतरता, प्रशिक्षित शिक्षकांची अभाव, आणि मर्यादित शैक्षणिक मार्गदर्शन असतं — यामुळे शिक्षणात असमानता निर्माण होते. एडु-कनेक्ट ह्या असमानतेला कमी करायचं उद्दिष्ट ठेवतं.",
      features_heading: "मुख्य वैशिष्ट्ये",
      feat_1_title: "अभ्यासक्रमाशी सुसंगत नोट्स",
      feat_1_text:
        "गोवा बोर्डच्या अभ्यासक्रमासाठी मोफत डाउनलोड करण्यायोग्य नोट्स आणि संक्षिप्त व्हिडिओ.",
      feat_2_title: "स्वयंसेवी मार्गदर्शन",
      feat_2_text:
        "विद्यार्थ्यांना शंका निरसनासाठी स्वयंसेवी शिक्षकांशी जोडतो.",
    },
  };

  const langButtons = document.querySelectorAll(".btn-lang");

  function updateLanguage(lang) {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
        el.textContent = TRANSLATIONS[lang][key];
      }
    });

    langButtons.forEach((btn) => btn.setAttribute("aria-pressed", "false"));
    const activeBtn = document.querySelector(`.btn-lang[data-lang="${lang}"]`);
    if (activeBtn) activeBtn.setAttribute("aria-pressed", "true");
  }

  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const selectedLang = btn.getAttribute("data-lang");
      updateLanguage(selectedLang);
    });
  });
});
