import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  { question: "What is the best time to visit?", answer: "The ideal time varies by collection, but generally, spring and autumn offer the most pleasant weather for global expeditions." },
  { question: "Are international flights included?", answer: "Our packages typically focus on the local immersive experience. International flights can be arranged separately through our concierge service." },
  { question: "Is travel insurance mandatory?", answer: "Yes, we require all our guests to have comprehensive travel insurance for a worry-free journey." },
  { question: "Can the itinerary be customized?", answer: "Absolutely. Our 'Midnight Curator' service specializes in tailoring every detail to your specific desires." }
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="space-y-12">
      <h2 className="text-3xl font-noto-serif text-white">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border-b border-white/5 pb-4">
            <button
              onClick={() => toggle(idx)}
              className="w-full flex items-center justify-between py-4 text-left group"
            >
              <span className={`text-lg transition-colors ${activeIndex === idx ? 'text-primary' : 'text-white/70 group-hover:text-white'}`}>
                {faq.question}
              </span>
              <motion.span
                animate={{ rotate: activeIndex === idx ? 180 : 0 }}
                className="material-symbols-outlined text-accent"
              >
                expand_more
              </motion.span>
            </button>
            <AnimatePresence>
              {activeIndex === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="pb-6 text-white/50 leading-relaxed max-w-3xl">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
