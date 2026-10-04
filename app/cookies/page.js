import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Cookie Policy | ADAMSON Accountants & Tax Consultants',
  description: 'How we use cookies and tracking technologies on our website.',
};

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-[#1A1D29] text-gray-300">
      <Navbar />

      <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Cookie Policy</h1>
        <p className="text-sm text-[#DC2E3F] font-mono mb-10">Last Updated: {new Date().toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}</p>

        <div className="space-y-8 text-sm sm:text-base leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. What Are Cookies?</h2>
            <p>
              Cookies are small text files placed on your computer, smartphone, or tablet when you visit our website. 
              They are widely used to make websites work more efficiently and to provide information to the owners of the site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. How We Use Cookies</h2>
            <p className="mb-2">Our website uses cookies for the following purposes:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Strictly Necessary Cookies:</strong> These are required for the operation of our website. They include cookies that enable the website to load securely and prevent fraudulent activity.</li>
              <li><strong>Analytical/Performance Cookies:</strong> These allow us to recognise and count the number of visitors and see how visitors move around our website. This helps us improve the way our website works (e.g., ensuring users easily find the Contact or Services page).</li>
              <li><strong>Functionality Cookies:</strong> Used to recognise you when you return to our website.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. Third-Party Cookies</h2>
            <p>
              Please note that third parties (such as Google Analytics or embedded Google Maps on our Contact page) may also use cookies, over which we have no control. These are likely to be analytical or performance cookies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Managing Your Cookies</h2>
            <p>
              You can block cookies by activating the setting on your browser that allows you to refuse the setting of all or some cookies. 
              However, if you use your browser settings to block all cookies (including essential cookies), some parts of our site may not function properly.
            </p>
            <p className="mt-4">
              For more information about cookies, including how to see what cookies have been set and how to manage and delete them, visit <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-[#DC2E3F] hover:underline">www.allaboutcookies.org</a>.
            </p>
          </section>

          <section className="bg-white/5 border border-white/10 p-6 rounded-xl mt-8">
            <h2 className="text-lg font-bold text-white mb-3">Contact Us</h2>
            <p>
              If you have any questions about our use of cookies, please email us at <a href="mailto:kashifinsari@gmail.com" className="text-[#DC2E3F] hover:underline">kashifinsari@gmail.com</a>.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}