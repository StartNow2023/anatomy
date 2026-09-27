// Stage 1 · Bones
// To change the text for a bone, edit its entry in BONES below
// { id, name, tag: short label on the picture, group, count, short: one-line summary,
//   desc: where it is / what it looks like, feel: how to find it on your body (optional), tip: fun fact (optional),
//   link: words that become clickable links to this bone in other bones' text (regex, optional), zoom: area to zoom into for the quiz (optional) }
const BONES = [
  // ---------- Skull ----------
  { id: "skull", name: "Skull", tag: "Skull", group: "Skull", count: "22 bones", zoom: "head", link: "skull",
    short: "The bones that protect the brain and shape the face.",
    desc: "It works like a helmet and has two parts: 8 cranial bones around the brain (the frontal bone, two parietal bones, the occipital bone, two temporal bones, the sphenoid and the ethmoid) and 14 facial bones that shape the face. In adults most skull bones are locked together by immovable joints called sutures. The mandible is one of the facial bones — it is shown separately in the picture.",
    feel: "Your forehead is the frontal bone, the bump at the back of your head is the external occipital protuberance, and your cheekbones are the zygomatic bones.",
    tip: "A baby's skull is not fully joined yet. The soft spot on top of the head (the anterior fontanelle) usually closes between 1 and 2 years of age." },
  { id: "mandible", name: "Mandible", tag: "Mandible", group: "Skull", count: "1 bone", zoom: "head", link: "mandible|lower jaw",
    short: "The lower jaw — the only skull bone that moves at a joint.",
    desc: "The largest facial bone, shaped like a horseshoe. All the lower teeth sit in it. It meets the rest of the skull at the temporomandibular joint (TMJ), which lets you talk and chew.",
    feel: "Your chin is the front of the mandible, and the corner below and in front of your earlobe is the angle of the mandible. Put a finger just in front of your ear and open and close your mouth — you can feel the jaw sliding at the TMJ.",
    tip: "The angle of the mandible is a big part of what makes a face look square or pointed." },

  // ---------- Trunk ----------
  { id: "cervical", name: "Cervical Vertebrae", tag: "Cervical", group: "Trunk", count: "7 bones", zoom: "head", link: "cervical vertebrae|cervical vertebra",
    short: "The 7 small, flexible vertebrae of the neck.",
    desc: "The vertebrae of the neck are small and the most mobile in the spine. The 1st cervical vertebra is called the atlas and the 2nd is the axis — nodding and turning your head rely mostly on these two.",
    feel: "Bend your head forward: the most prominent bump at the back of your neck is usually the spinous process of C7, the vertebra prominens. It is a handy starting point for counting vertebrae.",
    tip: "Remember \"breakfast at 7, lunch at 12, dinner at 5\": 7 cervical, 12 thoracic and 5 lumbar vertebrae. A giraffe also has just 7 neck vertebrae — each one is simply very long." },
  { id: "thoracic", name: "Thoracic Vertebrae", tag: "Thoracic", group: "Trunk", count: "12 bones", zoom: "trunk", link: "thoracic vertebrae|thoracic vertebra",
    short: "The 12 vertebrae of the chest; each one holds a pair of ribs.",
    desc: "Each thoracic vertebra joins a pair of ribs, and together they form the rib cage. Held in place by the ribs, this part of the spine is steadier and moves less than the neck or the lower back. In the front view it hides behind the sternum and ribs — select it and it shows through.",
    feel: "The row of small bumps down the middle of your upper back are the spinous processes of the thoracic vertebrae.",
    tip: "12 thoracic vertebrae, 12 pairs of ribs — one pair for each." },
  { id: "lumbar", name: "Lumbar Vertebrae", tag: "Lumbar", group: "Trunk", count: "5 bones", zoom: "trunk", link: "lumbar vertebrae",
    short: "The 5 largest vertebrae, in the lower back.",
    desc: "The vertebrae of the lower back are the biggest of all, because they carry the weight of the whole upper body. Low back pain and slipped (herniated) discs often happen here.",
    feel: "A line joining the highest points of your two iliac crests crosses the spine at about L4 — doctors use this to find the right level for a lumbar puncture.",
    tip: "Going down the spine, the vertebrae get bigger and bigger: the lower they are, the more weight they carry." },
  { id: "sacrum", name: "Sacrum", tag: "Sacrum", group: "Trunk", count: "1 bone (5 fused)", zoom: "pelvis", link: "sacrum",
    short: "The triangular bone at the base of the spine — the back wall of the pelvis.",
    desc: "It sits below the lumbar vertebrae and above the coccyx, and joins the two hip bones on either side to form the pelvis. Nerves pass through its small holes, the sacral foramina.",
    feel: "The flat area just below your waist, in the middle of your lower back.",
    tip: "It starts out as 5 separate sacral vertebrae that fuse into a single bone in adulthood." },
  { id: "coccyx", name: "Coccyx", tag: "Coccyx", group: "Trunk", count: "1 bone (3–5 fused)", zoom: "pelvis", link: "coccyx|tailbone",
    short: "The tailbone — the very end of the spine.",
    desc: "The small bone at the bottom of the spine, left over from the tail our distant ancestors had. Small as it is, several muscles and ligaments attach to it.",
    feel: "The tip at the very bottom of the spine, between your buttocks. Landing hard on your bottom is the easiest way to injure it.",
    tip: "An adult spine has 26 bones: 7 cervical + 12 thoracic + 5 lumbar vertebrae, plus the sacrum and the coccyx." },
  { id: "sternum", name: "Sternum", tag: "Sternum", group: "Trunk", count: "1 bone", zoom: "trunk", link: "sternum|breastbone",
    short: "The flat breastbone in the middle of the chest, shaped like a short sword.",
    desc: "It has three parts, from top to bottom: the manubrium, the body and the small xiphoid process. Costal cartilages connect it to the ribs on each side.",
    feel: "The dip between the inner ends of your collarbones is the jugular notch. About 5 cm below it you can feel a horizontal ridge — the sternal angle. The 2nd ribs attach on either side of it, so this is where you start counting ribs.",
    tip: "Chest compressions in CPR are done on the lower half of the sternum." },
  { id: "ribs", name: "Ribs", tag: "Ribs", group: "Trunk", count: "12 pairs (24 bones)", zoom: "trunk", link: "ribs|rib cage|rib",
    short: "12 pairs of curved bones that make a cage around the heart and lungs.",
    desc: "At the back, each rib joins a thoracic vertebra; at the front, costal cartilage (light blue in the picture) links it to the sternum. Ribs 1–7 attach straight to the sternum and are called true ribs. Ribs 8–12 are false ribs: ribs 8–10 join the cartilage of the rib above, and ribs 11 and 12 end freely at the front — the floating ribs. The cartilage makes the rib cage springy so it can expand when you breathe.",
    feel: "The curved edge running down and outward on each side of your lower chest is the costal margin — it is easier to feel when you take a deep breath.",
    tip: "Men and women both have 12 pairs of ribs. The idea that men have one fewer is a myth." },

  // ---------- Upper limb ----------
  { id: "clavicle", name: "Clavicle", tag: "Clavicle", group: "Upper limb", count: "1 pair", zoom: "trunk", link: "clavicles|clavicle|collarbones|collarbone",
    short: "The S-shaped collarbone across the top of the chest.",
    desc: "Its inner end joins the sternum and its outer end joins the acromion of the scapula. It is the only bony link between the arm and the trunk, acting like a strut that holds the shoulder out.",
    feel: "Follow it from the top of the sternum out to your shoulder — the whole bone lies just under the skin.",
    tip: "The clavicle is one of the most commonly broken bones: when you fall on an outstretched hand, the force travels all the way up to it." },
  { id: "scapula", name: "Scapula", tag: "Scapula", group: "Upper limb", count: "1 pair", zoom: "trunk", link: "scapula|shoulder blade",
    short: "The triangular shoulder blade on the upper back.",
    desc: "It lies on the upper back over ribs 2–7. Its shallow glenoid cavity meets the head of the humerus to form the shoulder joint. A ridge across its back, the spine of the scapula, ends on the outside at the acromion. Because it is mostly behind the body, the front view only shows its outer edge — select it and it shows through.",
    feel: "The highest, outermost point of your shoulder is the acromion. With your arms relaxed at your sides, the inferior angle of the scapula is roughly level with the 7th rib — a landmark for counting ribs from the back.",
    tip: "The scapula is held in place mostly by muscles rather than locked to the trunk, so it can glide up, down and around. That is how you can lift your arm above your head." },
  { id: "humerus", name: "Humerus", tag: "Humerus", group: "Upper limb", count: "1 pair", link: "humerus",
    short: "The single long bone of the upper arm.",
    desc: "The round head at the top meets the scapula to form the shoulder joint. The wide, flat lower end meets the radius and ulna to form the elbow joint.",
    feel: "There is a bump on each side of your elbow: the medial epicondyle on the inside and the lateral epicondyle on the outside.",
    tip: "Hitting your \"funny bone\" feels like an electric shock because the ulnar nerve runs right behind the medial epicondyle." },
  { id: "radius", name: "Radius", tag: "Radius", group: "Upper limb", count: "1 pair", link: "radius",
    short: "The forearm bone on the thumb side.",
    desc: "The lateral (thumb-side) bone of the forearm. It is slim at the top and wide at the bottom, where it forms the wrist joint with the carpal bones. When you turn your palm over, the radius rolls around the ulna.",
    feel: "The bony point on the thumb side of your wrist is the radial styloid process. Just inside it, on the palm side, you can feel your pulse — the radial artery.",
    tip: "Stand with your palms facing forward: the radius is on the thumb side and the ulna on the little-finger side. Memory hook — the radius goes \"round\" the ulna when you turn your hand." },
  { id: "ulna", name: "Ulna", tag: "Ulna", group: "Upper limb", count: "1 pair", link: "ulna",
    short: "The forearm bone on the little-finger side.",
    desc: "The medial (little-finger-side) bone of the forearm. Unlike the radius, it is big at the top and small at the bottom. Its upper end hooks around the lower end of the humerus like a wrench, which keeps the elbow stable.",
    feel: "The point of your elbow when you bend it is the olecranon. The small round bump on the back of your wrist, little-finger side, is the head of the ulna.",
    tip: "Radius: slim at the top, thick at the bottom. Ulna: thick at the top, slim at the bottom. The two fit together neatly." },
  { id: "carpals", name: "Carpal Bones", tag: "Carpals", group: "Upper limb", count: "8 per hand", zoom: "hand", link: "carpal bones|carpals",
    short: "8 small bones in the wrist, in two rows.",
    desc: "There are four in each row. Proximal row (next to the forearm): scaphoid, lunate, triquetrum and pisiform. Distal row (next to the palm): trapezium, trapezoid, capitate and hamate. The many small joints between them let the wrist move freely.",
    feel: "On the palm side of your wrist, little-finger side, near the wrist crease, there is a pea-sized bump — the pisiform.",
    tip: "Mnemonic, from the thumb side to the little-finger side, proximal row first: \"She Looks Too Pretty, Try To Catch Her\" — Scaphoid, Lunate, Triquetrum, Pisiform, Trapezium, Trapezoid, Capitate, Hamate." },
  { id: "metacarpals", name: "Metacarpals", tag: "Metacarpals", group: "Upper limb", count: "5 per hand", zoom: "hand", link: "metacarpals",
    short: "The 5 long bones of the palm.",
    desc: "They are numbered 1 to 5, starting from the thumb. The 1st metacarpal is the shortest and thickest and moves the most, which is why your thumb can touch each of your other fingers.",
    feel: "The knuckles on the back of your fist are the heads of the metacarpals.",
    tip: "Punching something hard often breaks the 5th metacarpal (the little-finger one) — doctors call it a \"boxer's fracture\"." },
  { id: "phalanges-h", name: "Phalanges (Hand)", tag: "Phalanges", group: "Upper limb", count: "14 per hand", zoom: "hand", link: "finger bones",
    short: "The finger bones: 2 in the thumb, 3 in each of the other fingers.",
    desc: "The thumb has 2 (proximal and distal) and each of the other four fingers has 3 (proximal, middle and distal): 2 + 4 × 3 = 14.",
    feel: "Bend your fingers and you can feel each bone and the joints between them.",
    tip: "One hand has 27 bones: 8 carpals + 5 metacarpals + 14 phalanges. Two hands have 54 — more than a quarter of all the bones in your body." },

  // ---------- Lower limb ----------
  { id: "hip", name: "Hip Bone", tag: "Hip bone", group: "Lower limb", count: "1 pair", zoom: "pelvis", link: "hip bones|hip bone",
    short: "The large bone on each side of the pelvis, made of the ilium, ischium and pubis.",
    desc: "Three bones — the ilium, ischium and pubis — fuse into one during the teenage years (around age 15–16). The deep socket on its outer side, the acetabulum, holds the head of the femur to form the hip joint. The two hip bones plus the sacrum and coccyx make up the pelvis.",
    feel: "Put your hands on your hips: the curved edge you feel is the iliac crest. Follow it forward to the bony point at its front end — the anterior superior iliac spine. The bones you sit on are the ischial tuberosities.",
    tip: "Women's pelvises are usually wider and shallower, which helps with childbirth." },
  { id: "femur", name: "Femur", tag: "Femur", group: "Lower limb", count: "1 pair", link: "femur|thigh bone",
    short: "The thigh bone — the longest and strongest bone in the body.",
    desc: "It is about a quarter of your height. Its head fits into the acetabulum to form the hip joint; the narrow part just below the head is the neck of the femur. The wide lower end meets the tibia and patella to form the knee joint.",
    feel: "On the outside of your upper thigh you can feel a large bump, the greater trochanter. It moves when you walk or lift your leg.",
    tip: "A broken neck of the femur is one of the most common fractures when older people fall." },
  { id: "patella", name: "Patella", tag: "Patella", group: "Lower limb", count: "1 pair", link: "patella|kneecap",
    short: "The kneecap — the largest sesamoid bone in the body.",
    desc: "A triangular bone at the front of the knee that sits inside the tendon of the quadriceps muscle. It works like a pulley, making it easier to straighten the knee, and it protects the knee joint.",
    feel: "Straighten your leg and relax your thigh — you can slide the patella from side to side.",
    tip: "Babies' kneecaps are still cartilage; they only begin turning into bone at around 3–6 years old." },
  { id: "tibia", name: "Tibia", tag: "Tibia", group: "Lower limb", count: "1 pair", link: "tibia|shin bone",
    short: "The thick shin bone on the inner side of the leg; it carries the weight.",
    desc: "It carries almost all of the body's weight in the lower leg. Its broad upper end meets the femur at the knee, and its lower end bulges inward to form the medial malleolus.",
    feel: "The sharp ridge down the front of your lower leg is the anterior border of the tibia — your shin. There is no muscle over it, which is why knocking your shin hurts so much. The bump on the inner side of your ankle is the medial malleolus.",
    tip: "\"Tibia\" is also the Latin word for a flute — ancient flutes were sometimes made from shin bones." },
  { id: "fibula", name: "Fibula", tag: "Fibula", group: "Lower limb", count: "1 pair", link: "fibula",
    short: "The thin bone on the outer side of the leg; it carries almost no weight.",
    desc: "It mainly anchors muscles, and its lower end forms the lateral malleolus, which steadies the ankle joint.",
    feel: "Below and to the outside of your knee you can feel the head of the fibula. The bump on the outer side of your ankle is the lateral malleolus — compare the two ankles: the lateral malleolus is lower and farther back than the medial malleolus.",
    tip: "Because it carries so little weight, surgeons sometimes take a piece of the fibula to rebuild bone elsewhere in the body." },
  { id: "tarsals", name: "Tarsal Bones", tag: "Tarsals", group: "Lower limb", count: "7 per foot", zoom: "foot", link: "tarsal bones|tarsals",
    short: "The 7 short bones at the back of the foot, including the heel.",
    desc: "The talus, calcaneus, navicular, cuboid and three cuneiforms (medial, intermediate and lateral). The talus sits on top and forms the ankle joint with the tibia and fibula. The calcaneus is the largest — it is your heel (mostly hidden behind the foot in this front view).",
    feel: "Your heel is the calcaneus; the Achilles tendon attaches to it.",
    tip: "Mnemonic: \"Tiger Cubs Need MILC\" — Talus, Calcaneus, Navicular, Medial, Intermediate and Lateral cuneiforms, Cuboid." },
  { id: "metatarsals", name: "Metatarsals", tag: "Metatarsals", group: "Lower limb", count: "5 per foot", zoom: "foot", link: "metatarsals",
    short: "The 5 long bones in the middle of the foot.",
    desc: "Much like the metacarpals of the hand, they are numbered 1 to 5, starting from the big toe. Together with the tarsals they form the arches of the foot, which put the spring in your step.",
    feel: "You can feel them as long ridges on top of your foot. Halfway along the outer edge of your foot there is a bump — the base of the 5th metatarsal.",
    tip: "Walking or running long distances can cause stress fractures in the metatarsals, sometimes called \"march fractures\"." },
  { id: "phalanges-f", name: "Phalanges (Foot)", tag: "Phalanges", group: "Lower limb", count: "14 per foot", zoom: "foot", link: "toe bones",
    short: "The toe bones: 2 in the big toe, 3 in each of the other toes.",
    desc: "They are arranged like the fingers: the big toe has 2 and every other toe has 3. Toe bones are much shorter than finger bones, and in the little toe the middle and distal phalanges are sometimes fused.",
    feel: "Curl your toes and you can feel the phalanges and the joints between them.",
    tip: "One foot has 26 bones: 7 tarsals + 5 metatarsals + 14 phalanges. Hands and feet together have 106 bones — more than half of the whole skeleton!" },
];

