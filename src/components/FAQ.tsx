
const FAQ = () => {
  const faqs = [
    {
      question: "Is Exospine RAT detectable by antivirus?",
      answer: "Absolutely not. Exospine employs military-grade obfuscation, polymorphic code generation, and advanced anti-analysis techniques that make it completely invisible to all major antivirus engines, EDR solutions, and behavioral analysis systems."
    },
    {
      question: "Can I monitor multiple screens simultaneously?",
      answer: "Yes! Exospine's advanced multi-monitor engine captures all displays in real-time with customizable quality settings, allowing seamless switching between monitors and simultaneous streaming of multiple displays."
    },
    {
      question: "Does it survive system reboots and security scans?",
      answer: "Exospine features bulletproof persistence using rootkit-level techniques, registry manipulation, and multiple fallback mechanisms ensuring continuous operation even after restarts, updates, and security sweeps."
    },
    {
      question: "What platforms and systems are supported?",
      answer: "Primarily optimized for Windows environments (7, 8, 10, 11) with advanced compatibility layers and fallback methods for maximum coverage across different system configurations and security levels."
    },
    {
      question: "How easy is the setup and deployment process?",
      answer: "Incredibly simple. Our intuitive stub builder creates ready-to-deploy executables in seconds with zero configuration required. Just build, deploy, and connect - no technical expertise needed."
    },
    {
      question: "Is the interface user-friendly for beginners?",
      answer: "Absolutely. Exospine features a sleek, modern tabbed interface designed for both cybersecurity novices and seasoned professionals. Intuitive controls, real-time feedback, and comprehensive documentation included."
    },
    {
      question: "Can commands be executed completely invisibly?",
      answer: "Yes. Exospine's stealth command execution runs completely hidden from users, with no visible console windows, no process trees, and secure output redirection back to your control panel."
    },
    {
      question: "Is this tool designed for legal penetration testing?",
      answer: "Absolutely. Exospine is engineered specifically for ethical hackers, penetration testers, cybersecurity professionals, IT administrators, and educational institutions conducting authorized security assessments."
    },
    {
      question: "What makes Exospine superior to competitors?",
      answer: "Exospine combines cutting-edge stealth technology, military-grade encryption, advanced persistence mechanisms, and a beautiful modern interface - all while maintaining zero detection rates and maximum operational security."
    }
  ];

  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold text-blue-300 mb-8 text-center">Frequently Asked Questions</h2>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-slate-800/50 p-6 rounded-xl border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300"
          >
            <h3 className="text-lg font-semibold text-purple-300 mb-3">{faq.question}</h3>
            <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
