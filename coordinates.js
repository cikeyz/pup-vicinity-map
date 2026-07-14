const CampusRegistry = [
  {
    id: "pylon",
    label: "The Pylon",
    shape: "poly",
    coords: "1075,588,1111,578,1078,554,1041,564",
    category: "Landmarks",
    description: "The iconic three-pillar pylon standing proudly at the main entrance, representing the PUP logo and symbolizing the pillars of quality instruction, research, and community service.",
    offices: ["Security and Safety Office (Main Gate)"],
    services: ["Visitor Inquiry", "Campus Entry Coordination", "Campus Landmarks Photo Ops"]
  },
  {
    id: "mural",
    label: "The Mural",
    shape: "poly",
    coords: "1033,606,1017,587,1012,590,1017,611",
    category: "Landmarks",
    description: "A monumental bas-relief artwork depicting the history, struggles, aspirations, and social consciousness of the PUP academic community and the Filipino student movement.",
    offices: ["Cultural and Sports Development Office"],
    services: ["Art History Orientation", "Guided Cultural Exhibits", "Campus Historical Studies"]
  },
  {
    id: "oval",
    label: "PUP Freedom Oval",
    shape: "poly",
    coords: "613,513,718,518,781,523,839,540,867,554,892,573,908,598,907,619,903,642,880,658,843,669,805,681,772,687,720,689,590,680,585,662,507,658,499,672,390,667,308,663,250,653,222,642,215,615,216,593,227,568,254,545,300,525,329,516,365,509,401,503,433,503,606,513",
    category: "Sports & Recreation",
    description: "A standard athletic track and field system serving as the physical education hub, playground of varsity athletes, and venue for grand graduation rites.",
    offices: ["Varsity Athletics Training Office", "Physical Education Department Office"],
    services: ["Athletic Track Training", "Outdoor Drills", "Sports Event Hosting", "Graduation Ceremonies"]
  },
  {
    id: "mab",
    label: "Main Academic Building",
    shape: "poly",
    coords: "510,419,492,426,446,420,446,410,401,400,365,393,346,390,331,391,295,395,162,420,141,421,139,414,125,413,114,394,105,345,121,342,120,337,122,336,118,315,138,308,132,304,274,264,331,273,333,284,349,262,363,262,365,257,415,258,416,263,426,267,433,303,426,314,539,333,533,339,546,341,549,384,554,396,512,419",
    category: "Academic",
    description: "The primary academic structure of the university. This massive wing contains classrooms, administrative offices, and serves as the learning hub for multiple colleges.",
    offices: [
      "Office of the University President",
      "Office of the Vice President for Academic Affairs",
      "Office of the University Registrar",
      "College of Science (CS)",
      "College of Business Administration (CBA)"
    ],
    services: [
      "Admissions and Enrollment Services",
      "Transcript and Diploma Requests",
      "Academic Consultation and Counseling",
      "General Classroom Instruction"
    ]
  },
  {
    id: "mpb",
    label: "Multi-Purpose Building",
    shape: "poly",
    coords: "1150,490,1184,480,1184,475,1163,465,1163,435,1189,426,1220,415,1239,414,1251,413,1092,349,1066,347,1044,351,1026,359,1009,368,995,379,994,408",
    category: "Utility & Support",
    description: "An indoor activity structure used for socio-cultural events, large convocations, student gatherings, examinations, and physical recreation.",
    offices: ["Student Organizations Affairs Division", "Events Management Secretariat"],
    services: ["Venue Booking", "Student Organization Assemblies", "Physical Education Practicums", "Socio-Cultural Festivals"]
  },
  {
    id: "chapel",
    label: "Inter-Faith Chapel",
    shape: "poly",
    coords: "348,483,393,467,413,443,412,428,393,417,371,412,346,411,326,409,308,402,297,400,290,401,276,414,261,417,243,421,219,427,200,437,190,450,186,460,189,473,224,488,278,490,347,486",
    category: "Landmarks",
    description: "A sanctuary for reflection and spiritual growth catering to students and staff of diverse religious denominations, promoting peace and spiritual unity.",
    offices: ["Chapel Pastoral Office", "Student Campus Ministry"],
    services: ["Ecumenical Worship Services", "Inter-faith Dialogue", "Spiritual Counseling", "Quiet Reflection and Prayer"]
  },
  {
    id: "gsb",
    label: "Gabriela Silang Building",
    shape: "poly",
    coords: "425,763,473,752,466,745,463,716,473,714,458,692,441,692,426,694,410,696,411,730,406,733,414,745,413,750",
    category: "Academic",
    description: "A dedicated academic building named after the revolutionary heroine, housing the College of Education, high school laboratory lecture halls, and humanities classes.",
    offices: [
      "College of Education Dean's Office",
      "Department of Elementary and Secondary Education",
      "Curriculum Development Center"
    ],
    services: ["Teacher Education Programs", "Practice Teaching Supervision", "Classroom Lectures"]
  },
  {
    id: "grandstand",
    label: "Grandstand",
    shape: "poly",
    coords: "629,502,636,495,693,502,699,491,696,488,698,483,698,460,560,454,549,463,557,466,552,479,547,479,544,488,545,492,601,495,602,501",
    category: "Sports & Recreation",
    description: "The primary spectator pavilion overlooking the PUP Freedom Oval. Serves as the central viewing area for athletic competitions and grand university assemblies.",
    offices: ["Physical Education Equipment Hub", "Athletics Logistics Office"],
    services: ["Spectator Seating", "PE Equipment Checkout", "Sports Coordination Center", "Public Address Control"]
  },
  {
    id: "nalrc",
    label: "Ninoy Aquino Learning Resource Center (Main Library)",
    shape: "poly",
    coords: "656,334,724,307,804,319,839,314,842,262,824,259,824,237,779,229,609,278,609,321",
    category: "Academic",
    description: "The intellectual epicenter of the campus, holding over thousands of volumes of references, journals, electronic resources, the university archives, and a media laboratory.",
    offices: [
      "University Library Administration Office",
      "PUP Archives and Heritage Museum",
      "Digital Learning Center Office"
    ],
    services: [
      "Book Borrowing and Returns",
      "Academic Thesis Research Access",
      "Electronic Lab Terminals",
      "PUP Memorabilia Tours"
    ]
  },
  {
    id: "cdr",
    label: "Charlie Del Rosario Building",
    shape: "poly",
    coords: "496,295,554,295,564,241,542,233,515,236,496,273",
    category: "Administrative",
    description: "The central headquarters of student service agencies and the seat of the PUP Central Student Council (CSC), named in honor of activist Charlie Del Rosario.",
    offices: [
      "PUP Central Student Council (CSC)",
      "Office of Student Affairs and Services (OSAS)",
      "Student Publications Office (The Catalyst)"
    ],
    services: [
      "Student Council Grievance and Support",
      "Student Publication Submissions",
      "Scholarship and Financial Aid Applications",
      "Student Organization Accreditation"
    ]
  },
  {
    id: "hk",
    label: "Human Kinetics Building (Gymnasium)",
    shape: "poly",
    coords: "876,338,804,352,787,336,786,323,795,321,839,316,875,309,935,299,950,309,942,311,930,304,875,313,875,319",
    category: "Sports & Recreation",
    description: "Home of the College of Human Kinetics (CHK), hosting indoor sports courts, gymnastics gyms, and facilities dedicated to physical education and training.",
    offices: [
      "Office of the CHK Dean",
      "PUP Sports and Varsity Development Department",
      "Gymnasium Sports Clinic"
    ],
    services: [
      "Physical Education Classes",
      "Varsity Basketball and Volleyball Training",
      "Intramural Games",
      "P.E. Uniform Inquiries"
    ]
  },
  {
    id: "alumni",
    label: "Tahanan ng Alumni",
    shape: "poly",
    coords: "892,346,951,335,947,315,928,307,878,314,878,342",
    category: "Administrative",
    description: "The official building dedicated to the alumni association, housing files, holding reunions, and managing scholarships funded by alumni groups.",
    offices: [
      "PUP Alumni Relations Office",
      "Federation of PUP Alumni Associations Inc. (FPUPAAI)"
    ],
    services: [
      "PUP Alumni Card Registration",
      "Alumni Scholarship Applications",
      "Graduate Network Services",
      "Reunion Coordination"
    ]
  },
  {
    id: "pool",
    label: "Olympic Swimming Pool",
    shape: "poly",
    coords: "991,405,991,376,1013,361,1025,355,1042,349,1050,347,984,318,964,320,959,322,960,337,930,341,906,347,901,352,904,366,956,388",
    category: "Sports & Recreation",
    description: "An Olympic-sized outdoor swimming facility supporting swimming courses, aquatic competitions, and basic water safety drills.",
    offices: ["CHK Aquatics Training Office", "PUP Swim Varsity Hub"],
    services: ["Swimming Instruction (P.E.)", "Varsity Swim Training", "Water Safety Certifications", "Aquatic Meets Hosting"]
  },
  {
    id: "obelisk",
    label: "The Obelisk",
    shape: "poly",
    coords: "757,408,773,401,773,394,768,389,759,384,745,383,739,383,739,344,736,341,730,341,729,346,731,385,719,385,707,387,702,391,697,399,697,405,710,415,732,416,745,416,759,412,764,411,770,405,771,404",
    category: "Landmarks",
    description: "A magnificent central obelisk constructed in PUP Mabini Plaza, embodying the high aspirations of the PUP community and standing as a major historical landmark.",
    offices: ["University Heritage Council"],
    services: ["PUP Historical Lectures", "University Commemorative Events", "Plaza Student Studies"]
  },
  {
    id: "eab",
    label: "Engineering and Architecture Building",
    shape: "poly",
    coords: "1079,125,1126,125,1127,100,1124,88,1105,87,1093,87,1077,86,1070,86,1071,121,1078,125",
    category: "Academic",
    description: "Located within the NDC Compound, this building hosts the classrooms, specialized drafting rooms, and structural laborites for the College of Engineering and Architecture.",
    offices: [
      "College of Engineering (CEA) Dean's Office",
      "College of Architecture and Fine Arts (CAFA) Dean's Office",
      "CEA Student Council Office"
    ],
    services: [
      "Engineering Laboratory Access",
      "Drafting and Modeling Room Coordination",
      "Architecture Thesis Review",
      "College Academic Consultation"
    ]
  },
  {
    id: "condotel",
    label: "PUP Hasmin Condotel",
    shape: "poly",
    coords: "946,83,949,75,979,76,995,74,1000,74,999,49,987,41,977,35,965,36,963,41,956,42,942,40,937,40,935,68,936,76",
    category: "Administrative",
    description: "The hostel and professional training environment of the College of Tourism, Hospitality and Transportation Management (CTHTM), simulating actual lodging operations.",
    offices: [
      "CTHTM Dean's Office",
      "Hasmin Condotel Booking Office",
      "Hotel Management Training Center"
    ],
    services: [
      "Hostel Room Accommodation",
      "Hospitality Practicum Training",
      "Event Venue Booking",
      "Tourism Industry Placement"
    ]
  },
  {
    id: "itb",
    label: "Information Technology Building",
    shape: "poly",
    coords: "1249,96,1227,94,1214,78,1184,81,1165,79,1161,79,1161,65,1161,58,1173,55,1196,58,1224,58,1246,57,1254,67,1256,77,1248,81",
    category: "Academic",
    description: "Home of the College of Computer and Information Sciences (CCIS), containing state-of-the-art computer labs, networking hubs, and IT academic wings.",
    offices: [
      "CCIS Dean's Office",
      "PUP ICT Office",
      "Information Technology Department Office"
    ],
    services: [
      "Computer Laboratory Access",
      "University Network Support",
      "CCIS Academic Consultation",
      "Software Development Training"
    ]
  },
  {
    id: "bpo",
    label: "Business Processing Office Building",
    shape: "poly",
    coords: "1210,121,1272,122,1275,114,1271,107,1260,99,1237,99,1221,101,1209,101,1200,101",
    category: "Utility & Support",
    description: "An operations support building facilitating corporate transactions, university auxiliary services, and industry partnership offices.",
    offices: ["Auxiliary Services Division", "Industry Liaison Office"],
    services: ["Industry Internship Placement", "Corporate Partnerships Inquiries", "University Auxiliary Registrations"]
  },
  {
    id: "lhs",
    label: "Laboratory High School Building",
    shape: "poly",
    coords: "636,257,635,240,698,244,708,244,705,198,701,193,696,192,665,192,613,193,607,193,605,197,597,199,590,198,581,220,582,254",
    category: "Academic",
    description: "A prestigious junior and senior high school facility serving as the laboratory training center for the College of Education students undergoing teacher residency.",
    offices: [
      "PUP Laboratory High School Principal's Office",
      "LHS Faculty Secretariat",
      "LHS Student Council"
    ],
    services: [
      "High School Enrolment Inquiries",
      "Teacher-Student Apprenticeship Coordination",
      "Student Academic Advising"
    ]
  },
  {
    id: "fnb",
    label: "Food and Nutrition Building",
    shape: "poly",
    coords: "133,510,163,500,159,471,130,421,119,409,108,406,100,407,89,408,82,412",
    category: "Academic",
    description: "Academic classroom facility built for laboratory practices in food chemistry, domestic operations, cooking sciences, and industrial hospitality.",
    offices: [
      "Department of Nutrition and Dietetics",
      "Department of Food Technology Faculty Office"
    ],
    services: [
      "Food Technology Labs Checkouts",
      "Kitchen Laboratory Coordination",
      "Academic Consultation"
    ]
  },
  {
    id: "gazebo1",
    label: "Mabini Plaza Student Gazebo (Main)",
    shape: "poly",
    coords: "420,489,425,496,436,495,463,492,489,487,502,487,510,483,509,476,505,471,497,471,488,471,470,475,460,472,454,475,449,479,440,479,428,477,422,477,417,484",
    category: "Landmarks",
    description: "A beautiful hexagonal outdoor pavilion where students gather to review, hold group discussions, relax, and organize academic committees.",
    offices: ["Campus Grounds Council"],
    services: ["Group Discussion Spaces", "Student Organization Study Gatherings", "Outdoor Rest Zone"]
  },
  {
    id: "gazebo2",
    label: "West Wing Student Gazebo",
    shape: "poly",
    coords: "78,401,96,397,98,383,84,365,74,363,59,367,76,402",
    category: "Landmarks",
    description: "An outdoor study hut situated in the west compound, providing a quiet garden space for studying, reviewing, and mini-discussion group sessions.",
    offices: ["Campus Grounds Council"],
    services: ["Quiet Reading Spots", "Small Team Review Sessions", "Garden Rest Area"]
  },
  {
    id: "opencourt",
    label: "Mabini Plaza Open Court",
    shape: "poly",
    coords: "1114,572,1186,546,1080,485,1021,497,981,508,1010,524,1033,517",
    category: "Sports & Recreation",
    description: "Outdoor sports court system housing facilities for tennis, badminton, and outdoor athletic activities.",
    offices: ["Sports Logistics Center"],
    services: ["Open Play Courts Checkout", "PE Class Sports", "Badminton and Tennis Play"]
  },
  {
    id: "tennis",
    label: "Lawn Tennis Court",
    shape: "poly",
    coords: "974,501,1078,478,991,426,889,454",
    category: "Sports & Recreation",
    description: "Dedicated double-court facility for lawn tennis training, physical education, and hosting intra-school athletic meets.",
    offices: ["PUP Tennis Varsity Division"],
    services: ["Tennis Instruction (P.E.)", "Varsity Tennis Team Training", "Tournament Hosting"]
  },
  {
    id: "basketball",
    label: "Mabini Basketball Courts",
    shape: "poly",
    coords: "967,428,902,390,820,412,887,452",
    category: "Sports & Recreation",
    description: "Two outdoor concrete basketball courts serving as general sports instruction fields, campus leagues, and recreational shoot-arounds.",
    offices: ["Basketball Varsity Logistics Office"],
    services: ["Basketball P.E. Classes", "Campus Liga Events", "Student Recreational Shooting"]
  },
  {
    id: "souvenir",
    label: "PUP Souvenir Shop",
    shape: "poly",
    coords: "792,483,826,478,817,468,789,446,773,456,775,475",
    category: "Utility & Support",
    description: "The official university retail store, selling PUP uniforms, merchandise, jackets, commemorative memorabilia, and academic supplies.",
    offices: ["University Business Services Office (Shop Staff)"],
    services: ["Official Merchandise Purchase", "School Uniform Fittings", "Graduation Cap & Gown Pickups"]
  },
  {
    id: "lagoon",
    label: "PUP Lagoon Park & Kiosks",
    shape: "poly",
    coords: "607,320,605,292,596,288,567,297,541,306,521,313,530,327,543,329,543,334,553,343,552,365,580,372,619,375,645,374,683,371,727,365,726,344,727,337,736,336,743,336,743,366,753,362,751,338,754,324,739,318,723,327,707,337,674,342,650,343,606,321",
    category: "Utility & Support",
    description: "A scenic lake environment surrounded by student pavilions, affordable food stalls, student cooperatives, and peaceful study benches.",
    offices: ["Lagoon Sanitation and Grounds Division"],
    services: ["Cooperative Canteens", "Outdoor Group Studies", "Recreational Rest Zones", "Student Cooperative Outlets"]
  },
  {
    id: "nftrdc",
    label: "Nutrition & Food Tech R&D Center",
    shape: "poly",
    coords: "875,306,925,298,933,297,931,282,865,253,843,260,842,300,868,307",
    category: "Academic",
    description: "A research-oriented building dedicated to chemical analysis of nutrition, research and development of food preservation technology, and dietary innovations.",
    offices: ["Food R&D Board of Trustees", "Nutrition Research Laboratory"],
    services: ["Food Preservation Testing", "Dietary Product Analysis", "Graduate Research Consults"]
  },
  {
    id: "studentcenter",
    label: "Student Center",
    shape: "poly",
    coords: "452,294,490,295,492,286,494,275,486,267,480,263,469,263,462,267,452,286",
    category: "Utility & Support",
    description: "Social and academic hub housing offices for officially accredited student organizations, review boards, and committee assembly spaces.",
    offices: ["Student Organization Secretariat Office"],
    services: ["Organization Office Allotment", "Co-curricular Coordination", "Student Assembly Hosting"]
  },
  {
    id: "sampaguita",
    label: "Sampaguita Building",
    shape: "poly",
    coords: "443,290,455,266,454,257,445,246,439,239,431,241,416,243,408,248,404,253,417,254,420,261,426,261,431,265,433,293",
    category: "Academic",
    description: "Academic classroom annex building hosting lectures for under-graduate general subjects and introductory laboratory systems.",
    offices: ["PUP General Studies Faculty Wing"],
    services: ["General Subject Classroom Lectures", "Academic Remedial Programs"]
  },
  {
    id: "amphitheater",
    label: "PUP Amphitheater",
    shape: "poly",
    coords: "522,327,510,308,468,318",
    category: "Landmarks",
    description: "An outdoor auditorium layout designed for creative theater acts, massive university concerts, graduation preparations, and general public forums.",
    offices: ["PUP Cultural Center Board"],
    services: ["Outdoor Stage Venue Bookings", "Theatrical Presentations", "Student Forum Hosting"]
  },
  {
    id: "atleta",
    label: "Tahanan ng Atleta (Athletes Residence)",
    shape: "poly",
    coords: "534,726,585,727,582,665,506,661,494,688,495,721",
    category: "Sports & Recreation",
    description: "Residence facility and gym center hosting official PUP varsity athletes, providing boarding, meals, and athletic planning areas.",
    offices: ["CHK Varsity Housing Office"],
    services: ["Varsity Athlete Boarding", "Athletic Wellness Clinics", "Dietary and Nutritional Planning"]
  },
  {
    id: "fountain",
    label: "Mabini Plaza Fountain Park",
    shape: "poly",
    coords: "474,469,509,467,543,464,545,452,546,441,536,427,527,428,507,432,493,435,474,432,465,433,442,438,437,442,433,452,427,458,423,464,423,466,439,467,463,467",
    category: "Landmarks",
    description: "A beautifully manicured park situated around the main water fountain of Mabini Plaza, presenting a very peaceful environment for relaxation and academic dialogue.",
    offices: ["PUP Campus Landscaping Services"],
    services: ["Outdoor Relaxation Grounds", "Photography Permits", "Quiet Study Circles"]
  },
  {
    id: "esrc",
    label: "Engineering and Science Research Center (ESRC)",
    shape: "poly",
    coords: "1161,499,1212,525,1304,497,1314,435,1305,431,1305,415,1283,405,1264,409,1236,419,1203,426,1182,431,1176,433,1167,436,1166,464,1188,473,1187,482,1187,488,1164,494",
    category: "Academic",
    description: "A state-of-the-art research facility located in the NDC Compound, hosting advanced research centers for engineering, basic sciences, and postgraduate thesis defenses.",
    offices: [
      "Center for Science and Technology Research",
      "PUP Research Management Office (RMO)",
      "Post-Graduate Studies Laboratory Secretariat"
    ],
    services: [
      "Advanced Scientific Testing Labs Access",
      "Intellectual Property / Patent Applications",
      "Postgraduate Dissertation Defense Coordination"
    ]
  },
  {
    id: "ndccourt",
    label: "NDC Covered Court",
    shape: "poly",
    coords: "1129,115,1183,115,1183,97,1181,87,1145,89,1126,88,1128,97,1129,106",
    category: "Sports & Recreation",
    description: "An indoor basketball and volleyball court complex located in the NDC Compound, serving engineering students for physical activities and college sport matches.",
    offices: ["CEA Physical Activities Directorate"],
    services: ["P.E. Classes Coordination", "CEA Intramurals Venue", "Varsity Training Extensions"]
  },
  {
    id: "communication",
    label: "College of Communication Building",
    shape: "poly",
    coords: "1057,166,1092,147,1094,137,1087,129,1068,137,1059,143,1049,140,1038,134,1029,135,1003,150,1000,163",
    category: "Academic",
    description: "Home of the College of Communication (COC), housing training radio stations, mock TV studios, journalism newsrooms, and advertising labs.",
    offices: [
      "COC Dean's Office",
      "PUP DZMC Radio Office (91.1 FM)",
      "PUP COC Student Council Hub"
    ],
    services: [
      "DZMC Studio Access",
      "Journalism and Broadcasting Labs Checkout",
      "COC Academic Counseling"
    ]
  },
  {
    id: "theater",
    label: "PUP Creative Theater",
    shape: "poly",
    coords: "1058,140,1079,130,1081,128,1076,127,1070,124,1069,119,1062,118,1053,115,1041,118,1033,122,1023,126,1023,133,1030,130,1037,130,1042,132,1052,135",
    category: "Landmarks",
    description: "A professional black-box theater and performance auditorium hosting cultural works, dramatic arts, speech communication workshops, and university drama guilds.",
    offices: ["PUP Cultural Center - Theater Secretariat", "PUP Bagong Sikat Theater Guild Office"],
    services: ["Cultural Plays Performance Hub", "Drama Audition Registrations", "Theater Venue Booking"]
  },
  {
    id: "antique",
    label: "PUP Antique House (Heritage Center)",
    shape: "poly",
    coords: "1128,78,1154,78,1153,65,1124,67",
    category: "Landmarks",
    description: "A meticulously preserved historical house relocating classic colonial Filipino residential architecture to the campus, serving as a living museum of local heritage.",
    offices: ["Heritage Studies Committee"],
    services: ["Guided Heritage Exhibits", "Colonial Architectural Studies", "Cultural History Seminars"]
  }
];
