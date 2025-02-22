import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import React from "react";

function ContactIconLink({ href, children }: React.ComponentProps<"a">) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-4 flex items-center justify-center text-primary relative before:absolute before:bottom-0 before:w-full before:h-0 before:duration-100 before:bg-primary before:-z-10 hover:text-white hover:before:h-full duration-100"
    >
      {children}
    </a>
  );
}

export default function Contact(props: React.ComponentProps<"div">) {
  return (
    <div className={`flex flex-wrap w-full ${props.className}`}>
      <ContactIconLink href="https://github.com/Acors24">
        <GitHubLogoIcon className="md:w-20 md:h-20 w-16 h-16" />
      </ContactIconLink>
      <ContactIconLink href="https://www.linkedin.com/in/oskar-kropielnicki-1b662730a/">
        <LinkedInLogoIcon className="md:w-20 md:h-20 w-16 h-16" />
      </ContactIconLink>
      <ContactIconLink href="mailto:kropelky@gmail.com">
        <EnvelopeClosedIcon className="md:w-20 md:h-20 w-16 h-16" />
      </ContactIconLink>
    </div>
  );
}