// Parts marked on the picture when a bone is zoomed in
// [label, x, y, label offset to the right, label offset down, words to highlight in the description (regex, optional — defaults to the label)]
// x and y are skeleton coordinates (for paired bones, use the one on the left of the picture); offsets are roughly in screen pixels
const MARKS = {
  skull: [["Frontal bone", 150, 28, 44, -10, "frontal bone"], ["Orbit", 137, 56, -46, -8], ["Temporal bone", 183, 58, 36, 8, "temporal bones"],
    ["Zygomatic bone", 123, 70, -44, 14, "zygomatic bones|cheekbones"], ["Maxilla", 143, 82, -44, 30]],
  mandible: [["Angle of mandible", 124, 90, -44, 8, "angle of the mandible"], ["Chin", 150, 104, 0, 30, "chin"],
    ["TMJ", 126, 73, -40, -14, "temporomandibular joint|TMJ"]],
  cervical: [["C1 (atlas)", 150, 95, 52, -12, "atlas"], ["C2 (axis)", 150, 101, 52, 6, "axis"], ["C7 (vertebra prominens)", 150, 132, 52, 12, "C7|vertebra prominens"]],
  thoracic: [["T1", 150, 138, 52, -4], ["T12", 150, 241, 52, 6]],
  lumbar: [["L1", 150, 253, 54, -6], ["L4", 150, 290, 54, 4, "L4"], ["L5", 150, 302, 54, 16]],
  sacrum: [["Sacral foramina", 158, 326, 44, 2, "sacral foramina"]],
  coccyx: [["Tip of coccyx", 150, 364, 40, 12]],
  sternum: [["Jugular notch", 150, 151, 54, -12, "jugular notch"], ["Manubrium", 150, 160, -54, -4, "manubrium"], ["Sternal angle", 150, 170, 54, 6, "sternal angle"],
    ["Body", 150, 196, -54, 2, "body"], ["Xiphoid process", 150, 231, 54, 8, "xiphoid process"]],
  ribs: [["2nd rib", 136, 171, -52, -12, "2nd ribs"], ["7th rib", 129, 217, -52, -2], ["Costal cartilage", 138, 199, 56, 0, "costal cartilage"],
    ["Costal margin", 116, 244, -48, 10, "costal margin"], ["Floating ribs", 104, 259, -40, 22, "floating ribs"]],
  clavicle: [["Sternal end", 140, 151, 24, -24, "inner end"], ["Acromial end", 92, 142, -32, -22, "outer end"]],
  scapula: [["Acromion", 91, 141, -40, -16, "acromion"], ["Glenoid cavity", 92, 157, -46, 4, "glenoid cavity"], ["Inferior angle", 115, 223, -44, 12, "inferior angle"]],
  humerus: [["Head of humerus", 94, 159, -50, -12, "round head"], ["Lateral epicondyle", 67, 266, -44, 8, "lateral epicondyle"], ["Medial epicondyle", 95, 264, 44, 8, "medial epicondyle"]],
  radius: [["Head of radius", 72, 283, -44, -6], ["Radial styloid process", 51, 372, -44, 8, "radial styloid process"]],
  ulna: [["Olecranon", 86, 282, 40, -8, "olecranon"], ["Head of ulna", 73, 368, 40, 10, "head of the ulna"]],
  carpals: [["Scaphoid", 55, 379, -34, -22, "scaphoid"], ["Lunate", 62, 380, -10, -30, "lunate"], ["Triquetrum", 68.5, 379.5, 16, -30, "triquetrum"],
    ["Pisiform", 74, 380.5, 38, -18, "pisiform"], ["Trapezium", 51.5, 387, -40, 24, "trapezium"], ["Trapezoid", 57.5, 388, -12, 34, "trapezoid"],
    ["Capitate", 63.8, 388.5, 14, 34, "capitate"], ["Hamate", 70, 387.5, 38, 24, "hamate"]],
  metacarpals: [["1st metacarpal", 46, 399, -44, -4, "1st metacarpal"], ["5th metacarpal", 75.5, 401, 44, 0, "5th metacarpal"], ["Metacarpal heads", 63, 417, 40, 16, "heads of the metacarpals"]],
  "phalanges-h": [["Proximal phalanx", 63, 426, 44, -12, "proximal"], ["Middle phalanx", 63, 437, 44, 2, "middle"], ["Distal phalanx", 63, 446, 44, 16, "distal"],
    ["Thumb: 2 bones", 38, 420, -40, 0, "thumb"]],
  hip: [["Iliac crest", 104, 298, -44, -12, "iliac crest"], ["ASIS", 93, 312, -44, 6, "anterior superior iliac spine"], ["Ilium", 118, 315, 40, -14, "ilium"],
    ["Acetabulum", 112, 346, -44, 14, "acetabulum"], ["Pubis", 142, 360, 34, 12, "pubis"], ["Ischial tuberosity", 128, 381, -36, 24, "ischial tuberosities"]],
  femur: [["Head of femur", 117, 346, -46, -14, "head"], ["Neck of femur", 110, 352, 40, -22, "neck of the femur"], ["Greater trochanter", 99, 358, -44, 16, "greater trochanter"],
    ["Lateral condyle", 118, 502, -44, 8], ["Medial condyle", 133, 502, 44, 8]],
  patella: [["Base of patella", 126, 486, 40, -8], ["Apex of patella", 126, 505, 40, 10]],
  tibia: [["Tibial tuberosity", 126, 528, 40, -6], ["Anterior border (shin)", 127, 556, 40, 8, "anterior border"], ["Medial malleolus", 138, 600, 40, 10, "medial malleolus"]],
  fibula: [["Head of fibula", 111.5, 524, -44, -4, "head of the fibula"], ["Lateral malleolus", 116.5, 607, -44, 10, "lateral malleolus"]],
  tarsals: [["Talus", 127, 609, 38, -12, "talus"], ["Calcaneus", 113, 617, -38, -8, "calcaneus"], ["Navicular", 132.5, 617.5, 40, 6, "navicular"],
    ["Cuboid", 116.5, 625, -38, 14, "cuboid"], ["Cuneiforms", 129, 626, 30, 26, "cuneiforms"]],
  metatarsals: [["1st metatarsal", 138, 640, 38, -6], ["5th metatarsal", 112, 637, -38, 4, "5th metatarsal"]],
  "phalanges-f": [["Big toe: 2 bones", 140.5, 658, 36, 2, "big toe"], ["Little toe", 108, 651, -36, 6, "little toe"]],
};

