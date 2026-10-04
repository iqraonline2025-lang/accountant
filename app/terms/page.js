import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Terms of Business | ADAMSON Accountants & Tax Consultants',
  description: 'Our standard terms and conditions of engagement for accounting and tax services.',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#1A1D29] text-gray-300">
      <Navbar />

      <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Terms of Business</h1>
        <p className="text-sm text-[#DC2E3F] font-mono mb-10">Last Updated: {new Date().toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}</p>

        <div className="space-y-8 text-sm sm:text-base leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Professional Obligations</h2>
            <p>
              ADAMSON Accountants & Tax Consultants provides services in accordance with the professional and ethical standards laid down by the <strong>Association of Accounting Technicians (MAAT)</strong>. 
              We are bound by their guidelines regarding confidentiality, professional behaviour, and competence.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Client Responsibilities</h2>
            <p className="mb-2">To enable us to provide effective service, you agree to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Provide full, accurate, and timely information necessary for the preparation of your accounts and tax returns.</li>
              <li>Respond to our queries promptly to avoid missed HMRC or Companies House deadlines.</li>
              <li>Keep us informed of any changes to your personal details, business structure, or financial circumstances.</li>
            </ul>
            <p className="mt-3 text-red-400 text-sm">
              *Note: You are ultimately legally responsible for the accuracy of your tax returns and avoiding late filing penalties. We cannot be held liable for penalties resulting from delays or inaccurate information provided by you.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. Fees and Billing</h2>
            <p>
              Our fees are based on the degree of responsibility, skill involved, and time spent on the work. We will provide a fixed fee quote or estimated fee structure before commencing work. 
              Invoices are payable within <strong>14 days</strong> of issue unless a monthly direct debit/standing order has been agreed. We reserve the right to suspend services if invoices remain unpaid.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Anti-Money Laundering (AML)</h2>
            <p>
              By law, we are required to verify the identity of our clients. We will request proof of ID (e.g., passport or driving licence) and proof of address before accepting you as a client. 
              We are legally obligated to report any suspicion of money laundering to the National Crime Agency (NCA) without informing you.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Confidentiality</h2>
            <p>
              Communication between us is confidential. We shall take all reasonable steps to keep your information private and will not disclose it to an unauthorised third party without your consent, except where required by law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">6. Limitation of Liability</h2>
            <p>
              We will provide services with reasonable care and skill. Our liability to you for any loss or damage arising out of or in connection with our services shall be limited to the amount of professional indemnity insurance cover we hold.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">7. Governing Law</h2>
            <p>
              These terms of business shall be governed by and construed in accordance with the laws of England and Wales.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}