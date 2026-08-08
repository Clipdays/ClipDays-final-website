"use client";

import type { FormEvent } from "react";

export function ContactSection() {
  function submitEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`ClipDays enquiry: ${form.get("company") || form.get("name")}`);
    const body = encodeURIComponent(
      `Name: ${form.get("name")}\nCompany: ${form.get("company")}\nEmail: ${form.get("email")}\nInterest: ${form.get("interest")}\n\n${form.get("message") || ""}`,
    );
    window.location.href = `mailto:hello@clipdays.com?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="shell contact-layout">
        <div className="contact-copy">
          <span className="kicker kicker-dark">Build the next layer with us</span>
          <h2>See what ClipDays could unlock for your venue.</h2>
          <p>Tell us about your guest journey, capture environment and commercial goals. We will identify the clearest place to start.</p>
          <p className="contact-note">A focused pilot. A measurable use case. A clear path to scale.</p>
          <a className="button button-outline" href="mailto:hello@clipdays.com">hello@clipdays.com</a>
        </div>
        <form className="contact-form" onSubmit={submitEnquiry}>
          <label>Name<input required name="name" autoComplete="name" placeholder="Your name" /></label>
          <label>Company<input name="company" autoComplete="organization" placeholder="Company or venue" /></label>
          <label>Email<input required type="email" name="email" autoComplete="email" placeholder="you@company.com" /></label>
          <label>Interest<select name="interest" defaultValue="Venue solution"><option>Venue solution</option><option>Technology partnership</option><option>Commercial partnership</option><option>General enquiry</option></select></label>
          <label className="form-full">Message<textarea rows={5} name="message" placeholder="Tell us what you are building." /></label>
          <button className="button button-primary form-full" type="submit">Request a venue conversation <span aria-hidden="true">↗</span></button>
        </form>
      </div>
    </section>
  );
}