// Find them on your body: add a line in the format ["name", "how to find it", "bone id/marked part"]
const LANDMARKS = [
  { icon: "🙂", title: "Head, neck & trunk", items: [
    ["External occipital protuberance", "The most prominent point in the middle of the back of your head, just above the hairline.", "skull"],
    ["Angle of the mandible", "The corner of your jaw, just below the earlobe.", "mandible/Angle of mandible"],
    ["C7 spinous process (vertebra prominens)", "Bend your head forward: the most prominent bump in the middle of the back of your neck.", "cervical/C7 (vertebra prominens)"],
    ["Jugular notch", "The small dip at the top of the sternum, between the inner ends of your collarbones.", "sternum/Jugular notch"],
    ["Sternal angle", "A horizontal ridge about 5 cm below the jugular notch. The 2nd ribs attach on either side of it.", "sternum/Sternal angle"],
    ["Costal margin", "The curved lower edge of the rib cage on each side — clearer when you breathe in deeply.", "ribs/Costal margin"],
  ]},
  { icon: "💪", title: "Upper limb", items: [
    ["Clavicle", "Follow it from the top of the sternum toward your shoulder — the whole bone is just under the skin.", "clavicle"],
    ["Acromion", "The highest, outermost point of your shoulder.", "scapula/Acromion"],
    ["Medial and lateral epicondyles", "The bumps on the inner and outer sides of your elbow. Behind the medial one is the \"funny bone\" (the ulnar nerve) — press gently!", "humerus/Medial epicondyle"],
    ["Olecranon", "The point of your elbow when you bend it.", "ulna/Olecranon"],
    ["Radial styloid process", "The bony point on the thumb side of your wrist.", "radius/Radial styloid process"],
    ["Head of the ulna", "The small round bump on the back of your wrist, little-finger side.", "ulna/Head of ulna"],
  ]},
  { icon: "🦵", title: "Lower limb", items: [
    ["Iliac crest", "The curved bony edge you feel when you put your hands on your hips.", "hip/Iliac crest"],
    ["Anterior superior iliac spine (ASIS)", "Follow the iliac crest forward to the bony point at its front end, about where a belt sits.", "hip/ASIS"],
    ["Greater trochanter", "The big bump on the outer side of your upper thigh; you can feel it move when you lift your leg.", "femur/Greater trochanter"],
    ["Patella", "With your leg straight and relaxed, you can slide it from side to side.", "patella"],
    ["Anterior border of the tibia", "The bony ridge down the front of your shin.", "tibia/Anterior border (shin)"],
    ["Medial and lateral malleoli", "The bumps on either side of your ankle. Compare them: the lateral one is lower and farther back.", "tibia/Medial malleolus"],
    ["Calcaneus", "Your heel.", "tarsals/Calcaneus"],
  ]},
];

