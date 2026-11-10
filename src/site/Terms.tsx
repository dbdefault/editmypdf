import { Link } from "react-router";
import { CloudOff, Code, FileCheck, Gift, ScrollText, UserX } from "lucide-react";
import { ANALYTICS, PRODUCT, ROUTES } from "../data/product.ts";
import { useMeta } from "./useMeta.ts";

// The date the wording below last changed. Edit it with the text.
const UPDATED = { iso: "2026-11-02", label: "2 November 2026" };

const POINTS = [
  { icon: Gift, title: "Free to use", body: "For anyone, for any document, with no plan, trial or limit." },
  { icon: FileCheck, title: "Provided as is", body: "Without a warranty. Keep your original; it is never modified." },
  { icon: Code, title: "Open source", body: "The code is published under the MIT licence." },
  {
    icon: UserX,
    title: "No account",
    body: ANALYTICS.enabled
      ? "Nothing to sign up for; visits are counted only if you agree."
      : ANALYTICS.counter
        ? "Nothing to sign up for; visits are counted without cookies or identifiers."
        : "Nothing to sign up for, and nothing collected about you.",
  },
  { icon: CloudOff, title: "Files stay on your device", body: "The editor runs in your browser. Nothing is uploaded." },
];

export function Terms() {
  useMeta({
    title: "Terms of use",
    description: `The terms for using ${PRODUCT.name}, in plain language: free to use, provided as is under the MIT licence, no account, and your files stay on your device.`,
  });
  return (
    <section className="section container page-narrow tone-teal">
      <p className="eyebrow">
        <ScrollText aria-hidden="true" /> Terms of use
      </p>
      <h1 className="display">Short, because there is little to agree to.</h1>
      <p className="lede">
        {PRODUCT.name} is a free, open source editor that runs in your browser. These are the terms for using it,
        written in plain words.
      </p>
      <p className="as-of" style={{ marginTop: "var(--sp-5)" }}>
        Last updated <time dateTime={UPDATED.iso}>{UPDATED.label}</time>
      </p>

      <ul className="terms-points" aria-label="The terms in five points">
        {POINTS.map((point) => (
          <li key={point.title}>
            <point.icon aria-hidden="true" />
            <strong>{point.title}</strong>
            <span>{point.body}</span>
          </li>
        ))}
      </ul>

      <div className="prose">
        <h2>Free to use</h2>
        <p>
          You can use {PRODUCT.name} for anything, personal or commercial, as often as you like. There is no
          plan to buy, no trial that runs out, no watermark and no limit on documents, pages or file size
          beyond what your browser can hold in memory.
        </p>

        <h2>Provided as is</h2>
        <p>
          {PRODUCT.name} is offered as it is, without a warranty of any kind. We work hard to make every edit
          come out right, but we cannot promise the editor is free of mistakes or that it will suit every
          PDF. Check the file you download before you rely on it. The file you opened is never modified, so
          your original is always there to go back to.
        </p>
        <p>
          To the extent the law allows, the people who make {PRODUCT.name} are not liable for any loss that
          comes from using it.
        </p>

        <h2>Open source, MIT licence</h2>
        <p>
          The code is published on{" "}
          <a href={PRODUCT.repository} rel="noopener noreferrer" target="_blank">
            GitHub
          </a>{" "}
          under the{" "}
          <a href={PRODUCT.licenseUrl} rel="noopener noreferrer" target="_blank">
            MIT licence
          </a>
          . That licence lets you use, copy, change and share the code, and it is also the source of the
          "as is" wording above. MIT covers {PRODUCT.name}'s own code only; third-party assets carry
          their own licences.
        </p>

        <h2>Third-party assets</h2>
        <p>
          {PRODUCT.name} bundles the following third-party assets under their own licences:
        </p>
        <ul>
          <li>
            <strong>Twemoji</strong> (emoji graphics) — CC-BY 4.0 by Twitter, Inc. and other
            contributors. See <a href="https://github.com/twitter/twemoji" rel="noopener noreferrer" target="_blank">twemoji</a> and
            <a href="https://creativecommons.org/licenses/by/4.0/" rel="noopener noreferrer" target="_blank">CC-BY 4.0</a>. Attribution is in{" "}
            <a href="/emojis/NOTICE.txt">public/emojis/NOTICE.txt</a> and{" "}
            <code className="inline">src/emojis.ts</code>.
          </li>
          <li>
            <strong>Fonts</strong> — bundled through {@link PRODUCT.libraries.reader.name} and
            {@link PRODUCT.libraries.writer.name} dependencies; each font package carries its own
            licence (mostly SIL Open Font Licence). See the font packages in{" "}
            <code className="inline">package.json</code>.
          </li>
          <li>
            <strong>{PRODUCT.libraries.reader.name}</strong> — PDF parsing and rendering in a web
            worker. See{" "}
            <a href={PRODUCT.libraries.reader.url} rel="noopener noreferrer" target="_blank">
              {PRODUCT.libraries.reader.url}
            </a>
            .
          </li>
          <li>
            <strong>{PRODUCT.libraries.writer.name}</strong> — PDF writing in the same tab. See{" "}
            <a href={PRODUCT.libraries.writer.url} rel="noopener noreferrer" target="_blank">
              {PRODUCT.libraries.writer.url}
            </a>
            .
          </li>
        </ul>

        <h2>No account, nothing collected</h2>
        <p>
          There is nothing to sign up for.{" "}
          {ANALYTICS.enabled
            ? "The site's pages count visits with Google Analytics only after you agree in the notice; the editor pages run no third-party script and set no cookies."
            : ANALYTICS.counter
              ? "The site counts visits with a cookieless counter from Cloudflare, which sets no cookies and keeps no identifier; the editing page runs no third-party script at all."
              : "The site sets no cookies, runs no analytics and includes no third-party scripts."}{" "}
          The <Link to={ROUTES.privacy}>privacy page</Link> lists exactly what the app stores in your browser
          and how to remove it.
        </p>

        <h2>Your files stay yours, and stay on your device</h2>
        <p>
          A PDF you open is read, edited and rewritten inside your browser tab. It is not uploaded, and we
          never see it. Documents you keep between visits live in your browser's own storage on your device.
          Everything in them, and everything you make with {PRODUCT.name}, belongs to you.
        </p>
        <p>
          Use the editor only on documents you are allowed to change. That is your responsibility, not
          something the editor can check.
        </p>

        <h2>Comparisons with other products</h2>
        <p>
          The <Link to={ROUTES.compare}>comparison pages</Link> name other PDF editors only to compare them.
          Their names and logos belong to their owners and are shown only to identify the product. The facts on those pages were read from each vendor's own
          pages on the date shown, with links to the sources; if one is out of date, please{" "}
          <a href={`${PRODUCT.repository}/issues`} rel="noopener noreferrer" target="_blank">
            tell us
          </a>{" "}
          and we will correct it.
        </p>

        <h2>Changes to these terms</h2>
        <p>
          If the wording changes, the date at the top changes with it, and the history of this page is in
          the repository for anyone to read.
        </p>
      </div>
    </section>
  );
}
