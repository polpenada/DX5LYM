// js/element3_questions.js
const originalQuestions = [
  { q: "The instrument used to measure current is:",
    a: ["Voltmeter","Ohmmeter","Ammeter","Multimeter"],
    correct: 2,
    exp: "An ammeter, connected in series, measures electric current." },

  { q: "The instrument used to measure voltage is:",
    a: ["Ammeter","Voltmeter","Ohmmeter","Frequency counter"],
    correct: 1,
    exp: "A voltmeter measures potential difference across two points." },

  { q: "The instrument used to measure resistance is:",
    a: ["Voltmeter","Ohmmeter","Ammeter","Wattmeter"],
    correct: 1,
    exp: "Resistance is measured in ohms with an ohmmeter." },

  { q: "The output power of a transmitter is measured in:",
    a: ["Joules","Henries","Watts","Volts"],
    correct: 2,
    exp: "Power is the rate of energy transfer, expressed in watts." },

  { q: "Rubber is an example of a:",
    a: ["Conductor","Insulator","Semiconductor","Dielectric only"],
    correct: 1,
    exp: "Rubber resists electron flow and is a good insulator." },

  { q: "Copper is an example of a:",
    a: ["Insulator","Conductor","Semiconductor","Resistor"],
    correct: 1,
    exp: "Copper’s free electrons make it an excellent conductor." },

  { q: "Silicon is typically used as a:",
    a: ["Conductor","Insulator","Semiconductor","Capacitor"],
    correct: 2,
    exp: "Silicon’s properties place it between conductors and insulators." },

  { q: "The value 144.474 MHz refers to:",
    a: ["Wavelength","Frequency","Impedance","Voltage"],
    correct: 1,
    exp: "Megahertz is a unit of frequency (cycles per second)." },

  { q: "A 145 MHz signal has an approximate wavelength of:",
    a: ["0.7 m","2 m","4 m","7 m"],
    correct: 1,
    exp: "Wavelength (m) ≈ 300 / frequency (MHz) ≈ 2 m." },

  { q: "The band 144 – 146 MHz lies in the:",
    a: ["HF band","VHF band","UHF band","SHF band"],
    correct: 1,
    exp: "30–300 MHz is the VHF (Very High Frequency) range." },

  { q: "The terminal voltage of a standard flashlight cell is about:",
    a: ["3 V","1.5 V","6 V","9 V"],
    correct: 1,
    exp: "A single dry cell such as AA provides about 1.5 V." },

  { q: "One thousand watts is written as:",
    a: ["1 kilowatt","1 megawatt","1 centiwatt","1 decawatt"],
    correct: 0,
    exp: "Kilo means one thousand, so 1 kW = 1000 W." },

  { q: "Sound waves are also called:",
    a: ["Radio waves","Audio frequency waves","Microwaves","Ultraviolet waves"],
    correct: 1,
    exp: "They occupy the audio-frequency range of the spectrum." },

  { q: "An open circuit ideally has a resistance of:",
    a: ["Zero ohms","One ohm","Infinity","1000 ohms"],
    correct: 2,
    exp: "With no complete path, resistance is effectively infinite." },

  { q: "A short circuit ideally has a resistance of:",
    a: ["Infinity","Zero ohms","One ohm","Very high"],
    correct: 1,
    exp: "A direct connection offers negligible resistance." },

  { q: "If current bypasses the intended path and blows a fuse, the circuit is:",
    a: ["Open","Parallel","Short-circuited","Series"],
    correct: 2,
    exp: "A short circuit provides a low-resistance path that trips protection." },

  { q: "The radiotelephone distress signal is:",
    a: ["PAN","SECURITE","MAYDAY","SOS"],
    correct: 2,
    exp: "MAYDAY is the international spoken distress call." },

  { q: "The radiotelephone emergency signal (urgent but not distress) is:",
    a: ["MAYDAY","PAN","SECURITE","HELP"],
    correct: 1,
    exp: "‘PAN’ indicates urgency but not immediate danger." },

  { q: "The unit of resistance is the:",
    a: ["Farad","Henry","Ohm","Watt"],
    correct: 2,
    exp: "Resistance is measured in ohms (Ω)." },

  { q: "The unit of inductance is the:",
    a: ["Farad","Henry","Tesla","Ohm"],
    correct: 1,
    exp: "Inductance is expressed in henries (H)." },

  { q: "The radiotelephone safety signal is:",
    a: ["MAYDAY","PAN","SECURITE","CQ"],
    correct: 2,
    exp: "SECURITE announces important safety information." },

  { q: "One cycle of a wave is measured in:",
    a: ["Joules","Hertz","Farads","Henries"],
    correct: 1,
    exp: "Frequency is measured in hertz (cycles per second)." },

  { q: "The unit of capacitance is the:",
    a: ["Henry","Farad","Ohm","Watt"],
    correct: 1,
    exp: "Capacitance is measured in farads (F)." },

  { q: "The prefix pico means:",
    a: ["10⁻⁹","10⁻¹²","10⁶","10¹²"],
    correct: 1,
    exp: "Pico (p) is 10⁻¹²." },

  { q: "The prefix mega means:",
    a: ["10⁶","10³","10⁹","10⁻⁶"],
    correct: 0,
    exp: "Mega (M) stands for one million (10⁶)." },

  { q: "The opposition of a conductor to current flow is called:",
    a: ["Reactance","Resistance","Impedance","Conductance"],
    correct: 1,
    exp: "Resistance resists current flow." },

  { q: "The circuit element that opposes a change in current is the:",
    a: ["Capacitor","Inductor","Resistor","Diode"],
    correct: 1,
    exp: "Inductors resist changes in current flow." },

  { q: "The circuit element that opposes a change in voltage is the:",
    a: ["Inductor","Capacitor","Resistor","Fuse"],
    correct: 1,
    exp: "Capacitors oppose sudden voltage changes." },

  { q: "The unit of admittance is the:",
    a: ["Siemens","Ohm","Henry","Farad"],
    correct: 0,
    exp: "Admittance is the reciprocal of impedance, in siemens." },

  { q: "What device protects household circuits from fire when short-circuited?",
    a: ["Resistor","Fuse","Transformer","Relay"],
    correct: 1,
    exp: "Fuses melt and open the circuit when current is excessive." },

  { q: "An instrument that measures frequency is a:",
    a: ["Multimeter","Oscilloscope","Frequency counter","Ammeter"],
    correct: 2,
    exp: "A frequency counter gives an accurate frequency reading." },

  { q: "An instrument used to measure resistance, voltage and current is a:",
    a: ["Oscilloscope","Multimeter","Galvanometer","Voltmeter"],
    correct: 1,
    exp: "A multimeter can measure all three basic electrical quantities." },

  { q: "Connecting a resistor in series with a meter will:",
    a: ["Increase the measuring range of a voltmeter",
        "Decrease the measuring range of a voltmeter",
        "Increase ammeter range",
        "Short the circuit"],
    correct: 0,
    exp: "Adding series resistance lets a voltmeter read higher voltages." },

  { q: "Connecting a resistor in parallel with a meter will:",
    a: ["Increase the range of an ammeter",
        "Decrease ammeter range",
        "Increase voltmeter range",
        "Have no effect"],
    correct: 0,
    exp: "A parallel shunt lets an ammeter handle more current." },

  { q: "Two identical resistors in parallel have a total resistance of:",
    a: ["Half the value of one","Twice one","Same as one","Zero"],
    correct: 0,
    exp: "Parallel identical resistors halve the individual resistance." },

  { q: "Two identical capacitors in parallel have a total capacitance of:",
    a: ["Half one","Equal to one","Twice one","Quarter one"],
    correct: 2,
    exp: "Parallel capacitors add capacitance directly." },

  { q: "Two identical capacitors in series have a total capacitance of:",
    a: ["Half one","Twice one","Equal to one","Zero"],
    correct: 0,
    exp: "Series identical capacitors give half the individual value." },

  { q: "To prevent shock, equipment should be connected to a good earth ground through the:",
    a: ["Hot wire","Plastic pipe","Cold water pipe","Antenna"],
    correct: 2,
    exp: "Cold water pipes provide an effective earth ground." },

  { q: "Audio frequency range is approximately:",
    a: ["30 Hz–3 kHz","300 Hz–30 kHz","3 kHz–300 kHz","30 kHz–300 kHz"],
    correct: 1,
    exp: "Audio frequencies span about 300 Hz to 30 kHz." },

  { q: "Storage batteries are usually rated in:",
    a: ["Watts","Ampere-hours","Volts","Henries"],
    correct: 1,
    exp: "Capacity is expressed in ampere-hours (Ah)." },

  { q: "A good way to prevent unauthorized station use is:",
    a: ["Hide the microphone","Use a key-operated power switch","Remove the antenna","Unplug the power cord only"],
    correct: 1,
    exp: "A key-operated power switch stops unapproved operation." },

  { q: "All antenna systems should be grounded when not in use to:",
    a: ["Improve reception","Reduce SWR","Protect from lightning damage","Save power"],
    correct: 2,
    exp: "Grounding protects the station from lightning strikes." },

  { q: "Before working on a high-voltage power supply you should:",
    a: ["Discharge the filter capacitors","Increase line voltage","Remove all fuses","Spray with water"],
    correct: 0,
    exp: "Discharging capacitors prevents dangerous residual charge." },

  { q: "An instrument useful for monitoring RF output during tuning is a:",
    a: ["Grid-dip meter","Multimeter","Voltmeter","Frequency counter"],
    correct: 0,
    exp: "A grid-dip meter measures resonant circuits and RF output." },

  { q: "Ohm’s Law is expressed as:",
    a: ["V = I × R","P = I²R","I = V × R","R = P/I"],
    correct: 0,
    exp: "Voltage equals current times resistance." },

  { q: "The power formula is:",
    a: ["P = I²R","P = V/R","P = V + I","P = IR²"],
    correct: 0,
    exp: "Power equals current squared times resistance." },

  { q: "To obtain a higher output voltage from dry cells, connect them in:",
    a: ["Parallel","Series","Bridge","Opposition"],
    correct: 1,
    exp: "Series connection sums the individual voltages." },

  { q: "Two identical resistors connected in series have a total resistance of:",
    a: ["Half one","Equal to one","Twice one","None"],
    correct: 2,
    exp: "Series resistances add together." },

  { q: "As the diameter of a copper wire increases, its resistance:",
    a: ["Increases","Decreases","Remains constant","Becomes infinite"],
    correct: 1,
    exp: "Larger cross-sectional area lowers resistance." },

  { q: "As the length of a copper wire increases, its resistance:",
    a: ["Decreases","Increases","Remains constant","Becomes zero"],
    correct: 1,
    exp: "Resistance is directly proportional to conductor length." }
];
