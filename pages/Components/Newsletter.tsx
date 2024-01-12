import { useState } from "react";

const Newsletter = () => {
  const [userEmail, setUserEmail] = useState<any>();

  const url = `https://app.chatbotbuilder.net/register?email=${userEmail}`;

  const handleSignup = (e: any) => {
    e.preventDefault();
    if (!userEmail) {
      window.location.replace(`https://app.chatbotbuilder.net/register`);
      return;
    }
    window.location.replace(url);
  };

    return (
        <div className="newsletter-section" id="contact-us">
        <div className="newsletter-container">
          <div className="newsletter-inner">
            <h3 className="nws-heading text-center">Subscribe our Newsletter</h3>
            <p className="nws-desc text-center">
              Be the first one to know about discounts, offers and events weekly in your mailbox. Unsubscribe whenever you like with one click.
            </p>
            <div className="sign-up-email">
                  <svg
                    width="14"
                    height="12"
                    viewBox="0 0 14 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.6 3.08268L7 6.72852L1.4 3.08268V1.62435L7 5.27018L12.6 1.62435V3.08268ZM12.6 0.166016H1.4C0.623 0.166016 0 0.814974 0 1.62435V10.3743C0 10.7611 0.1475 11.1321 0.41005 11.4055C0.672601 11.679 1.0287 11.8327 1.4 11.8327H12.6C12.9713 11.8327 13.3274 11.679 13.5899 11.4055C13.8525 11.1321 14 10.7611 14 10.3743V1.62435C14 1.23757 13.8525 0.866642 13.5899 0.593152C13.3274 0.319661 12.9713 0.166016 12.6 0.166016Z"
                      fill="#B9B9B9"
                    />
                  </svg>
                  <form onSubmit={handleSignup}>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      onChange={(e) => setUserEmail(e.target.value)}
                    />
                    <button onClick={handleSignup}>Get Started</button>
                  </form>
                </div>
          </div>
        </div>
      </div>
    )
}

export default Newsletter