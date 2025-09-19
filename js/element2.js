// =======================================
// Element 2 – Philippine Radio Operator Exam
// Enhanced Reviewer Question Collection
// =======================================

const originalQuestions = [
  
  {
    q: "On November 11, 1931, which Philippine law—known as the Radio Control Law—placed all radio operations under government regulation?",
    a: [
      "Act No. 3843",
      "Act No. 3486",
      "Act No. 3846",
      "Act No. 3648"
    ],
    correct: 2,
    exp: "Act No. 3846 gave the government authority to license and control all radio stations and operators."
  },
  {
    q: "According to NTC rules, what is the maximum number of letters allowed in the suffix of a Philippine amateur call sign?",
    a: [
      "Five letters",
      "Four letters",
      "Three letters",
      "Two letters"
    ],
    correct: 2,
    exp: "A call-sign suffix may contain up to three letters for a unique but manageable identifier."
  },
  {
    q: "Which government agency currently regulates and issues amateur radio licenses in the Philippines?",
    a: [
      "Department of Science and Technology",
      "National Telecommunications Commission (NTC)",
      "Department of Information and Communications Technology",
      "Philippine Amateur Radio Association"
    ],
    correct: 1,
    exp: "The NTC is the legal authority for spectrum management and amateur radio licensing."
  },
  {
    q: "What is the main purpose of the amateur radio service as defined by international and national regulations?",
    a: [
      "Commercial broadcasting",
      "Two-way personal and emergency communication",
      "Encrypted government communication",
      "Profit-driven telecommunications"
    ],
    correct: 1,
    exp: "Amateur radio is a non-commercial service for personal skill development and public service."
  },
  {
    q: "When using voice communications, which phonetic alphabet is internationally recognized to spell out call signs clearly?",
    a: [
      "NATO/ICAO phonetic alphabet",
      "Custom local words",
      "International Morse equivalents",
      "American Radio Relay alphabet"
    ],
    correct: 0,
    exp: "The NATO/ICAO phonetics (Alpha, Bravo, Charlie…) ensure clarity worldwide."
  },
  {
    q: "How often must a station identify its call sign during a continuous transmission or conversation?",
    a: [
      "Every 30 minutes",
      "Every 15 minutes",
      "Every 10 minutes",
      "Only at the end of the contact"
    ],
    correct: 2,
    exp: "Identification at least every 10 minutes is required to maintain accountability."
  },
  {
    q: "Which frequency band is commonly allocated internationally for 2-meter amateur operations?",
    a: [
      "28–29.7 MHz",
      "144–148 MHz",
      "430–440 MHz",
      "1.8–2.0 MHz"
    ],
    correct: 1,
    exp: "The 2-meter band falls in the 144–148 MHz VHF range, widely used for local communication."
  },
  {
    q: "What is the typical output power limit for a Philippine Class C (Technician) amateur license unless otherwise authorized?",
    a: [
      "10 watts",
      "50 watts",
      "100 watts",
      "500 watts"
    ],
    correct: 1,
    exp: "Technician class licensees are generally limited to 50 W to minimize interference."
  },
  {
    q: "Why must amateurs avoid transmitting outside their authorized frequency allocations?",
    a: [
      "To conserve battery power",
      "To prevent interference with other services",
      "To improve antenna gain",
      "To avoid static noise"
    ],
    correct: 1,
    exp: "Operating only within assigned bands prevents harmful interference and fulfills legal obligations."
  },
  {
    q: "Which international body coordinates global radio-frequency allocations used by amateur operators?",
    a: [
      "World Amateur Radio League",
      "International Telecommunication Union (ITU)",
      "Asia-Pacific Telecom Council",
      "Global Spectrum Authority"
    ],
    correct: 1,
    exp: "The ITU sets worldwide spectrum allocations and standards for all radio services, including amateur use."
  },
  {
    q: "What is the maximum number of letters allowed in the suffix of an amateur radio call sign issued by the NTC?",
    a: ["5", "4", "3", "2"],
    correct: 2,
    exp: "The Philippine NTC allows a maximum of three letters in the suffix of an amateur radio call sign."
  },
  {
    q: "On November 11, 1931, which law was enacted as the Radio Control Law of the Philippines?",
    a: ["Act No. 3843", "Act No. 3486", "Act No. 3846", "Act No. 3648"],
    correct: 2,
    exp: "Act No. 3846, approved on November 11, 1931, established government control over radio communications."
  },
  {
    q: "Which government agency currently regulates amateur radio licensing in the Philippines?",
    a: ["Department of Information and Communications Technology", "National Telecommunications Commission (NTC)", "Philippine Amateur Radio Association (PARA)", "Department of Science and Technology (DOST)"],
    correct: 1,
    exp: "The NTC is the official government body responsible for regulating amateur radio operations in the Philippines."
  },
  {
    q: "How long is a typical Philippine amateur radio license valid before renewal is required?",
    a: ["Three years", "Five years", "Ten years", "Lifetime"],
    correct: 1,
    exp: "NTC amateur radio licenses are normally valid for five years."
  },
  {
    q: "What prefix is commonly assigned to Philippine amateur radio call signs?",
    a: ["DU/DX", "4I/4O", "JA/JD", "VK"],
    correct: 0,
    exp: "The Philippines uses call sign prefixes DU and DX as assigned by the ITU."
  },
  {
    q: "What is the minimum age requirement to obtain a Philippine amateur radio license?",
    a: ["12 years", "14 years", "16 years", "18 years"],
    correct: 0,
    exp: "Applicants must be at least 12 years old to qualify for the NTC amateur radio exam."
  },
  {
    q: "Which international body allocates and manages global radio frequency spectrum?",
    a: ["International Telecommunication Union (ITU)", "International Amateur Radio Union (IARU)", "World Radio Association (WRA)", "United Nations Radio Commission (UNRC)"],
    correct: 0,
    exp: "The ITU, a UN agency, coordinates global use of the radio-frequency spectrum."
  },
  {
    q: "When operating portable away from your registered station location, how should you modify your call sign?",
    a: ["Add /M for mobile or /P for portable", "Replace the prefix with the new location code", "Use only your suffix", "No change is required"],
    correct: 0,
    exp: "Philippine operators add /M when mobile or /P when operating portable to indicate station status."
  },
  {
    q: "What document must be displayed at the amateur radio station as proof of authority to operate?",
    a: ["Operator Certificate only", "Station License only", "Both Operator Certificate and Station License", "Barangay Clearance"],
    correct: 2,
    exp: "Both the NTC-issued operator certificate and station license should be available for inspection."
  },
  {
    q: "Which ITU region includes the Philippines for frequency allocation purposes?",
    a: ["Region 1", "Region 2", "Region 3", "Special Pacific Region"],
    correct: 2,
    exp: "The Philippines is located in ITU Region 3, which covers Asia and the Pacific."
  },
  {
    q: "Which Philippine law enacted on November 11, 1931 established government regulation of all radio stations?",
    a: ["Act No. 3843", "Act No. 3486", "Act No. 3846", "Act No. 3648"],
    correct: 2,
    exp: "Act No. 3846 is known as the Philippine Radio Control Law."
  },
  {
    q: "The Radio Control Law (Act No. 3846) requires what before any person may operate a radio transmitter?",
    a: [
      "A mayor’s business permit",
      "A station license from the NTC",
      "Only a verbal approval from PARA",
      "No formal requirement"
    ],
    correct: 1,
    exp: "All radio transmitting stations must have a government-issued license."
  },
  {
    q: "Which agency now enforces the Radio Control Law?",
    a: ["Department of Science and Technology", "National Telecommunications Commission", "Philippine Amateur Radio Association", "DICT"],
    correct: 1,
    exp: "The NTC is the successor to the old Radio Control Board."
  },

  // Call-sign rules
  {
    q: "What is the maximum number of letters in the suffix of a Philippine amateur radio call sign?",
    a: ["5", "4", "3", "2"],
    correct: 2,
    exp: "NTC-issued call signs allow up to three suffix letters, e.g., DU1ABC."
  },
  {
    q: "Which call-sign prefixes are assigned to Philippine amateur operators by the ITU?",
    a: ["JA–JZ", "DU and DX", "VK–VL", "K and N"],
    correct: 1,
    exp: "The Philippines uses the DU and DX prefixes."
  },
  {
    q: "When operating mobile, how should a Philippine amateur modify the call sign?",
    a: [ "Add /P", "Add /M", "Change the prefix", "No modification is needed" ],
    correct: 1,
    exp: "Adding “/M” indicates a mobile station; /P is for portable."
  },
  {
    q: "When visiting another call area in the Philippines, how is the call sign updated?",
    a: [
      "Keep the same call sign without change",
      "Add a numeric designator of the visited area after the prefix",
      "Use only the suffix",
      "Request a temporary license"
    ],
    correct: 1,
    exp: "Example: DU1AAA visiting Region 7 becomes DU1AAA/7."
  },

  // Licensing & exams
  {
    q: "Minimum age requirement for taking the NTC amateur radio examination is:",
    a: ["12 years", "14 years", "16 years", "18 years"],
    correct: 0,
    exp: "Applicants must be at least twelve years old."
  },
  {
    q: "A Philippine amateur radio license is normally valid for how many years before renewal?",
    a: ["3", "5", "10", "Lifetime"],
    correct: 1,
    exp: "NTC operator certificates are typically valid for five years."
  },
  {
    q: "Which document must be displayed at the control point of a station?",
    a: ["Only the operator certificate", "Only the station license", "Both the operator certificate and station license", "No display is required"],
    correct: 2,
    exp: "Both licenses should be available for inspection."
  },

  // Operating practices
  {
    q: "Before transmitting, an amateur station must first:",
    a: [
      "Notify the nearest NTC office",
      "Listen to be sure the frequency is clear",
      "Transmit a test tone",
      "Announce intentions on social media"
    ],
    correct: 1,
    exp: "Listening avoids interfering with ongoing communications."
  },
  {
    q: "What is the Philippine ITU Region for frequency allocation?",
    a: ["Region 1", "Region 2", "Region 3", "Region 4"],
    correct: 2,
    exp: "Asia-Pacific, including the Philippines, is ITU Region 3."
  },

  // Additional distinct items
  {
    q: "Which band is primarily used for local FM voice communications among Philippine amateurs?",
    a: ["160 m", "40 m", "2 m (VHF)", "80 m"],
    correct: 2,
    exp: "Most local contacts use 144 MHz (2 m) FM repeaters."
  },
  {
    q: "What is the typical maximum power output allowed for a Class C (Technician) license in the Philippines?",
    a: ["10 watts", "50 watts", "100 watts", "1 kilowatt"],
    correct: 1,
    exp: "Technician Class is generally limited to 50 W PEP."
  },
  {
    q: "Which organization represents Philippine amateurs internationally and liaises with the NTC?",
    a: ["PARA", "IARU", "ITU", "DOJ"],
    correct: 0,
    exp: "The Philippine Amateur Radio Association (PARA) is the national society."
  },
  {
    q: "Which emission type is most common for local VHF repeater contacts?",
    a: ["AM", "FM", "SSB", "CW"],
    correct: 1,
    exp: "Repeaters and handhelds typically use frequency-modulated voice."
  },
  {
    q: "What is required before constructing or modifying a transmitting antenna tower exceeding NTC height limits?",
    a: ["Permit to Purchase", "Antenna Construction Permit", "Zoning Clearance only", "None"],
    correct: 1,
    exp: "NTC must approve tall antenna structures for safety."
  },
  {
    q: "What is the consequence of operating without a valid amateur license?",
    a: ["No consequence", "Verbal warning only", "Administrative fines and/or equipment seizure", "Temporary suspension"],
    correct: 2,
    exp: "Unlicensed operation is punishable by fines and confiscation."
  },
  {
    q: "To operate in another country under reciprocal agreement, a Philippine amateur must carry:",
    a: ["His NTC license and passport", "Only a Philippine ID", "Only a station log", "No documents"],
    correct: 0,
    exp: "Foreign regulators require proof of license and identity."
  },
  {
    q: "For emergency communication, Philippine amateurs may transmit:",
    a: [
      "Only during daylight",
      "Only on HF bands",
      "Any mode and frequency necessary to protect life or property",
      "Only CW"
    ],
    correct: 2,
    exp: "During emergencies you may use any means to render aid."
  },
  {
    q: "What is the internationally recognized distress signal used by voice amateurs?",
    a: ["SOS", "MAYDAY", "CQ HELP", "PAN PAN"],
    correct: 1,
    exp: "‘MAYDAY’ is the standard voice distress call."
  },
  {
    q: "Which log information is most important for verifying a QSO?",
    a: ["Only the frequency", "Date, time, call sign, and signal report", "Weather conditions", "Audio equipment used"],
    correct: 1,
    exp: "These details are required for QSL confirmation."
  },
  {
    q: "What is the normal band plan for the 40-meter amateur band in the Philippines?",
    a: ["7.000-7.300 MHz", "3.500-3.800 MHz", "14.000-14.350 MHz", "50.000-54.000 MHz"],
    correct: 0,
    exp: "7 MHz is the standard 40 m allocation."
  },
  {
    q: "A Philippine amateur call sign DU1XYZ indicates the operator is located in what region?",
    a: ["Luzon", "Visayas", "Mindanao", "Outside the country"],
    correct: 0,
    exp: "The numeral ‘1’ denotes the Luzon call area."
  },
  {
    q: "How often must a station log be updated?",
    a: [
      "Only when operating CW",
      "Each time the station is turned on or off",
      "For every contact or test transmission",
      "Never, it’s optional"
    ],
    correct: 2,
    exp: "Operators should record each contact or transmission session."
  },
  {
    q: "What is the purpose of the QSL card?",
    a: ["To confirm a radio contact", "To request a repeater", "To apply for a license", "To report interference"],
    correct: 0,
    exp: "A QSL card is proof of a completed contact."
  },
  {
    q: "Which emission code denotes single-sideband voice?",
    a: ["A1A", "J3E", "F3E", "A3E"],
    correct: 1,
    exp: "J3E is the ITU designation for SSB telephony."
  },
  {
    q: "When using a repeater, what courtesy tone or pause is recommended?",
    a: [
      "Transmit continuously",
      "Pause briefly between transmissions",
      "Announce ‘Break’ after every sentence",
      "Hold the PTT for 10 seconds after speaking"
    ],
    correct: 1,
    exp: "A pause allows other stations to join or break in for emergencies."
  },
  {
  q: "When operating a handheld VHF radio near sensitive electronic equipment, what is the recommended practice?",
  a: [
    "Reduce transmitter power and keep a safe distance",
    "Increase power to maintain signal strength",
    "Hold the antenna directly against the equipment",
    "No special precautions are necessary"
  ],
  correct: 0,
  exp: "Lower power and adequate separation help prevent RF interference with medical or other sensitive electronics."
},
{
  q: "If an amateur station experiences harmful interference from an industrial source, what is the first action the operator should take?",
  a: [
    "Report immediately to local police",
    "Notify the NTC and attempt to identify the interference source",
    "Shut down the entire station permanently",
    "Increase transmitter power to override the interference"
  ],
  correct: 1,
  exp: "Operators should document and report the issue to the NTC while also investigating the source for possible mitigation."
}
];
