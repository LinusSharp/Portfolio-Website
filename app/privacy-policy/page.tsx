/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import { motion } from "framer-motion";

// 1. Define the props interface for the helper component
interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const PrivacyPolicy = () => {
  const theme = {
    text: "text-slate-300",
    heading: "text-white",
    accent: "text-[#22D3EE]",
    surface: "bg-[#27272c]",
    border: "border-slate-700",
  };

  return (
    <section className="min-h-screen py-12 px-6 md:px-24 lg:px-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        {/* Header */}
        <div className="mb-12 border-b border-slate-700 pb-8">
          <h1
            className={`text-4xl md:text-5xl font-bold ${theme.heading} mb-4`}
          >
            Privacy <span className={theme.accent}>Policy</span>
          </h1>
          <p className={`${theme.text} text-lg`}>
            Last Updated: November 23, 2025
          </p>
        </div>

        {/* Content */}
        <div className="space-y-10">
          {/* 1. Introduction */}
          <Section title="1. Introduction">
            <p>
              Welcome to <strong>SlumberLeague</strong> ("we," "our," or "us").
              SlumberLeague is a competitive sleep tracking application designed
              to gamify recovery. We are committed to protecting your privacy
              and ensuring the security of your personal health information.
            </p>
            <p className="mt-4">
              This Privacy Policy explains how we collect, use, and safeguard
              your data when you use our mobile application to compete in
              leaderboards and track your sleep.
            </p>
          </Section>

          {/* 2. Apple HealthKit Data */}
          <Section title="2. Apple HealthKit Data">
            <div
              className={`p-6 rounded-xl border ${theme.border} ${theme.surface} mb-6`}
            >
              <p className="mb-4 text-white font-medium">
                Our app integrates with Apple's HealthKit to provide gameplay
                features. We explicitly request permission to read:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-300">
                <li>
                  <strong>Sleep Analysis:</strong> Used to calculate your "Daily
                  Score," determine your Rank (e.g., Diamond, Gold), and place
                  you on competitive leaderboards.
                </li>
              </ul>
            </div>
            <p>
              <strong>
                We do not use your HealthKit data for advertising, marketing, or
                use-based data mining purposes.
              </strong>
              Your health data is used solely to provide the game mechanics and
              health insights directly to you within the app.
            </p>
          </Section>

          {/* 3. Social Features */}
          <Section title="3. Leaderboards, Clans & Social Sharing">
            <p>
              SlumberLeague is a social experience. By using the app, you
              understand and agree to the following:
            </p>
            <ul className="list-disc pl-5 mt-4 space-y-2">
              <li>
                <strong>Leaderboards:</strong> Your total sleep duration, REM
                sleep, and Deep sleep stats may be visible to your Friends and
                Clan members on the weekly leaderboards.
              </li>
              <li>
                <strong>Profile:</strong> Your Display Name and "Rank" (derived
                from your sleep score) are visible to other users you interact
                with.
              </li>
            </ul>
            <p className="mt-4 text-sm text-slate-400">
              You can remove friends or leave a Clan at any time to stop sharing
              data with that specific group.
            </p>
          </Section>

          {/* 4. Usage */}
          <Section title="4. How We Use Your Data">
            <p>
              We use the data we collect for the following specific purposes:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>To authenticate your account via email.</li>
              <li>
                To generate competitive categories (e.g., "Survivalist,"
                "Rolling in the Deep").
              </li>
              <li>To allow you to create or join Clans for group tracking.</li>
              <li>To facilitate friend requests and social management.</li>
            </ul>
          </Section>

          {/* 5. Security */}
          <Section title="5. Data Storage & Security">
            <p>
              Your account information and game statistics are stored securely
              using Supabase. Data transmission between your device and our
              servers is protected using industry-standard encryption
              (HTTPS/TLS).
            </p>
            <p className="mt-2">
              We do not sell your personal data to third parties.
            </p>
          </Section>

          {/* 6. Rights */}
          <Section title="6. Your Rights & Account Deletion">
            <p>You have full control over your data:</p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>
                <strong>Revoke Health Access:</strong> You can disable HealthKit
                permissions at any time via your iPhone settings (Settings {">"}{" "}
                Health {">"} Data Access & Devices).
              </li>
              <li>
                <strong>Delete Account:</strong> You can request full account
                deletion directly within the app via the Profile settings page.
                This will permanently remove your user record and logged sleep
                history from our servers.
              </li>
            </ul>
          </Section>

          {/* 7. Contact */}
          <Section title="7. Contact Us">
            <p>
              If you have questions about this Privacy Policy or SlumberLeague's
              data practices, please contact us at:
            </p>
            <a
              href="mailto:support@slumberleague.app"
              className={`inline-block mt-4 text-xl font-semibold ${theme.accent} hover:underline`}
            >
              support@slumberleague.app
            </a>
          </Section>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-slate-700 text-center">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} SlumberLeague. All rights reserved.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

// 2. Apply the interface to the component props
const Section = ({ title, children }: SectionProps) => (
  <div className="mb-8">
    <h2 className="text-2xl font-semibold text-white mb-4">{title}</h2>
    <div className="text-slate-300 leading-relaxed text-base md:text-lg">
      {children}
    </div>
  </div>
);

export default PrivacyPolicy;
