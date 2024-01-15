import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Link from "next/link";
import Newsletter from "./Components/Newsletter";
import SubFooter from "./Components/Assets/SubFooter";

const terms_conditions = () => {
  return (
    <>
      <div className="wrapper p-10">
        <div className="navbar" style={{ background: "white", paddingBlock: "20px" }}>
          <div className="navbar-inner" style={{ paddingInline: "0"}}>
          <Link href="/">
            <div className="navbar-left">
                <svg
                  width={42}
                  height={42}
                  viewBox="0 0 42 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M33.3906 21.1163L33.3868 21.1721V21.2281C33.3868 22.933 33.0412 24.0084 32.5706 24.7153C32.1102 25.4069 31.4212 25.9098 30.4094 26.2711C29.3694 26.6425 28.0533 26.84 26.4475 26.9336C25.037 27.0158 23.4994 27.0144 21.8238 27.0129C21.5949 27.0127 21.3634 27.0125 21.1293 27.0125C20.8952 27.0125 20.6637 27.0127 20.4348 27.0129C18.7592 27.0144 17.2216 27.0158 15.811 26.9336C14.2053 26.84 12.8892 26.6425 11.8492 26.2711C10.8374 25.9098 10.1484 25.4069 9.68797 24.7153C9.21738 24.0084 8.87181 22.933 8.87181 21.2281C8.87181 14.4372 14.3808 8.83287 21.1293 8.83287C28.0251 8.83287 33.8658 14.1069 33.3906 21.1163Z"
                    stroke="#444444"
                    strokeWidth={3.30539}
                  />
                  <path
                    d="M6.27249 10.4891C-2.58552 23.5537 6.01924 33.1719 12.9999 32.7742C13.1625 32.765 13.3024 32.8919 13.3024 33.0548V39.1467C13.3024 39.3941 13.6033 39.516 13.7756 39.3385L19.9871 32.9386C20.1026 32.8197 20.2668 32.7593 20.432 32.773C29.0521 33.4878 35.8388 31.9111 38.3493 26.9771C41.496 20.7931 38.487 13.2047 35.4571 9.89927C29.1217 1.08489 13.3024 0.120799 6.27249 10.4891Z"
                    stroke="url(#paint0_linear_2495_9109)"
                    strokeWidth={3.85629}
                  />
                  <circle
                    cx={16.0588}
                    cy={19.0238}
                    r={1.72941}
                    fill="#FB5F66"
                  />
                  <circle cx={21.247} cy={19.0238} r={1.72941} fill="#FB5F66" />
                  <circle
                    cx={26.4352}
                    cy={19.0238}
                    r={1.72941}
                    fill="#FB5F66"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_2495_9109"
                      x1={8.18766}
                      y1={3.8394}
                      x2={20.6809}
                      y2={39.8259}
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FF898E" />
                      <stop offset={0.546875} stopColor="#EA0D17" />
                      <stop offset={1} stopColor="#FB5F66" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="logo-txt">
                  <h3>Chatbot Builder</h3>
                </div>
            </div>
              </Link>
            <div className="navbar-right">
              <a href="https://app.chatbotbuilder.net/login">
                <button className="login-btn">Login</button>
              </a>
              <a href="https://app.chatbotbuilder.net/register">
                {" "}
                <button className="signup-btn">Sign Up</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="terms-condition-outer">
        <div className="wrapper"></div>
        <div className="wrapper">
          <div className="terms-container">
            <h1>Terms and Conditions</h1>
            <div className="terms-conditions-para">
              <h2>TERMINATION OF SERVICES</h2>
              <p>
                Chatbot Builder has the right to limit, suspend, or stop
                providing the Services to you if you fail to comply with these
                Terms.
              </p>
            </div>
            <div className="terms-conditions-para">
              <h2>COPYRIGHT INFRINGEMENT AND DMCA POLICY</h2>
              <p>
                As Chatbot Builder asks others to respect its intellectual
                property rights, it respects the intellectual property rights of
                others. Chatbot Builder deals with copyright infringement in
                accordance to the Digital Millennium Copyright Act. If you
                believe that material located on or linked to by Chatbot
                Builder.co violates your copyright, you are encouraged to notify
                Chatbot Builder. Chatbot Builder will respond to all such
                notices, including as required or appropriate by removing the
                infringing material or disabling all links to the infringing
                material. Chatbot Builder will terminate a visitor’s access to
                and use of the Site if, under appropriate circumstances, the
                visitor is determined to be a repeat infringer of the copyrights
                or other intellectual property rights of Chatbot Builder or
                others. In the case of such termination, Chatbot Builder will
                have no obligation to provide a refund of any amounts previously
                paid to Chatbot Builder. <br /> <br />
                The contact information for Chatbot Builder’s designated agent
                for receipt of notices of claimed infringement is -{" "}
                <a href="mailto:questions@chatbotbuilder.net">
                  questions@chatbotbuilder.net
                </a>
              </p>
            </div>
            <div className="terms-conditions-para">
              <h2>INTELLECTUAL PROPERTY</h2>
              <p>
                You retain ownership of all copyrights and any other
                intellectual property rights in your Content. Chatbot Builder
                (and/or other third parties) retains ownership of intellectual
                property rights in all content and material other than user
                Content.
                <br /> <br /> By submitting your Content to Chatbot Builder, you
                give Chatbot Builder a non-exclusive worldwide, royalty-free,
                sublicensable, transferable license to utilize all copyright
                rights now in existence or that may arise in the future with
                respect to your Content, in any medium that now exists or may
                arise in the future, as well as to do anything else that is
                reasonably appropriate to our Services and its use of your
                Content (including, but not limited to, use of your name in
                association with your Content to identify you as the
                contributor). The license has no restriction as to the medium,
                dissemination method, type of Service we may offer, or the type
                of systems or products that may be used in conjunction with your
                Content.
                <br /> <br /> This license shall remain in effect for so long as
                your Content is available on Chatbot Builder. You are free to
                remove or delete your Content at any time, in which case this
                license shall terminate after a commercially reasonable period
                of time, except for comments, the license to which is perpetual
                and irrevocable. You understand and agree, however, that even if
                you delete Content, Chatbot Builder may retain, but not display
                or distribute, server copies of your Content.
                <br /> <br /> You represent that you have all of the necessary
                rights to grant this license to Chatbot Builder for all Content
                you submit. <br /> <br />
                Chatbot Builder grants you a worldwide, non-exclusive,
                non-sublicensable, and non-transferable license to download,
                store, view, display, perform, redistribute, and create
                derivative works of Content solely in connection with your use
                of, and in accordance with the Terms of, Chatbot Builder
                Services.
              </p>
            </div>
            <div className="terms-conditions-para">
              <h2>DISCLAIMER OF WARRANTIES.</h2>
              <p>
                The Site is provided “as is”. Chatbot Builder and its suppliers
                and licensors hereby disclaim all warranties of any kind,
                express or implied, including, without limitation, the
                warranties of merchantability, fitness for a particular purpose
                and non-infringement. Neither Chatbot Builder nor its suppliers
                and licensors, makes any warranty that the Site will be error
                free or that access thereto will be continuous or uninterrupted.
                You understand that you download from, or otherwise obtain
                content or services through, the Site at your own discretion and
                risk.
              </p>
            </div>
            <div className="terms-conditions-para">
              <h2>LIMITATION OF LIABILITY</h2>
              <p>
                In no event will Chatbot Builder, or its suppliers or licensors,
                be liable with respect to any subject matter of this agreement
                under any contract, negligence, strict liability or other legal
                or equitable theory for: (i) any special, incidental or
                consequential damages; (ii) the cost of procurement for
                substitute products or services; (iii) for interruption of use
                or loss or corruption of data; or (iv) for any amounts that
                exceed the fees paid by you to Chatbot Builder under this
                agreement during the twelve (12) month period prior to the cause
                of action. Chatbot Builder shall have no liability for any
                failure or delay due to matters beyond their reasonable control.
                The foregoing shall not apply to the extent prohibited by
                applicable law.
              </p>
            </div>
            <div className="terms-conditions-para">
              <h2>GENERAL REPRESENTATION AND WARRANTY</h2>
              <p>
                You represent and warrant that (i) your use of the Site will be
                in strict accordance with the privacy section, with this
                Agreement and with all applicable laws and regulations
                (including without limitation any local laws or regulations in
                your country, state, city, or other governmental area, regarding
                online conduct and acceptable content, and including all
                applicable laws regarding the transmission of technical data
                exported from the United States or the country in which you
                reside) and (ii) your use of the Site will not infringe or
                misappropriate the intellectual property rights of any third
                party.
              </p>
            </div>
            <div className="terms-conditions-para">
              <h2>INDEMNIFICATION</h2>
              <p>
                You agree to indemnify and hold harmless Chatbot Builder, its
                contractors, and its licensors, and their respective directors,
                officers, employees and agents from and against any and all
                claims and expenses, including attorneys’ fees, arising out of
                your use of the Site, including but not limited to your
                violation of this Agreement.
              </p>
            </div>
            <div className="terms-conditions-para">
              <h2>THIS IS A BINDING AGREEMENT</h2>
              <p>
                By accessing or using any part of the web site, you agree to
                become bound by the terms and conditions of this agreement. If
                you do not agree to all the terms and conditions of this
                agreement, then you may not access the Site or use any services.
                If these terms and conditions are considered an offer by Chatbot
                Builder, acceptance is expressly limited to these terms.
              </p>
            </div>
            <div className="terms-conditions-para">
              <h2>WE CAN CHANGE OUR SERVICES</h2>
              <p>
                We may change any aspect of the service we want, or even stop
                it, at any time without giving you notice. We can also terminate
                or restrict access to it at any time, in our sole discretion.
                Termination of your access and use of Chatbot Builder Services
                shall not relieve you of any obligations arising or accruing
                before the termination.
              </p>
            </div>
            <div className="terms-conditions-para">
              <h2>FEES, PAYMENTS & CANCELLATION POLICY</h2>
              <p>
                You agree to pay for the Services you use on the Chatbot Builder
                Site in accordance the pricing and payment terms presented to
                you for that service. Fees paid by you are non-refundable.
                <br /> <br />
                For subscriptions, you will be billed in advance on a recurring
                cycle for the period you have selected (monthly or annually or
                quarterly) at the beginning of that period. Your subscription
                will automatically renew at the end of each period unless you
                cancel automatic renewal at least 48 hours before your next
                renewal date.
                <br /> <br />
                Chatbot Builder may change the fees charged for Services at any
                time, provided that, for subscription Services, the change will
                become effective only upon the next renewal date.
              </p>
            </div>
            <div className="terms-conditions-para">
              <h2>CANCELLATION POLICY</h2>
              <p>
                Your subscription will automatically renew at the end of each
                period unless you cancel automatic renewal at least 48 hours
                before your next renewal date. If you decide to cancel, no
                refund will be provided for fees paid or past bills and your
                service will remain active through the end of the existing
                license period. <br /> <br />
                At the end of the license period, you will no longer be charged.
                If you cancel within 48 hours of your next renewal date, the
                next renewal will go through but that will be your last renewal
                and the cancellation will take effect on the following renewal
                as it is required that you cancel at least 48 hours prior to the
                renewal date. Note: The length of your license can be longer
                than your billing period for example an annual license, billed
                semi-annually would mean that a cancellation on month 4 will
                take effect at the end of the annual license and the second
                semiannual bill on month 6 will continue as well as the
                remaining 8 months of the subscription. <br /> <br />
                If you cancel your Chatbot Builder account, you will lose access
                to your Chatbot Builder account and will no longer be able to
                edit, modify or access the builder, integrations, embed tab, or
                any analytics information.
              </p>
            </div>
            <div className="terms-conditions-para">
              <h2>UPGRADES</h2>
              <p>
                An upgrade is when a paying customer decides to change their
                current plan to a more expensive paid plan. <br /> <br />
                When upgrading in the middle of a billing period, you will be
                given a pro-rated credit (not a refund) for the current plan
                which will be applied to the pro-rated charges for the upgraded
                plan. At the end of the billing period, the upgraded plan will
                auto-renew.
              </p>
            </div>
            <div className="terms-conditions-para">
              <h2>DOWNGRADES</h2>
              <p>
                A downgrade is when a paying customer chooses to change their
                plan from a more expensive to a less expensive (but still paid)
                plan.
                <br /> <br />
                When downgrading in the middle of a billing period, your account
                downgrade will apply at the end of the period and to the
                following period but will not impact the existing billing
                period.
              </p>
            </div>
            <div className="terms-conditions-para">
              <h2>MISCELLANEOUS</h2>
              <p>
                This Agreement constitutes the entire agreement between Chatbot
                Builder and you concerning the subject matter hereof, and they
                may only be modified by a written amendment signed by an
                authorized executive of Chatbot Builder, or by the posting by
                Chatbot Builder of a revised version. Except to the extent
                applicable law, if any, provides otherwise, this Agreement, any
                access to or use of the Site will be governed by the laws of the
                state of Delaware, U.S.A. Except for claims for injunctive or
                equitable relief or claims regarding intellectual property
                rights (which may be brought in any competent court without the
                posting of a bond), any dispute arising under this Agreement
                shall be finally settled in accordance with the Comprehensive
                Arbitration Rules of the Judicial Arbitration and Mediation
                Service, Inc. (“JAMS”) by three arbitrators appointed in
                accordance with such Rules. The arbitration shall take place in
                Delaware, in the English language and the arbitral decision may
                be enforced in any court. The prevailing party in any action or
                proceeding to enforce this Agreement shall be entitled to costs
                and attorneys’ fees. If any part of this Agreement is held
                invalid or unenforceable, that part will be construed to reflect
                the parties’ original intent, and the remaining portions will
                remain in full force and effect. A waiver by either party of any
                term or condition of this Agreement or any breach thereof, in
                any one instance, will not waive such term or condition or any
                subsequent breach thereof. You may assign your rights under this
                Agreement to any party that consents to, and agrees to be bound
                by, its terms and conditions; Chatbot Builder may assign its
                rights under this Agreement without condition. This Agreement
                will be binding upon and will inure to the benefit of the
                parties, their successors and permitted assigns.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
      <SubFooter />
    </>
  );
};

export default terms_conditions;
