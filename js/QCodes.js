// =======================================
// Q-Codes Full Review Question Collection
// =======================================
const originalQuestions = [
  {
    q: "QTH is one of the most common Q-codes. What does it indicate?",
    a: [
      "My station location is… / What is your location?",
      "What is your signal strength?",
      "Stand by a moment",
      "Please lower power"
    ],
    correct: 0,
    exp: "QTH exchanges station location information."
  },
  {
    q: "What does QRZ mean when sent as a question?",
    a: [
      "Who is calling me?",
      "Are you ready to transmit?",
      "Shall we change frequency?",
      "Do you confirm my last report?"
    ],
    correct: 0,
    exp: "QRZ asks which station just called you."
  },
  {
    q: "When a station reports QRM, what are they experiencing?",
    a: [
      "Interference from other signals",
      "Natural static from lightning",
      "Low battery voltage",
      "Weak antenna grounding"
    ],
    correct: 0,
    exp: "QRM means man-made interference."
  },
  {
    q: "QRN describes which condition?",
    a: [
      "Atmospheric noise or static",
      "Slow fading of signals",
      "Equipment malfunction",
      "Frequency drift"
    ],
    correct: 0,
    exp: "QRN is static caused by natural sources."
  },
  {
    q: "QRP operation refers to:",
    a: [
      "Low-power transmitting",
      "Repeater linking",
      "Portable mobile use",
      "Remote station control"
    ],
    correct: 0,
    exp: "QRP is the practice of using very low transmitter power."
  },
  {
    q: "If someone sends QRX, what do they want you to do?",
    a: [
      "Stand by or wait",
      "Increase your power",
      "Switch to CW mode",
      "Confirm signal report"
    ],
    correct: 0,
    exp: "QRX politely requests that you wait."
  },
  {
    q: "QSB means:",
    a: [
      "Signal strength is fading up and down",
      "Severe interference",
      "Receiver overload",
      "Bad audio quality"
    ],
    correct: 0,
    exp: "QSB reports signal fading."
  },
  {
    q: "QSL is used to:",
    a: [
      "Confirm receipt of a transmission",
      "Request a frequency change",
      "Report interference",
      "Ask for your location"
    ],
    correct: 0,
    exp: "QSL is the standard confirmation code."
  },
  {
    q: "QSY tells a station to:",
    a: [
      "Change frequency",
      "Reduce power",
      "Repeat the last message",
      "Switch antennas"
    ],
    correct: 0,
    exp: "QSY means 'move to another frequency.'"
  },
  {
    q: "QSO refers to:",
    a: [
      "A two-way radio contact",
      "A station’s physical site",
      "Signal readability",
      "Equipment check"
    ],
    correct: 0,
    exp: "QSO is a completed contact or conversation."
  },
  {
    q: "QRT is a code that means:",
    a: [
      "Stop transmitting / shutting down station",
      "Retune your transmitter",
      "Increase output power",
      "Switch to Morse code"
    ],
    correct: 0,
    exp: "QRT signals that a station is going off the air."
  },
  {
    q: "QRK gives information about:",
    a: [
      "Readability of your signal",
      "Power output",
      "Antenna efficiency",
      "Battery status"
    ],
    correct: 0,
    exp: "QRK is a 1–5 readability report."
  },
  {
    q: "QRV indicates the operator is:",
    a: [
      "Ready to receive or transmit",
      "Requesting a relay",
      "Experiencing interference",
      "Changing frequency"
    ],
    correct: 0,
    exp: "QRV means 'I am ready.'"
  },
  {
    q: "QRL is most often used to ask:",
    a: [
      "Is this frequency in use?",
      "Are you receiving me?",
      "Should we lower power?",
      "What is your location?"
    ],
    correct: 0,
    exp: "QRL checks if a frequency is busy."
  },
  {
    q: "QRO instructs another station to:",
    a: [
      "Increase transmitting power",
      "Lower transmitting power",
      "Move up the band",
      "Repeat the last message"
    ],
    correct: 0,
    exp: "QRO means 'increase power.'"
  },
  {
    q: "QSK operation means:",
    a: [
      "You can break in between CW transmissions",
      "Stop transmitting immediately",
      "Switch antennas",
      "Start sending slowly"
    ],
    correct: 0,
    exp: "QSK allows full break-in CW."
  },
  {
    q: "QSP asks:",
    a: [
      "Will you relay a message?",
      "Shall we change mode?",
      "What is your location?",
      "How is my audio quality?"
    ],
    correct: 0,
    exp: "QSP is a request to relay traffic."
  },
  {
    q: "QSU is shorthand for:",
    a: [
      "Shall I send or do you intend to send on this frequency?",
      "What is your true heading?",
      "Increase your speed",
      "Send more slowly"
    ],
    correct: 0,
    exp: "QSU deals with sending on a specific frequency."
  },
  {
    q: "QSV means:",
    a: [
      "Send a series of V signals for testing",
      "Report your voltage",
      "Move down 5 kHz",
      "Switch to voice mode"
    ],
    correct: 0,
    exp: "QSV is a test request using V signals."
  },
  {
    q: "QSX tells a station to:",
    a: [
      "Listen on a specified frequency",
      "Stand by",
      "Increase power",
      "Use narrow bandwidth"
    ],
    correct: 0,
    exp: "QSX asks an operator to listen on another frequency."
  },
  {
    q: "QTA is used to:",
    a: [
      "Cancel a previously sent message",
      "Request acknowledgement",
      "Report atmospheric static",
      "Change power level"
    ],
    correct: 0,
    exp: "QTA means cancel the last radiogram or message."
  },
  {
    q: "QTC asks about:",
    a: [
      "Traffic or messages waiting",
      "Current time",
      "Receiver tuning",
      "Your call sign"
    ],
    correct: 0,
    exp: "QTC is for message traffic."
  },
  {
    q: "QTR is a request for:",
    a: [
      "The correct time",
      "Transmission report",
      "Relay confirmation",
      "Transmitter readiness"
    ],
    correct: 0,
    exp: "QTR means 'What is the time?'"
  },
  {
    q: "QUD would be used to:",
    a: [
      "Report a distress signal you have heard",
      "Ask for location",
      "Request frequency change",
      "Check signal strength"
    ],
    correct: 0,
    exp: "QUD reports receiving a distress call."
  },
  {
    q: "QUM is shorthand for:",
    a: [
      "Please send emergency traffic",
      "I am closing my station",
      "Increase power quickly",
      "Return to calling frequency"
    ],
    correct: 0,
    exp: "QUM signals emergency traffic is to be sent."
  },
  {
    q: "QRRR is a special code meaning:",
    a: [
      "Official emergency or distress message follows",
      "Reduce your power immediately",
      "Resend last report",
      "Ready to receive"
    ],
    correct: 0,
    exp: "QRRR flags a formal emergency message."
  },
  {
    q: "QGE is used to ask:",
    a: [
      "What is my true bearing from you?",
      "How strong is my signal?",
      "Will you relay traffic?",
      "Shall we change bands?"
    ],
    correct: 0,
    exp: "QGE asks for your station’s bearing to the caller."
  },
  {
    q: "QTE requests:",
    a: [
      "Your true bearing from a fixed point",
      "Time of your last transmission",
      "Signal readability",
      "Power output"
    ],
    correct: 0,
    exp: "QTE deals with directional bearings."
  },
  {
    q: "QBF is a lesser-known code meaning:",
    a: [
      "Your frequency is drifting",
      "Your keying is faulty",
      "Please send at slower speed",
      "Report final frequency"
    ],
    correct: 1,
    exp: "QBF comments on poor keying or key clicks."
  },
  {
    q: "Finally, which Q-code is commonly used to invite anyone listening to reply, even though it is technically not a Q-code?",
    a: [
      "CQ",
      "QRZ",
      "QSO",
      "QRP"
    ],
    correct: 0,
    exp: "CQ is a general call to all stations."
  }
];
