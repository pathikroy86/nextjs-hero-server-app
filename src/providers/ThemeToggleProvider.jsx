"use client";

import { ThemeProvider } from "next-themes";

const ThemeToggleProvider = ({ children }) => {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            disableTransitionOnChange
            enableSystem={false}
        >
            {children}
        </ThemeProvider>
    );
};

export default ThemeToggleProvider;
