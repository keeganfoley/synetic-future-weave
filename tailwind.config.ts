
import type { Config } from "tailwindcss";

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
					black: '#020202',
					gold: '#DAA520',
					'gold-bright': '#FFD700',
					'gold-dark': '#B8860B',
					'deep-black': '#010101',
					charcoal: '#060608',
					white: '#DCDCDC',
					steel: '#DCDCDC'
				}
			},
			fontFamily: {
				'heading': ['Playfair Display', 'DM Serif Display', 'serif'],
				'body': ['Playfair Display', 'Inter', 'system-ui', 'serif'],
				'luxury': ['Playfair Display', 'serif'],
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
				'celestial-emergence': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.95) translateY(20px)',
						filter: 'blur(10px)'
					},
					'40%': {
						opacity: '0.6',
						filter: 'blur(5px)'
					},
					'70%': {
						opacity: '0.9',
						transform: 'scale(1.02) translateY(-5px)',
						filter: 'blur(2px)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1) translateY(0)',
						filter: 'blur(0px)'
					}
				},
				'golden-shimmer': {
					'0%, 100%': {
						backgroundPosition: '0% 50%',
						filter: 'brightness(1.1)'
					},
					'25%': {
						backgroundPosition: '50% 25%',
						filter: 'brightness(1.3)'
					},
					'50%': {
						backgroundPosition: '100% 50%',
						filter: 'brightness(1.5)'
					},
					'75%': {
						backgroundPosition: '50% 75%',
						filter: 'brightness(1.2)'
					}
				},
				'luxury-hover-glow': {
					'0%': {
						boxShadow: '0 0 0 rgba(218, 165, 32, 0)',
						transform: 'translateY(0)'
					},
					'100%': {
						boxShadow: '0 8px 32px rgba(218, 165, 32, 0.4)',
						transform: 'translateY(-3px)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'celestial-load': 'celestial-emergence 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
				'golden-shimmer': 'golden-shimmer 8s ease-in-out infinite',
				'luxury-hover': 'luxury-hover-glow 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