/* ================= Skeleton (an original simplified drawing) =================
   Coordinates: 300 wide, 675 tall, midline at x = 150.
   Only the left side of the picture (the person's right side) is drawn; it is mirrored for the other side. */
const SK_W = 300, SK_H = 675;
const SK_ZOOM = {
  head: "92 0 116 150",
  trunk: "58 88 184 290",
  pelvis: "84 282 132 118",
  hand: "26 356 72 104",
  foot: "98 588 56 86",
};

(function () {
  const f = (n) => Math.round(n * 10) / 10;
  // Basic shapes: C circle, E ellipse, R rounded rectangle, K rod with round ends, P any path, S stroked line
  const C = (cx, cy, r) => `<circle cx="${cx}" cy="${cy}" r="${r}"/>`;
  const E = (cx, cy, rx, ry, rot = 0) => `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}"${rot ? ` transform="rotate(${rot} ${cx} ${cy})"` : ""}/>`;
  const R = (x, y, w, h, r) => `<rect x="${f(x)}" y="${f(y)}" width="${f(w)}" height="${f(h)}" rx="${r}"/>`;
  const P = (d) => `<path d="${d}"/>`;
  function K(x1, y1, x2, y2, w1, w2 = w1) {
    const dx = x2 - x1, dy = y2 - y1, len = Math.hypot(dx, dy) || 1;
    const nx = -dy / len, ny = dx / len;
    const a = w1 / 2, b = w2 / 2;
    return `<path d="M${f(x1 + nx * a)},${f(y1 + ny * a)} L${f(x2 + nx * b)},${f(y2 + ny * b)} L${f(x2 - nx * b)},${f(y2 - ny * b)} L${f(x1 - nx * a)},${f(y1 - ny * a)} Z"/>` + C(x1, y1, f(a)) + C(x2, y2, f(b));
  }
  // A chain of short rods with small joint gaps between them (for finger and toe bones)
  function chain(pts, w, gap = 1.3) {
    let out = "";
    for (let i = 0; i < pts.length - 1; i++) {
      const [x1, y1] = pts[i], [x2, y2] = pts[i + 1];
      const dx = x2 - x1, dy = y2 - y1, len = Math.hypot(dx, dy);
      const g = (gap + w / 2) / len;
      out += K(x1 + dx * g, y1 + dy * g, x2 - dx * (w / 2 / len), y2 - dy * (w / 2 / len), w, w * 0.85);
    }
    return out;
  }

  // Each bone: [list of shapes]; stroked lines use {s: path, w: width, cls}
  const MID = {}, SIDE = {};

  // ---- Skull ----
  MID.skull = {
    body: [P("M150,12 C173,12 185,28 185,50 C185,61 182,69 178,75 L173,80 C169,86 162,89 150,89 C138,89 131,86 127,80 L122,75 C118,69 115,61 115,50 C115,28 127,12 150,12 Z")],
    detail: `<ellipse class="hole" cx="137" cy="56" rx="9.5" ry="8.5"/><ellipse class="hole" cx="163" cy="56" rx="9.5" ry="8.5"/>
      <path class="hole" d="M150,63 C146,69 144,75 146,78 L154,78 C156,75 154,69 150,63 Z"/>
      <path class="ln" d="M137,83.5 H163 M141,81 V86 M145.5,81 V86.5 M150,81 V87 M154.5,81 V86.5 M159,81 V86 M121,68 C126,70 128,72 128,76 M179,68 C174,70 172,72 172,76"/>`,
  };
  MID.mandible = {
    body: [P("M123,72 L126,72 L129,84 C133,88 141,89.5 150,89.5 C159,89.5 167,88 171,84 L174,72 L177,72 L177,86 C176,97 164,106 150,106 C136,106 124,97 123,86 Z")],
    detail: `<path class="ln" d="M137,92.5 H163 M141,90 V95 M145.5,90 V95.5 M150,90 V96 M154.5,90 V95.5 M159,90 V95"/>`,
  };

  // ---- Vertebral column ----
  MID.cervical = { body: [0, 1, 2, 3, 4, 5, 6].map((i) => R(141 - i * 0.3, 92 + i * 6.3, 18 + i * 0.6, 5.2, 2)) };
  MID.thoracic = { body: Array.from({ length: 12 }, (_, i) => R(139 - i * 0.2, 134 + i * 9.4, 22 + i * 0.4, 8, 2.5)) };
  MID.lumbar = {
    body: Array.from({ length: 5 }, (_, i) => {
      const y = 248 + i * 12.2, w = 28 + i;
      return R(150 - w / 2, y, w, 10.4, 3) + K(150 - w / 2, y + 5, 150 - w / 2 - 8 + i * 0.6, y + 5 + i * 0.4, 4.2, 3) + K(150 + w / 2, y + 5, 150 + w / 2 + 8 - i * 0.6, y + 5 + i * 0.4, 4.2, 3);
    }),
  };
  MID.sacrum = {
    body: [P("M131,310 C140,307 160,307 169,310 C168,326 162,342 155,352 L145,352 C138,342 132,326 131,310 Z")],
    detail: `<g class="hole">${[0, 1, 2, 3].map((i) => C(142 + i * 1.6, 318 + i * 8.5, 1.8 - i * 0.2) + C(158 - i * 1.6, 318 + i * 8.5, 1.8 - i * 0.2)).join("")}</g>
      <path class="ln" d="M137,322 H163 M140,331 H160 M143,340 H157"/>`,
  };
  MID.coccyx = { body: [R(145.5, 353.5, 9, 3.6, 1.5), R(146.5, 358, 7, 3, 1.3), R(147.5, 361.8, 5, 2.6, 1.2)] };

  // ---- Sternum ----
  MID.sternum = {
    body: [
      P("M137,150 Q150,155 163,150 L161,158 L157,169 L143,169 L139,158 Z"),
      P("M143,171 L157,171 L159,221 C155,224 145,224 141,221 Z"),
      P("M145,224 L155,224 L151.5,237 L148.5,237 Z"),
    ],
  };

  // ---- Scapula (behind the rib cage) ----
  SIDE.scapula = {
    body: [P("M91,140 C101,137 112,140 122,147 L129,151 C129,175 125,200 115,225 C109,208 101,186 97,168 C92,165 89,160 90,155 C87,150 87,144 91,140 Z")],
    detail: `<path class="ln" d="M96,150 C104,150 112,152 124,160"/>`,
  };

  // ---- Ribs: the far (back) half is a little darker; the near (front) half joins the costal cartilage ----
  (function () {
    const hw = [21, 32, 40, 46, 50, 53, 55, 55, 54, 51, 46, 36];
    const sternalY = [156, 170, 180, 190, 199, 208, 217];
    const far = [], near = [], cart = [];
    for (let i = 0; i < 12; i++) {
      const ys = 138 + i * 9.4;          // back end (joins a thoracic vertebra)
      const xl = 150 - hw[i], yl = ys + 13;  // outermost point
      far.push({ s: `M138,${f(ys)} C${f(138 - hw[i] * 0.45)},${f(ys - 4)} ${xl},${f(yl - hw[i] * 0.4)} ${xl},${f(yl)}`, w: i < 1 ? 4 : 4.6 });
      if (i < 7) { // true ribs: front end joins the sternum
        const ya = sternalY[i];
        const xe = 150 - 13 - Math.min(i, 4) * 2.5;
        near.push({ s: `M${xl},${f(yl)} C${xl},${f(yl + hw[i] * 0.35)} ${f(xl + hw[i] * 0.45)},${f(ya + 2)} ${f(xe)},${f(ya)}`, w: i < 1 ? 4 : 4.6 });
        cart.push({ s: `M${f(xe)},${f(ya)} L142,${f(ya - 0.5)}`, w: 4 });
      } else if (i < 10) { // ribs 8–10: cartilage joins the rib above
        const end = [[118, 238], [112, 250], [107, 260]][i - 7];
        near.push({ s: `M${xl},${f(yl)} C${xl},${f(yl + 14)} ${f(end[0] - 6)},${f(end[1] + 2)} ${end[0]},${end[1]}`, w: 4.4 });
        const to = [[140, 222], [120, 236], [114, 248]][i - 7];
        cart.push({ s: `M${end[0]},${end[1]} C${f((end[0] + to[0]) / 2)},${f(end[1] - 2)} ${f(to[0] - 3)},${f(to[1] + 4)} ${to[0]},${to[1]}`, w: 3.6 });
      } else { // floating ribs: front end is free
        const end = [[103, 262], [116, 262]][i - 10];
        near.push({ s: `M${xl},${f(yl)} C${xl},${f(yl + 8)} ${f(end[0] - 2)},${f(end[1] - 4)} ${end[0]},${end[1]}`, w: 4 });
      }
    }
    SIDE.ribs = { layers: [{ cls: "far", shapes: far }, { shapes: near }, { cls: "cart", shapes: cart }] };
  })();

  SIDE.clavicle = { layers: [{ shapes: [{ s: "M141,151 C130,156 118,146 107,146 C100,146 95,143 90,141", w: 6.5 }] }] };

  // ---- Upper limb ----
  SIDE.humerus = {
    body: [C(94, 159, 9.5), K(91, 166, 80, 258, 11, 9.5), P("M76,254 C73,259 68,262 66,266 C66,271 70,276 74,278 C79,280 85,280 90,278 C94,275 96,269 95,264 C93,259 88,256 86,252 Z")],
  };
  SIDE.ulna = { body: [E(86, 285, 5.5, 8), K(85, 288, 73, 364, 7, 4), C(73, 366, 3.8)] };
  SIDE.radius = { body: [E(72, 283, 5.8, 3.2), K(72, 285, 60, 362, 5.2, 9), P("M53,360 L67,360 C69,366 68,371 64,373 L55,375 C51,376 50,371 51,366 Z")] };
  SIDE.carpals = {
    body: [E(55, 379, 3.4, 3, -20), E(62, 380, 3.2, 3.1), E(68.5, 379.5, 3, 2.8), C(74, 380.5, 2.2),
      E(51.5, 387, 3, 3.2, 20), E(57.5, 388, 2.8, 3), E(63.8, 388.5, 3.2, 3.6), E(70, 387.5, 3, 3.2)],
  };
  SIDE.metacarpals = {
    body: [K(49, 392, 43, 405, 4.2, 3.4), K(56.5, 393, 55, 416, 3.4, 3.2), K(63, 394, 63, 418, 3.6, 3.3), K(69, 393, 70, 415, 3.3, 3.1), K(74, 391.5, 77, 411, 3.2, 3)],
  };
  SIDE["phalanges-h"] = {
    body: [
      chain([[43, 405], [39, 416], [37, 425]], 3.2),
      chain([[55, 416], [54, 429], [53.5, 438], [53, 445]], 2.9),
      chain([[63, 418], [63, 432], [63, 442], [63, 449]], 3),
      chain([[70, 415], [71, 428], [71.5, 437], [72, 444]], 2.8),
      chain([[77, 411], [79, 421], [80, 428], [81, 434]], 2.5),
    ],
  };

  // ---- Lower limb ----
  SIDE.hip = {
    body: [P("M139,304 C126,296 104,295 93,303 C89,307 91,315 96,320 C103,327 109,335 111,344 C112,353 115,362 119,371 C123,380 131,383 135,379 C139,374 143,371 148,371 L148,362 C143,360 137,356 135,351 C134,343 136,332 140,320 Z")],
    detail: `<ellipse class="hole" cx="131" cy="364" rx="5.5" ry="7" transform="rotate(-15 131 364)"/><path class="ln" d="M104,306 C112,312 120,322 126,336"/>`,
  };
  SIDE.femur = {
    body: [C(117, 346, 8.5), K(116, 347, 104, 357, 9.5, 10), E(101, 358, 6.5, 9, -10), K(106, 362, 124, 490, 12, 11),
      C(118.5, 500, 8.2), C(133, 500, 8.2), E(126, 496, 12, 7)],
  };
  SIDE.patella = { body: [P("M119,489 C121,484 131,484 133,489 C134,496 130,505 126,506 C122,505 118,496 119,489 Z")] };
  SIDE.fibula = { body: [C(111.5, 524, 4.2), K(111.5, 526, 116, 604, 4.2, 3.6), E(116.5, 606, 3.8, 6.5)] };
  SIDE.tibia = {
    body: [E(126.5, 518, 15.5, 5.5), K(126, 521, 131, 594, 13, 10), E(137.5, 598, 4.2, 6.5, -10), E(130.5, 598, 7.5, 4)],
    detail: `<path class="ln" d="M127,530 C127,550 128,570 130,590"/>`,
  };
  SIDE.tarsals = {
    body: [E(127, 609, 9, 5.5), E(113.5, 616, 4.2, 5.5), E(132.5, 617.5, 6.5, 3.4), E(116.5, 625, 4.2, 4.6),
      E(123, 626, 3, 4.2), E(129, 626, 3, 4.2), E(136, 625.5, 3.6, 4.4)],
  };
  SIDE.metatarsals = {
    body: [K(137, 632, 139, 648, 5.2, 4.6), K(130, 632, 130.5, 650, 3.6, 3.2), K(124, 632, 123, 649, 3.4, 3), K(118.5, 631, 116.5, 647, 3.3, 3), K(114, 629.5, 110, 644, 3.4, 3)],
  };
  SIDE["phalanges-f"] = {
    body: [
      chain([[139, 648], [140, 656], [140.5, 663]], 4.4),
      chain([[130.5, 650], [130.8, 656], [131, 660.5], [131.2, 664]], 2.9),
      chain([[123, 649], [122.8, 654.5], [122.6, 658.5], [122.5, 662]], 2.7),
      chain([[116.5, 647], [115.8, 652], [115.4, 656], [115, 659]], 2.6),
      chain([[110, 644], [108.8, 648.5], [108.2, 652], [107.8, 655]], 2.4),
    ],
  };

  // Drawing order (later bones are drawn on top)
  const ORDER = ["scapula", "cervical", "thoracic", "lumbar", "sacrum", "coccyx", "hip", "ribs", "sternum", "clavicle",
    "mandible", "skull", "humerus", "ulna", "radius", "carpals", "metacarpals", "phalanges-h",
    "tarsals", "fibula", "tibia", "femur", "patella", "metatarsals", "phalanges-f"];

  function shapes(list, cls) {
    const edge = [], fill = [];
    list.forEach((s) => {
      if (typeof s === "string") { edge.push(s); fill.push(s); return; }
      edge.push(`<path class="s" d="${s.s}" style="--w:${s.w}px"/>`);
      fill.push(`<path class="s" d="${s.s}" style="--w:${s.w}px"/>`);
    });
    const c = cls ? ` ${cls}` : "";
    return `<g class="e${c}">${edge.join("")}</g><g class="f${c}">${fill.join("")}</g>`;
  }
  function groupHTML(id, def, mirror) {
    const layers = def.layers || [{ shapes: def.body }];
    const inner = layers.map((l) => shapes(l.shapes, l.cls)).join("") + (def.detail ? `<g class="d">${def.detail}</g>` : "");
    return `<g class="b" data-bone="${id}"${mirror ? ` transform="matrix(-1 0 0 1 ${SK_W} 0)"` : ""}>${inner}</g>`;
  }
  const BODY = ORDER.map((id) => MID[id] ? groupHTML(id, MID[id]) : groupHTML(id, SIDE[id]) + groupHTML(id, SIDE[id], true)).join("");

  // Builds the skeleton SVG. opt.sel: a bone is selected; opt.zoom: area to zoom into
  window.skeletonSVG = function (opt = {}) {
    const vb = opt.zoom && SK_ZOOM[opt.zoom] ? SK_ZOOM[opt.zoom] : `0 0 ${SK_W} ${SK_H}`;
    return `<svg class="sk${opt.sel ? " sel" : ""}${opt.zoom ? " z-" + opt.zoom : ""}${opt.cls ? " " + opt.cls : ""}" viewBox="${vb}" role="img" aria-label="${opt.label || "Front view of the human skeleton"}">
      ${BODY}<g class="top"></g></svg>`;
  };
  // Highlights a bone and puts a copy on top, so bones hidden behind others can still be seen
  window.skeletonSelect = function (svg, id) {
    const top = svg.querySelector(".top");
    top.innerHTML = "";
    svg.querySelectorAll(".b.on").forEach((g) => g.classList.remove("on"));
    svg.classList.toggle("sel", !!id);
    if (!id) return;
    svg.querySelectorAll(`.b[data-bone="${id}"]`).forEach((g) => {
      g.classList.add("on");
      const c = g.cloneNode(true);
      c.removeAttribute("data-bone");
      top.appendChild(c);
    });
  };
})();

