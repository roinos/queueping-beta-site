"use client";

import { useState } from "react";

const LINKS = {
  WINDOWS:
    "https://github.com/roinos/queueping-releases/releases/download/v0.1.0-beta/QueuePing-Windows-v0.1.1-beta-portable.zip",
  MACOS:
    "https://github.com/roinos/queueping-releases/releases/download/v0.1.0-beta/QueuePing-macOS-beta-signed-not-notarized.zip",
  ANDROID:
    "https://github.com/roinos/queueping-releases/releases/download/v0.1.0-beta/app-release.apk",
  // TODO: Replace this with your future iOS beta request form URL if it changes.
  IOS_REQUEST: "https://forms.gle/yKWoQ92TfWZzC4ay9",
  // TODO: Replace this with your future beta feedback form URL if it changes.
  FEEDBACK: "https://forms.gle/gZWHJXTZLTqyFXb18",
  // TODO: Replace this with your future feature request form URL if it changes.
  FEATURE_REQUEST: "https://forms.gle/af1LxuisHKMg2ymy8",
} as const;

type Language = "en" | "he";

type ScreenshotItem = {
  src: string;
  alt: string;
};

type InstallGuideItem = {
  key: string;
  title: string;
  label: string;
  steps: string[];
  cta?: {
    label: string;
    href: string;
    ariaLabel?: string;
  };
  screenshots: ScreenshotItem[];
};

