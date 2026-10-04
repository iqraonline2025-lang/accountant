import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Privacy Policy | ADAMSON Accountants & Tax Consultants',
  description: 'How we collect, use, and protect your personal and financial data in accordance with UK GDPR.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#1A1D29] text-gray-300">
      <Navbar />

      <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Privacy Policy</h1>
        <p className="text-sm text-[#DC2E3F] font-mono mb-10">Last Updated: {new Date().toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}</p>

        <div className="space-y-8 text-sm sm:text-base leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Introduction</h2>
            <p>
              ADAMSON Accountants & Tax Consultants ("we", "our", or "us") is committed to protecting and respecting your privacy. 
              This policy explains how we collect, use, and securely store your personal and financial data in compliance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Information We Collect</h2>
            <p className="mb-2">To provide our accounting and tax services, we may collect and process the following data:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Identity Data:</strong> First name, last name, marital status, title, date of birth.</li>
              <li><strong>Contact Data:</strong> Billing address, email address, telephone numbers.</li>
              <li><strong>Financial Data:</strong> Bank account details, payroll records, income, expenses, tax codes, UTR numbers, and National Insurance numbers.</li>
              <li><strong>Technical Data:</strong> IP address, browser type, and operating system when you use our website.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. How We Use Your Data</h2>
            <p className="mb-2">We will only use your personal data when the law allows us to. Most commonly, we use it to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Register you as a new client and carry out Anti-Money Laundering (AML) checks.</li>
              <li>Prepare and file your tax returns with HM Revenue & Customs (HMRC).</li>
              <li>Process payroll, bookkeeping, and prepare annual company accounts.</li>
              <li>Communicate with you regarding approaching tax deadlines and regulatory changes.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Data Sharing & Third Parties</h2>
            <p>
              We do not sell your data. We may share your data with trusted third parties solely for the purpose of fulfilling our accounting duties. These include:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li><strong>Government Bodies:</strong> HMRC and Companies House.</li>
              <li><strong>Software Providers:</strong> Cloud accounting software (e.g., Xero, QuickBooks, Dext) used to manage your accounts.</li>
              <li><strong>Regulatory Bodies:</strong> The Association of Accounting Technicians (MAAT) or AML authorities if legally required.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Data Retention</h2>
            <p>
              By law, we are required to keep basic information about our clients (including Contact, Identity, Financial, and Transaction Data) for a minimum of <strong>six years</strong> after they cease being clients for tax and legal compliance purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">6. Your Legal Rights</h2>
            <p className="mb-2">Under data protection laws, you have the right to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Request access to your personal data.</li>
              <li>Request correction of incomplete or inaccurate data.</li>
              <li>Request erasure of your personal data (subject to legal retention requirements).</li>
              <li>Withdraw consent for marketing communications at any time.</li>
            </ul>
          </section>

          <section className="bg-white/5 border border-white/10 p-6 rounded-xl mt-8">
            <h2 className="text-lg font-bold text-white mb-3">Contact Us Regarding Your Data</h2>
            <p className="mb-2">If you have any questions about this Privacy Policy, please contact us at:</p>
            <ul className="space-y-1">
              <li><strong>Email:</strong> <a href="mailto:kashifinsari@gmail.com" className="text-[#DC2E3F] hover:underline">kashifinsari@gmail.com</a></li>
              <li><strong>Phone:</strong> 01282 611503</li>
              <li><strong>Address:</strong> Pendle Enterprise Haven, 138 Every Street, Nelson, BB9 7EX</li>
            </ul>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}