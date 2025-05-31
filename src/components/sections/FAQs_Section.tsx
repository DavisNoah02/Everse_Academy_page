import React, { useState } from "react";

const faqs = [
  {
    question: "How much will courses cost?",
    answer:
      "Our courses will be affordably priced, with flexible payment options including one-time payments, subscriptions, and occasional discounts. We’re committed to making high-quality education accessible to everyone.",
  },
  {
    question: "How will the courses be delivered?",
    answer:
      "Courses will be delivered 100% online through our upcoming Learning Management Platform, featuring video lessons, interactive quizzes, real-time feedback, and community discussion boards to keep you engaged and on track.",
  },
  {
    question: "Will I receive a certificate?",
    answer:
      "Absolutely. Once you complete a course and pass all required assessments, you’ll receive a verifiable digital certificate that you can share on LinkedIn or include in your portfolio.",
  },
  {
    question: "How can I become a beta tester?",
    answer:
      "Just sign up on our website and opt in for beta testing. As a beta tester, you’ll get early access to our courses, exclusive feedback opportunities, and perks when we launch officially.",
  },
  {
    question: "What is Everse Academy Kenya  Platform all about?",
    answer:
      "Our Everse Academy Kenya LMS is designed from the ground up to help you learn faster and smarter. Expect features like gamified progress tracking, AI-powered learning suggestions, peer collaboration tools, and offline access. It’s more than just video lessons—it's an ecosystem built to elevate your skills.",
  },
  {
    question: "Can I access the courses on mobile?",
    answer:
      "Yes! Our LMS will be fully responsive and optimized for both mobile and desktop, so you can learn anytime, anywhere—even on the go.",
  },
  {
    question: "Will there be live sessions or mentorship?",
    answer:
      "Yes, some premium courses will include live Q&A sessions, mentorship from industry pros, and community office hours so you’re never learning alone.",
  },
];


export default function FAQsSection() {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter FAQs based on the search query
  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="bg-slate-800 text-white py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4 text-purple-400">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-slate-300 mb-6">
          Find quick answers to common questions about Everse Academy.
        </p>

        {/* Search Input */}
        <div className="max-w-md mx-auto mb-8">
          <input
            type="text"
            placeholder="Search FAQs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <details
                key={index}
                className="bg-slate-700 rounded-lg shadow-lg p-4 group"
              >
                <summary className="flex justify-between items-center cursor-pointer text-lg font-medium text-purple-300 group-hover:text-purple-400">
                  {faq.question}
                  <span className="text-purple-400 group-hover:text-purple-500">+</span>
                </summary>
                <p className="mt-2 text-slate-300">{faq.answer}</p>
              </details>
            ))
          ) : (
            <p className="text-center text-slate-400">
              No FAQs match your search query.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}