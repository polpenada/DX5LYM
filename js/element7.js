/*  Element 7 – Operating Procedures (Paraphrased Version)
    Correct answers: index 0 = A, 1 = B, 2 = C, 3 = D
*/

const originalQuestions = [
  {
    q: "Which set of conditions most strongly determines the highest frequency that can be refracted by the ionosphere for long-distance communication?",
    a: ["Time of day and season", "Path length and orientation", "Solar activity and ionospheric state", "All of the above"],
    correct: 3,
    exp: "Maximum Usable Frequency depends on all of these factors."
  },
  {
    q: "Why do amateur operators transmit beacon signals?",
    a: ["To mark a net control channel", "To automatically identify repeaters", "To allow others to study signal propagation", "To broadcast news bulletins"],
    correct: 2,
    exp: "Beacon stations are used mainly to check propagation paths."
  },
  {
    q: "If a situation is not specifically addressed in the NTC amateur rules, how must the station be run?",
    a: ["By applying good engineering and recognized amateur practice", "By following IARU guidelines", "By copying general radio customs", "Any of these is acceptable"],
    correct: 0,
    exp: "Regulators expect operation in line with good engineering and amateur standards."
  },
  {
    q: "In Q-codes, what does 'QTH' indicate?",
    a: ["The current local time", "My personal name", "Stop sending", "My location"],
    correct: 3,
    exp: "QTH is the code for a station’s location."
  },
  {
    q: "For daytime skip on 40 m, which antenna style is most effective?",
    a: ["Left-hand circular polarization", "Right-hand circular polarization", "Vertical radiator", "Low horizontal dipole about 1/8–1/4 wavelength high"],
    correct: 3,
    exp: "A low horizontal dipole favors NVIS skip on 40 m daylight paths."
  },
  {
    q: "On a packet frequency, what does it mean when a station is 'monitoring'?",
    a: ["The NTC is observing the channel", "PARA is checking signals", "It receives and acknowledges all addressed traffic", "It displays all traffic without replying"],
    correct: 3,
    exp: "Monitoring simply means receiving and displaying packets without sending responses."
  },
  {
    q: "What is the preferred way to avoid causing interference while tuning a transmitter?",
    a: ["Attach a random wire and tune quickly", "Tune on 40 m first", "Adjust into a dummy load", "Use ladder line instead of coax"],
    correct: 2,
    exp: "Use a dummy load so the signal does not radiate."
  },
  {
    q: "When breaking into an ongoing phone contact, what is the recommended method?",
    a: ["Call 'Break, Break, Break' repeatedly", "State your call sign during a pause", "Say 'QRZ' several times", "Call 'CQ' with the other station’s sign"],
    correct: 1,
    exp: "Give your call sign during a natural break between transmissions."
  },
  {
    q: "What is the proper way to answer a voice CQ call?",
    a: [
      "Say the caller’s sign once, then 'this is' and your sign phonetically",
      "Repeat the caller’s sign five times phonetically, then your sign",
      "Say the caller’s sign three times and your sign five times",
      "Announce the caller’s sign ten times followed by yours twice"
    ],
    correct: 0,
    exp: "Once is enough—caller’s sign, 'this is', then your own sign clearly."
  },
  {
    q: "What is the standard pattern for calling CQ on phone?",
    a: [
      "CQ once, then 'this is', then your sign three times",
      "CQ five times, then 'this is', then your sign once",
      "CQ three times, then 'this is', then your sign three times",
      "CQ ten times, then 'this is', then your sign once"
    ],
    correct: 2,
    exp: "Three CQs and your call sign three times is the accepted practice."
  },
  {
    q: "If your signal is extremely strong and perfectly clear at the other station, what is the courteous action?",
    a: ["Activate the speech processor", "Lower your SWR", "Continue unchanged", "Reduce transmitter power to the minimum needed"],
    correct: 3,
    exp: "Always use only the power necessary for reliable contact."
  },
  {
    q: "In amateur jargon, the abbreviation 'DX' refers to what?",
    a: ["Friendly greetings", "A distant station", "Any station calling CQ", "Permission to transmit"],
    correct: 1,
    exp: "DX means long-distance or overseas contact."
  },
  {
    q: "In Morse procedures, what does 'DE' mean?",
    a: ["'From' or 'this is'", "Directional emissions", "Message received correctly", "Calling any station"],
    correct: 0,
    exp: "DE introduces the caller’s call sign."
  },
  {
    q: "At what speed should you send a Morse CQ?",
    a: ["Only slower than 5 WPM", "Fastest your keyer can send", "Any speed you can copy comfortably", "As fast as you can control the key"],
    correct: 2,
    exp: "Send at a speed both you and the other operator can handle."
  },
  {
    q: "What standing-wave ratio results from feeding a 200 Ω non-reactive load with 50 Ω coax?",
    a: ["1.2 : 1", "1.4 : 1", "2 : 1", "4 : 1"],
    correct: 3,
    exp: "SWR = 200/50 = 4 : 1."
  },
  {
    q: "What does an RST report describe?",
    a: ["Ionospheric conditions", "Transmitter output power", "Signal readability, strength, and tone", "Daily sunspot activity"],
    correct: 2,
    exp: "RST stands for Readability, Strength, and Tone."
  },
  {
    q: "What is a QSL card primarily used for?",
    a: ["A friendly postcard to another amateur", "Notice of rule violation", "Confirmation of a radio contact", "License renewal reminder"],
    correct: 2,
    exp: "A QSL confirms that a contact took place."
  },
  {
    q: "SDR is an acronym for what modern technology?",
    a: ["Special Drawing Rights", "Supply Discrepancy Report", "Software Defined Requirement", "Software Defined Radio"],
    correct: 3,
    exp: "Software Defined Radio implements RF functions in software."
  },
  {
    q: "When is it acceptable to send on-air messages involving personal financial interest?",
    a: ["To announce occasional sales of amateur equipment", "To advertise items under ₱1,000", "Whenever no other communication is available", "Never"],
    correct: 0,
    exp: "Limited equipment-sale announcements are allowed if infrequent."
  },
  {
    q: "Proper Morse CQ procedure is to send:",
    a: [
      "CQ three times, DE, your call once",
      "CQ three times, DE, your call three times",
      "CQ ten times, DE, your call once",
      "CQ repeatedly with no ID"
    ],
    correct: 1,
    exp: "Three CQs followed by DE and your call three times."
  },
  {
    q: "In operating signals, what does the procedural sign 'CQ' mean?",
    a: ["Call at the quarter hour", "Testing a new antenna", "Only the called party should answer", "Calling any station anywhere"],
    correct: 3,
    exp: "'CQ' is the general call inviting any station to respond."
  },
  {
    q: "When replying to a CQ in RTTY, at what speed should you transmit?",
    a: ["Half the speed of the received signal", "Exactly the same speed as the received signal", "Twice the received speed", "Any speed since RTTY auto-adapts"],
    correct: 1,
    exp: "Match the sending rate of the station you are answering."
  },
  {
    q: "How might a nearby CW transmitter affect an audio device or telephone line?",
    a: ["Periodic hum or clicking sounds", "A chirpy CW tone", "Pure audio-frequency CW note", "Severely garbled audio"],
    correct: 0,
    exp: "CW keying can induce rhythmic clicks or hum in nearby electronics."
  },
  {
    q: "Before keying up on a frequency, what is the first precaution?",
    a: ["Listen to ensure the channel is clear", "Check if someone can hear you", "Verify antenna resonance", "Raise SWR intentionally"],
    correct: 0,
    exp: "Always confirm the frequency is not already in use."
  },
  {
    q: "Standard RTTY CQ procedure is to send:",
    a: [
      "CQ three times, DE, your call once",
      "CQ three to six times, DE, your call three times",
      "CQ ten times, DE, your call once",
      "CQ repeatedly without ID"
    ],
    correct: 1,
    exp: "Three to six CQs followed by DE and your call three times is customary."
  },
  {
    q: "As a half-wave dipole is lowered from a quarter-wave above ground, its feed-point impedance will:",
    a: ["Peak at about one-eighth wavelength height", "Gradually rise", "Gradually fall", "Remain unchanged"],
    correct: 2,
    exp: "Lowering the antenna brings the impedance down."
  },
  {
    q: "How can you make your call sign easiest to copy on phone?",
    a: [
      "Use standard international phonetics for each letter",
      "Use any similar-starting words for each letter",
      "Increase your speaking volume",
      "Crank up microphone gain"
    ],
    correct: 0,
    exp: "ITU phonetics avoid confusion and are internationally recognized."
  },
  {
    q: "When an operator calls 'CQ DX', what are they seeking?",
    a: ["Emergency assistance", "A station in Germany specifically", "A Philippine club station", "Any station outside their own country"],
    correct: 3,
    exp: "'DX' means long-distance contacts beyond the caller’s nation."
  },
  {
    q: "What is the role of an IF-shift control on a receiver?",
    a: [
      "Rapidly jump to a new frequency",
      "Fine-tune slightly off frequency without moving the transmit side",
      "Reduce interference from signals very near the desired frequency",
      "Listen on a different frequency while transmitting elsewhere"
    ],
    correct: 2,
    exp: "IF shift helps dodge adjacent-channel interference."
  },
  {
    q: "In Q-codes, what does 'QRS' request?",
    a: ["Report static interference", "Send more slowly", "Send an RST report", "Identify station location"],
    correct: 1,
    exp: "QRS means 'please slow down your Morse sending speed.'"
  },
  {
    q: "Which is a drawback of multiband antennas?",
    a: [
      "Weak harmonic rejection",
      "Need for an antenna tuner",
      "Must be fed with open wire line",
      "Low impedance on every band"
    ],
    correct: 1,
    exp: "They often require a tuner for efficient operation across bands."
  },
  {
    q: "When may an amateur use any means available to aid a station in distress?",
    a: [
      "Only when operating in a scheduled net",
      "Only on approved HF bands",
      "Only while in an emergency net",
      "Anytime an actual emergency exists"
    ],
    correct: 3,
    exp: "Emergency traffic takes precedence at all times."
  },
  {
    q: "For a 100-watt HF mobile rig, what is the best fused power connection?",
    a: [
      "Directly to the alternator/generator with heavy wire",
      "Directly to the battery with heavy wire",
      "Alternator/generator using resistor wire",
      "Battery using resistor wire"
    ],
    correct: 1,
    exp: "A heavy-gauge fused line direct to the battery provides stable voltage."
  },
  {
    q: "Which frequency ranges can a General Class amateur legally use?",
    a: ["28.020 MHz", "28.350 MHz", "29.000 MHz", "All of these choices"],
    correct: 3,
    exp: "All listed frequencies fall within the General Class privileges."
  },
  {
    q: "Which connector is most common for RF up to about 146 MHz?",
    a: ["Octal", "RJ-11", "DB-25", "PL-259"],
    correct: 3,
    exp: "The PL-259 (UHF) connector is standard for VHF/UHF RF cables."
  },
  {
    q: "Feeding a 25-ohm vertical with 50-ohm coax gives an SWR of:",
    a: ["1.4 : 1", "2 : 1", "Not measurable from impedance", "2.5 : 1"],
    correct: 1,
    exp: "SWR = 50/25 = 2 : 1."
  },
  {
    q: "In amateur shorthand, what does '73' convey?",
    a: ["Long distance", "Best regards", "Love and kisses", "Proceed with transmission"],
    correct: 1,
    exp: "73 is the traditional sign-off meaning 'best regards'."
  },
  {
    q: "For a Class B Morse exam, what code speed is required?",
    a: ["5 WPM", "8 WPM", "12 WPM", "No test required"],
    correct: 0,
    exp: "Five words per minute is the standard."
  },
  {
    q: "Which of the following can be used to match impedances at RF?",
    a: [
      "A carefully cut section of transmission line",
      "A Pi-network tuner",
      "A transformer",
      "All of these choices"
    ],
    correct: 3,
    exp: "All listed devices can serve as impedance-matching tools."
  },
  {
    q: "How do you answer a Morse CQ?",
    a: [
      "Send your call sign four times",
      "Send the caller’s sign twice, DE, your sign twice",
      "Send the caller’s sign once, DE, your sign four times",
      "Send your call with name, location and report"
    ],
    correct: 1,
    exp: "Two calls of their sign followed by DE and your sign twice is standard."
  },
  {
    q: "If you hear a distress call on your frequency while in QSO, what is proper?",
    a: [
      "Tell them the frequency is busy",
      "Redirect them to an emergency net channel",
      "Call police or fire yourself",
      "Stop your conversation immediately and assist"
    ],
    correct: 3,
    exp: "Emergency traffic always has priority."
  },
  {
    q: "What does the prosign 'K' indicate?",
    a: [
      "Any station may reply",
      "All received correctly",
      "End of transmission",
      "Only the called station may respond"
    ],
    correct: 0,
    exp: "K invites any station to transmit."
  },
  {
    q: "What is the usual effect of a sudden ionospheric disturbance on HF daytime propagation?",
    a: [
      "Disrupts satellite links more than direct paths",
      "Affects lower HF frequencies most",
      "Enhances all HF propagation",
      "Has no impact because only the night side is affected"
    ],
    correct: 1,
    exp: "Lower-frequency HF signals are most strongly absorbed."
  },
  {
    q: "In packet radio, what does the term 'connected' mean?",
    a: [
      "A telephone link exists between stations",
      "A message has arrived for local delivery",
      "Two stations have established a data link and acknowledge each packet",
      "A digipeater is locked exclusively for them"
    ],
    correct: 2,
    exp: "It means an acknowledged, two-way packet link is active."
  },
  {
    q: "What details belong in a proper station log?",
    a: [
      "Date and time of each contact",
      "Call sign and signal report of the other station",
      "Band or frequency used",
      "All of these"
    ],
    correct: 3,
    exp: "Comprehensive logs include all these items."
  },
  {
    q: "Maximum symbol (baud) rate allowed for RTTY/data on the 10-meter band is:",
    a: ["56 kbaud", "9.6 kbaud", "1200 baud", "300 baud"],
    correct: 3,
    exp: "The limit for 10 m data is 300 baud."
  },
  {
    q: "A digipeater is best described as:",
    a: [
      "A packet station that forwards only marked packets",
      "A packet station that repeats any packet it hears",
      "A voice repeater that digitizes audio",
      "A repeater built entirely with digital chips"
    ],
    correct: 0,
    exp: "Digipeaters relay packets specifically flagged for repeating."
  },
  {
    q: "When giving an RST report, the letters stand for:",
    a: [
      "Recovery, Signal strength, Tempo",
      "Recovery, Signal speed, Tone",
      "Readability, Signal speed, Tempo",
      "Readability, Signal strength, Tone"
    ],
    correct: 3,
    exp: "RST = Readability, Signal Strength, Tone."
  },
  {
    q: "What type of third-party traffic may you relay to another country?",
    a: [
      "Only to another licensed amateur",
      "Any message provided you receive no payment",
      "Any message if it is logged in full",
      "Personal or amateur-related messages and those for emergencies"
    ],
    correct: 3,
    exp: "Only personal, amateur, or emergency/disaster messages are allowed."
  },
  {
    q: "If a station in distress suddenly breaks into your contact, what should be your immediate action?",
    a: [
      "Change to a new frequency",
      "Cease transmitting at once",
      "Acknowledge the call and offer help",
      "Continue because you had the frequency first"
    ],
    correct: 2,
    exp: "Recognize and assist the station in distress without delay."
  }
];

