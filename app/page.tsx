const LINKS = {
  WINDOWS:
    "https://github.com/roinos/queueping-releases/releases/latest/download/QueuePing-Windows-v0.1.0-beta.exe",
  MACOS:
    "https://github.com/roinos/queueping-releases/releases/latest/download/QueuePing-macOS-beta-signed-not-notarized.zip",
  ANDROID:
    "https://github.com/roinos/queueping-releases/releases/latest/download/app-release.apk",
  // TODO: Replace this with your future iOS beta request form URL if it changes.
  IOS_REQUEST: "https://forms.gle/gZWHJXTZLTqyFXb18",
  // TODO: Replace this with your future beta feedback form URL if it changes.
  FEEDBACK: "https://forms.gle/gZWHJXTZLTqyFXb18",
  // TODO: Replace this with your future feature request form URL if it changes.
  FEATURE_REQUEST: "https://forms.gle/af1LxuisHKMg2ymy8",
} as const;

const downloads = [
  {
    name: "Windows",
    label: "Desktop beta",
    description:
      "Direct download for Windows testers through GitHub Releases.",
    href: LINKS.WINDOWS,
    cta: "Download for Windows",
    note: "Early beta builds may trigger a Windows security warning.",
  },
  {
    name: "macOS",
    label: "Desktop beta",
    description:
      "Signed macOS beta build for testers using Apple Silicon or Intel Macs.",
    href: LINKS.MACOS,
    cta: "Download for macOS",
    note: "macOS may warn on first launch while notarization is pending.",
  },
  {
    name: "Android",
    label: "Mobile beta",
    description:
      "Install the latest Android APK to receive QueuePing alerts on your phone.",
    href: LINKS.ANDROID,
    cta: "Download Android APK",
    note: "You may need to allow installation from unknown sources.",
  },
];

const betaNotes = [
  "macOS may show a security warning because this beta may not be notarized yet.",
  "Android APK installation may require enabling installs from unknown sources.",
  "Windows may show a security warning because this is an early beta build.",
];

const trustPoints = [
  "QueuePing detection runs locally on your machine.",
  "QueuePing does not upload screen data.",
  "The app only sends the event needed to notify your phone.",
];

export default function Home() {
  return (
    <main className="page-shell">
      <div className="ambient ambient-a" />
      <div className="ambient ambient-b" />

      <section className="hero">
        <div className="hero-copy">
          <p className="hero-label">QueuePing Beta Program</p>

          <h1>Never miss your queue again.</h1>
          <p className="hero-text">
            QueuePing watches locally and alerts your phone when your game
            needs you back.
          </p>

          <div className="hero-panels">
            <div className="stat-card">
              <span className="stat-label">Desktop detection</span>
              <strong>Local monitoring</strong>
              <p>Queue, match, and ready-state detection runs on your device.</p>
            </div>
            <div className="stat-card">
              <span className="stat-label">Mobile alerts</span>
              <strong>Fast phone notifications</strong>
              <p>Step away from your desk without losing the moment you need to return.</p>
            </div>
          </div>
        </div>

        <aside className="hero-aside">
          <div className="preview-card">
            <p className="panel-label">Beta access</p>
            <h2>How this beta is distributed</h2>
            <p>
              Desktop and Android builds are distributed through GitHub
              Releases. iPhone access is handled manually so the beta team can
              control invites and rollout.
            </p>
            <dl className="info-list">
              <div>
                <dt>Desktop</dt>
                <dd>Windows and macOS downloads are available now.</dd>
              </div>
              <div>
                <dt>Android</dt>
                <dd>APK installs are supported for current beta testers.</dd>
              </div>
              <div>
                <dt>iPhone</dt>
                <dd>Request access first to join the iOS beta team.</dd>
              </div>
            </dl>
          </div>
        </aside>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <p className="section-label">Downloads</p>
          <h2>Choose your beta platform</h2>
          <p>
            Public beta downloads are available for Windows, macOS, and
            Android. iPhone users need a manual beta invite.
          </p>
        </div>

        <div className="card-grid">
          {downloads.map((item) => (
            <article className="platform-card" key={item.name}>
              <div className="platform-top">
                <p className="platform-label">{item.label}</p>
                <h3>{item.name}</h3>
              </div>
              <p>{item.description}</p>
              <div className="card-footer">
                <a
                  className="primary-button"
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.cta}
                </a>
                <span className="card-note">{item.note}</span>
              </div>
            </article>
          ))}

          <article className="platform-card platform-card-ios">
            <div className="platform-top">
              <p className="platform-label">Invite only</p>
              <h3>iPhone / iOS</h3>
            </div>
            <p>
              iPhone users cannot download QueuePing directly yet. Access to
              the iOS beta is handled manually through the beta testing team.
            </p>
            <div className="card-footer">
              <a
                className="primary-button"
                href={LINKS.IOS_REQUEST}
                target="_blank"
                rel="noopener noreferrer"
              >
                Request iOS Beta Access
              </a>
              <span className="card-note">
                Submit your request and wait for beta team approval.
              </span>
            </div>
          </article>
        </div>
      </section>

      <section className="split-section">
        <div className="section-panel">
          <p className="section-label">Known beta notes</p>
          <h2>What testers should expect</h2>
          <ul className="bullet-list">
            {betaNotes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </div>

        <div className="section-panel">
          <p className="section-label">Privacy</p>
          <h2>Local by design</h2>
          <ul className="bullet-list">
            {trustPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="feedback-strip">
        <div>
          <p className="section-label">Beta feedback</p>
          <h2>Found a bug?</h2>
          <p>
            Report issues, rough edges, or platform-specific install problems so
            the beta can improve quickly.
          </p>
        </div>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <a
            className="secondary-button"
            href={LINKS.FEEDBACK}
            target="_blank"
            rel="noopener noreferrer"
          >
            Report an issue
          </a>
          <a
            className="secondary-button"
            href={LINKS.FEATURE_REQUEST}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Suggest a QueuePing feature request"
          >
            Suggest a feature
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <span>QueuePing Beta</span>
        <span>v0.1.0-beta</span>
      </footer>
    </main>
  );
}
