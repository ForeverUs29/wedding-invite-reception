
import { useRef, useState } from "react";
import "./WeddingJourney.css";
import WeddingCountdown from "./WeddingCountdown";

// Bappa image used at the top of each invitation page
function BappaBlessing({ image = "/bappa.png" }) {
  return (
    <div className="royal-bappa-blessing">
      <img
        src={image}
        alt="Shree Ganesh"
        className="royal-bappa-image"
      />
    </div>
  );
}

export default function WeddingJourney() {
  const [screen, setScreen] = useState("welcome");
  const journeyRef = useRef(null);

  const goTo = (nextScreen) => {
    setScreen(nextScreen);

    if (journeyRef.current) {
      journeyRef.current.scrollTop = 0;
    }
  };

  return (
    <main
      ref={journeyRef}
      className={`royal-journey royal-${screen} ${
        screen === "celebrations" ? "reception-scroll-enabled" : ""
      }`}
    >
      <div className="royal-border" aria-hidden="true" />

      {/* WELCOME SCREEN */}
      {screen === "welcome" && (
        <section className="royal-screen royal-welcome">
          <img
            src="/wedding-logo.png"
            alt="Riya and Hardik wedding logo — #dilHARIYA"
            className="royal-logo"
          />

          <button
            className="royal-button"
            onClick={() => goTo("families")}
          >
            Meet the Families →
          </button>
        </section>
      )}

      {/* MEET THE FAMILIES */}
      {screen === "families" && (
        <section className="royal-screen royal-families">
          <BappaBlessing image="/bappa_cream.png" />

          <p className="royal-eyebrow">
            WITH THE BLESSINGS &amp; LOVE OF OUR FAMILIES
          </p>

          <div className="royal-family-details">
            <h2 className="royal-person-name">Riya</h2>

            <p className="royal-relation">
              Granddaughter of
            </p>

            <p className="royal-family-name">
              Late Smt. Parvati Devi &amp; Late Shri B.L. Yadav
            </p>

            <p className="royal-relation">
              Daughter of
            </p>

            <p className="royal-family-name">
              Mrs. Meena Yadav &amp; Mr. Sanjay Yadav
            </p>

            <div className="royal-family-divider">
              ✧ ∞ ✧
            </div>

            <p className="royal-union-text">
              is all set to tie the knot with
            </p>

            <h2 className="royal-person-name">
              Hardik
            </h2>

            <p className="royal-relation">
              Grandson of
            </p>

            <p className="royal-family-name">
              Late Smt. Sushila Shah &amp; Late Shri Laxmichand Khimji Shah
            </p>

            <p className="royal-relation">
              Son of
            </p>

            <p className="royal-family-name">
              Mrs. Sandhya Shah &amp; Mr. Dilip Shah
            </p>
          </div>

          <p className="royal-description">
            We joyfully invite you
            to celebrate this beautiful beginning.
          </p>

          <button
            className="royal-button"
            onClick={() => goTo("celebrations")}
          >
            Click for invite →
          </button>

          <button
            className="royal-text-button"
            onClick={() => goTo("welcome")}
          >
            ← Back
          </button>
        </section>
      )}

      {/* WEDDING RECEPTION INVITATION */}
      {screen === "celebrations" && (
        <section className="royal-screen royal-celebrations">
          <BappaBlessing />

          {/* Removed royal-event-detail class to remove the square card/box */}
          <div className="reception-invitation">

            <p
              className="royal-eyebrow reception-invite-text"
              style={{
                color: "#542018",
                fontWeight: "800",
                letterSpacing: "2px"
              }}
            >
              YOU ARE CORDIALLY INVITED FOR THE
            </p>

            <h1 className="royal-heading reception-title">
              Wedding Celebration
            </h1>

            <h2 className="reception-of">
              OF
            </h2>

            <h2 className="reception-couple-names">
              Riya &amp; Hardik
            </h2>

            <div className="royal-detail-divider">
              ✦ ထ ✦
            </div>

           
            <p className="royal-event-message">
              Celebrate the newlyweds with an evening of joy,
              togetherness and unforgettable memories.
            </p>
            <div className="royal-detail-divider">
              ✦
            </div>

            <div className="royal-event-information reception-information">
              <p><strong>🌸 30 November 2026</strong></p>
              <p><strong>🕰️ 8:00 PM onwards</strong></p>
              <p className="reception-venue">
  <span className="venue-name">📍 Virasat</span>
  <span className="venue-subtitle">
    The Hotel by Triveni Grand
  </span>
</p>
            </div>

            <a
              className="royal-map-button"
              href="https://maps.app.goo.gl/1GBvyL4mpqSXFykc6"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "#E8BD58",
                color: "#3D2114",
                border: "1px solid #C99A32",
                fontWeight: "700",
                boxShadow: "0 4px 12px rgba(120, 78, 20, 0.18)"
              }}
            >
              📍 View Location
            </a>
          </div>

          <button
            className="royal-button"
            onClick={() => goTo("wishes")}
          >
            Final Wishes →
          </button>

          <button
            className="royal-text-button"
            onClick={() => goTo("families")}
          >
            ← Back to Families
          </button>
        </section>
      )}

      {/* FINAL WISHES */}
      {screen === "wishes" && (
        <section className="royal-screen royal-wishes">
          <div className="final-invitation-content">
            <BappaBlessing />

            <h1 className="final-blessing-heading">
              Your presence, love and blessings will make
              our celebrations even more special.
            </h1>

            <div className="final-gold-divider">
              ✦ ထ ✦
            </div>

            <h2 className="final-save-title">
              SAVE THE DATE
            </h2>

            <div className="final-save-date">
              30 November 2026
            </div>

            <p className="final-countdown-heading">
              The Countdown to Forever Begins!
            </p>

            <WeddingCountdown />

            <div className="final-gold-divider">
              ✦ ထ ✦
            </div>

            <div className="final-rsvp">
              <span className="final-rsvp-title">
                INVITATION BY
              </span>

              <strong>
                Sanjay Yadav &amp; Meena Yadav
              </strong>

              <a href="tel:9450408936">
                9450408936
              </a>
            </div>

            <p className="final-ending-symbol">
              ထ
            </p>
          </div>

          <button
            className="royal-button"
            onClick={() => goTo("celebrations")}
          >
            Revisit the Celebrations ↺
          </button>
        </section>
      )}
    </main>
  );
}
