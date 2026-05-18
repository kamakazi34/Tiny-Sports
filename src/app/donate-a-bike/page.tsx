import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Donate Your Tri Bike | Tiny Sports",
  description:
    "Donate your road or triathlon bike to an athlete who needs it. Tiny Sports collects, safety-checks, refurbishes, and donates bikes to athletes who can't afford one.",
};

const checkIcon = (
  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-900 text-white text-xs font-bold">
    ✓
  </span>
);

export default function DonateBikePage() {
  const donateMailto = `mailto:jake.martin@tiny-sports.org?subject=Bike%20Donation&body=Hi%20Tiny%20Sports%2C%0A%0AI%20would%20like%20to%20donate%20a%20bike.%0A%0AMy%20name%3A%20%0ABike%20details%20(brand%2C%20model%2C%20frame%20size)%3A%20%0ALocation%20(suburb%20%26%20state)%3A%20%0ACondition%20and%20any%20known%20issues%3A%20%0A%0AThanks%2C`;

  const partnerMailto = `mailto:jake.martin@tiny-sports.org?subject=Bike%20Program%20%E2%80%94%20Workshop%20Partnership&body=Hi%20Tiny%20Sports%2C%0A%0AI%27m%20interested%20in%20volunteering%20as%20a%20mechanic%20or%20workshop%20partner%20for%20the%20Donate%20a%20Bike%20program.%0A%0AName%20or%20business%3A%20%0ALocation%20(suburb%20%26%20state)%3A%20%0AWhat%20I%20can%20offer%3A%20%0A%0AThanks%2C`;

  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-b from-teal-50 to-background py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Donate Your Tri Bike
            </h1>
            <p className="text-muted-foreground mt-6 text-lg leading-8">
              We collect, safety-check, refurbish, and donate road and triathlon
              bikes to athletes who can&apos;t afford one. If your bike is
              gathering dust, it could be changing someone&apos;s race season.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">
                How the program works
              </h2>
              <p className="text-muted-foreground mt-4 text-lg leading-8">
                Many talented athletes never reach their potential because
                equipment costs are simply out of reach. A triathlon bike can
                cost thousands of dollars — a barrier that has nothing to do
                with ability or dedication.
              </p>
              <p className="text-muted-foreground mt-4 text-lg leading-8">
                Tiny Sports partners with local mechanics and workshops to
                collect donated bikes, carry out a full safety check and
                refurbishment, then match them to athletes through our coaching
                partners.
              </p>
              <p className="text-muted-foreground mt-4 text-lg leading-8">
                Every donated bike stays in sport. Every athlete who receives
                one can focus on what matters: training and competing.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {[
                { step: "Step 1", title: "You donate", desc: "Drop off or arrange collection of your bike anywhere in Australia." },
                { step: "Step 2", title: "We refurbish", desc: "Volunteer mechanics safety-check and restore the bike to ride-ready condition." },
                { step: "Step 3", title: "We match", desc: "We work with coaching partners to identify athletes who need a bike." },
                { step: "Step 4", title: "They ride", desc: "The bike goes to an athlete who could not otherwise afford to compete." },
              ].map(({ step, title, desc }) => (
                <div key={step} className="rounded-2xl bg-teal-50 p-6">
                  <p className="text-3xl font-bold text-emerald-900">{step}</p>
                  <p className="mt-2 font-semibold">{title}</p>
                  <p className="text-muted-foreground mt-1 text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What we accept */}
      <section className="bg-teal-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight">What we accept</h2>
            <p className="text-muted-foreground mt-4 text-lg leading-8">
              We accept road and triathlon bikes in any condition. Every donated
              bike is safety-checked and refurbished before it goes to an
              athlete, so even if yours needs work, we want to hear from you.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Road bikes — any brand, any age",
                "Triathlon and time trial bikes",
                "Bikes that need repairs or a service",
                "Bikes with missing components — we will source parts",
                "Complete setups including wheels, helmets, and kit",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  {checkIcon}
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground mt-6 text-sm">
              We do not currently accept mountain bikes, BMX bikes, or
              children&apos;s bikes. If you&apos;re unsure, email us and
              we&apos;ll let you know.
            </p>
          </div>
        </div>
      </section>

      {/* Donate CTA */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Ready to donate?</h2>
              <p className="text-muted-foreground mt-4 text-lg leading-8">
                Send us a message with your bike details and we will take it
                from there. Include as much detail as you can and we will get
                back to you within two business days.
              </p>
              <div className="mt-8 space-y-5">
                <div>
                  <p className="font-semibold">Email</p>
                  <a href={donateMailto} className="text-emerald-900 hover:underline">
                    jake.martin@tiny-sports.org
                  </a>
                </div>
                <div>
                  <p className="font-semibold">Subject line</p>
                  <p className="text-muted-foreground">Bike Donation</p>
                </div>
                <div>
                  <p className="font-semibold">Include in your message</p>
                  <ul className="text-muted-foreground mt-2 space-y-1 text-sm">
                    {["Your name", "Bike brand, model, and frame size", "Your location (suburb and state)", "Condition and any known issues"].map(i => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-emerald-900 font-bold">·</span>{i}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start justify-center gap-6 rounded-2xl bg-teal-50 p-8">
              <h3 className="text-2xl font-bold">Send us your bike details</h3>
              <p className="text-muted-foreground leading-7">
                Click below to open a pre-addressed email. Fill in your bike
                details and hit send — we will confirm receipt and organise the rest.
              </p>
              <a
                href={donateMailto}
                className="inline-flex items-center rounded-lg bg-emerald-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-800 transition-colors"
              >
                Email Us Your Bike Details →
              </a>
              <p className="text-muted-foreground text-sm">
                We respond within 2 business days. For urgent enquiries call 0437 218 197.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner with us */}
      <section className="bg-gradient-to-b from-background to-teal-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-900">
              Mechanics and workshops
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">Partner with us</h2>
            <p className="text-muted-foreground mt-4 text-lg leading-8">
              The Donate a Bike program runs on the skills of volunteer mechanics
              and workshops who give their time to get bikes back on the road. If
              you run a bike shop, work as a mechanic, or just know your way
              around a drivetrain, we want to hear from you.
            </p>
            <h3 className="mt-8 text-xl font-semibold">What workshop partners do</h3>
            <ul className="mt-4 space-y-3">
              {[
                "Carry out safety inspections on donated bikes",
                "Service and refurbish bikes to ride-ready standard",
                "Source or supply consumable parts at cost or donated",
                "Fit and size bikes for recipient athletes where possible",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  {checkIcon}
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground mt-6 text-lg leading-8">
              Partner workshops are credited on the Tiny Sports website and in
              all communications to recipient athletes and their clubs.
            </p>
            <div className="mt-8">
              <a
                href={partnerMailto}
                className="inline-flex items-center rounded-lg bg-emerald-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-800 transition-colors"
              >
                Express Interest as a Workshop Partner →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-teal-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              Not donating a bike but still want to help?
            </h2>
            <p className="text-muted-foreground mt-4 text-lg leading-8">
              Tiny Sports also helps community sports clubs and independent
              coaches access government grants. If your program is missing out
              on funding, get in touch.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-emerald-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-800 transition-colors"
              >
                Get in Touch
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-lg border border-emerald-900 px-6 py-3 text-sm font-semibold text-emerald-900 hover:bg-teal-100 transition-colors"
              >
                About Tiny Sports
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