const copy = {
  en: {
    languageName: "English",
    pageLabel: "QueuePing Beta Program",
    switcherLabel: "Language",
    heroTitle: "Never miss your queue again.",
    heroText:
      "QueuePing watches locally and alerts your phone when your game needs you back.",
    heroStats: [
      {
        label: "Desktop detection",
        title: "Local monitoring",
        text: "Queue, match, and ready-state detection runs on your device.",
      },
      {
        label: "Mobile alerts",
        title: "Fast phone notifications",
        text: "Step away from your desk without losing the moment you need to return.",
      },
    ],
    betaAccessLabel: "Beta access",
    betaAccessTitle: "How this beta is distributed",
    betaAccessText:
      "Desktop and Android builds are distributed through GitHub Releases. iPhone access is handled manually so the beta team can control invites and rollout.",
    betaAccessItems: [
      {
        title: "Desktop",
        text: "Windows and macOS downloads are available now.",
      },
      {
        title: "Android",
        text: "APK installs are supported for current beta testers.",
      },
      {
        title: "iPhone",
        text: "Request access first to join the iOS beta team.",
      },
    ],
    downloadsLabel: "Downloads",
    downloadsTitle: "Choose your beta platform",
    downloadsText:
      "Public beta downloads are available for Windows, macOS, and Android. iPhone users need a manual beta invite.",
    downloads: [
      {
        name: "Windows",
        label: "Desktop beta",
        description:
          "Direct download for Windows testers through GitHub Releases.",
        href: LINKS.WINDOWS,
        cta: "Download Windows Portable",
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
      {
        name: "iPhone / iOS",
        label: "Invite only",
        description:
          "iPhone users cannot download QueuePing directly yet. Access to the iOS beta is handled manually through the beta testing team.",
        href: LINKS.IOS_REQUEST,
        cta: "Request iOS Beta Access",
        note: "Submit your request and wait for beta team approval.",
      },
    ],
    betaNotesLabel: "Known beta notes",
    betaNotesTitle: "What testers should expect",
    betaNotes: [
      "macOS may show a security warning because this beta may not be notarized yet.",
      "Android APK installation may require enabling installs from unknown sources.",
      "Windows may show a security warning because this is an early beta build.",
    ],
    privacyLabel: "Privacy",
    privacyTitle: "Local by design",
    privacyPoints: [
      "QueuePing detection runs locally on your machine.",
      "QueuePing does not upload screen data.",
      "The app only sends the event needed to notify your phone.",
    ],
    installLabel: "Installation guide",
    installTitle: "How to install and use QueuePing",
    installText:
      "Follow the platform-specific steps below to install QueuePing, connect your phone, and start detection before entering a game.",
    installGuides: [
      {
        key: "windows",
        title: "Windows",
        label: "Portable steps",
        steps: [
          "Download the Windows ZIP.",
          "Extract it.",
          "Open QueuePing.exe.",
          "If Windows SmartScreen appears, choose More info and then Run anyway.",
          "Connect your phone or mobile app.",
          "Start detection before entering a game.",
        ],
        screenshots: [
          {
            src: "/install/windows-step-1.png",
            alt: "Windows QueuePing portable ZIP download screen placeholder",
          },
          {
            src: "/install/windows-step-2.png",
            alt: "Windows QueuePing setup and launch screen placeholder",
          },
        ],
      },
      {
        key: "macos",
        title: "macOS",
        label: "Installation steps",
        steps: [
          "Download the macOS zip.",
          "Unzip it.",
          "Move QueuePing to Applications if needed.",
          "If macOS blocks it, open System Settings, then Privacy & Security, then Open Anyway.",
          "Open QueuePing and connect your phone.",
          "Start detection before entering a game.",
        ],
        screenshots: [
          {
            src: "/install/macos-step-1.png",
            alt: "macOS QueuePing zip and app extraction placeholder",
          },
          {
            src: "/install/macos-step-2.png",
            alt: "macOS QueuePing security approval screen placeholder",
          },
        ],
      },
      {
        key: "android",
        title: "Android",
        label: "APK steps",
        steps: [
          "Download the APK.",
          "Allow installation from unknown sources if prompted.",
          "Install the app.",
          "Open it and sign in or connect.",
          "Keep notifications enabled.",
        ],
        screenshots: [
          {
            src: "/install/android-step-1.png",
            alt: "Android QueuePing APK installation placeholder",
          },
        ],
      },
      {
        key: "ios",
        title: "iPhone / TestFlight",
        label: "Access steps",
        steps: [
          "iPhone users cannot download QueuePing directly.",
          "Request TestFlight access using the form below.",
          "After approval, you will receive a TestFlight invite by email.",
          "Install QueuePing from TestFlight and connect your device.",
        ],
        cta: {
          label: "Request iOS Beta Access",
          href: LINKS.IOS_REQUEST,
          ariaLabel: "Request QueuePing iOS beta access via TestFlight",
        },
        screenshots: [
          {
            src: "/install/ios-step-1.png",
            alt: "iPhone QueuePing TestFlight invite placeholder",
          },
        ],
      },
    ] satisfies InstallGuideItem[],
    screenshotPlaceholder: "Screenshot coming soon",
    screenshotHint:
      "Add the final screenshot file to website/public/install/ using this filename.",
    feedbackLabel: "Beta feedback",
    feedbackTitle: "Found a bug?",
    feedbackText:
      "Report issues, rough edges, or platform-specific install problems so the beta can improve quickly.",
    reportIssue: "Report an issue",
    suggestFeature: "Suggest a feature",
    suggestFeatureAria: "Suggest a QueuePing feature request",
    footerProduct: "QueuePing Beta",
    footerVersion: "v0.1.0-beta",
  },
  he: {
    languageName: "עברית",
    pageLabel: "תוכנית הבטא של QueuePing",
    switcherLabel: "שפה",
    heroTitle: "לא מפספסים תור יותר.",
    heroText:
      "QueuePing עוקב מקומית ומתריע לטלפון שלך כשהמשחק צריך אותך בחזרה.",
    heroStats: [
      {
        label: "זיהוי במחשב",
        title: "ניטור מקומי",
        text: "זיהוי תור, משחק ומצב מוכנות מתבצע על המכשיר שלך.",
      },
      {
        label: "התראות לנייד",
        title: "התראות מהירות לטלפון",
        text: "אפשר להתרחק מהמחשב בלי לפספס את הרגע שבו צריך לחזור.",
      },
    ],
    betaAccessLabel: "גישה לבטא",
    betaAccessTitle: "איך הבטא מופצת",
    betaAccessText:
      "גרסאות למחשב ולאנדרואיד מופצות דרך GitHub Releases. גישת iPhone מנוהלת ידנית כדי לשלוט בהזמנות ובהפצה.",
    betaAccessItems: [
      {
        title: "מחשב",
        text: "הורדות ל-Windows ול-macOS זמינות עכשיו.",
      },
      {
        title: "Android",
        text: "התקנת APK נתמכת עבור בודקי הבטא הנוכחיים.",
      },
      {
        title: "iPhone",
        text: "צריך לבקש גישה כדי להצטרף לצוות הבטא של iOS.",
      },
    ],
    downloadsLabel: "הורדות",
    downloadsTitle: "בחרו את פלטפורמת הבטא שלכם",
    downloadsText:
      "הורדות ציבוריות זמינות ל-Windows, macOS ו-Android. משתמשי iPhone צריכים הזמנה ידנית לבטא.",
    downloads: [
      {
        name: "Windows",
        label: "בטא למחשב",
        description: "הורדה ישירה לבודקי Windows דרך GitHub Releases.",
        href: LINKS.WINDOWS,
        cta: "הורדת Windows Portable",
        note: "גרסאות בטא מוקדמות עלולות להציג אזהרת אבטחה של Windows.",
      },
      {
        name: "macOS",
        label: "בטא למחשב",
        description:
          "גרסת בטא חתומה ל-macOS עבור מחשבי Apple Silicon ו-Intel.",
        href: LINKS.MACOS,
        cta: "הורדה ל-macOS",
        note: "macOS עלול להציג אזהרה בהפעלה הראשונה כל עוד הנוטריונליזציה ממתינה.",
      },
      {
        name: "Android",
        label: "בטא לנייד",
        description:
          "התקינו את קובץ ה-APK העדכני כדי לקבל התראות QueuePing בטלפון.",
        href: LINKS.ANDROID,
        cta: "הורדת APK לאנדרואיד",
        note: "ייתכן שתצטרכו לאפשר התקנה ממקורות לא מוכרים.",
      },
      {
        name: "iPhone / iOS",
        label: "בהזמנה בלבד",
        description:
          "משתמשי iPhone לא יכולים להוריד את QueuePing ישירות כרגע. הגישה לבטא של iOS מנוהלת ידנית על ידי צוות הבטא.",
        href: LINKS.IOS_REQUEST,
        cta: "בקשת גישה לבטא של iOS",
        note: "שלחו בקשה והמתינו לאישור מצוות הבטא.",
      },
    ],
    betaNotesLabel: "הערות בטא חשובות",
    betaNotesTitle: "למה לצפות במהלך הבטא",
    betaNotes: [
      "macOS עלול להציג אזהרת אבטחה כי ייתכן שהבטא עדיין לא עברה notarization.",
      "ייתכן שהתקנת APK באנדרואיד תדרוש הפעלת התקנה ממקורות לא מוכרים.",
      "Windows עלול להציג אזהרת אבטחה כי זו גרסת בטא מוקדמת.",
    ],
    privacyLabel: "פרטיות",
    privacyTitle: "מקומי כברירת מחדל",
    privacyPoints: [
      "הזיהוי של QueuePing רץ מקומית על המכשיר שלך.",
      "QueuePing לא מעלה נתוני מסך.",
      "האפליקציה שולחת רק את האירוע הדרוש כדי להתריע לטלפון שלך.",
    ],
    installLabel: "מדריך התקנה",
    installTitle: "איך מתקינים ומשתמשים ב-QueuePing",
    installText:
      "עקבו אחר השלבים המתאימים לפלטפורמה כדי להתקין את QueuePing, לחבר את הטלפון ולהפעיל זיהוי לפני כניסה למשחק.",
    installGuides: [
      {
        key: "windows",
        title: "Windows",
        label: "שלבי התקנה",
        steps: [
          "הורידו את קובץ ה-ZIP של Windows.",
          "חלצו את הקובץ.",
          "פתחו את QueuePing.exe.",
          "אם מופיעה אזהרת Windows SmartScreen, בחרו More info ואז Run anyway.",
          "חברו את הטלפון או אפליקציית המובייל.",
          "הפעילו זיהוי לפני כניסה למשחק.",
        ],
        screenshots: [
          {
            src: "/install/windows-step-1.png",
            alt: "מציין מקום למסך הורדת קובץ ה-ZIP של QueuePing ב-Windows",
          },
          {
            src: "/install/windows-step-2.png",
            alt: "מציין מקום למסך ההתקנה והפתיחה של QueuePing ב-Windows",
          },
        ],
      },
      {
        key: "macos",
        title: "macOS",
        label: "שלבי התקנה",
        steps: [
          "הורידו את קובץ ה-zip של macOS.",
          "חלצו את הקובץ.",
          "העבירו את QueuePing לתיקיית Applications אם צריך.",
          "אם macOS חוסם את האפליקציה, פתחו System Settings ואז Privacy & Security ואז Open Anyway.",
          "פתחו את QueuePing וחברו את הטלפון.",
          "הפעילו זיהוי לפני כניסה למשחק.",
        ],
        screenshots: [
          {
            src: "/install/macos-step-1.png",
            alt: "מציין מקום למסך חילוץ קובץ QueuePing ב-macOS",
          },
          {
            src: "/install/macos-step-2.png",
            alt: "מציין מקום למסך אישור אבטחה של QueuePing ב-macOS",
          },
        ],
      },
      {
        key: "android",
        title: "Android",
        label: "שלבי APK",
        steps: [
          "הורידו את קובץ ה-APK.",
          "אפשרו התקנה ממקורות לא מוכרים אם תתבקשו.",
          "התקינו את האפליקציה.",
          "פתחו אותה והתחברו או בצעו קישור.",
          "השאירו התראות פעילות.",
        ],
        screenshots: [
          {
            src: "/install/android-step-1.png",
            alt: "מציין מקום למסך התקנת QueuePing באנדרואיד",
          },
        ],
      },
      {
        key: "ios",
        title: "iPhone / TestFlight",
        label: "שלבי גישה",
        steps: [
          "משתמשי iPhone לא יכולים להוריד את QueuePing ישירות.",
          "יש לבקש גישת TestFlight באמצעות הטופס.",
          "לאחר אישור, תקבלו הזמנה ל-TestFlight בדוא\"ל.",
          "התקינו את QueuePing דרך TestFlight וחברו את המכשיר.",
        ],
        cta: {
          label: "בקשת גישה לבטא של iOS",
          href: LINKS.IOS_REQUEST,
          ariaLabel: "בקשת גישה לבטא של QueuePing ב-TestFlight",
        },
        screenshots: [
          {
            src: "/install/ios-step-1.png",
            alt: "מציין מקום להזמנת TestFlight של QueuePing באייפון",
          },
        ],
      },
    ] satisfies InstallGuideItem[],
    screenshotPlaceholder: "צילום מסך יתווסף בקרוב",
    screenshotHint:
      "יש להוסיף את קובץ צילום המסך הסופי אל website/public/install/ בשם הקובץ הזה.",
    feedbackLabel: "משוב בטא",
    feedbackTitle: "מצאתם באג?",
    feedbackText:
      "דווחו על תקלות, חיכוכים או בעיות התקנה לפי פלטפורמה כדי לשפר את הבטא במהירות.",
    reportIssue: "דיווח על תקלה",
    suggestFeature: "הצעת פיצ'ר",
    suggestFeatureAria: "שליחת בקשת פיצ'ר ל-QueuePing",
    footerProduct: "QueuePing בטא",
    footerVersion: "v0.1.0-beta",
  },
} as const;

function ScreenshotSlot({
  screenshot,
  placeholder,
  hint,
}: {
  screenshot: ScreenshotItem;
  placeholder: string;
  hint: string;
}) {
  const [missing, setMissing] = useState(false);

  if (missing) {
    return (
      <div className="screenshot-card screenshot-placeholder" aria-label={screenshot.alt}>
        <strong>{placeholder}</strong>
        <span>{screenshot.src}</span>
        <p>{hint}</p>
      </div>
    );
  }

  return (
    <div className="screenshot-card">
      {/* Place real screenshots inside website/public/install/ using the filenames shown below. */}
      <img
        src={screenshot.src}
        alt={screenshot.alt}
        className="doc-image"
        onError={() => setMissing(true)}
      />
    </div>
  );
}

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const t = copy[language];
  const isHebrew = language === "he";

  return (
    <main
      className={`page-shell${isHebrew ? " rtl" : ""}`}
      dir={isHebrew ? "rtl" : "ltr"}
    >
      <div className="ambient ambient-a" />
      <div className="ambient ambient-b" />

      <header className="topbar">
        <div className="topbar-brand">
          <span className="topbar-title">QueuePing Beta</span>
          <span className="topbar-version">v0.1.0-beta</span>
        </div>
        <div
          className="language-switcher"
          role="group"
          aria-label={t.switcherLabel}
        >
          <button
            type="button"
            className={`lang-button${language === "en" ? " active" : ""}`}
            onClick={() => setLanguage("en")}
            aria-pressed={language === "en"}
          >
            English
          </button>
          <button
            type="button"
            className={`lang-button${language === "he" ? " active" : ""}`}
            onClick={() => setLanguage("he")}
            aria-pressed={language === "he"}
          >
            עברית
          </button>
        </div>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="hero-label">{t.pageLabel}</p>

          <h1>{t.heroTitle}</h1>
          <p className="hero-text">{t.heroText}</p>

          <div className="hero-panels">
            {t.heroStats.map((stat) => (
              <div className="stat-card" key={stat.title}>
                <span className="stat-label">{stat.label}</span>
                <strong>{stat.title}</strong>
                <p>{stat.text}</p>
              </div>
            ))}
          </div>
        </div>

        <aside className="hero-aside">
          <div className="preview-card">
            <p className="panel-label">{t.betaAccessLabel}</p>
            <h2>{t.betaAccessTitle}</h2>
            <p>{t.betaAccessText}</p>
            <dl className="info-list">
              {t.betaAccessItems.map((item) => (
                <div key={item.title}>
                  <dt>{item.title}</dt>
                  <dd>{item.text}</dd>
                </div>
              ))}
            </dl>
          </div>
        </aside>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <p className="section-label">{t.downloadsLabel}</p>
          <h2>{t.downloadsTitle}</h2>
          <p>{t.downloadsText}</p>
        </div>

        <div className="card-grid">
          {t.downloads.map((item) => (
            <article
              className={`platform-card${item.name.includes("iPhone") ? " platform-card-ios" : ""}`}
              key={item.name}
            >
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
        </div>
      </section>

      <section className="section-block install-section">
        <div className="section-heading">
          <p className="section-label">{t.installLabel}</p>
          <h2>{t.installTitle}</h2>
          <p>{t.installText}</p>
        </div>

        <div className="install-grid">
          {t.installGuides.map((guide) => (
            <article className="install-card" key={guide.key}>
              <div className="platform-top">
                <p className="platform-label">{guide.label}</p>
                <h3>{guide.title}</h3>
              </div>

              <ol className="install-steps">
                {guide.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>

              {guide.cta ? (
                <div className="install-cta-row">
                  <a
                    className="secondary-button"
                    href={guide.cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={guide.cta.ariaLabel}
                  >
                    {guide.cta.label}
                  </a>
                </div>
              ) : null}

              <div className="screenshot-grid">
                {guide.screenshots.map((screenshot) => (
                  <ScreenshotSlot
                    key={screenshot.src}
                    screenshot={screenshot}
                    placeholder={t.screenshotPlaceholder}
                    hint={t.screenshotHint}
                  />
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="split-section">
        <div className="section-panel">
          <p className="section-label">{t.betaNotesLabel}</p>
          <h2>{t.betaNotesTitle}</h2>
          <ul className="bullet-list">
            {t.betaNotes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </div>

        <div className="section-panel">
          <p className="section-label">{t.privacyLabel}</p>
          <h2>{t.privacyTitle}</h2>
          <ul className="bullet-list">
            {t.privacyPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="feedback-strip">
        <div>
          <p className="section-label">{t.feedbackLabel}</p>
          <h2>{t.feedbackTitle}</h2>
          <p>{t.feedbackText}</p>
        </div>
        <div className="feedback-actions">
          <a
            className="secondary-button"
            href={LINKS.FEEDBACK}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.reportIssue}
          </a>
          <a
            className="secondary-button"
            href={LINKS.FEATURE_REQUEST}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.suggestFeatureAria}
          >
            {t.suggestFeature}
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <span>{t.footerProduct}</span>
        <span>{t.footerVersion}</span>
      </footer>
    </main>
  );
}