/* ================= Page behaviour ================= */
(function () {
  const byId = Object.fromEntries(BONES.map((b) => [b.id, b]));
  const GROUPS = ["Skull", "Trunk", "Upper limb", "Lower limb"];
  const reduceMotion = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  const reEsc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  // Name labels on the picture: [bone id, x and y the line points to, y of the label]. The left column points to bones on the person's right side, the right column to midline bones
  const ATLAS_L = [["clavicle", 112, 147, 147], ["scapula", 99, 182, 172], ["humerus", 84, 215, 215], ["hip", 97, 306, 262],
    ["ulna", 81, 318, 296], ["radius", 65, 330, 322], ["carpals", 62, 382, 378], ["metacarpals", 62, 405, 403], ["phalanges-h", 60, 432, 430],
    ["femur", 118, 470, 462], ["patella", 123, 497, 497], ["fibula", 113, 550, 540], ["tibia", 128, 566, 566],
    ["tarsals", 119, 617, 612], ["metatarsals", 124, 640, 638], ["phalanges-f", 122, 660, 662]];
  const ATLAS_R = [["skull", 180, 40, 40], ["mandible", 172, 98, 96], ["cervical", 158, 120, 122], ["thoracic", 160, 152, 150],
    ["sternum", 156, 190, 180], ["ribs", 198, 215, 212], ["lumbar", 164, 277, 275], ["sacrum", 163, 318, 318], ["coccyx", 153, 360, 360]];
  const MARGIN = 96;

  // ---- Explore the skeleton ----
  const fig = document.getElementById("sk-fig");
  if (fig) {
    const info = document.getElementById("sk-info");
    const cap = document.getElementById("sk-cap");
    const list = document.getElementById("sk-list");
    const btnFull = document.getElementById("sk-full");
    const btnLab = document.getElementById("sk-lab");
    fig.innerHTML = skeletonSVG({ label: "Front view of the human skeleton. Click a bone to learn about it." });
    const svg = fig.querySelector("svg");
    const NS = "http://www.w3.org/2000/svg";
    const atlas = document.createElementNS(NS, "g"); atlas.setAttribute("class", "atlas");
    const marksG = document.createElementNS(NS, "g"); marksG.setAttribute("class", "marks");
    svg.append(atlas, marksG);
    atlas.innerHTML = ATLAS_L.map(([id, ax, ay, ly]) => `<g data-bone="${id}"><line x1="-4" y1="${ly - 3}" x2="${ax}" y2="${ay}"/><circle cx="${ax}" cy="${ay}" r="2"/><text x="-8" y="${ly}" text-anchor="end">${AN.esc(byId[id].tag)}</text></g>`).join("") +
      ATLAS_R.map(([id, ax, ay, ly]) => `<g data-bone="${id}"><line x1="304" y1="${ly - 3}" x2="${ax}" y2="${ay}"/><circle cx="${ax}" cy="${ay}" r="2"/><text x="308" y="${ly}">${AN.esc(byId[id].tag)}</text></g>`).join("");

    list.innerHTML = GROUPS.map((g) => `
      <div class="sk-group"><span class="label">${g}</span><div class="chips">
        ${BONES.filter((b) => b.group === g).map((b) => `<button class="chip" data-bone="${b.id}">${AN.esc(b.name)}</button>`).join("")}
      </div></div>`).join("");

    let cur = null, zoomed = false, labelsOn = window.innerWidth > 760, anim = 0, pending = null;
    let vb = [0, 0, SK_W, SK_H];

    // ---- Zooming ----
    const fullRect = () => (labelsOn ? [-MARGIN, 0, SK_W + 2 * MARGIN, SK_H] : [0, 0, SK_W, SK_H]);
    function boneRect(id) {
      const g = svg.querySelector(`.b[data-bone="${id}"]:not([transform])`);
      const bb = g.getBBox();
      const p = Math.max(16, 0.35 * Math.max(bb.width, bb.height));
      let [x, y, w, h] = [bb.x - p, bb.y - p, bb.width + 2 * p, bb.height + 2 * p];
      if (w < 64) { x -= (64 - w) / 2; w = 64; }
      const W = svg.clientWidth || 300, H = svg.clientHeight || 600;
      // Make room for the part labels too so they aren't cut off. Their size depends on the zoom (u = units per screen pixel), so repeat until it settles
      const need = (u) => {
        let [x0, y0, x1, y1] = [x, y, x + w, y + h];
        (MARKS[id] || []).forEach(([name, mx, my, dx, dy]) => {
          const lx = mx + dx * u, ly = my + dy * u, tw = name.length * 7.2 * u;
          const left = Math.abs(dx) < 20 ? lx - tw / 2 : dx < 0 ? lx - tw : lx;
          x0 = Math.min(x0, left - 8 * u); x1 = Math.max(x1, left + tw + 8 * u);
          y0 = Math.min(y0, ly - 16 * u); y1 = Math.max(y1, ly + 8 * u);
        });
        return [x0, y0, x1, y1];
      };
      let u = Math.max(w / W, h / H);
      for (let n = 0; n < 60; n++) {
        const [x0, y0, x1, y1] = need(u);
        const nu = Math.min(Math.max((x1 - x0) / W, (y1 - y0) / H), (SK_W * 1.4) / W);
        if (Math.abs(nu - u) < 1e-4) break;
        u = nu;
      }
      const [x0, y0, x1, y1] = need(u);
      const cx = (x0 + x1) / 2, cy = (y0 + y1) / 2;
      return [cx - (W * u) / 2, cy - (H * u) / 2, W * u, H * u];
    }
    function apply() {
      svg.setAttribute("viewBox", vb.map((n) => n.toFixed(2)).join(" "));
      const s = Math.min(svg.clientWidth / vb[2], svg.clientHeight / vb[3]) || 1;
      svg.style.setProperty("--u", (1 / s).toFixed(4));
      svg.style.setProperty("--k", Math.min(1.25, 1 / s).toFixed(4));
    }
    function go(target, instant) {
      cancelAnimationFrame(anim);
      marksG.innerHTML = "";
      svg.classList.toggle("zoomed", zoomed);
      btnFull.disabled = !zoomed;
      const from = vb.slice(), t0 = performance.now(), dur = instant || reduceMotion ? 0 : 480;
      const step = (t) => {
        const p = dur ? Math.min(1, (t - t0) / dur) : 1;
        const e = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
        vb = from.map((v, i) => v + (target[i] - v) * e);
        apply();
        if (p < 1) anim = requestAnimationFrame(step); else if (zoomed && cur) drawMarks();
      };
      anim = requestAnimationFrame(step);
    }

    // ---- Parts marked on the picture ----
    function drawMarks() {
      const u = parseFloat(svg.style.getPropertyValue("--u")) || 1;
      marksG.innerHTML = (MARKS[cur] || []).map(([name, x, y, dx, dy], i) => {
        const lx = x + dx * u, ly = y + dy * u;
        const anchor = Math.abs(dx) < 20 ? "middle" : dx < 0 ? "end" : "start";
        const ey = anchor === "middle" ? (dy < 0 ? ly + 3 * u : ly - 12 * u) : ly - 4 * u;
        const ex = anchor === "middle" ? lx : lx - Math.sign(dx) * 3 * u;
        return `<g class="mark" data-i="${i}"><line x1="${x}" y1="${y}" x2="${ex.toFixed(2)}" y2="${ey.toFixed(2)}"/>
          <circle class="ring" cx="${x}" cy="${y}" r="${(4 * u).toFixed(2)}"/><circle class="dot" cx="${x}" cy="${y}" r="${(3.4 * u).toFixed(2)}"/>
          <text x="${lx.toFixed(2)}" y="${ly.toFixed(2)}" text-anchor="${anchor}">${AN.esc(name)}</text></g>`;
      }).join("");
      // On narrow phone screens, nudge labels that don't fit back inside the picture
      const pad = 4 * u, [vx, vy, vw, vh] = vb;
      marksG.querySelectorAll("text").forEach((t) => {
        const bb = t.getBBox();
        const sx = bb.x < vx + pad ? vx + pad - bb.x : bb.x + bb.width > vx + vw - pad ? vx + vw - pad - bb.x - bb.width : 0;
        const sy = bb.y < vy + pad ? vy + pad - bb.y : bb.y + bb.height > vy + vh - pad ? vy + vh - pad - bb.y - bb.height : 0;
        if (!sx && !sy) return;
        t.setAttribute("x", (+t.getAttribute("x") + sx).toFixed(2));
        t.setAttribute("y", (+t.getAttribute("y") + sy).toFixed(2));
        const ln = t.parentNode.querySelector("line");
        ln.setAttribute("x2", (+ln.getAttribute("x2") + sx).toFixed(2));
        ln.setAttribute("y2", (+ln.getAttribute("y2") + sy).toFixed(2));
      });
      if (pending != null) { const i = pending; pending = null; ping(i); }
    }
    function hot(i) {
      svg.querySelectorAll(".mark").forEach((m) => m.classList.toggle("hot", m.dataset.i === String(i)));
      info.querySelectorAll("[data-mk]").forEach((s) => s.classList.toggle("hot", s.dataset.mk === String(i)));
    }
    function ping(i) {
      if (!zoomed) { pending = i; zoomed = true; go(boneRect(cur)); return; }
      const m = svg.querySelector(`.mark[data-i="${i}"]`);
      if (!m) return;
      m.classList.remove("ping"); void m.getBBox(); m.classList.add("ping");
      hot(i);
      clearTimeout(ping.t); ping.t = setTimeout(() => hot(null), 1600);
    }

    // ---- Description text: part names point to the picture, other bone names link to those bones ----
    function linkify(text, b) {
      const parts = [];
      (MARKS[b.id] || []).forEach((m, i) => parts.push({ src: m[5] || reEsc(m[0]), mk: i }));
      BONES.forEach((o) => { if (o.id !== b.id && o.link) parts.push({ src: o.link, bone: o.id }); });
      parts.sort((p, q) => q.src.length - p.src.length);
      const re = new RegExp(`\\b(?:${parts.map((p) => `(${p.src})`).join("|")})\\b`, "gi");
      return AN.esc(text).replace(re, (m, ...g) => {
        const p = parts[g.findIndex((x, i) => i < parts.length && x !== undefined)];
        return p.mk != null ? `<span class="mk" data-mk="${p.mk}" tabindex="0">${m}</span>` : `<a href="#explore" class="bl" data-bone="${p.bone}">${m}</a>`;
      });
    }

    function render() {
      list.querySelectorAll(".chip").forEach((c) => c.classList.toggle("on", c.dataset.bone === cur));
      atlas.querySelectorAll("g").forEach((g) => g.classList.toggle("on", g.dataset.bone === cur));
      const b = byId[cur];
      if (!b) {
        cap.innerHTML = "Tap any bone to start 👆";
        info.innerHTML = `<p class="sk-empty">Click any bone on the skeleton, or a name below. You'll see what it's called, where it is and how to find it on your own body — and the picture zooms in to show its parts.</p>`;
        return;
      }
      const marks = MARKS[b.id] || [];
      cap.innerHTML = `<b>${AN.esc(b.name)}</b> · ${AN.esc(b.count)}`;
      info.innerHTML = `
        <div class="tags"><span class="tag">${AN.esc(b.group)}</span><span class="tag gold">${AN.esc(b.count)}</span></div>
        <h3>${AN.esc(b.name)}</h3>
        <p class="sk-short">${AN.esc(b.short)}</p>
        ${marks.length ? `<div class="mk-list"><span>📍 On the picture:</span>${marks.map((m, i) => `<button class="chip" data-mk="${i}">${AN.esc(m[0])}</button>`).join("")}</div>` : ""}
        <h4>What &amp; where</h4><p>${linkify(b.desc, b)}</p>
        ${b.feel ? `<h4>✋ Feel it on your body</h4><p>${linkify(b.feel, b)}</p>` : ""}
        ${b.tip ? `<div class="tip">💡 ${linkify(b.tip, b)}</div>` : ""}`;
    }

    function select(id, keep) {
      cur = !keep && id === cur ? null : id;
      skeletonSelect(svg, cur);
      render();
      zoomed = !!cur;
      go(cur ? boneRect(cur) : fullRect());
    }

    svg.addEventListener("click", (e) => {
      const g = e.target.closest("[data-bone]");
      if (g) select(g.dataset.bone);
      const m = e.target.closest(".mark");
      if (m) ping(+m.dataset.i);
    });
    svg.addEventListener("mouseover", (e) => { const m = e.target.closest(".mark"); hot(m ? m.dataset.i : null); });
    list.addEventListener("click", (e) => { const c = e.target.closest(".chip"); if (c) select(c.dataset.bone); });
    info.addEventListener("click", (e) => {
      const a = e.target.closest(".bl");
      if (a) { e.preventDefault(); select(a.dataset.bone, true); return; }
      const s = e.target.closest("[data-mk]");
      if (s) ping(+s.dataset.mk);
    });
    info.addEventListener("keydown", (e) => { const s = e.target.closest(".mk"); if (s && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); ping(+s.dataset.mk); } });
    info.addEventListener("mouseover", (e) => { const s = e.target.closest("[data-mk]"); hot(s ? s.dataset.mk : null); });
    btnFull.onclick = () => { zoomed = false; go(fullRect()); };
    function setLabels(on) {
      labelsOn = on;
      svg.classList.toggle("nolabels", !on);
      btnLab.classList.toggle("on", on);
      btnLab.setAttribute("aria-pressed", on);
      if (!zoomed) go(fullRect());
    }
    btnLab.onclick = () => setLabels(!labelsOn);
    let rt;
    window.addEventListener("resize", () => { clearTimeout(rt); rt = setTimeout(() => go(zoomed && cur ? boneRect(cur) : fullRect(), true), 150); });

    // Used by the "Find them on your body" checklist: jump to the skeleton and point out a part
    window.showOnSkeleton = function (ref) {
      const [id, mark] = ref.split("/");
      document.getElementById("explore").scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
      const i = mark ? (MARKS[id] || []).findIndex((m) => m[0] === mark) : -1;
      if (i >= 0) pending = i;
      select(id, true);
    };

    setLabels(labelsOn);
    vb = fullRect();
    apply();
    render();
  }

  // ---- Find them on your body (ticks are saved in the visitor's own browser) ----
  const lm = document.getElementById("lm-list");
  if (lm) {
    const store = AN.store("anatomy-landmarks-en-v1");
    let saved = store.get();
    lm.innerHTML = LANDMARKS.map((g, gi) => `
      <section class="card check-group">
        <h3>${g.icon} ${AN.esc(g.title)}</h3>
        ${g.items.map(([t, tip, ref], ii) => `
          <div class="lm-row">
            <label class="check-item" for="lm-${gi}-${ii}">
              <input type="checkbox" id="lm-${gi}-${ii}" data-k="${AN.esc(t)}" ${saved[t] ? "checked" : ""}>
              <span class="box"></span>
              <span class="t"><b>${AN.esc(t)}</b><small>${AN.esc(tip)}</small></span>
            </label>
            ${ref ? `<button class="chip lm-show" data-ref="${AN.esc(ref)}">Show me</button>` : ""}
          </div>`).join("")}
      </section>`).join("");
    const boxes = [...lm.querySelectorAll("input")];
    const update = () => {
      const n = boxes.filter((b) => b.checked).length;
      document.getElementById("lm-bar").style.width = `${(n / boxes.length) * 100}%`;
      document.getElementById("lm-done").textContent = n === boxes.length ? `Found them all ✓ ${n}/${boxes.length}` : `Found ${n}/${boxes.length}`;
    };
    lm.addEventListener("change", (e) => {
      if (e.target.type !== "checkbox") return;
      if (e.target.checked) saved[e.target.dataset.k] = 1; else delete saved[e.target.dataset.k];
      store.set(saved);
      update();
    });
    lm.addEventListener("click", (e) => {
      const b = e.target.closest(".lm-show");
      if (b && window.showOnSkeleton) window.showOnSkeleton(b.dataset.ref);
    });
    document.getElementById("lm-reset").onclick = () => {
      boxes.forEach((b) => (b.checked = false));
      saved = {};
      store.clear();
      update();
    };
    update();
  }

  // ---- Quiz · Name that bone: 10 random bones; wrong options come from the same body region where possible ----
  const qbox = document.getElementById("quiz");
  if (qbox) {
    AN.quiz(qbox, () => AN.shuffle(BONES).slice(0, 10).map((b) => {
      const same = AN.shuffle(BONES.filter((x) => x.id !== b.id && x.group === b.group));
      const other = AN.shuffle(BONES.filter((x) => x.id !== b.id && x.group !== b.group));
      const wrong = same.concat(other).slice(0, 3).map((x) => x.name);
      const svg = skeletonSVG({ sel: true, zoom: b.zoom, cls: "sk-quiz", label: "Skeleton with one bone highlighted" });
      return {
        q: "Which bone is highlighted?",
        options: [b.name].concat(wrong),
        a: b.name,
        why: `${b.name} (${b.count}): ${b.short}`,
        visual: `<div class="q-sk" data-bone="${b.id}">${svg}</div>`,
      };
    }), { href: "#explore", text: "Back to the skeleton" });

    // Draw the highlight whenever a new question appears
    new MutationObserver(() => {
      const v = qbox.querySelector(".q-sk");
      if (v && !v.dataset.done) { v.dataset.done = 1; skeletonSelect(v.querySelector("svg"), v.dataset.bone); }
    }).observe(qbox, { childList: true });
    const v = qbox.querySelector(".q-sk");
    if (v) { v.dataset.done = 1; skeletonSelect(v.querySelector("svg"), v.dataset.bone); }
  }
})();
