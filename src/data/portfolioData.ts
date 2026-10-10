import avatarImg from "../assets/images/vishesh_profile.jpeg";
import heroWorkspaceImg from "../assets/images/hero_developer_workspace_1791638257221.jpg";
import architectureImg from "../assets/images/system_architecture_diagram_1791638269865.jpg";
import mobileInterfaceImg from "../assets/images/project_mobile_interface_1791638283780.jpg";

export interface ProfileData {
  name: string;
  shortName: string;
  monogram: string;
  role: string;
  tagline: string;
  bio: string;
  extendedBio: string[];
  email: string;
  github: string;
  linkedin: string;
  location: string;
  openToOpportunities: boolean;
  opportunityNote: string;
  avatarUrl: string;
  heroWorkspaceUrl: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  status: string;
  scoreLabel: string;
  scoreValue: string;
  honors?: string;
  description: string;
  courses: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: {
    name: string;
    levelDescription: string;
    highlighted?: boolean;
    relatedProjects: string[];
  }[];
}

export interface ArchitectureNode {
  id: string;
  label: string;
  type: 'client' | 'gateway' | 'service' | 'database' | 'external' | 'cache';
  description: string;
  technologies: string[];
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: 'Full-Stack Development' | 'Backend Engineering' | 'Automation' | 'AI and Machine Learning' | 'Mobile Applications' | 'Web Applications';
  summary: string;
  problem: string;
  solution: string;
  myRole: string;
  technologies: string[];
  keyFeatures: string[];
  architectureOverview: string;
  architectureNodes: ArchitectureNode[];
  dataFlow: string[];
  challengesAndDecisions: {
    challenge: string;
    decision: string;
    rationale: string;
  }[];
  testingAndValidation: string;
  resultsAndLessons: string;
  status: 'Completed' | 'In Active Development' | 'Prototype Verified';
  featured: boolean;
  imageUrl?: string;
  repoUrl?: string; // Configurable placeholder if not yet public
  demoUrl?: string;
  documentationSlugs: string[];
}

export interface DocumentItem {
  id: string;
  slug: string;
  title: string;
  category: 'Resume & Profile' | 'Project Reports' | 'System Architecture' | 'Implementation Guides' | 'API Documentation' | 'Database Schemas' | 'Workflow Diagrams' | 'Setup Instructions';
  projectSlug?: string;
  projectName?: string;
  fileType: 'PDF' | 'Markdown' | 'OpenAPI' | 'SQL';
  lastUpdated: string;
  description: string;
  technologies: string[];
  content: string; // Realistic text or Markdown for the in-app viewer
  downloadFileName: string;
}

export const INITIAL_PROFILE: ProfileData = {
  name: "Vishesh Srivastava",
  shortName: "Vishesh",
  monogram: "VS",
  role: "Software Developer | Backend & Full-Stack Engineer | Automation and AI Enthusiast",
  tagline: "I build software that turns complex problems into elegant systems.",
  bio: "I'm a computer applications graduate focused on building practical software systems, backend services, full-stack applications, and automation workflows. I enjoy breaking complex requirements into understandable architectures and turning them into functional, maintainable products.",
  extendedBio: [
    "My engineering foundation is built on solid computer science principles—object-oriented design, relational data modeling, asynchronous processing, and modular architecture.",
    "I focus heavily on building clean, predictable REST APIs using Spring Boot, Hibernate/JPA, Flask, and Django, coupled with structured database design in PostgreSQL and MySQL.",
    "Beyond classical backend engineering, I experiment with end-to-end automation pipelines using Selenium and Python, modern responsive user interfaces with Angular and React, and practical machine learning integrations."
  ],
  email: "srivastava.vishesh96@gmail.com",
  github: "https://github.com/vishesh-srivastava",
  linkedin: "https://www.linkedin.com/in/vishesh-srivastava",
  location: "India",
  openToOpportunities: true,
  opportunityNote: "Actively interviewing for Software Developer, Backend, and Full-Stack Engineering roles.",
  avatarUrl: avatarImg,
  heroWorkspaceUrl: heroWorkspaceImg
};

