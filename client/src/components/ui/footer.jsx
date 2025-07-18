// src/components/Footer.jsx
import React from 'react';

const Footer = ({ companyName, links}) => {
  const currentYear = new Date().getFullYear();
    const footerLinks = [
    {
      title: 'Quick Links',
      links: [
        { label: 'About Us', url: '/about' },
        { label: 'Categories', url: '/categories' },
        { label: 'Contact Us', url: '/contact' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', url: '/privacy' },
        { label: 'Terms of Service', url: '/terms' },
        { label: 'Cookie Policy', url: '/cookies' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Twitter', url: 'https://twitter.com' },
    { name: 'Facebook', url: 'https://facebook.com' },
    { name: 'Instagram', url: 'https://instagram.com' }
  ];
  return (
    <footer className="bg-blue-300 text-gray-800 p-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">{companyName || 'MyBlog'}</h2>
            <p className="text-sm text-gray-600">
              © {currentYear} {companyName || 'MyBlog'}. All rights reserved.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            {footerLinks?.map((section, index) => (
              <div key={index} className="flex flex-col">
                <h3 className="font-semibold mb-2">{section.title}</h3>
                {section.links.map((link, linkIndex) => (
                  <a 
                    key={linkIndex} 
                    href={link.url} 
                    className="text-gray-300 hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            ))}

              <div className="flex flex-col">
                <h3 className="font-semibold mb-2">Connect</h3>
                {socialLinks.map((social, index) => (
                  <a 
                    key={index} 
                    href={social.url} 
                    className="text-gray-300 hover:text-white"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;