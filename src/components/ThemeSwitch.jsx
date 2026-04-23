"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from '@gravity-ui/icons'
import { Switch } from "@heroui/react";

export function ThemeSwitch() {
    const { resolvedTheme, setTheme } = useTheme();

    const icons = {
        darkMode: {
            off: Moon,
            on: Sun,
            selectedControlClass: "",
        }
    };

    const isDark = resolvedTheme === "dark";

    return (
        <div className="flex gap-3">
            {Object.entries(icons).map(([key, value]) => (
                <Switch
                    aria-label="Toggle theme"
                    isSelected={isDark}
                    key={key}
                    onValueChange={(selected) => setTheme(selected ? "dark" : "light")}
                    size="lg"
                >
                    {({ isSelected }) => (
                        <>
                            <Switch.Control className={isSelected ? value.selectedControlClass : ""}>
                                <Switch.Thumb>
                                    <Switch.Icon>
                                        {isSelected ? (
                                            <value.on className="size-3 text-inherit opacity-100" />
                                        ) : (
                                            <value.off className="size-3 text-inherit opacity-70" />
                                        )}
                                    </Switch.Icon>
                                </Switch.Thumb>
                            </Switch.Control>
                        </>
                    )}
                </Switch>
            ))}
        </div>
    );
}