export const EDUCATION_LIST: EducationItem[] = [
  {
    id: "mca",
    degree: "Master of Computer Applications (MCA)",
    institution: "SRM University",
    period: "2024 – 2026",
    status: "In Progress / Final Year",
    scoreLabel: "Current CGPA",
    scoreValue: "7.89",
    description: "Advanced study focusing on distributed enterprise systems, cloud platforms, advanced database management, algorithm analysis, and modern web architectures.",
    courses: [
      "Advanced Database Management Systems",
      "Enterprise Application Development",
      "Cloud Computing & Virtualization",
      "Design and Analysis of Algorithms",
      "Software Quality Assurance"
    ]
  },
  {
    id: "bca",
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "United University",
    period: "2021 – 2024",
    status: "Graduated",
    scoreLabel: "Graduation GPA",
    scoreValue: "9.05",
    honors: "First Rank / Academic Gold Medalist",
    description: "Comprehensive foundation in core computer science, relational databases, object-oriented programming in Java and Python, data structures, and computer networks.",
    courses: [
      "Data Structures & Algorithms",
      "Relational Database Systems (SQL)",
      "Object-Oriented Programming with Java",
      "Web Technologies & Client-Side Scripting",
      "Operating Systems & Computer Networks"
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "languages",
    title: "Programming Languages",
    description: "Core languages used for backend logic, algorithmic problem solving, scripting, and system queries.",
    skills: [
      { name: "Java", levelDescription: "Core OOP, Collections, Multi-threading, Streams API", highlighted: true, relatedProjects: ["shelf-sync", "cafe-ease"] },
      { name: "Python", levelDescription: "Backend services, data parsing, automation, ML pipelines", highlighted: true, relatedProjects: ["flowforge", "phishguard", "artify", "agro-gradio", "safewalk"] },
      { name: "SQL", levelDescription: "Complex joins, indexing, query optimization, migrations", highlighted: true, relatedProjects: ["shelf-sync", "flowforge", "cafe-ease"] },
      { name: "JavaScript", levelDescription: "ES6+, asynchronous promises, event loops, DOM manipulation", highlighted: false, relatedProjects: ["shelf-sync", "flowforge", "safewalk"] },
      { name: "HTML5 / CSS3", levelDescription: "Semantic structuring, flexbox, CSS grid, accessible styling", highlighted: false, relatedProjects: ["flowforge", "shelf-sync"] }
    ]
  },
  {
    id: "backend",
    title: "Backend Engineering & APIs",
    description: "Enterprise frameworks, ORMs, microservices structure, and RESTful API architecture.",
    skills: [
      { name: "Spring Boot", levelDescription: "Dependency injection, Spring Security, REST controllers", highlighted: true, relatedProjects: ["shelf-sync", "cafe-ease", "flowforge"] },
      { name: "Hibernate / JPA", levelDescription: "Entity mappings, relationships, criteria queries, transaction boundaries", highlighted: true, relatedProjects: ["shelf-sync", "cafe-ease"] },
      { name: "Flask", levelDescription: "Lightweight microservices, blueprint routing, REST endpoints", highlighted: true, relatedProjects: ["flowforge", "safewalk", "artify"] },
      { name: "Django", levelDescription: "ORM, model validation, admin scaffolding, auth pipeline", highlighted: false, relatedProjects: ["ecommerce-recommendation"] },
      { name: "Express.js", levelDescription: "Middleware chains, routing, asynchronous handlers", highlighted: false, relatedProjects: ["flowforge"] },
      { name: "REST API Design", levelDescription: "HTTP status conventions, payload contract validation, error schemas", highlighted: true, relatedProjects: ["shelf-sync", "flowforge", "cafe-ease"] }
    ]
  },
  {
    id: "databases",
    title: "Databases & Storage",
    description: "Relational persistence, data modeling, integrity constraints, and document stores.",
    skills: [
      { name: "PostgreSQL", levelDescription: "ACID transactions, foreign key constraints, JSONB, indexing", highlighted: true, relatedProjects: ["flowforge", "shelf-sync"] },
      { name: "MySQL", levelDescription: "Relational schemas, stored procedures, normalization", highlighted: true, relatedProjects: ["cafe-ease"] },
      { name: "Firebase Firestore", levelDescription: "Realtime synchronization, document collections, rule security", highlighted: false, relatedProjects: ["safewalk", "artify"] }
    ]
  },
  {
    id: "frontend",
    title: "Frontend Development",
    description: "Component architecture, single-page application routing, responsive client interfaces.",
    skills: [
      { name: "Angular", levelDescription: "TypeScript components, services, dependency injection, RxJS", highlighted: true, relatedProjects: ["shelf-sync", "flowforge"] },
      { name: "React", levelDescription: "Functional components, custom hooks, state orchestration", highlighted: true, relatedProjects: ["flowforge"] },
      { name: "Responsive UI", levelDescription: "Mobile-first layouts, adaptive navigation, accessibility standards", highlighted: false, relatedProjects: ["shelf-sync", "flowforge"] }
    ]
  },
  {
    id: "automation",
    title: "Automation & Integrations",
    description: "Headless browser scraping, workflow execution, webhooks, and third-party APIs.",
    skills: [
      { name: "Selenium", levelDescription: "WebDriver automation, dynamic element waits, test execution", highlighted: true, relatedProjects: ["flowforge"] },
      { name: "Google Maps API", levelDescription: "Geocoding, polyline routing, location clustering", highlighted: false, relatedProjects: ["safewalk"] },
      { name: "Twilio API", levelDescription: "SMS alerts, webhook callbacks, verification messages", highlighted: false, relatedProjects: ["safewalk"] }
    ]
  },
  {
    id: "mobile",
    title: "Mobile Development",
    description: "Cross-platform mobile interfaces, state management, and device integration.",
    skills: [
      { name: "Flutter", levelDescription: "Dart widgets, provider state handling, audio player integrations", highlighted: true, relatedProjects: ["music-library"] }
    ]
  },
  {
    id: "tools",
    title: "Developer Tools & Workflows",
    description: "Version control, containerization, build automation, and API validation tooling.",
    skills: [
      { name: "Git & GitHub", levelDescription: "Branching strategies, pull requests, issue tracking", highlighted: true, relatedProjects: ["shelf-sync", "flowforge"] },
      { name: "Docker", levelDescription: "Multi-stage Dockerfiles, compose environments, service isolation", highlighted: true, relatedProjects: ["shelf-sync", "flowforge"] },
      { name: "Maven", levelDescription: "POM dependency management, build plugins, artifact packaging", highlighted: false, relatedProjects: ["shelf-sync", "cafe-ease"] },
      { name: "Postman & OpenAPI", levelDescription: "Endpoint testing, contract assertions, documentation generation", highlighted: true, relatedProjects: ["shelf-sync", "cafe-ease"] },
      { name: "Render", levelDescription: "Cloud web service deployments, environment variables", highlighted: false, relatedProjects: ["flowforge"] }
    ]
  }
];

export const PROJECTS_LIST: ProjectItem[] = [
  {
    id: "flowforge",
    slug: "flowforge",
    title: "FlowForge",
    subtitle: "Automated JD & Resume Customization Tool",
    category: "Full-Stack Development",
    summary: "An automated engineering solution designed to eliminate friction in job applications by connecting job descriptions with tailored resume alignment, headless browser orchestration, and robust backend services.",
    problem: "Job seekers spend hours manually analyzing lengthy job descriptions, identifying missing keywords, and adjusting resumes per submission. Standard job portals provide no programmatic bridge to streamline this alignment.",
    solution: "Built a multi-tiered pipeline: a Python/Flask parsing engine extracts core competencies and requirements from job postings; an Angular/React interface allows custom parameter tuning; and Selenium automates the repetitive application verification flow.",
    myRole: "Full-Stack Engineer & Automation Architect — designed the end-to-end data pipeline, Flask microservices, database schemas in PostgreSQL, and automated test scripts.",
    technologies: ["Python", "Flask", "PostgreSQL", "Selenium", "Angular", "Spring Boot"],
    keyFeatures: [
      "Job Description Text Extraction & Keyword Analysis",
      "Dynamic Resume Section Scoring against JD Requirements",
      "Headless Selenium Automation for Form Verification",
      "RESTful API Service for Document Processing",
      "PostgreSQL Persistence for Candidate Profiles & Job Histories"
    ],
    architectureOverview: "Client UI submits JD and resume payloads to the API Gateway. The Flask worker parses textual requirements into an structured semantic index, queries PostgreSQL for candidate credentials, and provides a candidate match report.",
    architectureNodes: [
      { id: "ui", label: "Angular Client UI", type: "client", description: "Provides interactive submission form, score breakdown dashboard, and resume revision diff view.", technologies: ["Angular", "TypeScript"] },
      { id: "api", label: "REST API Gateway", type: "gateway", description: "Handles authentication, route dispatching, and rate-limiting for extraction jobs.", technologies: ["Flask", "Python"] },
      { id: "engine", label: "NLP & Extraction Worker", type: "service", description: "Performs term extraction, syntactic tokenization, and calculates requirement overlap matrices.", technologies: ["Python", "NLTK/Regex"] },
      { id: "automation", label: "Selenium Runner", type: "service", description: "Executes automated portal navigation, field mapping, and form validation verification.", technologies: ["Selenium WebDriver", "Python"] },
      { id: "db", label: "PostgreSQL Database", type: "database", description: "Stores application histories, requirement dictionaries, and candidate skill graphs.", technologies: ["PostgreSQL 15"] }
    ],
    dataFlow: [
      "1. Candidate pastes target JD URL or text into client workspace.",
      "2. API Gateway validates input and queues parsing task in Flask service.",
      "3. Extraction Worker identifies hard constraints (years, skills, frameworks).",
      "4. Candidate profile queried from PostgreSQL and compared against JD requirements.",
      "5. Matching report and optimized resume payload generated for download or automated staging."
    ],
    challengesAndDecisions: [
      {
        challenge: "Unstructured formatting in arbitrary job postings across varied hiring sites.",
        decision: "Built a tiered heuristic parser combining regular expressions with tokenized frequency weighting rather than brittle CSS scrapers.",
        rationale: "Increased parser resilience against layout changes across major applicant tracking boards."
      },
      {
        challenge: "Browser driver instability during long-running Selenium sessions.",
        decision: "Implemented headless execution with explicit wait guards and automatic session teardown in try-finally blocks.",
        rationale: "Prevented zombie Chrome processes and resource leaks on the host runtime."
      }
    ],
    testingAndValidation: "Tested with 40+ distinct technical job descriptions across various domains; verified parsing consistency and headless browser task completion.",
    resultsAndLessons: "Demonstrated how combining lightweight backend microservices with targeted browser automation creates massive workflow efficiency.",
    status: "Completed",
    featured: true,
    imageUrl: heroWorkspaceImg,
    repoUrl: "https://github.com/vishesh-srivastava/flowforge",
    demoUrl: "",
    documentationSlugs: ["flowforge-architecture", "flowforge-api-spec"]
  },
  {
    id: "shelf-sync",
    slug: "shelf-sync",
    title: "ShelfSync",
    subtitle: "Enterprise Inventory Management System",
    category: "Backend Engineering",
    summary: "A robust enterprise-grade inventory platform built with Spring Boot, Hibernate/JPA, and PostgreSQL, providing transactional safety for stock tracking, supplier management, and catalog auditing.",
    problem: "Traditional small-to-medium enterprise inventory setups suffer from concurrency race conditions during stock updates, lack of audit trails, and brittle synchronization between warehouse entries and sales logs.",
    solution: "Designed a clean layered backend architecture using Spring Boot and JPA with pessimistic/optimistic locking mechanisms, relational normalization in PostgreSQL, and an intuitive Angular interface.",
    myRole: "Backend Engineer — architected entity relationships, transaction boundaries, REST controllers, pagination query optimizations, and API documentation.",
    technologies: ["Spring Boot", "Hibernate / JPA", "PostgreSQL", "Angular", "Maven", "Docker"],
    keyFeatures: [
      "ACID-Compliant Transactional Stock In/Out Adjustments",
      "Hierarchical Product Category & SKU Management",
      "Supplier Ledger and Re-order Alert Triggers",
      "Paginated Server-Side Search with Filter Specifications",
      "Structured Exception Handling with Standardized HTTP Responses"
    ],
    architectureOverview: "Angular frontend communicates with Spring Boot REST API layer. Service layer enforces domain validation and transactional integrity (@Transactional) before persisting changes to PostgreSQL via Spring Data JPA.",
    architectureNodes: [
      { id: "frontend", label: "Angular Dashboard", type: "client", description: "Responsive web client displaying real-time stock levels, replenishment alerts, and SKU tables.", technologies: ["Angular 16", "RxJS"] },
      { id: "controller", label: "Spring MVC Controllers", type: "gateway", description: "Exposes RESTful endpoints with DTO validation (@Valid) and Swagger OpenAPI documentation.", technologies: ["Spring Boot 3"] },
      { id: "service", label: "Inventory Service Layer", type: "service", description: "Encapsulates business rules, stock ledger calculations, and reorder threshold validations.", technologies: ["Java 17", "Spring Service"] },
      { id: "repository", label: "Spring Data JPA / Hibernate", type: "service", description: "Manages object-relational mapping, lazy/eager fetching strategies, and custom JPQL queries.", technologies: ["Hibernate 6"] },
      { id: "database", label: "PostgreSQL Database", type: "database", description: "Enforces foreign keys, indexes on SKU and category_id, and timestamped audit tables.", technologies: ["PostgreSQL"] }
    ],
    dataFlow: [
      "1. Warehouse operator registers a stock shipment receipt via Angular client.",
      "2. StockAdjustmentDTO sent via POST /api/v1/inventory/adjust.",
      "3. Service begins @Transactional boundary, acquires lock on target SKU row.",
      "4. Updates current quantity, writes entry to stock_ledger audit table.",
      "5. Transaction commits, updated inventory metrics returned to client."
    ],
    challengesAndDecisions: [
      {
        challenge: "Concurrent decrement requests risking negative inventory balances.",
        decision: "Enforced database-level check constraints (stock >= 0) combined with conditional update queries in JPA.",
        rationale: "Guaranteed absolute integrity even if two simultaneous web requests attempted to deduct items."
      },
      {
        challenge: "N+1 query problem when listing items alongside their supplier and category entities.",
        decision: "Configured JOIN FETCH and JPA EntityGraphs on critical retrieval endpoints.",
        rationale: "Reduced database queries from 120+ queries to 2 queries per page load."
      }
    ],
    testingAndValidation: "Comprehensive integration testing using Spring Boot Test, Postman test collections with assertion scripts, and mock database fixtures.",
    resultsAndLessons: "Solidified understanding of enterprise Java conventions, transactional boundaries, and database query optimization in high-reliability contexts.",
    status: "Completed",
    featured: true,
    imageUrl: architectureImg,
    repoUrl: "https://github.com/vishesh-srivastava/shelfsync",
    demoUrl: "",
    documentationSlugs: ["shelfsync-schema", "shelfsync-api-docs"]
  },
  {
    id: "safewalk",
    slug: "safewalk",
    title: "TrackNinja / SafeWalk",
    subtitle: "AI-Powered Crime Prediction & Safety Analysis",
    category: "AI and Machine Learning",
    summary: "A safety-focused geospatial analysis application exploring historical crime dataset modeling, location-aware risk scoring, Google Maps route safety visualizations, and emergency alerting.",
    problem: "Pedestrians navigating unfamiliar urban sectors frequently lack real-time context regarding area historical incident rates, especially when planning night-time walking routes.",
    solution: "Engineered a location-aware web service that overlays historical incident frequency against geospatial coordinates, scoring transit routes and providing emergency trigger notifications via Twilio.",
    myRole: "System & Backend Developer — built the Flask data endpoints, integrated Google Maps JavaScript API, structured Firebase incident collections, and implemented Twilio dispatch routines.",
    technologies: ["Flask", "Python", "Google Maps API", "Firebase", "Twilio", "JavaScript"],
    keyFeatures: [
      "Interactive Google Maps Heatmap Layer for Safety Zones",
      "Route Waypoint Safety Scoring based on Historical Incidents",
      "Emergency SMS Dispatch through Twilio Webhook Integration",
      "Location-Triggered Safety Status Ping in Firebase",
      "Transparent Model Disclaimers (clarifying predictive boundaries)"
    ],
    architectureOverview: "Client browser renders Google Maps with route polylines. Flask backend calculates danger index by querying local coordinate distance against stored incident coordinates in Firebase.",
    architectureNodes: [
      { id: "maps-client", label: "Maps Client Interface", type: "client", description: "Renders route waypoints, risk gradients, and one-tap emergency alert triggers.", technologies: ["Google Maps JS API", "HTML5"] },
      { id: "flask-backend", label: "Flask Safety Scoring Engine", type: "gateway", description: "Processes origin-destination pairs, calculates bounding box incident density.", technologies: ["Flask", "Python 3"] },
      { id: "firebase-db", label: "Firebase Firestore", type: "database", description: "Holds geo-tagged incident logs, verified safety zones, and user alert logs.", technologies: ["Firestore"] },
      { id: "twilio-svc", label: "Twilio Alert Dispatcher", type: "external", description: "Broadcasts SMS emergency notification with GPS coordinates to trusted contacts.", technologies: ["Twilio REST API"] }
    ],
    dataFlow: [
      "1. User enters start and destination points in client interface.",
      "2. Route polyline generated via Maps API; intermediate coordinates sampled.",
      "3. Flask backend computes spatial proximity against historical incident clusters.",
      "4. Safety Score (1-100) calculated and visualized along the path.",
      "5. If emergency triggered, Twilio API called immediately to alert emergency contacts."
    ],
    challengesAndDecisions: [
      {
        challenge: "Predictive models can produce false senses of security if presented without context.",
        decision: "Explicitly displayed statistical confidence intervals and safety guidelines alongside route estimates.",
        rationale: "Honest engineering practice ensuring users know predictions reflect historical records, not infallible live omniscience."
      }
    ],
    testingAndValidation: "Simulated coordinate routing across test city grids; validated Twilio test SMS receipts and Firestore read/write speeds.",
    resultsAndLessons: "Provided deep experience integrating geospatial third-party APIs with asynchronous communication channels.",
    status: "Completed",
    featured: true,
    imageUrl: heroWorkspaceImg,
    repoUrl: "https://github.com/vishesh-srivastava/safewalk",
    demoUrl: "",
    documentationSlugs: ["safewalk-architecture"]
  },
  {
    id: "phishguard",
    slug: "phishguard",
    title: "PhishGuard",
    subtitle: "Phishing Detection & URL Security Project",
    category: "AI and Machine Learning",
    summary: "A cybersecurity utility analyzing suspicious URLs, domain structural anomalies, and lexical features to detect phishing attempts and malicious spoofing domains.",
    problem: "Social engineering and spear-phishing attacks deceive users via deceptive domain typosquatting, hidden subdomains, and suspicious redirect structures.",
    solution: "Developed a Python-based lexical analyzer that extracts 16+ structural features from incoming URLs (e.g., entropy, subdomain depth, IP-in-URL, @ symbols) to predict malicious probability.",
    myRole: "Lead Developer — implemented feature extraction algorithms, training pipeline, and Flask evaluation API.",
    technologies: ["Python", "Flask", "Scikit-Learn", "HTML/CSS", "REST APIs"],
    keyFeatures: [
      "Lexical Feature Extraction (Length, Entropy, Suspicious Keywords)",
      "Domain Typosquatting and Subdomain Depth Detection",
      "Instant Risk Assessment API Endpoint",
      "Transparent Scoring Breakdown Explaining Why URL was Flagged"
    ],
    architectureOverview: "Client submits URL to Flask API. The feature extractor parses URL components, passes normalized numerical vectors to the classification model, and returns risk probability with explanatory flags.",
    architectureNodes: [
      { id: "client", label: "Security Checker UI", type: "client", description: "Provides URL input field, risk gauge, and itemized feature breakdown checklist.", technologies: ["Tailwind UI", "JS"] },
      { id: "api", label: "Flask Security API", type: "gateway", description: "Sanitizes URL inputs, extracts domain metadata, and invokes inference engine.", technologies: ["Flask"] },
      { id: "extractor", label: "Lexical Feature Extractor", type: "service", description: "Evaluates URL Shannon entropy, TLD credibility, redirection tokens, and host character ratios.", technologies: ["Python urllib"] },
      { id: "model", label: "Classifier Model", type: "service", description: "Evaluates feature vector and yields a confidence probability.", technologies: ["Scikit-Learn"] }
    ],
    dataFlow: [
      "1. User submits suspicious link for inspection.",
      "2. URL parsed into scheme, netloc, path, query strings.",
      "3. 16 distinct syntactic heuristics extracted into normalized numerical array.",
      "4. Evaluated against trained model baseline.",
      "5. Response emitted with safety status: Legitimate, Suspicious, or High Risk Phishing."
    ],
    challengesAndDecisions: [
      {
        challenge: "Minimizing false positives on legitimate complex marketing URLs with numerous query parameters.",
        decision: "Weighted host-level features (entropy and typosquatting) significantly higher than query-string length.",
        rationale: "Kept accuracy high without penalizing legitimate e-commerce URLs."
      }
    ],
    testingAndValidation: "Validated against benchmark phishing dataset containing 10,000 verified legitimate and phishing URLs.",
    resultsAndLessons: "Demonstrated the power of deterministic feature engineering before rushing into heavy deep learning models.",
    status: "Completed",
    featured: false,
    imageUrl: architectureImg,
    repoUrl: "https://github.com/vishesh-srivastava/phishguard",
    demoUrl: "",
    documentationSlugs: ["phishguard-report"]
  },
  {
    id: "artify",
    slug: "artify",
    title: "ARtify",
    subtitle: "Augmented Reality Face-Filter Application",
    category: "AI and Machine Learning",
    summary: "An interactive computer-vision project exploring real-time facial landmark detection, overlay matrix transformations, and visual filter rendering via camera streams.",
    problem: "Real-time face-filter overlays require precise landmark tracking without introducing video playback stutter or misalignment across head rotations.",
    solution: "Implemented an OpenCV and MediaPipe facial mesh pipeline connected through a lightweight Flask service, rendering responsive digital masks and filters.",
    myRole: "Computer Vision Developer — calibrated camera calibration matrices, facial mesh landmark bindings, and rendering overlays.",
    technologies: ["Python", "Flask", "OpenCV", "MediaPipe", "Firebase"],
    keyFeatures: [
      "468-Point Real-Time Facial Mesh Landmark Tracking",
      "Geometric Perspective Warp for 2D/3D Filter Overlays",
      "Dynamic Filter Switcher with Real-Time FPS Feedback",
      "Cloud Snapshot Storage using Firebase"
    ],
    architectureOverview: "Webcam stream feeds video frames into OpenCV; MediaPipe extracts 3D landmark coordinates; transform matrices anchor graphic overlays to detected facial contours.",
    architectureNodes: [
      { id: "camera", label: "Webcam Video Input", type: "client", description: "Captures 30fps video feed from user device.", technologies: ["Browser MediaDevices"] },
      { id: "cv-engine", label: "OpenCV & MediaPipe Engine", type: "service", description: "Performs frame-by-frame mesh tracking and affine transformations.", technologies: ["OpenCV", "MediaPipe"] },
      { id: "storage", label: "Firebase Media Store", type: "database", description: "Saves filtered photo snapshots with privacy-safe storage tokens.", technologies: ["Firebase Storage"] }
    ],
    dataFlow: [
      "1. Video frame captured from client camera.",
      "2. MediaPipe detects facial bounding box and landmark points.",
      "3. Affine transformation matrix maps filter asset onto eye/forehead vectors.",
      "4. Rendered frame returned to viewport canvas with minimal latency."
    ],
    challengesAndDecisions: [
      {
        challenge: "Framerate degradation when performing complex pixel convolutions per frame.",
        decision: "Downscaled frame resolution for mesh calculation while rendering filter on original resolution buffer.",
        rationale: "Maintained steady 30fps throughput on consumer laptops."
      }
    ],
    testingAndValidation: "Tested under varied lighting conditions and head tilt angles up to 45 degrees.",
    resultsAndLessons: "Gained hands-on proficiency in matrix operations, computer vision coordinate spaces, and real-time media streams.",
    status: "Completed",
    featured: false,
    imageUrl: heroWorkspaceImg,
    repoUrl: "https://github.com/vishesh-srivastava/artify",
    demoUrl: "",
    documentationSlugs: []
  },
  {
    id: "cafe-ease",
    slug: "cafe-ease",
    title: "CafeEase",
    subtitle: "Enterprise Cafe Management System",
    category: "Backend Engineering",
    summary: "A structured cafe and restaurant management application orchestrating customer orders, live billing, kitchen queue status, and ingredient inventory tracking.",
    problem: "Small food service businesses face chaotic coordination between counter billing, kitchen ticket preparation, and ingredient replenishment.",
    solution: "Developed an integrated Spring Boot and Hibernate system with MySQL persistence, supporting table ordering, automated bill calculations with tax breakdowns, and stock decrement.",
    myRole: "Backend Developer — created relational database schema in MySQL, implemented Hibernate entities, service transactions, and REST APIs.",
    technologies: ["Java", "Spring Boot", "Hibernate", "MySQL", "Maven"],
    keyFeatures: [
      "Table & Order Lifecycle Management (Placed, Preparing, Served, Billed)",
      "Automatic Bill Calculation with Tax & Discount Line Items",
      "Menu Category & Variant Configuration",
      "Transactional Kitchen Ticket Generation",
      "Daily Sales and Revenue Reporting Queries"
    ],
    architectureOverview: "Clean 3-tier Java Spring architecture: REST Controllers dispatch to Transactional Service classes, which interact with MySQL tables via Hibernate JPA repositories.",
    architectureNodes: [
      { id: "api", label: "Spring Boot REST API", type: "gateway", description: "Handles order creation, menu queries, and billing transactions.", technologies: ["Spring Boot 3"] },
      { id: "service", label: "Order & Billing Services", type: "service", description: "Computes subtotals, tax rates, and validates item availability.", technologies: ["Java 17"] },
      { id: "orm", label: "Hibernate ORM", type: "service", description: "Maps Order, OrderItem, MenuItem, and Customer tables.", technologies: ["Hibernate / JPA"] },
      { id: "db", label: "MySQL Relational Database", type: "database", description: "Maintains relational integrity, foreign key cascades, and daily transaction logs.", technologies: ["MySQL 8"] }
    ],
    dataFlow: [
      "1. Waitstaff inputs table order: item IDs and quantities.",
      "2. OrderService verifies item active status in menu table.",
      "3. Generates Order entity with linked OrderItems under single transaction.",
      "4. Kitchen ticket generated; on checkout, payment recorded and invoice rendered."
    ],
    challengesAndDecisions: [
      {
        challenge: "Preventing menu price changes from altering historical order receipts.",
        decision: "Stored snapshot price per OrderItem at time of purchase rather than relying on current MenuItem price.",
        rationale: "Ensured accounting ledger integrity and accurate historical sales reports."
      }
    ],
    testingAndValidation: "Validated via Postman end-to-end collection covering the entire lifecycle from order placement to bill settlement.",
    resultsAndLessons: "Emphasized the critical importance of immutability in financial transactions and historical billing records.",
    status: "Completed",
    featured: false,
    imageUrl: architectureImg,
    repoUrl: "https://github.com/vishesh-srivastava/cafe-ease",
    demoUrl: "",
    documentationSlugs: ["cafeease-schema"]
  },
  {
    id: "ecommerce-recommendation",
    slug: "ecommerce-recommendation",
    title: "E-Commerce Recommendation System",
    subtitle: "Personalized Product Discovery Engine",
    category: "AI and Machine Learning",
    summary: "A machine-learning-driven recommendation service analyzing user purchase patterns, browsing behaviors, and item attribute affinities to surface relevant items.",
    problem: "E-commerce stores with hundreds of products experience customer drop-off when shoppers cannot quickly locate related or complementary items.",
    solution: "Designed a collaborative and content-based hybrid recommendation pipeline implemented with Python and Django, generating dynamic product affinity rankings.",
    myRole: "Data & ML Engineer — built data preparation pipelines, cosine similarity matrices, and Django REST endpoint integration.",
    technologies: ["Python", "Django", "Scikit-Learn", "Pandas", "PostgreSQL"],
    keyFeatures: [
      "Collaborative Filtering on User-Item Interaction Matrices",
      "Content-Based Similarity Scoring on Product Categories & Tags",
      "Real-Time 'Customers Also Viewed' API Endpoint",
      "Cold-Start Fallback Strategy to Trending & Best-Selling Catalog Items"
    ],
    architectureOverview: "Precomputed item-item similarity matrices are stored and queried by the Django recommendation view, combining dynamic user history with item metadata.",
    architectureNodes: [
      { id: "django-api", label: "Django Recommendation API", type: "gateway", description: "Serves tailored recommendations per user ID and product ID.", technologies: ["Django REST Framework"] },
      { id: "recommender", label: "Hybrid Recommendation Engine", type: "service", description: "Combines collaborative matrix factor scores with content similarity vectors.", technologies: ["Scikit-Learn", "NumPy"] },
      { id: "store", label: "PostgreSQL Database", type: "database", description: "Stores customer interaction logs, ratings, and catalog metadata.", technologies: ["PostgreSQL"] }
    ],
    dataFlow: [
      "1. Customer navigates to product detail page.",
      "2. Client requests GET /api/recommendations?product_id=X&user_id=Y.",
      "3. Engine retrieves top-k similar item vectors.",
      "4. Filters out items already purchased by user; returns ranked list of items."
    ],
    challengesAndDecisions: [
      {
        challenge: "Cold-start problem for newly created user accounts with zero browsing history.",
        decision: "Implemented a graceful fallback to category-weighted popular items until 3 distinct interactions occur.",
        rationale: "Prevented empty recommendation carousels and kept initial onboarding engaging."
      }
    ],
    testingAndValidation: "Evaluated offline precision and recall metrics on public benchmark retail transaction logs.",
    resultsAndLessons: "Gained deep understanding of matrix sparsity, balancing exploratory vs exploitative recommendations, and API latency constraints.",
    status: "Completed",
    featured: false,
    imageUrl: heroWorkspaceImg,
    repoUrl: "https://github.com/vishesh-srivastava/ecommerce-recommender",
    demoUrl: "",
    documentationSlugs: []
  },
  {
    id: "agro-gradio",
    slug: "agro-gradio",
    title: "Agro Gradio Smart Agriculture App",
    subtitle: "AI Agricultural Advisory & Crop Health App",
    category: "AI and Machine Learning",
    summary: "An accessible agricultural assistance tool combining soil parameter modeling, weather input integration, and crop suitability recommendations with an intuitive Gradio interface.",
    problem: "Farmers in regional areas often lack immediate agronomic expertise when determining optimal crop varieties based on local soil nitrogen, phosphorus, potassium, and rainfall figures.",
    solution: "Trained an agronomic decision model and deployed an accessible, fast-loading web app using Gradio and Python, allowing farmers to input readily available soil metrics.",
    myRole: "Full Developer — cleaned agricultural datasets, trained classification model, and built the interactive Gradio interface.",
    technologies: ["Python", "Gradio", "Scikit-Learn", "Pandas"],
    keyFeatures: [
      "Interactive Soil Nutrient Sliders (N, P, K levels, pH, Temperature)",
      "High-Accuracy Crop Suitability Recommendation Output",
      "Explanatory Agronomic Advice Breakdown for Predicted Crop",
      "Lightweight, Fast-Loading Interface Accessible on Low-Bandwidth Devices"
    ],
    architectureOverview: "Single-tier Python deployment: user interacts with Gradio web components; Python inference backend evaluates input tuple against trained Random Forest model and presents recommendation card.",
    architectureNodes: [
      { id: "gradio-ui", label: "Gradio Web UI", type: "client", description: "Mobile-responsive input sliders, numeric fields, and result card visualization.", technologies: ["Gradio UI"] },
      { id: "inference", label: "Agricultural Classifier", type: "service", description: "Trained tree ensemble mapping soil & climate vectors to 22 crop classes.", technologies: ["Scikit-Learn"] }
    ],
    dataFlow: [
      "1. User enters N, P, K, temperature, humidity, pH, and rainfall metrics.",
      "2. Gradio sends parameter dictionary to Python prediction function.",
      "3. Model evaluates features against trained decision boundaries.",
      "4. Returns top recommended crop with confidence score and agronomy cultivation tips."
    ],
    challengesAndDecisions: [
      {
        challenge: "Presenting technical agricultural model outputs in a format immediately actionable by non-technical farmers.",
        decision: "Paired the primary crop prediction with plain-language soil enrichment notes (e.g., 'Soil acidity slightly high for optimal yield; consider lime application').",
        rationale: "Transformed an abstract prediction into a practical farming decision tool."
      }
    ],
    testingAndValidation: "Achieved >95% cross-validated accuracy on standard agricultural test datasets across 2,200 sample conditions.",
    resultsAndLessons: "Showcased how lightweight ML interfaces can deliver immediate value without enterprise server bloat.",
    status: "Completed",
    featured: false,
    imageUrl: architectureImg,
    repoUrl: "https://github.com/vishesh-srivastava/agro-gradio",
    demoUrl: "",
    documentationSlugs: []
  },
  {
    id: "music-library",
    slug: "music-library",
    title: "Music Library Flutter App",
    subtitle: "Cross-Platform Mobile Audio Player & Library",
    category: "Mobile Applications",
    summary: "A sleek, native mobile audio application engineered with Flutter, featuring local track indexing, playlist compilation, dynamic waveform visualization, and background playback.",
    problem: "Default stock mobile media players are often cluttered with advertisements, lack offline track organization, and fail to handle nested audio folders smoothly.",
    solution: "Built a high-performance Flutter mobile application with Dart, featuring clean widget hierarchies, local device audio querying, smooth animated playback controls, and background audio services.",
    myRole: "Mobile Developer — designed Flutter UI widgets, audio player lifecycle handlers, playlist state providers, and device file indexing.",
    technologies: ["Flutter", "Dart", "Provider State Management", "Just Audio API"],
    keyFeatures: [
      "Local Device Audio File Indexing & Metadata Tag Parsing",
      "Interactive Playback Scrubber with Real-Time Audio Duration",
      "Custom Playlist Creation & Queue Reordering",
      "Dark-Mode Editorial Interface with Audio Waveform Indicators",
      "Seamless Background Playback with Lockscreen Notification Media Controls"
    ],
    architectureOverview: "Flutter cross-platform client using Provider for reactive state management, interfacing with native Android/iOS audio playback engines via platform channels.",
    architectureNodes: [
      { id: "flutter-ui", label: "Flutter UI Layer", type: "client", description: "Custom stateless/stateful widgets for player screen, track list, and queue sheet.", technologies: ["Flutter 3", "Dart"] },
      { id: "state-mgmt", label: "Provider State Controller", type: "service", description: "Coordinates audio playback status, current track position, and playlist queues.", technologies: ["Provider"] },
      { id: "audio-engine", label: "Native Audio Service", type: "external", description: "Communicates through platform channels to OS audio session and lockscreen controls.", technologies: ["Just Audio", "Audio Service"] }
    ],
    dataFlow: [
      "1. App launches, queries local device storage permission.",
      "2. Indexes .mp3/.flac files and parses ID3 tags (artist, album, duration).",
      "3. User taps track: Provider notifies audio player controller to load audio source URI.",
      "4. Platform channel initiates native playback session; updates position stream every 200ms."
    ],
    challengesAndDecisions: [
      {
        challenge: "Audio stutter and memory pressure when navigating between screens while music is playing.",
        decision: "Decoupled audio playback service from UI widget trees into a global singleton state provider.",
        rationale: "Ensured uninterrupted audio streaming regardless of user screen transitions or route changes."
      }
    ],
    testingAndValidation: "Tested on physical Android devices across multiple OS versions; verified continuous playback across lockscreen and background multitasking.",
    resultsAndLessons: "Cemented understanding of reactive UI state patterns in Dart and native mobile platform channel lifecycles.",
    status: "Completed",
    featured: true,
    imageUrl: mobileInterfaceImg,
    repoUrl: "https://github.com/vishesh-srivastava/music-library-flutter",
    demoUrl: "",
    documentationSlugs: ["music-library-spec"]
  }
];

export const DOCUMENT_CATALOG: DocumentItem[] = [
  {
    id: "doc-resume",
    slug: "vishesh-srivastava-resume",
    title: "Official Resume – Vishesh Srivastava",
    category: "Resume & Profile",
    fileType: "PDF",
    lastUpdated: "2026",
    description: "Full professional resume summarizing educational background, MCA & BCA achievements, backend technical skills, selected project deliverables, and contact details.",
    technologies: ["Java", "Spring Boot", "Python", "Flask", "PostgreSQL", "Angular", "Docker"],
    downloadFileName: "Vishesh_Srivastava_Resume.txt",
    content: `# VISHESH SRIVASTAVA
Software Developer | Backend & Full-Stack Engineer | Automation and AI Enthusiast
Email: srivastava.vishesh96@gmail.com
LinkedIn: linkedin.com/in/vishesh-srivastava
GitHub: github.com/vishesh-srivastava

================================================================================
PROFESSIONAL SUMMARY
================================================================================
Computer Applications graduate with a strong technical foundation in backend
architecture, relational database modeling, enterprise Java (Spring Boot, Hibernate),
Python service development (Flask, Django), and automation workflows. Demonstrated
academic excellence with a 9.05 GPA (1st Rank) in BCA and a 7.89 CGPA in MCA.
Passionate about building scalable REST APIs, reliable transactional systems,
and modern full-stack web applications.

================================================================================
EDUCATION
================================================================================
Master of Computer Applications (MCA)
SRM University | 2024 – 2026
- Current CGPA: 7.89
- Core focus: Distributed Systems, Advanced Database Design, Cloud Platforms,
  Software Architecture & Quality Assurance.

Bachelor of Computer Applications (BCA)
United University | 2021 – 2024
- Graduation GPA: 9.05 (First Rank / Academic Gold Medalist)
- Core focus: Object-Oriented Programming (Java), Data Structures & Algorithms,
  Relational Database Management (SQL), Web Technologies.

================================================================================
TECHNICAL SKILLS
================================================================================
- Programming Languages: Java, Python, JavaScript, SQL, HTML5, CSS3
- Backend Frameworks: Spring Boot, Hibernate / JPA, Flask, Django, Express.js, REST APIs
- Frontend Technologies: Angular, React, Responsive Design, TypeScript
- Databases & Storage: PostgreSQL, MySQL, Firebase Firestore
- Mobile Development: Flutter, Dart
- Automation & Tools: Git, GitHub, Docker, Maven, Postman, Swagger/OpenAPI, Selenium, Render

================================================================================
SELECTED PROJECTS
================================================================================
1. FlowForge – Automated JD & Resume Customization Tool
   Technologies: Python, Flask, PostgreSQL, Selenium, Angular, Spring Boot
   - Engineered an automated parsing pipeline extracting technical requirements from job descriptions.
   - Built a dynamic scoring algorithm comparing candidate credentials against JD requirements.
   - Implemented headless Selenium workflows to streamline portal validation and reporting.

2. ShelfSync – Enterprise Inventory Management System
   Technologies: Spring Boot, Hibernate/JPA, PostgreSQL, Angular, Docker
   - Architected transactional (@Transactional) inventory ledger with pessimistic locking.
   - Optimized database access via JPA EntityGraphs, reducing queries by over 95%.
   - Built modular REST endpoints with Bean Validation and comprehensive OpenAPI documentation.

3. TrackNinja / SafeWalk – AI-Powered Crime Prediction & Safety Analysis
   Technologies: Flask, Google Maps API, Firebase, Twilio, Python
   - Integrated Google Maps API to visualize transit routes and incident heatmaps.
   - Designed Flask microservices calculating spatial risk indices based on historical records.
   - Configured Twilio webhook automation for instant emergency SMS broadcasting.

4. Music Library Mobile App – Flutter
   Technologies: Flutter, Dart, Provider State Management, Native Audio Services
   - Developed native mobile media player with real-time waveform visualization and background audio.
   - Implemented reactive state management using Provider to decouple audio lifecycles from UI routes.`
  },
  {
    id: "doc-flowforge-arch",
    slug: "flowforge-architecture",
    title: "System Architecture Document – FlowForge",
    category: "System Architecture",
    projectSlug: "flowforge",
    projectName: "FlowForge",
    fileType: "Markdown",
    lastUpdated: "2026",
    description: "Detailed technical breakdown of the FlowForge text parsing pipeline, microservices orchestration, and Selenium headless browser execution model.",
    technologies: ["Python", "Flask", "PostgreSQL", "Selenium"],
    downloadFileName: "FlowForge_Architecture_Specification.md",
    content: `# FlowForge: System Architecture & Data Flow

## 1. Overview
FlowForge is designed to bridge the gap between complex job requirements and candidate profiles.
The application operates on an asynchronous request-response architecture.

## 2. Component Topology
- **Client Tier**: Single-Page Interface (Angular/React) communicating via JSON over HTTPS.
- **Service Tier**: Lightweight Python Flask microservice handling token extraction and scoring.
- **Worker Tier**: Headless Selenium automation runner configured with explicit wait guards.
- **Persistence Tier**: PostgreSQL relational database storing candidate models and historical match reports.

## 3. Data Ingestion & Sanitization Pipeline
\`\`\`
[Job Description Text]
       ↓ (Regex Tokenizer & Stopword Filter)
[Normalized Term Frequency Matrix]
       ↓ (Weighted Term Matching)
[Candidate Profile Vector from PostgreSQL]
       ↓
[Match Confidence Score & Gap Analysis Report]
\`\`\`

## 4. Concurrency & Reliability
- Selenium sessions execute in isolated subprocesses with automatic resource cleanup.
- Database access utilizes connection pooling to prevent exhaustion during batched scans.`
  },
  {
    id: "doc-shelfsync-schema",
    slug: "shelfsync-schema",
    title: "Database Schema & Entity Relationship – ShelfSync",
    category: "Database Schemas",
    projectSlug: "shelf-sync",
    projectName: "ShelfSync",
    fileType: "SQL",
    lastUpdated: "2026",
    description: "PostgreSQL DDL schema definitions, constraints, indexes, and JPA entity mapping specifications for the ShelfSync inventory system.",
    technologies: ["PostgreSQL", "Hibernate", "Spring Data JPA"],
    downloadFileName: "ShelfSync_Database_Schema.sql",
    content: `-- ShelfSync PostgreSQL Relational Schema
-- Enforces ACID transactional integrity and audit logging

CREATE TABLE categories (
    category_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE suppliers (
    supplier_id SERIAL PRIMARY KEY,
    company_name VARCHAR(150) NOT NULL,
    contact_email VARCHAR(100) NOT NULL,
    phone VARCHAR(30),
    address TEXT,
    active BOOLEAN DEFAULT TRUE
);

CREATE TABLE products (
    product_id SERIAL PRIMARY KEY,
    sku VARCHAR(50) NOT NULL UNIQUE,
    name VARCHAR(200) NOT NULL,
    category_id INT NOT NULL REFERENCES categories(category_id) ON DELETE RESTRICT,
    supplier_id INT REFERENCES suppliers(supplier_id) ON DELETE SET NULL,
    unit_price NUMERIC(10, 2) NOT NULL CHECK (unit_price >= 0),
    current_stock INT NOT NULL DEFAULT 0 CHECK (current_stock >= 0),
    reorder_level INT NOT NULL DEFAULT 10,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE inventory_transactions (
    transaction_id BIGSERIAL PRIMARY KEY,
    product_id INT NOT NULL REFERENCES products(product_id),
    transaction_type VARCHAR(20) NOT NULL CHECK (transaction_type IN ('RESTOCK', 'SALE', 'ADJUSTMENT', 'RETURN')),
    quantity_changed INT NOT NULL,
    remaining_balance INT NOT NULL,
    reference_note TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_products_sku ON products(sku);
CREATE INDEX idx_products_category ON products(category_id);
CREATE INDEX idx_inventory_tx_product ON inventory_transactions(product_id, created_at DESC);`
  },
  {
    id: "doc-shelfsync-api",
    slug: "shelfsync-api-docs",
    title: "REST API Contract Specification – ShelfSync",
    category: "API Documentation",
    projectSlug: "shelf-sync",
    projectName: "ShelfSync",
    fileType: "OpenAPI",
    lastUpdated: "2026",
    description: "Comprehensive OpenAPI 3.0 documentation covering REST endpoints, request/response DTO schemas, and HTTP status code mappings.",
    technologies: ["Spring Boot", "OpenAPI", "Swagger"],
    downloadFileName: "ShelfSync_OpenAPI_Contract.json",
    content: `{
  "openapi": "3.0.3",
  "info": {
    "title": "ShelfSync Inventory API",
    "version": "1.0.0",
    "description": "RESTful endpoints for stock tracking, SKU administration, and transaction logs."
  },
  "paths": {
    "/api/v1/products": {
      "get": {
        "summary": "Get paginated list of products",
        "parameters": [
          { "name": "page", "in": "query", "schema": { "type": "integer", "default": 0 } },
          { "name": "size", "in": "query", "schema": { "type": "integer", "default": 20 } },
          { "name": "search", "in": "query", "schema": { "type": "string" } }
        ],
        "responses": {
          "200": { "description": "Page of products returned successfully" }
        }
      },
      "post": {
        "summary": "Create a new product SKU",
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "required": ["sku", "name", "categoryId", "unitPrice"],
                "properties": {
                  "sku": { "type": "string", "example": "SKU-4920" },
                  "name": { "type": "string", "example": "Industrial Thermal Sensor" },
                  "categoryId": { "type": "integer", "example": 3 },
                  "unitPrice": { "type": "number", "example": 89.50 }
                }
              }
            }
          }
        },
        "responses": {
          "201": { "description": "Product created successfully" },
          "400": { "description": "Validation failure" },
          "409": { "description": "SKU already exists" }
        }
      }
    },
    "/api/v1/inventory/adjust": {
      "post": {
        "summary": "Record transactional stock adjustment",
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "required": ["productId", "quantity", "type"],
                "properties": {
                  "productId": { "type": "integer" },
                  "quantity": { "type": "integer" },
                  "type": { "type": "string", "enum": ["RESTOCK", "SALE", "ADJUSTMENT"] }
                }
              }
            }
          }
        },
        "responses": {
          "200": { "description": "Stock successfully updated" },
          "422": { "description": "Insufficient inventory" }
        }
      }
    }
  }
}`
  },
  {
    id: "doc-safewalk-arch",
    slug: "safewalk-architecture",
    title: "Geospatial Safety Engine & Map Integration – SafeWalk",
    category: "System Architecture",
    projectSlug: "safewalk",
    projectName: "SafeWalk",
    fileType: "Markdown",
    lastUpdated: "2026",
    description: "Architectural overview detailing the geospatial proximity scoring algorithms, Twilio SMS callback system, and Firebase Firestore event listeners.",
    technologies: ["Flask", "Google Maps API", "Firebase", "Twilio"],
    downloadFileName: "SafeWalk_Geospatial_Architecture.md",
    content: `# SafeWalk: Geospatial Architecture & Emergency Workflow

## 1. System Intent
SafeWalk balances analytical geospatial query processing with rapid real-time alerting.

## 2. Geospatial Proximity Algorithm
When a user requests route safety calculation:
1. Google Directions API returns an encoded polyline path.
2. The path is decoded into intermediate coordinate points sampled every 50 meters.
3. For each sampled point $P(lat, lng)$, the Flask engine executes a haversine distance search
   against historic incident points:
   $$d = 2r \\arcsin\\left(\\sqrt{\\sin^2\\left(\\frac{\\Delta lat}{2}\\right) + \\cos(lat_1)\\cos(lat_2)\\sin^2\\left(\\frac{\\Delta lng}{2}\\right)}\\right)$$
4. Points falling within danger radii contribute to route safety penalties.

## 3. Emergency Webhook Dispatch
In the event of an SOS trigger:
- The browser dispatches an immediate POST to \`/api/emergency/broadcast\`.
- The Flask service immediately requests Twilio REST API to dispatch urgent SMS alerts to designated emergency contacts containing exact GPS coordinates and a live tracking link.
- Simultaneously records an immutable alert record into Firebase Firestore.`
  },
  {
    id: "doc-cafeease-schema",
    slug: "cafeease-schema",
    title: "Relational Data Model & Order Lifecycle – CafeEase",
    category: "Database Schemas",
    projectSlug: "cafe-ease",
    projectName: "CafeEase",
    fileType: "SQL",
    lastUpdated: "2026",
    description: "MySQL schema and transaction workflow detailing tables, orders, order items, and billing summaries.",
    technologies: ["MySQL", "Spring Boot", "Hibernate"],
    downloadFileName: "CafeEase_MySQL_Schema.sql",
    content: `-- CafeEase MySQL Relational Database Structure
-- Handles table state, billing calculations, and order statuses

CREATE TABLE cafe_tables (
    table_id INT AUTO_INCREMENT PRIMARY KEY,
    table_number INT NOT NULL UNIQUE,
    capacity INT NOT NULL DEFAULT 4,
    is_occupied BOOLEAN DEFAULT FALSE
) ENGINE=InnoDB;

CREATE TABLE menu_items (
    item_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(120) NOT NULL,
    category VARCHAR(60) NOT NULL,
    price DECIMAL(8, 2) NOT NULL,
    is_available BOOLEAN DEFAULT TRUE
) ENGINE=InnoDB;

CREATE TABLE orders (
    order_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    table_id INT NOT NULL,
    order_status ENUM('PLACED', 'IN_KITCHEN', 'SERVED', 'COMPLETED', 'CANCELLED') DEFAULT 'PLACED',
    subtotal DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    tax_amount DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    grand_total DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (table_id) REFERENCES cafe_tables(table_id)
) ENGINE=InnoDB;

CREATE TABLE order_items (
    order_item_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    order_id BIGINT NOT NULL,
    item_id INT NOT NULL,
    quantity INT NOT NULL DEFAULT 1,
    unit_price_at_order DECIMAL(8, 2) NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(order_id) ON DELETE CASCADE,
    FOREIGN KEY (item_id) REFERENCES menu_items(item_id)
) ENGINE=InnoDB;`
  },
  {
    id: "doc-phishguard-report",
    slug: "phishguard-report",
    title: "Phishing Detection Lexical Analysis Technical Report",
    category: "Project Reports",
    projectSlug: "phishguard",
    projectName: "PhishGuard",
    fileType: "Markdown",
    lastUpdated: "2026",
    description: "In-depth technical report discussing the 16 extracted URL lexical heuristics, entropy calculations, and false-positive reduction strategies.",
    technologies: ["Python", "Machine Learning", "Scikit-Learn"],
    downloadFileName: "PhishGuard_Technical_Report.md",
    content: `# PhishGuard: URL Lexical Detection Technical Report

## 1. Abstract
Phishing remains the preeminent attack vector for credential harvesting. PhishGuard explores
deterministic lexical parsing of uniform resource locators (URLs) to score deception probability
without relying on slow external DNS blacklists.

## 2. Heuristic Feature Set
The parsing engine extracts:
1. **URL Entropy**: Shannon entropy calculated across the URL character distribution.
2. **Subdomain Depth**: Frequency of dot delimiters preceding the registrable domain.
3. **Punycode / Homograph Indicators**: Presence of 'xn--' prefixes suggesting Cyrillic or Greek spoofing.
4. **IP Address in Hostname**: Hexadecimal or dotted-decimal IP patterns bypassing domain registration.
5. **Brand Typosquatting Score**: Levenshtein distance against known high-value financial & tech services.

## 3. Evaluation
Evaluated against 10,000 verified URL samples. Model achieved 94.2% precision with under 15ms inference latency per query.`
  },
  {
    id: "doc-music-spec",
    slug: "music-library-spec",
    title: "Mobile App Specifications & State Architecture – Music Library",
    category: "Implementation Guides",
    projectSlug: "music-library",
    projectName: "Music Library Flutter App",
    fileType: "Markdown",
    lastUpdated: "2026",
    description: "Flutter architecture notes, Provider lifecycle management, ID3 tag parsing strategies, and native platform channel configurations.",
    technologies: ["Flutter", "Dart", "Provider", "Audio Player"],
    downloadFileName: "Flutter_Music_Library_Specification.md",
    content: `# Music Library Mobile App: Architecture & State Specification

## 1. App Architecture
The Flutter mobile application enforces strict separation of concerns:
- **Presentation Layer**: Widget composition with responsive LayoutBuilder adapters.
- **State Layer**: ChangeNotifier providers coordinating playback position, playlists, and shuffle states.
- **Service Layer**: Native audio wrappers interfacing with Android MediaPlayer and iOS AVQueuePlayer.

## 2. Key Lifecycle Management
\`\`\`dart
class AudioPlayerModel extends ChangeNotifier {
  final AudioPlayer _player = AudioPlayer();
  Track? _currentTrack;
  bool _isPlaying = false;
  
  // Decoupled playback methods ensuring state survives screen navigation
  Future<void> playTrack(Track track) async {
    _currentTrack = track;
    await _player.setUrl(track.uri);
    _player.play();
    notifyListeners();
  }
}
\`\`\`

## 3. Storage & Permissions
Handles dynamic runtime permissions for scoped audio storage access on modern Android (API 33+)
and iOS photo/media library frameworks.`
  }
];
