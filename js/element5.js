// js/element5.js
// ACCESS 5, INC. – Element 5 : Signals, Frequencies & Emission (paraphrased)

const originalQuestions = [
  {
    q: "A sine wave measures 20 V at its positive peak. What is the total peak-to-peak voltage?",
    a: ["40 V", "20 V", "10 V", "14.1 V"],
    correct: 0,
    exp: "Peak-to-peak is twice the single peak: 20 V × 2 = 40 V."
  },
  {
    q: "For local FM voice chats around 430 MHz, which emission type is most common for amateurs?",
    a: ["QPSK", "FSK", "Continuous-wave (CW)", "Frequency-modulation (FM)"],
    correct: 3,
    exp: "UHF voice repeaters and simplex typically use FM."
  },
  {
    q: "How many unique symbols exist in the binary numbering system?",
    a: ["2", "10", "16", "32"],
    correct: 0,
    exp: "Binary uses only 0 and 1."
  },
  {
    q: "Why do TV broadcasts often use vestigial sideband transmission?",
    a: [
      "To reduce required bandwidth",
      "To pass low-frequency video components like sync pulses",
      "Both reasons",
      "None of these"
    ],
    correct: 2,
    exp: "VSB conserves bandwidth while preserving low-frequency content."
  },
  {
    q: "Approximate half-wave dipole length for 28.495 MHz is:",
    a: ["10.5 m", "2.63 m", "5.26 m", "28.5 m"],
    correct: 2,
    exp: "Length ≈ 150 / frequency (MHz) ÷ 2 ≈ 5.26 m."
  },
  {
    q: "Which device changes digital data into tones for transmission over voice-grade channels?",
    a: ["Modem", "Telephone", "Microphone", "Speaker"],
    correct: 0,
    exp: "A modem modulates digital signals into audio tones."
  },
  {
    q: "The acronym MODEM stands for:",
    a: ["Mode Modulator", "Modulator/Demodulator", "Modulator/Demultiplexer", "None of these"],
    correct: 1,
    exp: "MODEM = MOdulator/DEModulator."
  },
  {
    q: "What causes the 'key-click' sounds sometimes heard with Morse code signals?",
    a: [
      "Poor quality key or paddle",
      "Over-driving the power amplifier",
      "Abrupt on/off of full carrier power",
      "None of these"
    ],
    correct: 2,
    exp: "Fast rise/fall times create wide sidebands that sound like clicks."
  },
  {
    q: "Find the first harmonic frequency of a wave with 14.28751 m wavelength.",
    a: ["7.095 kHz", "21.010 kHz", "42 MHz", "14.005 kHz"],
    correct: 1,
    exp: "Fundamental ≈ 14 MHz, second harmonic ≈ 21 MHz."
  },
  {
    q: "Radio teletype (RTTY) emission is commonly classified as:",
    a: ["F1B or F2B", "C3F", "A1A", "F3E"],
    correct: 0,
    exp: "RTTY typically uses frequency-shift keying, classes F1B or F2B."
  },
  {
    q: "Which is a result of over-modulating an AM signal?",
    a: ["Excessive bandwidth", "Too little audio", "Too little bandwidth", "Frequency drift"],
    correct: 0,
    exp: "Over-modulation splatters and widens the signal."
  },
  {
    q: "To best suppress the carrier and unwanted sideband in SSB, use:",
    a: ["LC filter", "Crystal filter", "Mechanical filter", "Either B or C"],
    correct: 3,
    exp: "High-Q crystal or mechanical filters remove the unwanted sideband."
  },
  {
    q: "Why did early operators say 'CQ 40 m' in a call?",
    a: [
      "Because harmonics sometimes let higher-band listeners hear the call",
      "It simply sounded clearer",
      "It was a legal requirement",
      "It was international custom only"
    ],
    correct: 0,
    exp: "To avoid confusion when a harmonic appeared on another band."
  },
  {
    q: "Filtering an AM signal to remove the carrier and everything below it yields:",
    a: ["FM signal", "Lower-sideband only", "Upper-sideband only", "A pulsed signal"],
    correct: 2,
    exp: "Removing the carrier and lower sideband leaves upper-sideband (USB)."
  },
  {
    q: "Feeding audio into the plate circuit of a CW RF amplifier produces an:",
    a: ["FM transmitter", "AM transmitter", "SSB transmitter", "Pure CW transmitter"],
    correct: 1,
    exp: "Modulating the plate with audio creates amplitude modulation."
  },
  {
    q: "How does emission type J3E differ from A3E?",
    a: [
      "J3E suppresses the carrier",
      "J3E has two sidebands",
      "A3E has only one sideband",
      "A3E is single sideband"
    ],
    correct: 0,
    exp: "J3E = single-sideband suppressed carrier; A3E = standard AM with carrier."
  },
  {
    q: "Distinction between FSK and AFSK is that:",
    a: [
      "They are identical",
      "FSK directly shifts the RF, AFSK shifts an audio subcarrier first",
      "FSK is asynchronous",
      "AFSK cannot be generated outside a radio"
    ],
    correct: 1,
    exp: "AFSK modulates an audio tone; FSK shifts the RF carrier itself."
  },
  {
    q: "A frequency that is an integer multiple of a fundamental is called a:",
    a: ["Harmonic frequency", "Multiple frequency", "High frequency", "Medium frequency"],
    correct: 0,
    exp: "Harmonics are whole-number multiples of the base frequency."
  },
  {
    q: "Emission type A1 is defined as:",
    a: [
      "Audible telegraphy",
      "Morse code operation",
      "Unmodulated continuous wave",
      "All of these"
    ],
    correct: 3,
    exp: "A1 covers continuous-wave Morse telegraphy."
  },
  {
    q: "Approximate quarter-wave length of a Marconi antenna for 228 MHz is:",
    a: ["1 m", "0.33 m", "2 m", "0.5 m"],
    correct: 1,
    exp: "Quarter-wave ≈ 300 / 228 / 4 ≈ 0.33 m."
  },
  {
    q: "If the second harmonic of a signal is 56 MHz, the fundamental frequency is:",
    a: ["28 MHz", "56 MHz", "112 MHz", "None of these"],
    correct: 0,
    exp: "Fundamental = 56 MHz ÷ 2 = 28 MHz."
  },
  {
    q: "Preferred polarization for satellite and space communication is:",
    a: ["Vertical", "Horizontal", "Circular", "None of these"],
    correct: 2,
    exp: "Circular polarization avoids deep fades from spacecraft rotation."
  },
  {
    q: "A double-balanced mixer fed with RF and audio typically outputs:",
    a: [
      "Double sideband with carrier",
      "Double sideband suppressed carrier",
      "Upper sideband with carrier",
      "Lower sideband with carrier"
    ],
    correct: 1,
    exp: "The balanced design cancels the carrier, leaving double sideband suppressed."
  },
  {
    q: "Signal-to-noise ratio (SNR) is the:",
    a: [
      "Voltage ratio of signal to noise",
      "Power of noise divided by power of signal",
      "Voltage ratio of signal to power",
      "None of these"
    ],
    correct: 0,
    exp: "SNR is usually the ratio of signal voltage or power to noise voltage or power."
  },
  {
    q: "The greatest instantaneous swing of the modulated frequency from the carrier is known as:",
    a: ["Frequency shift", "Frequency deviation", "Frequency change", "Frequency variability"],
    correct: 1,
    exp: "FM deviation is the peak difference from the carrier frequency."
  },
  {
    q: "In the emission code F3E, what does the number 3 represent?",
    a: [
      "Bandwidth of the audio signal",
      "Single communication channel",
      "Frequency-modulation of the carrier",
      "None of these"
    ],
    correct: 1,
    exp: "The numeral shows the number of independent information channels—here, one channel."
  },
  {
    q: "Which of these modes occupies the least bandwidth?",
    a: ["A3E (AM voice)", "A3J (SSB with pilot carrier)", "F3E (FM)", "A1A (CW)"],
    correct: 3,
    exp: "Continuous-wave Morse (A1A) is extremely narrow, often <150 Hz."
  },
  {
    q: "What emission do hams on 144 MHz typically use for local voice QSOs?",
    a: ["QPSK", "FSK", "Continuous-wave", "FM"],
    correct: 3,
    exp: "Two-meter repeaters and simplex voice commonly use FM."
  },
  {
    q: "An electromagnetic field can be shown graphically along which axes?",
    a: ["X and Y", "X, Y, and Z", "Y and Z", "None of these"],
    correct: 1,
    exp: "Electric, magnetic, and propagation directions are three-dimensional."
  },
  {
    q: "A sine wave measures 2 V peak-to-peak. What is its RMS value?",
    a: ["1 V RMS", "3 V RMS", "0.707 V RMS", "None of these"],
    correct: 0,
    exp: "Peak is 1 V; RMS = 0.707 × peak = about 0.707 V (~1 V rounded)."
  },
  {
    q: "Why is a VCO (voltage-controlled oscillator) useful in VHF/UHF gear when you apply an audio signal?",
    a: ["It causes frequency modulation", "It causes amplitude modulation", "It creates pulse modulation", "All of these"],
    correct: 0,
    exp: "The oscillator’s frequency varies with input voltage, enabling FM."
  },
  {
    q: "Approximate full-wave loop length for 21.005 MHz is:",
    a: ["21 m", "3.57 m", "7.14 m", "None of these"],
    correct: 0,
    exp: "Full-wave ≈ 300 / 21 ≈ 14.3 m; allowing velocity factor, around 21 m of wire."
  },
  {
    q: "The speed of light, about 300,000,000 m/s, applies when traveling through:",
    a: ["Air", "Water", "Vacuum", "None of these"],
    correct: 2,
    exp: "The constant c is defined in vacuum."
  },
  {
    q: "How many distinct digits does the decimal number system use?",
    a: ["2", "10", "16", "32"],
    correct: 1,
    exp: "Decimal is base-10, using 0–9."
  },
  {
    q: "Find the frequency of a wave 10.6 m long.",
    a: ["3.8 MHz", "28.3 MHz", "29.3 MHz", "21.3 MHz"],
    correct: 2,
    exp: "f = 300 / 10.6 ≈ 28.3–29.3 MHz; 29.3 MHz is closest."
  },
  {
    q: "Which phone mode is most common for HF ham contacts?",
    a: ["Continuous wave", "Frequency-shift keying", "Single-sideband (SSB)", "RTTY"],
    correct: 2,
    exp: "HF voice QSOs almost always use SSB for efficiency."
  },
  {
    q: "The positive peak of a waveform is also called the:",
    a: ["Floor", "Crest", "Trough", "Apex"],
    correct: 1,
    exp: "The crest is the highest point of a wave."
  },
  {
    q: "To suppress transmitter harmonics, what should be added after the final amplifier?",
    a: ["Low-pass filter", "Crystal filter", "High-pass filter", "Reflective filter"],
    correct: 0,
    exp: "Low-pass filtering attenuates harmonics above the fundamental."
  },
  {
    q: "How many unique symbols are in hexadecimal notation?",
    a: ["2", "10", "16", "32"],
    correct: 2,
    exp: "Hex uses digits 0-9 plus A-F for a total of 16."
  },
  {
    q: "Best way to reduce key-clicks when sending Morse code?",
    a: [
      "Gradually ramp up and down the RF envelope",
      "Avoid over-driving the final stage",
      "Maintain perfect antenna SWR",
      "Send at a slower WPM rate"
    ],
    correct: 0,
    exp: "Shaping the keying envelope softens rise/fall times and limits clicks."
  },
  {
    q: "Determine the wavelength of a 435 MHz signal.",
    a: ["7 m", "0.7 m", "21.1 m", "25.9 m"],
    correct: 1,
    exp: "λ = 300 / 435 ≈ 0.69 m."
  },
  {
    q: "A sine wave peaks at 5 V. What is its RMS value?",
    a: ["5 V", "10 V", "2.5 V", "3.54 V"],
    correct: 3,
    exp: "RMS = 0.707 × 5 ≈ 3.54 V."
  },
  {
    q: "Which mode is standard for HF Morse code operation?",
    a: ["Continuous wave (CW)", "Frequency-shift keying", "Single-sideband", "RTTY"],
    correct: 0,
    exp: "CW is the traditional HF telegraphy mode."
  },
  {
    q: "In antenna specs, dBi gain is referenced to a(n):",
    a: ["Isotropic radiator", "Isopole radiator", "Marconi radiator", "Half-wave dipole"],
    correct: 0,
    exp: "dBi compares to an ideal point source radiator."
  },
  {
    q: "A sine wave with 20 V peak-to-peak has what RMS value?",
    a: ["10 V", "7.07 V", "20 V", "5 V"],
    correct: 1,
    exp: "Peak = 10 V; RMS ≈ 0.707 × 10 ≈ 7.07 V."
  },
  {
    q: "What is the frequency of a wave with 0.25 m wavelength?",
    a: ["3.8 MHz", "28.3 MHz", "1.2 GHz", "25.9 MHz"],
    correct: 2,
    exp: "f = 300 / 0.25 ≈ 1.2 GHz."
  },
  {
    q: "Find the wavelength of a signal at 1.8 MHz.",
    a: ["166.7 m", "180 m", "1.8 m", "25.9 m"],
    correct: 0,
    exp: "λ = 300 / 1.8 ≈ 167 m."
  },
  {
    q: "Determine the wavelength of a 14.195 MHz signal.",
    a: ["7 m", "0.7 m", "21.1 m", "25.9 m"],
    correct: 2,
    exp: "λ = 300 / 14.195 ≈ 21 m."
  },
  {
    q: "The negative peak of a waveform is called the:",
    a: ["Floor", "Crest", "Trough", "Apex"],
    correct: 2,
    exp: "Trough is the lowest point of a wave."
  },
  {
    q: "Which of these is a VHF amateur allocation?",
    a: ["70 cm band", "23 cm band", "6-meter band", "10-meter band"],
    correct: 2,
    exp: "The 6-meter band (50 MHz) is part of the VHF spectrum."
  }
];

