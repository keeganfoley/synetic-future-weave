import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				cosmic: {
					black: '#1a1a1a',
					gold: '#c9a961',
					'deep-black': '#0e0e0e',
					charcoal: '#222222',
					'charcoal-light': '#2a2a2a',
					'charcoal-dark': '#1a1a1a',
					white: '#eeeeee',
					cream: '#FAF7F0',
					ivory: '#FFFEF7'
				}
			},
			fontFamily: {
				'heading': ['Playfair Display', 'DM Serif Display', 'serif'],
				'body': ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
				'mono': ['Space Grotesk', 'monospace']
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'gentle-float': {
					'0%, 100%': {
						transform: 'translateY(0px) translateX(0px)'
					},
					'33%': {
						transform: 'translateY(-8px) translateX(4px)'
					},
					'66%': {
						transform: 'translateY(4px) translateX(-6px)'
					}
				},
				'pulse-subtle': {
					'0%, 100%': {
						opacity: '0.8'
					},
					'50%': {
						opacity: '1'
					}
				},
				'fade-in-up': {
					'0%': {
						transform: 'translateY(40px)',
						opacity: '0'
					},
					'100%': {
						transform: 'translateY(0)',
						opacity: '1'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0'
					},
					'100%': {
						opacity: '1'
					}
				},
				'fade-in-left': {
					'0%': {
						transform: 'translateX(-30px)',
						opacity: '0'
					},
					'100%': {
						transform: 'translateX(0)',
						opacity: '1'
					}
				},
				'fade-in-right': {
					'0%': {
						transform: 'translateX(30px)',
						opacity: '0'
					},
					'100%': {
						transform: 'translateX(0)',
						opacity: '1'
					}
				},
				'underline-reveal': {
					'0%': {
						width: '0%'
					},
					'100%': {
						width: '100%'
					}
				},
				'orbital-line': {
					'0%': {
						transform: 'rotate(0deg) translateX(200px) rotate(0deg)'
					},
					'100%': {
						transform: 'rotate(360deg) translateX(200px) rotate(-360deg)'
					}
				},
				'slide-beam': {
					'0%': {
						transform: 'translateX(-150px)',
						opacity: '0'
					},
					'50%': {
						transform: 'translateX(0px)',
						opacity: '1'
					},
					'100%': {
						transform: 'translateX(150px)',
						opacity: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'gentle-float': 'gentle-float 12s ease-in-out infinite',
				'pulse-subtle': 'pulse-subtle 4s ease-in-out infinite',
				'fade-in-up': 'fade-in-up 0.8s ease-out',
				'fade-in': 'fade-in 0.8s ease-out',
				'fade-in-left': 'fade-in-left 0.8s ease-out',
				'fade-in-right': 'fade-in-right 0.8s ease-out',
				'underline-reveal': 'underline-reveal 1.2s ease-out',
				'orbital-line': 'orbital-line 30s linear infinite',
				'slide-beam': 'slide-beam 4s ease-in-out infinite'
			}
		}
	},
	plugins: [tailwindcssAnimate],
} satisfies Config;
