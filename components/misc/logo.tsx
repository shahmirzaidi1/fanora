"use client";
// components/Logo.tsx
import Link from 'next/link';
import { Lobster } from 'next/font/google'; // Corrected import name and removed unused fonts


// Initialize the Major Mono Display font
const majorMonoDisplay = Lobster({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
});

// Define the props for the Logo component
interface LogoProps {
    size?: string;
    href?: string;
    className?: string;
    color?: string;
}

/**
 * ViewfinderLogo component.
 * Displays the "Viewfinder" text as a link, styled with the Major Mono Display font.
 * Adjusts color based on the current theme, preventing hydration errors.
 */
const Logo: React.FC<LogoProps> = ({
    size = '2rem',
    href = '/',
    className = '',
    /* color = 'inherit',  */// Default color can be overridden
}) => {

    // useEffect to set mounted to true after hydration
    

    // Determine the color based on the resolved theme AFTER hydration

    // If you strictly want the system theme before mount,
    // or a consistent SSR color, you could also do:
    // const textColor = resolvedTheme === 'light' ? 'black' : 'white';
    // And apply a `key` prop to the span if still getting hydration errors,
    // or use `mounted &&` for the span directly, but the current approach
    // with a fallback color during SSR is generally safer.

    return (
        <Link href={href} passHref>
            <span
                className={`${majorMonoDisplay.className} ${className} transition-opacity hover:opacity-80 text-[#0062ff]`} // Use the Lobster font class and apply a transition for hover effect
                style={{
                    fontSize: size,
                    /* color: "#0c5eda", */ // Use the dynamically determined color
                    lineHeight: 1,
                    textDecoration: 'none',
                }}
            >
                Fanora
            </span>
        </Link>
    );
};

export default Logo;