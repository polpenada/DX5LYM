// js/element4_questions.js
const originalQuestions = [
  { q: "What reading on an SWR meter indicates a perfect impedance match?",
    a: ["2 to 1","1 to 3","1 to 1","10 to 1"],
    correct: 2,
    exp: "A 1:1 SWR shows the feed line and antenna are perfectly matched." },

  { q: "When measuring resistance with an ohmmeter, you must first:",
    a: ["Apply correct voltages","Be sure the circuit is not powered",
        "Ground the circuit","Set the operating frequency"],
    correct: 1,
    exp: "Power must be disconnected or the meter can be damaged." },

  { q: "What is the minimum safe distance from a power line when installing an antenna?",
    a: ["Half your property width",
        "Equal to the line height",
        "Half-wavelength of the frequency",
        "Far enough that if it falls it stays 10 ft from the wires"],
    correct: 3,
    exp: "Always allow at least 10 ft clearance even if the antenna drops." },

  { q: "Which filter is first used to reduce TV interference from a nearby 2 m transmitter?",
    a: ["Low-pass","High-pass","Band-pass","Band-reject"],
    correct: 0,
    exp: "A low-pass filter on the transmitter suppresses harmonic signals." },

  { q: "A high-pitched whine that changes with engine speed in a mobile rig is usually caused by:",
    a: ["Ignition system","Alternator","Fuel pump","ABS controller"],
    correct: 1,
    exp: "Alternator whine varies with RPM and is common in mobile installs." },

  { q: "If a single-sideband voice pitch sounds too high or low, adjust the:",
    a: ["AGC","Bandwidth","Tone squelch","Receiver RIT/clarifier"],
    correct: 3,
    exp: "The RIT or clarifier shifts the receive frequency slightly." },

  { q: "A common use of coaxial cable is to:",
    a: ["Carry DC vehicle power","Carry RF from radio to antenna",
        "Tie down masts","Link a TNC to a computer"],
    correct: 1,
    exp: "Coaxial cable is the standard RF feed line." },

  { q: "Which instrument measures electric current?",
    a: ["Ohmmeter","Wave-meter","Voltmeter","Ammeter"],
    correct: 3,
    exp: "An ammeter is inserted in series to measure current." },

  { q: "What can help you copy signals in a noisy location instead of a speaker?",
    a: ["Video display","Low-pass filter","Headphones","Boom microphone"],
    correct: 2,
    exp: "Headphones isolate the signal from room noise." },

  { q: "Where should a mobile transceiver's negative power lead connect?",
    a: ["Battery or engine-block ground strap",
        "Antenna mount","Any metal part","Mounting bracket"],
    correct: 0,
    exp: "Connecting directly to the battery or engine ground avoids noise." },

  { q: "How can you enter the operating frequency on a modern transceiver?",
    a: ["Keypad or VFO knob","CTCSS or DTMF encoder",
        "Automatic frequency control","All of these"],
    correct: 0,
    exp: "Direct keypad entry or the VFO are standard methods." },

  { q: "Common multimeter measurements include:",
    a: ["SWR and RF power","Signal strength and noise",
        "Impedance and resistance","Voltage and resistance"],
    correct: 3,
    exp: "A multimeter reads voltage, resistance, and often current." },

  { q: "What can result from an incorrectly adjusted speech processor?",
    a: ["Distorted speech","Splatter","Excess background noise",
        "All of these"],
    correct: 3,
    exp: "Overdriving the processor causes distortion and splatter." },

  { q: "Which frequency lies in the 12-meter amateur band?",
    a: ["3.940 MHz","12.940 MHz","17.940 MHz","24.940 MHz"],
    correct: 3,
    exp: "The 12-m band spans about 24.89–24.99 MHz." },

  { q: "Regarding access to frequencies, which is true?",
    a: ["Nets have priority","Ongoing QSOs have priority",
        "No one has priority—courtesy prevails",
        "Contests must yield to non-contest use"],
    correct: 2,
    exp: "No one owns a frequency; operators share courteously." },

  { q: "How can a ground loop be avoided?",
    a: ["Series-connect grounds","Tie AC neutral to ground",
        "Avoid lock washers","Use a single-point ground"],
    correct: 3,
    exp: "Bond all equipment to one central ground point." },

  { q: "Which frequency is inside the 6-meter band?",
    a: ["49.00 MHz","52.525 MHz","28.50 MHz","222.15 MHz"],
    correct: 1,
    exp: "The 6-m amateur band is 50–54 MHz." },

  { q: "What can cause erratic SWR readings?",
    a: ["Transmitter modulation","Loose antenna or feed line connection",
        "Over-modulation","Other-station interference"],
    correct: 1,
    exp: "A loose connector changes impedance and SWR unpredictably." },

  { q: "How is an ammeter connected in a circuit?",
    a: ["In series","In parallel","In quadrature","In phase"],
    correct: 0,
    exp: "Series connection lets all current pass through the meter." },

  { q: "Standing-wave ratio (SWR) is:",
    a: ["A match indicator between load and feed line",
        "Ratio of high/low impedance",
        "Transmitter efficiency",
        "Ground-quality reading"],
    correct: 0,
    exp: "SWR shows how well the antenna system is matched." },

  { q: "If reports say your signal causes splatter on nearby frequencies, you should:",
    a: ["Increase power","Change mode","Contact manufacturer",
        "Check for off-frequency or spurious emissions"],
    correct: 3,
    exp: "Inspect and adjust your transmitter before further operation." },

  { q: "Where should a filter be installed to reduce harmonic emissions?",
    a: ["Between transmitter and antenna","Between receiver and transmitter",
        "At power supply","At microphone"],
    correct: 0,
    exp: "A low-pass filter on the RF output suppresses harmonics." },

  { q: "Which operating activity involves contacting as many stations as possible in a time period?",
    a: ["Contesting","Net operations","Public service","Emergency drill"],
    correct: 0,
    exp: "Contesting rewards the most contacts in limited time." },

  { q: "Which instrument measures an RF field accurately?",
    a: ["Receiver S-meter","Calibrated field-strength meter with antenna",
        "Betascope","Oscilloscope with crystal marker"],
    correct: 1,
    exp: "A calibrated field-strength meter is designed for RF measurement." },

  { q: "Operating a transceiver in 'split' mode means:",
    a: ["Half-power output","External power source",
        "Different transmit and receive frequencies",
        "Single sideband only"],
    correct: 2,
    exp: "Split operation uses separate transmit and receive frequencies." },

  { q: "Which HF antenna best minimizes interference?",
    a: ["Quarter-wave vertical","Isotropic","Unidirectional","Omnidirectional"],
    correct: 2,
    exp: "A directional (beam) antenna reduces unwanted signals." },

  { q: "Typical characteristic impedance of common coax feed line is:",
    a: ["25 Ω & 30 Ω","50 Ω & 75 Ω","80 Ω & 100 Ω","500 Ω & 750 Ω"],
    correct: 1,
    exp: "Most amateur coax is 50 Ω; TV cable is often 75 Ω." },

  { q: "During a net, how do you report an emergency to net control?",
    a: ["Say SOS three times","Press PTT three times",
        "Begin with 'Priority' or 'Emergency' and your call",
        "Send a prerecorded tone then call sign"],
    correct: 2,
    exp: "Use 'Priority' or 'Emergency' to immediately alert net control." },

  { q: "Formula to convert frequency to wavelength (meters) is:",
    a: ["Meters = Hz × 300","Meters = Hz ÷ 300",
        "Meters = MHz ÷ 300","Meters = 300 ÷ MHz"],
    correct: 3,
    exp: "Wavelength (m) = 300 ÷ frequency (MHz)." },

  { q: "The term 'repeater offset' refers to:",
    a: ["Distance between repeater antennas","Time delay before reset",
        "Difference between transmit and receive frequencies",
        "Maximum input deviation"],
    correct: 2,
    exp: "Offset is the TX/RX frequency separation of the repeater." },

  { q: "The best solder for electronic work is:",
    a: ["Acid-core","Silver","Rosin-core","Aluminum"],
    correct: 2,
    exp: "Rosin-core solder avoids corrosive residues on electronics." },

  { q: "What does an antenna tuner do?",
    a: ["Matches antenna impedance to transceiver",
        "Tunes weak stations automatically",
        "Lets an antenna work on transmit & receive",
        "Selects the proper antenna"],
    correct: 0,
    exp: "It provides an impedance match between rig and antenna system." },

  { q: "A common use of a dual VFO is to:",
    a: ["Transmit on two frequencies at once",
        "Permit full duplex operation",
        "Easily monitor different transmit and receive frequencies",
        "Interface with a computer"],
    correct: 2,
    exp: "Dual VFOs simplify split-frequency operation or quick band changes." },

  { q: "An advantage of a digital voltmeter compared to analog is:",
    a: ["Better for computer circuits","Better for RF",
        "Higher precision for most uses","Faster response"],
    correct: 2,
    exp: "Digital meters usually give more precise, easy-to-read results." },

  { q: "An S-meter measures:",
    a: ["Conductance","Impedance","Received signal strength","Transmitter power"],
    correct: 2,
    exp: "S-meters show the strength of received signals." },

  { q: "Which phone emission uses the narrowest bandwidth?",
    a: ["Single sideband","Double sideband","Phase modulation","Frequency modulation"],
    correct: 0,
    exp: "SSB voice typically uses about 2.4 kHz, narrower than FM." },

  { q: "Approximate length of a half-wave dipole for 3.550 MHz is:",
    a: ["42 ft","84 ft","131 ft","263 ft"],
    correct: 2,
    exp: "Length (ft) ≈ 468 ÷ 3.55 ≈ 132 ft." },

  // Extra items to reach 50
  { q: "Which component is commonly used to block DC while passing RF signals?",
    a: ["Inductor","Capacitor","Resistor","Transformer"],
    correct: 1,
    exp: "A capacitor passes AC/RF but blocks DC current." },

  { q: "What action helps reduce ignition noise in a mobile installation?",
    a: ["Install a high-pass filter","Bond engine and chassis grounds",
        "Reduce microphone gain","Use a beam antenna"],
    correct: 1,
    exp: "Proper bonding suppresses vehicle ignition noise." },

  { q: "Why is it good practice to secure coax with drip loops before entry to a shack?",
    a: ["For aesthetics","To keep RF from leaking",
        "To prevent rainwater from following the cable indoors",
        "To improve SWR"],
    correct: 2,
    exp: "A drip loop prevents water ingress along the coax." },

  { q: "What is the primary purpose of a balun in an antenna system?",
    a: ["Balance or unbalance a feed line connection",
        "Boost transmit power","Match any impedance","Filter harmonics"],
    correct: 0,
    exp: "A balun transitions between balanced antennas and unbalanced coax." },

  { q: "Why is RG-213 coax preferred over RG-58 at high power?",
    a: ["Lower loss and higher power handling",
        "Smaller diameter","Better flexibility","Higher impedance"],
    correct: 0,
    exp: "Thicker coax handles more current with less attenuation." },

  { q: "What personal safety item is recommended when installing a tower?",
    a: ["Safety harness","Rubber gloves","Ground rod","Insulated screwdriver"],
    correct: 0,
    exp: "A proper climbing harness prevents falls." },

  { q: "Why should antenna hardware be made of similar metals?",
    a: ["To look uniform","To reduce galvanic corrosion",
        "To match impedance","To keep weight low"],
    correct: 1,
    exp: "Similar metals prevent galvanic corrosion at joints." },

  { q: "What is the main reason for using a dummy load during transmitter testing?",
    a: ["To radiate the test signal efficiently",
        "To present a proper 50 Ω load without radiation",
        "To cool the final amplifier",
        "To tune the antenna automatically"],
    correct: 1,
    exp: "A dummy load lets you test without radiating RF." },

  { q: "Which portable power source is best for a field HF station?",
    a: ["Car alternator only","Sealed lead-acid battery",
        "Standard 9 V batteries","Laptop power supply"],
    correct: 1,
    exp: "A deep-cycle or sealed lead-acid battery provides steady 12 V." },

  { q: "What is the purpose of a choke balun on a coax feed line?",
    a: ["Increase SWR","Suppress common-mode RF currents",
        "Match impedance to 75 Ω","Increase transmit power"],
    correct: 1,
    exp: "A choke balun blocks RF on the outside of the coax shield." },
    { q: "Why is it recommended to install a lightning arrestor at the station entry point?",
  a: [
    "To boost RF power",
    "To protect equipment from voltage surges caused by lightning",
    "To tune the antenna automatically",
    "To reduce feed line loss"
  ],
  correct: 1,
  exp: "A lightning arrestor shunts high-voltage spikes to ground, protecting radios and other electronics."
},

{ q: "What is the primary purpose of a station ground system?",
  a: [
    "Provide a DC return path for power supplies",
    "Reduce audio distortion",
    "Protect equipment and operators from electrical faults and static buildup",
    "Increase transmitter output power"
  ],
  correct: 2,
  exp: "Proper grounding improves safety and minimizes static or lightning damage."
},

{ q: "Which practice best minimizes RF exposure when using a high-power HF transmitter?",
  a: [
    "Operate with the antenna far enough away to keep field strength within safe limits",
    "Use only low-loss coaxial cable",
    "Transmit only in CW mode",
    "Increase SWR to lower current"
  ],
  correct: 0,
  exp: "Distance is the most effective protection; maintain the recommended minimum separation from antennas."
}
    
];
