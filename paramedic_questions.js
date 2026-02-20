const PARA_QUESTIONS = [
  // ========== SCENARIO 1: Cardiac Arrest / STEMI (Cardiology) ==========
  {
    id: "para-001",
    level: "Paramedic",
    type: "graphical",
    domain: "Cardiology",
    topic: "12-Lead ECG / STEMI Recognition",
    difficulty: "hard",
    scenarioId: "scenario-cardiac-01",
    scenario: {
      enRoute: "You are dispatched to a 58-year-old male complaining of crushing substernal chest pain radiating to his left arm for the past 40 minutes. He has a history of HTN, hyperlipidemia, and type 2 diabetes. He took one aspirin at home.",
      scene: "On arrival, the patient is diaphoretic, pale, and clutching his chest. VS: HR 52, BP 82/50, RR 22, SpO2 94% on room air. You obtain a 12-lead ECG.",
      postScene: "After your initial interventions, the patient suddenly becomes unresponsive and pulseless. The monitor shows ventricular fibrillation."
    },
    phase: "enRoute",
    stem: "En route, you review your protocols. The 12-lead ECG shows ST elevation in leads II, III, and aVF with reciprocal ST depression in leads I and aVL. There is also ST elevation in V5-V6 and right-sided lead V4R. Which coronary artery is MOST likely occluded?",
    image: null,
    options: [
      "Proximal right coronary artery (RCA)",
      "Left anterior descending (LAD)",
      "Left circumflex artery (LCx)",
      "Left main coronary artery"
    ],
    correct: 0,
    explanation: "ST elevation in II, III, aVF indicates inferior STEMI. ST elevation in V4R confirms right ventricular involvement. Combined inferior + RV infarction points to a proximal RCA occlusion (before the RV marginal branch). LAD produces anterior/septal changes (V1-V4). LCx causes lateral changes. Left main would show widespread ST depression with aVR elevation.",
    clinical_pearl: "Always obtain right-sided leads (V4R) in inferior STEMI. RV infarction changes management drastically — avoid nitroglycerin and give aggressive fluid boluses for hypotension."
  },
  {
    id: "para-002",
    level: "Paramedic",
    type: "mr",
    domain: "Cardiology",
    topic: "Inferior STEMI with RV Involvement Management",
    difficulty: "hard",
    scenarioId: "scenario-cardiac-01",
    phase: "scene",
    stem: "On scene, you confirm an inferior STEMI with right ventricular involvement. The patient is hypotensive (BP 82/50) and bradycardic (HR 52). Which TWO interventions are MOST appropriate for this patient? (Select 2)",
    options: [
      "IV fluid bolus of 250-500 mL normal saline",
      "Sublingual nitroglycerin 0.4 mg",
      "Transcutaneous pacing on standby or initiated if atropine fails",
      "Furosemide 40 mg IV push",
      "Dopamine infusion at 2 mcg/kg/min"
    ],
    selectCount: 2,
    correctMulti: [0, 2],
    explanation: "RV infarction causes right-sided heart failure with preload dependence. IV fluids restore preload and improve cardiac output. Bradycardia in inferior MI is due to AV nodal ischemia (RCA supplies the AV node in 85% of people) — transcutaneous pacing should be available. Nitroglycerin is CONTRAINDICATED (reduces preload, worsening hypotension). Furosemide reduces preload further. Low-dose dopamine is a renal dose with no proven benefit here.",
    clinical_pearl: "The RV is a preload-dependent chamber. In RV infarction, think 'volume in, nitro out.' These patients may need 1-2 liters of fluid before pressors."
  },
  {
    id: "para-003",
    level: "Paramedic",
    type: "order",
    domain: "Cardiology",
    topic: "Cardiac Arrest Algorithm — VF/Pulseless VT",
    difficulty: "hard",
    scenarioId: "scenario-cardiac-01",
    phase: "postScene",
    stem: "The patient goes into cardiac arrest with ventricular fibrillation on the monitor. Place the following interventions in the correct sequence per ACLS guidelines:",
    items: [
      "Administer epinephrine 1 mg IV/IO",
      "Defibrillate at 200J biphasic",
      "Administer amiodarone 300 mg IV/IO",
      "Resume high-quality CPR for 2 minutes"
    ],
    correctOrder: [1, 3, 0, 2],
    explanation: "VF/pVT algorithm: (1) Defibrillate immediately (shock first in witnessed arrest), (2) Resume CPR for 2 minutes, (3) Epinephrine after the second shock (given during CPR), (4) Amiodarone after the third shock if VF/pVT persists. Epinephrine is given every 3-5 minutes. Amiodarone second dose is 150 mg.",
    clinical_pearl: "In witnessed VF arrest, early defibrillation is the single most important intervention. Epinephrine is given after the 2nd shock, amiodarone after the 3rd. Remember: Shock → CPR → Epi → Shock → CPR → Amio."
  },

  // ========== SCENARIO 2: Pediatric Toxicology / Seizure ==========
  {
    id: "para-004",
    level: "Paramedic",
    type: "mc",
    domain: "Medical Emergencies",
    topic: "Toxidrome Recognition",
    difficulty: "hard",
    scenarioId: "scenario-peds-tox-01",
    scenario: {
      enRoute: "You are dispatched to a 3-year-old male found by his mother next to an open bottle of her medication. She reports the child may have ingested her grandmother's 'heart pills' approximately 30 minutes ago.",
      scene: "On arrival, the child is lethargic but responsive. VS: HR 48, BP 72/40, RR 14, SpO2 97%, BGL 58 mg/dL. The monitor shows a third-degree AV block. The medication bottle is identified as digoxin 0.25 mg tablets — approximately 10 tablets are missing.",
      postScene: "After initial treatment, the child develops multifocal PVCs and a brief run of ventricular tachycardia. The serum potassium from your i-STAT reads 6.8 mEq/L."
    },
    phase: "enRoute",
    stem: "En route, dispatch updates that the child is 'acting sleepy' and the medication is a cardiac glycoside. Which toxidrome is MOST consistent with cardiac glycoside poisoning?",
    options: [
      "Bradycardia, hyperkalemia, visual disturbances, GI symptoms",
      "Tachycardia, hyperthermia, mydriasis, diaphoresis",
      "Miosis, bradycardia, excessive secretions, bronchospasm",
      "Tachycardia, hypotension, widened QRS, seizures"
    ],
    correct: 0,
    explanation: "Cardiac glycoside (digoxin) toxicity presents with bradycardia (due to enhanced vagal tone and AV block), hyperkalemia (inhibition of Na+/K+ ATPase), visual changes (yellow-green halos), and GI symptoms (nausea, vomiting). Option B describes sympathomimetic toxidrome. Option C describes cholinergic toxidrome. Option D describes sodium channel blocker (TCA) toxicity.",
    clinical_pearl: "In acute digoxin toxicity, serum potassium level is the best predictor of mortality. K+ > 5.5 mEq/L in acute ingestion is an indication for Digibind (digoxin-specific Fab antibodies) regardless of digoxin level."
  },
  {
    id: "para-005",
    level: "Paramedic",
    type: "categorize",
    domain: "Pharmacology",
    topic: "Digoxin Toxicity Management vs Contraindicated Interventions",
    difficulty: "hard",
    scenarioId: "scenario-peds-tox-01",
    phase: "scene",
    stem: "On scene, you confirm digoxin ingestion with third-degree AV block in this pediatric patient. Categorize each intervention as INDICATED or CONTRAINDICATED:",
    items: [
      "Digoxin-specific Fab antibody fragments (Digibind)",
      "Atropine 0.02 mg/kg IV",
      "Calcium chloride IV for hyperkalemia",
      "Dextrose 0.5-1 g/kg IV (D25W)",
      "Synchronized cardioversion"
    ],
    categories: ["Indicated", "Contraindicated"],
    correctCategories: [0, 0, 1, 0, 1],
    explanation: "INDICATED: Digibind is the definitive antidote for severe digoxin toxicity (life-threatening dysrhythmias, K+ > 5.5). Atropine can temporize bradycardia. Dextrose treats the hypoglycemia (BGL 58). CONTRAINDICATED: Calcium administration in digoxin toxicity can precipitate fatal 'stone heart' (cardiac standstill) — calcium potentiates digoxin's effects. Cardioversion can trigger refractory VF in digoxin toxicity.",
    clinical_pearl: "NEVER give calcium to treat hyperkalemia in digoxin toxicity. This is a classic board question. The combination of calcium and digoxin causes irreversible cardiac contracture ('stone heart')."
  },
  {
    id: "para-006",
    level: "Paramedic",
    type: "table",
    domain: "Pharmacology",
    topic: "Pediatric Medication Dosing — Digoxin Toxicity",
    difficulty: "hard",
    scenarioId: "scenario-peds-tox-01",
    phase: "postScene",
    stem: "The child (weight estimated at 15 kg by Broselow tape) now has VT and K+ of 6.8. For each medication, select the CORRECT dose for this patient:",
    rows: [
      "Digibind (Digoxin Immune Fab)",
      "Sodium bicarbonate for hyperkalemia",
      "Amiodarone if VT persists after Digibind"
    ],
    columns: [
      "Weight-based dose appropriate",
      "Fixed adult dose appropriate"
    ],
    correctCells: [[1, 0], [1, 0], [1, 0]],
    explanation: "ALL medications in pediatric patients require weight-based dosing. Digibind: dose is based on amount ingested or digoxin level (empiric dose ~10 vials in unknown ingestion, or calculated). Sodium bicarb: 1 mEq/kg IV for hyperkalemia. Amiodarone: 5 mg/kg IV over 20-60 min. Never use fixed adult doses in a 15 kg child — this is a fundamental paramedic-level principle.",
    clinical_pearl: "For unknown amount of digoxin ingested in a child, empiric Digibind dosing is typically 10-20 vials. Each vial binds 0.5 mg of digoxin. When in doubt, call Poison Control (1-800-222-1222)."
  },

  // ========== STANDALONE QUESTIONS ==========
  {
    id: "para-007",
    level: "Paramedic",
    type: "order",
    domain: "Trauma",
    topic: "Rapid Sequence Intubation (RSI)",
    difficulty: "hard",
    stem: "You are preparing to perform RSI on a 30-year-old male with a GCS of 6 after a high-speed MVC. Place the RSI steps in the correct order:",
    items: [
      "Administer succinylcholine 1.5 mg/kg IV",
      "Preoxygenate with 100% O2 via BVM for 3 minutes",
      "Apply Sellick's maneuver (cricoid pressure)",
      "Administer etomidate 0.3 mg/kg IV",
      "Perform direct laryngoscopy and place ETT"
    ],
    correctOrder: [1, 3, 0, 2, 4],
    explanation: "RSI sequence: (1) Preoxygenate — build oxygen reserve to extend safe apnea time. (2) Administer induction agent (etomidate) — sedation/unconsciousness. (3) Administer paralytic (succinylcholine) — wait for fasciculations to cease (~45-60 sec). (4) Apply cricoid pressure — reduces aspiration risk (though controversial). (5) Perform laryngoscopy and intubate. The mnemonic is 'The 7 P's' — Preparation, Preoxygenation, Pretreatment, Paralysis with induction, Protection/Positioning, Placement, Post-intubation management.",
    clinical_pearl: "Etomidate is preferred in trauma due to hemodynamic stability. Ketamine (1-2 mg/kg) is an alternative. Avoid etomidate in septic patients (adrenal suppression). Succinylcholine is contraindicated in burns >24h, crush injuries, hyperkalemia, and neuromuscular disease."
  },
  {
    id: "para-008",
    level: "Paramedic",
    type: "mc",
    domain: "Medical Emergencies",
    topic: "Waveform Capnography Interpretation",
    difficulty: "hard",
    stem: "You have intubated a 65-year-old cardiac arrest patient. During CPR, the ETCO2 has been reading 18 mmHg. After 20 minutes of resuscitation, the ETCO2 suddenly rises to 42 mmHg. What does this finding MOST likely indicate?",
    options: [
      "Return of spontaneous circulation (ROSC)",
      "Esophageal intubation",
      "Hyperventilation by the BVM operator",
      "Tension pneumothorax development"
    ],
    correct: 0,
    explanation: "A sudden, sustained rise in ETCO2 during CPR strongly suggests ROSC. Restored cardiac output dramatically increases CO2 delivery to the lungs. Esophageal intubation would show near-zero ETCO2. Hyperventilation would decrease ETCO2. Tension pneumothorax would cause a drop in ETCO2 due to decreased cardiac output. An ETCO2 persistently < 10 mmHg after 20 minutes of CPR is associated with very low survival and may be used to guide termination of resuscitation efforts.",
    clinical_pearl: "ETCO2 < 10 mmHg after 20 min of ACLS is a strong predictor of non-survival. A sudden jump to 35-45 mmHg during CPR = check for pulse immediately (likely ROSC)."
  },
  {
    id: "para-009",
    level: "Paramedic",
    type: "mr",
    domain: "Trauma",
    topic: "Tension Pneumothorax — Needle Decompression",
    difficulty: "hard",
    stem: "A 22-year-old male has a stab wound to the right chest. He is in severe respiratory distress with absent breath sounds on the right, JVD, tracheal deviation to the left, and BP 68/palp. You prepare for needle decompression. Which TWO statements are correct regarding this procedure? (Select 2)",
    options: [
      "Insert a 14-gauge catheter at the 2nd intercostal space, midclavicular line, over the top of the 3rd rib",
      "Insert the needle at the 2nd intercostal space, just below the 2nd rib to avoid the neurovascular bundle",
      "The 5th intercostal space, anterior axillary line is an acceptable alternative site",
      "A rush of air confirms correct placement; remove the needle and leave the catheter",
      "Needle decompression is definitive treatment and no further intervention is needed"
    ],
    selectCount: 2,
    correctMulti: [0, 2],
    explanation: "Correct sites for needle decompression: (1) 2nd ICS, midclavicular line — insert OVER the top of the 3rd rib (neurovascular bundle runs under each rib). (2) 5th ICS, anterior axillary line — an acceptable alternative, especially in muscular/obese patients where anterior approach may not reach the pleural space. Option B is wrong — inserting below the rib hits the neurovascular bundle. Option D is partially correct (you do leave the catheter) but you should hear a rush of air AND leave both the catheter in place. Option E is wrong — needle decompression is a temporizing measure; definitive treatment is chest tube thoracostomy.",
    clinical_pearl: "In muscular or obese patients, the standard 3.25-inch 14g catheter may not reach the pleural space via the 2nd ICS. The lateral (5th ICS, AAL) approach has a higher success rate in these patients. Always reassess — you may need to decompress again."
  },
  {
    id: "para-010",
    level: "Paramedic",
    type: "categorize",
    domain: "Cardiology",
    topic: "Synchronized Cardioversion vs Defibrillation",
    difficulty: "hard",
    stem: "Categorize each dysrhythmia as requiring SYNCHRONIZED CARDIOVERSION or UNSYNCHRONIZED DEFIBRILLATION:",
    items: [
      "Unstable SVT with a pulse",
      "Pulseless ventricular tachycardia",
      "Atrial fibrillation with RVR, hemodynamically unstable",
      "Ventricular fibrillation",
      "Unstable monomorphic VT with a pulse",
      "Polymorphic VT (Torsades de Pointes) with a pulse"
    ],
    categories: ["Synchronized Cardioversion", "Unsynchronized Defibrillation"],
    correctCategories: [0, 1, 0, 1, 0, 1],
    explanation: "Synchronized cardioversion is for unstable tachydysrhythmias WITH a pulse and an identifiable R wave: SVT, A-fib/flutter, monomorphic VT. Unsynchronized defibrillation is for: pulseless VT, VF, and polymorphic VT (even with a pulse) — because the irregular QRS morphology makes sync unreliable and may delay the shock. Treat polymorphic VT like VF.",
    clinical_pearl: "Polymorphic VT (Torsades) with a pulse is treated with unsynchronized defibrillation because the monitor cannot reliably identify R waves in the chaotic rhythm. Also give magnesium 2g IV. If you accidentally cardiovert VF/polymorphic VT in sync mode, the device may not fire — switch to defib immediately."
  },
  {
    id: "para-011",
    level: "Paramedic",
    type: "mr",
    domain: "Pharmacology",
    topic: "Vasopressor Selection",
    difficulty: "hard",
    stem: "A 70-year-old female is in septic shock. After 2 liters of NS, her BP is 74/42 with HR 118. MAP is 53. You have peripheral IV access only. Which TWO interventions are MOST appropriate? (Select 2)",
    options: [
      "Push-dose epinephrine (10 mcg/mL) — 0.5-2 mL IV every 2-5 minutes",
      "Norepinephrine drip through the peripheral IV as a bridge",
      "Epinephrine 1 mg IV push (cardiac arrest dose)",
      "Phenylephrine bolus 100 mcg IV",
      "Dopamine infusion at 10-20 mcg/kg/min via peripheral IV"
    ],
    selectCount: 2,
    correctMulti: [0, 1],
    explanation: "Push-dose epinephrine (10 mcg/mL concentration, given 0.5-2 mL = 5-20 mcg per dose) is the ideal bridge pressor for emergency hypotension via peripheral IV. Norepinephrine can be safely run through a peripheral IV for short durations as a bridge — recent evidence supports this practice (previously taught as central-line only). Cardiac arrest dose epi (1 mg) would cause dangerous hypertension/tachycardia in a patient with a pulse. Phenylephrine is a pure alpha agonist — less ideal in sepsis where cardiac output support (beta effect) is also needed. Dopamine has more adverse effects (tachyarrhythmias) and is no longer first-line for septic shock.",
    clinical_pearl: "Push-dose epi recipe: Take 1 mL of 1:10,000 epi (0.1 mg/mL) and add to 9 mL NS = 10 mcg/mL. Give 0.5-2 mL every 2-5 min. This is your 'bridge' pressor while establishing a drip. Label the syringe clearly!"
  },
  {
    id: "para-012",
    level: "Paramedic",
    type: "categorize",
    domain: "Medical Emergencies",
    topic: "H's and T's of Cardiac Arrest",
    difficulty: "hard",
    stem: "During a cardiac arrest resuscitation, you are systematically considering reversible causes. Categorize each finding with its corresponding reversible cause category:",
    items: [
      "Patient found in bathtub, core temp 29°C",
      "Dialysis patient, peaked T waves on monitor",
      "Heroin user found with apnea, miosis",
      "Unrestrained MVC driver with flat neck veins and clear lungs",
      "Recent long-haul flight, acute dyspnea before arrest"
    ],
    categories: ["Hypothermia", "Hyperkalemia", "Hypoxia/Toxins", "Hypovolemia", "Thrombosis (Pulmonary)"],
    correctCategories: [0, 1, 2, 3, 4],
    explanation: "Hypothermia: submersion/cold exposure with core temp < 30°C — 'not dead until warm and dead.' Hyperkalemia: dialysis patients are high-risk; peaked T waves are classic. Hypoxia/Toxins: heroin OD causes respiratory depression → hypoxic arrest (give naloxone + ventilate). Hypovolemia: trauma mechanism + flat neck veins + clear lungs = hemorrhagic shock. Thrombosis (PE): recent immobilization/travel + acute dyspnea — consider tPA in arrest.",
    clinical_pearl: "Remember the H's and T's: Hypovolemia, Hypoxia, Hydrogen ion (acidosis), Hypo/Hyperkalemia, Hypothermia — Tension pneumothorax, Tamponade, Toxins, Thrombosis (coronary/pulmonary). Treat the CAUSE, not just the rhythm."
  },
  {
    id: "para-013",
    level: "Paramedic",
    type: "graphical",
    domain: "Cardiology",
    topic: "Dysrhythmia Interpretation — Wide Complex Tachycardia",
    difficulty: "hard",
    stem: "A 45-year-old male presents with palpitations and near-syncope. The monitor shows a regular wide-complex tachycardia at 180 bpm. QRS duration is 0.16 seconds. There are AV dissociation and capture beats visible. The morphology in V1 shows a monophasic R wave. BP is 96/62. The patient is awake and talking. What is the MOST likely rhythm and appropriate FIRST intervention?",
    image: null,
    options: [
      "Ventricular tachycardia — synchronized cardioversion at 100J",
      "SVT with aberrant conduction — adenosine 6 mg rapid IV push",
      "Ventricular tachycardia — amiodarone 150 mg IV over 10 minutes",
      "Atrial flutter with 1:1 conduction — diltiazem 0.25 mg/kg IV"
    ],
    correct: 0,
    explanation: "AV dissociation and capture beats are pathognomonic for ventricular tachycardia (Brugada criteria). A monophasic R wave in V1 also favors VT. The patient is hemodynamically unstable (near-syncope, BP 96/62), making synchronized cardioversion the first-line treatment. Amiodarone would be appropriate for stable VT. Adenosine could be diagnostic but delays definitive treatment in an unstable patient. Never give calcium channel blockers for wide-complex tachycardia — can cause cardiovascular collapse if it's VT.",
    clinical_pearl: "When in doubt, treat wide-complex tachycardia as VT. Giving adenosine to true VT is generally safe (it just won't work), but giving diltiazem/verapamil to VT can be fatal. AV dissociation = VT until proven otherwise."
  },
  {
    id: "para-014",
    level: "Paramedic",
    type: "table",
    domain: "EMS Operations",
    topic: "Multi-System Trauma Triage — START/JumpSTART",
    difficulty: "hard",
    stem: "You arrive first on scene to an MCI involving a school bus rollover. Using START triage, categorize each patient by selecting the correct triage category:",
    rows: [
      "8-year-old: walking, crying, abrasion on forehead",
      "10-year-old: not walking, RR 32, radial pulse present, follows commands",
      "6-year-old: not breathing, no breath after head-tilt/jaw-thrust",
      "12-year-old: not walking, RR 8, no radial pulse",
      "9-year-old: not walking, RR 24, radial pulse present, does not follow commands"
    ],
    columns: [
      "Green (Minor)",
      "Yellow (Delayed)",
      "Red (Immediate)",
      "Black (Expectant)"
    ],
    correctCells: [
      [1, 0, 0, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 1],
      [0, 0, 1, 0],
      [0, 0, 1, 0]
    ],
    explanation: "START/JumpSTART triage: (1) Walking = GREEN. (2) Not walking, RR 32 (abnormal but breathing), has radial pulse, follows commands = YELLOW. (3) Not breathing after airway maneuver = BLACK (in JumpSTART for kids, give 5 rescue breaths first; if still no breathing = BLACK/expectant). (4) RR 8 (abnormal), no radial pulse = RED (immediate). (5) Has respirations and pulse but doesn't follow commands (altered mental status) = RED.",
    clinical_pearl: "JumpSTART modifies START for pediatrics: if a child is apneic but has a pulse, give 5 rescue breaths. If breathing resumes → RED. If not → BLACK. This differs from adult START where apnea after positioning = BLACK immediately."
  },
  {
    id: "para-015",
    level: "Paramedic",
    type: "mc",
    domain: "Pharmacology",
    topic: "Pediatric Weight-Based Dosing — Seizure Management",
    difficulty: "hard",
    stem: "A 4-year-old (20 kg) is in status epilepticus. Seizures have been continuous for 8 minutes. IV access has been established. Per current guidelines, what is the correct FIRST-LINE medication and dose?",
    options: [
      "Midazolam 0.1 mg/kg IV = 2 mg IV",
      "Diazepam 0.5 mg/kg IV = 10 mg IV",
      "Lorazepam 0.1 mg/kg IV = 2 mg IV",
      "Phenytoin 20 mg/kg IV = 400 mg IV"
    ],
    correct: 2,
    explanation: "Lorazepam (Ativan) 0.1 mg/kg IV is the first-line benzodiazepine for status epilepticus when IV access is available (per ACEP and AAN guidelines). For a 20 kg child: 0.1 × 20 = 2 mg IV. Midazolam IM (0.2 mg/kg) is preferred when no IV access exists. Diazepam 0.5 mg/kg would be a massive overdose (correct dose is 0.15-0.2 mg/kg). Phenytoin is a second-line agent used after benzodiazepines fail.",
    clinical_pearl: "Route matters for seizure management: IV access → lorazepam. No IV → midazolam IM (or intranasal). Rectal diazepam is an option for kids but IM midazolam has been shown to be faster and equally effective (RAMPART trial)."
  }
];
