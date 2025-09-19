// js/element6.js
// ACCESS 5, INC. – Element 6 : Circuit Components (paraphrased for study use)

const originalQuestions = [
  {
    q: "A low-power transistor stage shows a collector impedance of about 1250 Ω. To match it to a 50 Ω antenna with a transformer, which turns ratio is most appropriate?",
    a: ["125:5", "5:1", "25:1", "10:1"],
    correct: 3,
    exp: "Impedance transformation follows the square of the turns ratio; about 5:1 turns ratio (≈25:1 impedance) is needed. 10:1 turns ratio is closest."
  },
  {
    q: "A chain of NPN common-emitter audio amplifier stages will typically share what kind of ground reference?",
    a: ["Positive ground", "Negative ground", "Earth ground only", "No ground at all"],
    correct: 1,
    exp: "NPN transistor circuits normally use a negative ground system."
  },
  {
    q: "Which component limits or drops current to set bias or reduce voltage in a circuit?",
    a: ["Resistor", "Diode", "Ferrite core", "Fuse"],
    correct: 0,
    exp: "A resistor provides controlled opposition to current flow."
  },
  {
    q: "Why is the germanium diode type 1N34A preferred for AM signal detection instead of a silicon diode?",
    a: [
      "Higher purchase cost",
      "Higher breakdown rating",
      "Lower forward-voltage drop than silicon",
      "Performs poorly above 60 Hz"
    ],
    correct: 2,
    exp: "Germanium’s low barrier potential (~0.2 V) makes it sensitive for demodulation."
  },
  {
    q: "The primary charge carriers in an N-type semiconductor are:",
    a: ["Electrons", "Holes", "Neutrons", "Protons"],
    correct: 0,
    exp: "N-type material is doped so electrons provide the majority conduction."
  },
  {
    q: "When servicing gear containing large high-voltage electrolytic capacitors, which part should be placed across the terminals to safely discharge them?",
    a: ["Rectifier diode", "Small decoupling capacitor", "Zener diode", "Bleeder resistor"],
    correct: 3,
    exp: "A suitable resistor slowly drains the stored charge and prevents shock."
  },
  {
    q: "Which meter, connected in series, measures current flow?",
    a: ["Barometer", "Ammeter", "Voltmeter", "Galvanometer"],
    correct: 1,
    exp: "An ammeter is inserted in series so all circuit current passes through it."
  },
  {
    q: "Which silicon device is designed specifically to convert AC into DC for power supplies?",
    a: ["Zener diode", "Reference diode", "RF diode", "Rectifier diode"],
    correct: 3,
    exp: "Rectifier diodes handle high current and block reverse voltage."
  },
  {
    q: "For a light-emitting diode to glow, it must be:",
    a: ["Reverse-biased", "Forward-biased", "Left unbiased", "None of these"],
    correct: 1,
    exp: "Current must flow in the forward direction for an LED to emit light."
  },
  {
    q: "Which electromechanical part uses a magnetic field to open or close contacts when energized by an external circuit?",
    a: ["Relay", "Switch", "Transformer", "Mouse"],
    correct: 0,
    exp: "A relay uses an internal coil to magnetically operate its contacts."
  },
  {
    q: "A triode vacuum tube’s gain is often specified by what Greek letter, analogous to transistor beta?",
    a: ["Gamma", "Mu", "Omega", "Delta"],
    correct: 1,
    exp: "‘Mu’ represents the amplification factor of a triode."
  },
  {
    q: "Which capacitors are polarity-sensitive like a battery?",
    a: ["Trimpots", "Polarized capacitors", "Transducers", "Ultrasonics"],
    correct: 1,
    exp: "Electrolytic and tantalum capacitors must observe correct polarity."
  },
  {
    q: "The impedance ratio of a transformer equals:",
    a: [
      "The square of the turns ratio",
      "The square root of the voltage ratio",
      "Same as the current ratio",
      "Twice the turns ratio"
    ],
    correct: 0,
    exp: "Impedance transformation is the square of the turns ratio (N²)."
  },
  {
    q: "Which solid-state device behaves most like a vacuum tube in general operation?",
    a: ["Bipolar transistor", "Tunnel diode", "Varistor", "Field-effect transistor"],
    correct: 3,
    exp: "A FET controls current by electric field, similar to a triode’s grid."
  },
  {
    q: "Which capacitor type can be connected without regard to polarity and is common in RF or audio circuits?",
    a: ["Polarized electrolytic", "Non-polarized fixed", "Triac", "Quad transistor"],
    correct: 1,
    exp: "Film or ceramic capacitors are non-polar and can be installed either way."
  },
  {
    q: "For high-power tuned RF circuits, which capacitor dielectric gives the highest voltage rating?",
    a: ["Silvered mica", "Glass", "Air", "Vacuum"],
    correct: 3,
    exp: "Vacuum capacitors withstand very high voltages and low losses."
  },
  {
    q: "Which component converts electrical energy directly into sound waves?",
    a: ["LED", "Loudspeaker", "Microphone", "LCD"],
    correct: 1,
    exp: "A loudspeaker turns electrical signals into audible vibrations."
  },
  {
    q: "Which rectifier arrangement gives full-wave DC output without a center-tapped secondary?",
    a: [
      "Single-diode half wave",
      "Two-diode full wave",
      "Bridge configuration",
      "Parallel diode pair"
    ],
    correct: 2,
    exp: "The four-diode bridge provides full-wave rectification without a center tap."
  },
  {
    q: "If a diode is reverse-biased, it acts like:",
    a: ["An open circuit (off)", "A forward conductor", "Idle state allowing current", "A fuse"],
    correct: 0,
    exp: "Reverse bias means no current flows except tiny leakage."
  },
  {
    q: "Which statement accurately describes SCR conduction?",
    a: [
      "It conducts once the gate is triggered regardless of anode-cathode polarity",
      "Once triggered with anode-cathode forward bias it latches on",
      "It requires reverse bias to continue conducting",
      "It only conducts while the gate signal remains present"
    ],
    correct: 1,
    exp: "An SCR latches on after a gate pulse as long as anode-cathode remain forward biased."
  },
  {
    q: "A voltmeter is properly connected how?",
    a: ["In series with the circuit", "In parallel across the points measured", "Between ground only", "In series with a fuse only"],
    correct: 1,
    exp: "Voltage is measured across two points, so the meter is in parallel."
  },
  {
    q: "Early CMOS logic compared with standard 7400 TTL offered which main advantage?",
    a: [
      "Higher operating speed",
      "Lower power consumption",
      "Identical 5-volt supply tolerance",
      "None of these"
    ],
    correct: 1,
    exp: "CMOS devices draw far less current than TTL chips."
  },
  {
    q: "For critical frequency stability, why might a simple crystal oscillator outperform a PLL?",
    a: [
      "Lower cost",
      "Lower phase noise",
      "Greater frequency agility",
      "More harmonics"
    ],
    correct: 1,
    exp: "A crystal oscillator exhibits extremely low phase noise."
  },
  {
    q: "Which device can detect or demodulate an AM signal by rectification?",
    a: [
      "LED",
      "Zener diode",
      "Bridge rectifier",
      "Signal crystal diode"
    ],
    correct: 3,
    exp: "A small-signal crystal diode efficiently recovers the audio from AM."
  },
  {
    q: "The parameter known as Beta (β) of a transistor refers to its:",
    a: ["Plate resistance", "Current gain (amplification factor)", "Transconductance", "Mutual conductance"],
    correct: 1,
    exp: "Beta is the DC current gain, ratio of collector current to base current."
  },
  {
    q: "Which device converts sound vibrations into electrical signals?",
    a: ["Microphone", "LCD panel", "LED", "Transistor"],
    correct: 0,
    exp: "A microphone transforms acoustic energy into an electrical signal."
  },
  {
    q: "Compared to a standard 7400 TTL logic gate, a CMOS gate typically allows a fan-out that is:",
    a: ["Exactly 1", "Lower", "Higher", "Less than 1"],
    correct: 2,
    exp: "CMOS inputs draw almost no current, giving higher fan-out capability."
  },
  {
    q: "Quartz crystals used in radio equipment operate because of which physical effect?",
    a: ["Photoelectric effect", "Hall effect", "Piezoelectric effect", "Faraday effect"],
    correct: 2,
    exp: "Mechanical stress on a crystal produces a voltage—the piezoelectric effect."
  },
  {
    q: "Which semiconductor behaves most like a vacuum-tube triode in function?",
    a: ["NPN bipolar transistor", "Silicon-controlled rectifier", "Field-effect transistor", "Schottky diode"],
    correct: 2,
    exp: "A FET’s voltage-controlled channel mimics the grid-controlled triode action."
  },
  {
    q: "What do we call a semiconductor package that contains both active and passive elements to perform a complete function?",
    a: ["Printed circuit board", "Integrated circuit (IC)", "Microphone", "Single transistor"],
    correct: 1,
    exp: "An IC combines multiple devices in one chip to carry out an electronic function."
  },
  {
    q: "The SANWA 360TR analog meter movement is fundamentally a:",
    a: ["Moving-magnet system", "Moving-coil system", "Tangent galvanometer", "Thomson galvanometer"],
    correct: 1,
    exp: "It uses a D’Arsonval moving-coil mechanism to measure current."
  },
  {
    q: "Capacitors resist sudden changes in which quantity?",
    a: ["Applied voltage", "Current through the device", "Their own resistance", "Their capacitance value"],
    correct: 0,
    exp: "A capacitor opposes rapid voltage changes by sourcing or sinking current."
  },
  {
    q: "A TRIAC (Triode for AC) is effectively equivalent to:",
    a: [
      "Two NPN bipolar transistors back-to-back",
      "Two N-channel JFETs back-to-back",
      "Two CMOS FETs back-to-back",
      "Two SCRs connected in opposite directions"
    ],
    correct: 3,
    exp: "A TRIAC is functionally two SCRs conducting in opposite directions."
  },
  {
    q: "Which component consists of two conductors separated by an insulating dielectric such as paper, oil, or air?",
    a: ["Resistor", "Diode", "Capacitor", "Relay"],
    correct: 2,
    exp: "That is the basic construction of a capacitor."
  },
  {
    q: "A resistor whose value can be continuously adjusted (e.g., for volume control) is called a:",
    a: ["Potentiometer", "Coil", "Transistor", "Capacitor"],
    correct: 0,
    exp: "A potentiometer is a variable resistor for adjusting signal levels."
  },
  {
    q: "Neon-lamp technology found new life with the development of:",
    a: ["CRT televisions", "LCD televisions", "LED televisions", "Plasma televisions"],
    correct: 3,
    exp: "Plasma displays operate on principles similar to neon lamps."
  },
  {
    q: "A ‘balun’ transformer is used to convert:",
    a: [
      "Balanced line to unbalanced line",
      "Balanced impedance to unbalanced impedance",
      "Balanced voltage to unbalanced voltage",
      "Balanced current to unbalanced current"
    ],
    correct: 0,
    exp: "Balun literally means BALanced to UNbalanced transformer."
  },
  {
    q: "Which is a key characteristic of an NPN common-collector amplifier?",
    a: ["High voltage gain", "High input impedance", "Low cost", "High output impedance"],
    correct: 1,
    exp: "Common-collector (emitter-follower) circuits present a high input impedance."
  },
  {
    q: "Large filter capacitors in a power supply are typically connected how relative to the output inductor of a rectifier?",
    a: ["In series with it", "In parallel across it", "In series-parallel combo", "In series only"],
    correct: 1,
    exp: "They are placed in parallel to smooth the DC output voltage."
  },
  {
    q: "Which item is cut to a precise thickness to vibrate at a fixed frequency for oscillators and clocks?",
    a: ["Microphone", "Quartz crystal", "Loudspeaker", "Capacitor"],
    correct: 1,
    exp: "A crystal’s thickness determines its resonant frequency."
  },
  {
    q: "Why must large electrolytic DC capacitors be wired with correct polarity?",
    a: [
      "They’ll simply lose efficiency",
      "Capacitance will fall",
      "Current capacity drops",
      "Gas buildup may cause an explosion"
    ],
    correct: 3,
    exp: "Reverse voltage can cause internal gas generation and rupture."
  },
  {
    q: "Which p-n junction device serves as a current-flow indicator or power-on lamp?",
    a: ["LED", "Loudspeaker", "Microphone", "LCD panel"],
    correct: 0,
    exp: "A light-emitting diode glows when forward biased."
  },
  {
    q: "Which device uses magnetic coupling of two or more coils to change voltage levels, such as from 220 V AC to a lower AC output?",
    a: ["Transformer", "Tuning coil", "Relay", "Electromagnet"],
    correct: 0,
    exp: "Transformers step voltage up or down by induction between windings."
  },
  {
    q: "Which protective component contains a small wire that melts if current exceeds a set value?",
    a: ["Terminal post", "Soldering lead", "Pilot lamp", "Fuse"],
    correct: 3,
    exp: "A fuse opens the circuit when current is too high."
  },
  {
    q: "A Zener diode provides a steady reference voltage when it is:",
    a: ["Forward biased", "Reverse biased", "Not biased", "Driven by AC only"],
    correct: 1,
    exp: "Zeners are designed to conduct in reverse at a specific breakdown voltage."
  },
  {
    q: "Which component is added to a circuit specifically to create inductance, common in filters and tuned networks?",
    a: ["Transistor", "Coil (inductor)", "Thermistor", "Potentiometer"],
    correct: 1,
    exp: "An inductor or coil stores energy in a magnetic field."
  },
  {
    q: "LCD digital meters display numbers because their liquid-crystal molecules twist when exposed to:",
    a: ["An electric field", "A fluctuating magnetic field", "A steady magnetic field", "A plasma field"],
    correct: 0,
    exp: "Voltage across the cell re-aligns the molecules to modulate light."
  },
  {
    q: "Before the diac, which gas-filled device was commonly used to trigger SCRs and TRIACs?",
    a: ["Zener diode", "Gas triode", "Neon lamp", "Tetrode"],
    correct: 2,
    exp: "Neon lamps were often used as inexpensive triggering devices."
  },
  {
    q: "Which of the following operates on the same principle as a compact fluorescent lamp?",
    a: ["Light-emitting diode", "Incandescent lamp", "Neon lamp", "None of these"],
    correct: 2,
    exp: "Neon lamps, like CFLs, rely on gas discharge and phosphor coating."
  },
  {
    q: "Which two-terminal component allows current to flow far more easily in one direction than the other?",
    a: ["Fuse", "Diode", "Ammeter", "Multitester"],
    correct: 1,
    exp: "A diode is a one-way current device."
  }
];




