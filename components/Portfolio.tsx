"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";
import { ArrowUpRight, ChevronDown, Github, Linkedin, Menu, Send, Unlock, X } from "lucide-react";
import { certifications, experience, profile, projects, research, skills } from "../lib/data";

const tabs = Object.keys(skills) as Array<keyof typeof skills>;

const NAV_LINKS: Array<[string, string]> = [
  ["HOME", "home"],
  ["ABOUT", "about"],
  ["SKILLS", "skills"],
  ["EXPERIENCE", "experience"],
  ["CONTACT", "contact"],
];

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  const [tab, setTab] = useState<keyof typeof skills>("SECURITY");
  const [openProject, setOpenProject] = useState<string | null>(null);
  const [cursor, setCursor] = useState({ x: -100, y: -100 });
  const [pointer, setPointer] = useState({ x: 50, y: 50 });
  const [booting, setBooting] = useState(true);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || window.matchMedia("(pointer: coarse)").matches) return;
    const move = (e: MouseEvent) => {
      setCursor({ x: e.clientX, y: e.clientY });
      setPointer({ x: (e.clientX / window.innerWidth) * 100, y: (e.clientY / window.innerHeight) * 100 });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [reduce]);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // One deliberate load-in sequence for the whole page, matching the "system boot" motif.
  // Skipped entirely for reduced-motion users.
  useEffect(() => {
    if (reduce) {
      setBooting(false);
      return;
    }
    const t = setTimeout(() => setBooting(false), 1100);
    return () => clearTimeout(t);
  }, [reduce]);

  const reveal = reduce
    ? {}
    : { initial: { opacity: 0, y: 18 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.15 }, transition: { duration: 0.55 } };

  return (
    <div className="page" style={{ "--mx": `${pointer.x}%`, "--my": `${pointer.y}%` } as React.CSSProperties}>
      <AnimatePresence>
        {booting && (
          <motion.div className="bootScreen" exit={{ opacity: 0 }} transition={{ duration: 0.5, ease: "easeInOut" }}>
            <div className="bootInner">
              <div className="bootLine mono">VARAD_RASKAR.SYS</div>
              <div className="bootBarTrack">
                <motion.div
                  className="bootBarFill"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.9, ease: "easeInOut" }}
                />
              </div>
              <div className="bootLine small mono">INITIALIZING SYSTEMS...</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!reduce && (
        <>
          <div className="cursorDot" aria-hidden="true" style={{ left: cursor.x, top: cursor.y }} />
          <div className="cursorGlow" aria-hidden="true" style={{ left: cursor.x, top: cursor.y }} />
        </>
      )}
      <div className="scanOverlay" aria-hidden="true" />
      <div className="pageProgress" aria-hidden="true" />

      <nav className={`nav ${scrolled ? "scrolled" : ""} ${menu ? "open" : ""}`}>
        <div className="container navInner">
          <a className="brand glitch" href="#home" aria-label="Varad Raskar home">VR</a>
          <div className="navLinks">
            {NAV_LINKS.map(([label, id]) => (
              <a key={id} href={`#${id}`} onClick={() => setMenu(false)}>{label}</a>
            ))}
          </div>
          <button className="menu" onClick={() => setMenu(!menu)} aria-label={menu ? "Close navigation" : "Open navigation"} aria-expanded={menu}>
            {menu ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <main>
        <section id="home" className="hero">
          <div className="heroGridLines" aria-hidden="true"><i /><i /><i /><i /></div>
          <div className="heroOrb heroOrbA" aria-hidden="true" />
          <div className="heroOrb heroOrbB" aria-hidden="true" />
          <div className="container heroGrid">
            <motion.div {...reveal}>
              <div className="systemLine mono"><span className="dot" />SYSTEM ONLINE</div>
              <div className="heroName">THIS IS VARAD RASKAR.</div>
              <h1 className="glitch">EXPLORING SYSTEMS.<br />BUILDING &amp;<br />SECURING THEM.</h1>
              <p className="heroLead">
                A Computer Science student exploring cybersecurity, backend engineering, systems, and infrastructure through hands-on learning and technical work.
              </p>
              <div className="heroCtas">
                <a className="btn primary" href="#skills">EXPLORE <ArrowUpRight size={14} /></a>
                <a className="btn" href="#contact">CONTACT <Send size={14} /></a>
              </div>
            </motion.div>
            <motion.div {...reveal} transition={{ duration: 0.55, delay: 0.12 }} className="hud hudInteractive">
              <span className="hudCorner hudCornerTL" aria-hidden="true" />
              <span className="hudCorner hudCornerBR" aria-hidden="true" />
              <span className="hudSweep" aria-hidden="true" />
              <span className="hudReadout">REV 2.6</span>
              <div className="hudRow"><div className="hudLabel">SYSTEM STATUS</div><div className="hudValue">● ONLINE</div></div>
              <div className="hudRow"><div className="hudLabel">CURRENT FOCUS</div><div className="hudValue">{profile.focus}</div></div>
              <div className="hudRow">
                <div className="hudLabel">EXPLORING</div>
                <div className="chips">{profile.exploring.map((x) => <span className="chip" key={x}>{x}</span>)}</div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container">
            <motion.div {...reveal} className="sectionHead">
              <div><div className="eyebrow">01 / IDENTITY</div><h2>ABOUT ME</h2></div>
              <p className="sectionIntro">Curiosity first. Systems second. Security throughout.</p>
            </motion.div>
            <div className="aboutGrid">
              <motion.div {...reveal}>
                <p className="aboutText">
                  I&rsquo;m a Computer Science student exploring the intersection of cybersecurity, backend engineering, systems, and infrastructure. I&rsquo;m interested in understanding how systems work in practice, working with them hands-on, and learning how they can be secured.
                </p>
                <p className="aboutText">
                  My current work spans security testing and assessment, Linux and production server administration, deployment, networking fundamentals, and structured technical projects.
                </p>
                <a className="btn primary decrypt glitch" href="/resume.pdf" target="_blank" rel="noreferrer" download>
                  DECRYPT RESUME <Unlock size={14} />
                </a>
              </motion.div>
              <motion.div {...reveal} className="photoWrap">
                <div className="photoFrame">
                  <Image src="/profile.jpg" alt="Professional shoulder-up photograph of Varad Raskar" fill priority sizes="(max-width: 900px) 60vw, 230px" />
                  <span className="photoRing" />
                  <span className="photoRing2" />
                </div>
                <span className="statusTag">IDENTITY / VERIFIED</span>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="container">
            <motion.div {...reveal} className="sectionHead">
              <div><div className="eyebrow">02 / ARSENAL</div><h2>WHAT I WORK WITH</h2></div>
              <p className="sectionIntro">No ratings. No inflated proficiency bars. Just the areas and tools explicitly provided.</p>
            </motion.div>
            <div className="tabs" role="tablist" aria-label="Skill categories">
              {tabs.map((t) => (
                <button key={t} className={`tab ${tab === t ? "active" : ""}`} role="tab" aria-selected={tab === t} onClick={() => setTab(t)}>{t}</button>
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={tab}
                initial={reduce ? undefined : { opacity: 0, y: 10 }}
                animate={reduce ? undefined : { opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="skillGrid"
              >
                {(Object.entries(skills[tab]) as Array<[string, readonly string[]]>).map(([name, items]) => (
                  <div className="skillBlock" key={name}>
                    <h3>{name}</h3>
                    <div className="skillList">{items.map((item) => <span className="skillPill" key={item}>{item}</span>)}</div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        <section id="experience" className="section">
          <div className="container">
            <motion.div {...reveal} className="sectionHead">
              <div><div className="eyebrow">03 / EXPERIENCE</div><h2>FIELD EXPERIENCE</h2></div>
            </motion.div>
            <motion.div {...reveal} className="expPanel">
              <div className="expTop">
                <div><div className="eyebrow">PRIMARY EXPERIENCE</div><h3>{experience.role}</h3><p>{experience.company}</p></div>
                <div className="expDate">{experience.dates}</div>
              </div>
              <div className="expRows">
                {Object.entries(experience.panels).map(([name, items]) => (
                  <div className="expRow" key={name}>
                    <h4>{name}</h4>
                    <ul>{items.map((i) => <li key={i}>{i}</li>)}</ul>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section id="certifications" className="section">
          <div className="container">
            <motion.div {...reveal} className="sectionHead">
              <div><div className="eyebrow">04 / CERTIFICATIONS</div><h2>VERIFIED WORK</h2></div>
              <p className="sectionIntro">Certificate metadata is taken from the supplied certificate files. Missing fields stay missing.</p>
            </motion.div>
            <div className="certGrid">
              {certifications.map((c, i) => (
                <TiltCard {...reveal} transition={{ duration: 0.5, delay: i * 0.03 }} className="card" key={`${c.title}-${c.issuer}-${i}`}>
                  <div className="cardTop">
                    <span className="index">CERT {String(i + 1).padStart(2, "0")}</span>
                    <span className="index">{c.type}</span>
                  </div>
                  <h3>{c.title}</h3>
                  <p>{c.issuer}</p>
                  <div className="meta">{c.date}<br />{c.credential}</div>
                  <a className="btn" href={c.file} target="_blank" rel="noreferrer">VIEW CERTIFICATE <ArrowUpRight size={13} /></a>
                </TiltCard>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <motion.div {...reveal} className="sectionHead">
              <div><div className="eyebrow">05 / PROJECTS</div><h2>BUILT / BUILDING</h2></div>
            </motion.div>
            <div className="projectGrid">
              {projects.map((p, i) => (
                <TiltCard {...reveal} transition={{ duration: 0.5, delay: i * 0.04 }} className="card projectCard" key={p.id}>
                  <div className="projectCardHeader">
                    <div className="cardTop">
                      <span className="index">PROJECT {p.id}</span>
                      <span className="index">{p.status}</span>
                    </div>
                    <h3>{p.title}</h3>
                    <p>{p.description}</p>
                    {p.github && (
                      <a className="btn" href={p.github} target="_blank" rel="noreferrer"><Github size={14} /> GITHUB <ArrowUpRight size={13} /></a>
                    )}
                  </div>
                  <button className="projectToggle" onClick={() => setOpenProject(openProject === p.id ? null : p.id)} aria-expanded={openProject === p.id}>
                    EXPAND DETAILS <ChevronDown size={14} />
                  </button>
                  <AnimatePresence>
                    {openProject === p.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="projectBody"
                      >
                        {Object.entries(p.details).map(([k, v]) => (
                          <div key={k} style={{ marginBottom: 16 }}><h4>{k}</h4><p>{v}</p></div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </TiltCard>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <motion.div {...reveal} className="research">
              <div className="eyebrow">RESEARCH NODE</div>
              <div className="researchTitle">{research.title}</div>
              <div className="researchMeta">
                <span>STATUS: {research.status}</span>
                <span>ROLE: {research.role}</span>
                <span>TYPE: {research.type}</span>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container">
            <motion.div {...reveal} className="sectionHead">
              <div><div className="eyebrow">06 / CONTACT</div><h2>LET&apos;S CONNECT</h2></div>
            </motion.div>
            <div className="contactGrid">
              <motion.div {...reveal} className="contactCopy">
                <p>Have a technical opportunity, internship conversation, collaboration idea, or project question? Send a message.</p>
                <div className="socials">
                  <a className="social" href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={13} /> LINKEDIN</a>
                  <a className="social" href={profile.github} target="_blank" rel="noreferrer"><Github size={13} /> GITHUB</a>
                  <a className="social" href={profile.x} target="_blank" rel="noreferrer">X / TWITTER</a>
                </div>
              </motion.div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footerInner">
          <span>VARAD RASKAR &middot; EXPLORING SYSTEMS. BUILDING &amp; SECURING THEM.</span>
          <span>SYSTEM STATUS: ONLINE &middot; &copy; 2026</span>
        </div>
      </footer>
    </div>
  );
}

/**
 * Wraps a card in a subtle cursor-reactive 3D tilt. Motion here is
 * entirely a response to the person's own pointer movement (never
 * autoplaying), and is disabled when reduced motion is preferred.
 */
function TiltCard({ className, children, style, ...rest }: React.ComponentProps<typeof motion.article>) {
  const reduce = useReducedMotion();
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const rotateX = useTransform(py, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(px, [-0.5, 0.5], [-6, 6]);

  function onMouseMove(e: React.MouseEvent<HTMLElement>) {
    if (reduce) return;
    const rect = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width - 0.5);
    py.set((e.clientY - rect.top) / rect.height - 0.5);
  }
  function onMouseLeave() {
    px.set(0);
    py.set(0);
  }

  return (
    <motion.article
      className={className}
      style={{ ...style, transformPerspective: 900, rotateX: reduce ? 0 : rotateX, rotateY: reduce ? 0 : rotateY }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      {...rest}
    >
      {children}
    </motion.article>
  );
}

function ContactForm() {
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    setMessage("");
    const form = new FormData(e.currentTarget);
    try {
      const r = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(form.entries())),
      });
      const data = await r.json();
      if (!r.ok) throw new Error(data.error || "Unable to transmit");
      setState("success");
      setMessage("MESSAGE RECEIVED");
      e.currentTarget.reset();
    } catch (err) {
      setState("error");
      setMessage(err instanceof Error ? err.message : "Unable to transmit the message.");
    }
  }

  return (
    <form className="form" onSubmit={submit}>
      <div className="field"><label htmlFor="name">NAME</label><input id="name" name="name" required maxLength={100} /></div>
      <div className="field"><label htmlFor="email">EMAIL</label><input id="email" name="email" type="email" required maxLength={160} /></div>
      <div className="field"><label htmlFor="message">MESSAGE</label><textarea id="message" name="message" required maxLength={5000} /></div>
      {message && <div className="formStatus" role="status">{message}</div>}
      <button className="btn primary" type="submit" disabled={state === "loading"}>
        {state === "loading" ? "TRANSMITTING..." : "TRANSMIT MESSAGE"} <Send size={14} />
      </button>
    </form>
  );
}
