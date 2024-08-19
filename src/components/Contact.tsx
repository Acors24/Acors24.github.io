import {
    EnvelopeClosedIcon,
    GitHubLogoIcon,
    LinkedInLogoIcon,
} from "@radix-ui/react-icons";

function ContactIconLink({
    href,
    children,
}: Readonly<{ href: string; children: React.ReactNode }>) {
    return (
        <a
            href={href}
            className="flex items-center justify-center text-primary relative before:absolute before:bottom-0 before:w-full before:h-0 before:duration-100 before:bg-primary before:-z-10 hover:text-white hover:before:h-full duration-100"
        >
            {children}
        </a>
    );
}

export default function Contact() {
    return (
        <div className="flex">
            <ContactIconLink href="https://github.com/Acors24">
                <GitHubLogoIcon className="w-20 h-20 xl:m-10 m-4" />
            </ContactIconLink>
            <ContactIconLink href="https://www.linkedin.com/in/oskar-kropielnicki-1b662730a/">
                <LinkedInLogoIcon className="w-20 h-20 xl:m-10 m-4" />
            </ContactIconLink>
            <ContactIconLink href="mailto:kropelky@gmail.com">
                <EnvelopeClosedIcon className="w-20 h-20 xl:m-10 m-4" />
            </ContactIconLink>
        </div>
    );
}
