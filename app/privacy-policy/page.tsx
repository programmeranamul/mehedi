


import { Container } from "@/components/layout/container";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function PrivacyPolicy() {
  return (
    <Container className="mt-12 mb-30">
    <Card className="gap-0 overflow-hidden rounded-none border border-gray-300 bg-white py-0 shadow-none">
      <CardHeader className="border-b border-gray-200 px-2 py-2">
        <h1 className="text-xs font-semibold text-slate-700">
          Privacy Policy
        </h1>
      </CardHeader>

      <CardContent className="space-y-2 px-2 py-4 text-[12px] leading-[1.2] text-slate-600">
        <div className="space-y-3 text-center">
          <p>
            * Some prices may not be up to date according to today’s latest
            price.{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Learn more
            </a>
          </p>

          <p>*Additional VAT may be applicable with the price.</p>
        </div>

        <p>
          This Privacy Policy governs the manner in which MobileDokan.com
          collects, uses, maintains, and discloses information collected from
          users (each, a “User”) of the https://www.mobiledokan.com/ website
          (“mobiledokan.com”). This privacy policy applies to the Site and all
          services offered by MobileDokan.com.
        </p>

        <section className="space-y-1">
          <h2 className="text-xl font-bold leading-tight text-slate-700">
            Web browser cookies
          </h2>

          <p>
            Our Site or programs used within our site (such as Google Adsense,
            Google Analytics etc.) may use “cookies” to collect user/visitor
            data to analyze ad performance, serving banner ads that are
            relevant to your interest, to analyze traffic, enhance user
            experience and to protect your data. A cookie is a small piece of
            text sent to your browser when you visit our website. This will
            record information about your visit which will help us serve more
            relevant and interesting content and ads to you. A user may choose
            to set their web browser to refuse cookies or to alert you when
            cookies are being sent.
          </p>

          <p>
            Additionally, if you leave a comment on our site you may opt-in to
            saving your name, email address and website in cookies. These are
            for your convenience so that you do not have to fill in your
            details again when you leave another comment. These cookies will
            last for one year.
          </p>
        </section>

        <section className="space-y-1">
          <h2 className="text-xl font-bold leading-tight text-slate-700">
            Google Adsense
          </h2>

          <p>
            Some of the ads may be served by Google. Google’s use of the DART
            cookie enables it to serve ads to Users based on their visit to our
            Site and other sites on the Internet. DART uses “non personally
            identifiable information” and does NOT track personal information
            about you, such as your name, email address, physical address, etc.
            You may opt out of the use of the DART cookie by visiting the
            Google ad and content network privacy policy at{" "}
            <a
              href="https://policies.google.com/technologies/ads/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline"
            >
              http://www.google.com/policies/technologies/ads/
            </a>
          </p>
        </section>

        <section className="space-y-1">
          <h2 className="text-xl font-bold leading-tight text-slate-700">
            Ezoic Services
          </h2>

          <p>
            This website uses the services of Ezoic Inc. (“Ezoic”), including
            to manage third-party interest-based advertising. Ezoic may employ
            a variety of technologies on this website, including tools to serve
            content, display advertisements and enable advertising to visitors
            of this website, which may utilize first and third-party cookies.
          </p>

          <p>
            A cookie is a small text file sent to your device by a web server
            that enables the website to remember information about your
            browsing activity. First-party cookies are created by the site you
            are visiting, while third-party cookies are set by domains other
            than the one you’re visiting. Ezoic and its partners may place
            third-party cookies, tags, beacons, pixels, and similar
            technologies to monitor interactions with advertisements and
            optimize ad targeting. Please note that disabling cookies may
            limit access to certain content and features on the website, and
            rejecting cookies does not eliminate advertisements but will
            result in non-personalized advertising. You can find more
            information about cookies and how to manage them{" "}
            <a href="#" className="text-blue-600 hover:underline">
              here
            </a>.
          </p>

          <p>
            The following information may be collected, used, and stored in a
            cookie when serving personalized ads:
          </p>

          <ul className="list-none space-y-0 pl-6">
            <li>IP address</li>
            <li>Operating system type and version</li>
            <li>Device type</li>
            <li>Language preferences</li>
            <li>Web browser type</li>
            <li>Email (in a hashed or encrypted form)</li>
          </ul>

          <p>
            Ezoic and its partners may use this data in combination with
            information that has been independently collected to deliver
            targeted advertisements across various platforms and websites.
            Ezoic’s partners may also gather additional data, such as unique
            IDs, advertising IDs, geolocation data, usage data, device
            information, traffic data, referral sources, and interactions
            between users and websites or advertisements, to create audience
            segments for targeted advertising across different devices,
            browsers, and apps. You can find more information about
            interest-based advertising and how to manage them{" "}
            <a href="#" className="text-blue-600 hover:underline">
              here
            </a>.
          </p>
        </section>
      </CardContent>
    </Card>
    </Container>
  );
}
