"use client";

import React, { memo } from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { faqs } from "@/utils";

// Animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // stagger children slightly
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.15,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

// Memoized FAQ Item
const FAQItem = memo(({ faq, index }: { faq: (typeof faqs)[number]; index: number }) => (
  <motion.div
    variants={fadeUp}
    custom={index}
    className="overflow-hidden"
  >
    <AccordionItem value={`item-${index}`}>
      <AccordionTrigger className="text-lg">
        {faq.question}
      </AccordionTrigger>
      <AccordionContent>
        {faq.answer}
      </AccordionContent>
    </AccordionItem>
  </motion.div>
));
FAQItem.displayName = "FAQItem";

const FrequentlyAsk = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-20 flex flex-col gap-12">
      {/* Title */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="text-center"
      >
        <motion.h1
          className="text-4xl font-bold tracking-tight"
          variants={fadeUp}
          custom={0}
        >
          Frequently Asked Questions
        </motion.h1>
      </motion.div>

      {/* Accordion with Animated FAQ Items */}
      <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="flex flex-col gap-4"
        >
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index + 1} />
          ))}
        </motion.div>
      </Accordion>
    </section>
  );
};

export default memo(FrequentlyAsk);
