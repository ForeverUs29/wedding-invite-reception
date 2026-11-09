
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
      className={`royal-journey royal-${screen}`}
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
            Explore the Wedding Events →
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

          <div className="royal-event-detail reception-invitation">

            <p className="royal-eyebrow reception-invite-text">
              YOU ARE CORDIALLY INVITED FOR THE
            </p>

            <h1 className="royal-heading reception-title">
              Wedding Reception
            </h1>

            <h2 className="reception-of">
              of
            </h2>

            <h2 className="reception-couple-names">
              Riya &amp; Hardik
            </h2>

            <div className="royal-detail-divider">
              ✦ ❀ ✦
            </div>

            <p className="royal-event-tagline">
              An evening of elegance and celebration.
            </p>

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
              <p>
                <strong>
                  📍 Virasat The Hotel by Triveni Grand
                </strong>
              </p>
            </div>

            <a
              className="royal-map-button"
              href="https://maps.app.goo.gl/1GBvyL4mpqSXFykc6"
              target="_blank"
              rel="noopener noreferrer"
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
              ✦ ❀ ✦
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
              ✦ ❀ ✦
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
              ❀
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
