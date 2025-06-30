
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, Send, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const newsletterSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
});

type NewsletterFormData = z.infer<typeof newsletterSchema>;

const NewsletterSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema)
  });

  const onSubmit = async (data: NewsletterFormData) => {
    setIsSubmitting(true);
    
    // Generate unique request ID for tracking
    const requestId = `newsletter_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    const webhookPayload = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      timestamp: new Date().toISOString(),
      source: 'newsletter_signup',
      url: window.location.href,
      user_agent: navigator.userAgent,
      request_id: requestId,
    };

    console.log('=== NEWSLETTER WEBHOOK REQUEST START ===');
    console.log('Request ID:', requestId);
    console.log('Webhook URL:', 'https://automation.syneticai.com/webhook/Lovable_news');
    console.log('Payload:', webhookPayload);
    console.log('Request timestamp:', new Date().toISOString());

    try {
      const startTime = Date.now();
      
      const response = await fetch('https://automation.syneticai.com/webhook/Lovable_news', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': 'Lovable-Newsletter/1.0',
          'X-Request-ID': requestId,
          'Accept': 'application/json',
        },
        body: JSON.stringify(webhookPayload),
        signal: AbortSignal.timeout(30000), // 30 second timeout
      });

      const endTime = Date.now();
      const responseTime = endTime - startTime;

      console.log('=== NEWSLETTER WEBHOOK RESPONSE ===');
      console.log('Response status:', response.status);
      console.log('Response headers:', Object.fromEntries(response.headers.entries()));
      console.log('Response time:', responseTime + 'ms');
      console.log('Response OK:', response.ok);

      let responseData;
      try {
        responseData = await response.text();
        console.log('Response body:', responseData);
        
        // Try to parse as JSON if possible
        try {
          responseData = JSON.parse(responseData);
          console.log('Parsed response data:', responseData);
        } catch (e) {
          console.log('Response is not JSON, keeping as text');
        }
      } catch (e) {
        console.log('Could not read response body:', e);
      }

      if (response.ok) {
        console.log('✅ Newsletter webhook sent successfully');
        toast({
          title: "Welcome to our AI newsletter!",
          description: "You'll receive your first update within the next few days. Thank you for joining!",
        });
        reset();
      } else {
        console.error('❌ Newsletter webhook failed with status:', response.status);
        throw new Error(`Newsletter webhook failed with status: ${response.status} - ${response.statusText}`);
      }
    } catch (error) {
      console.log('=== NEWSLETTER WEBHOOK ERROR ===');
      console.error('Error details:', error);
      console.error('Error name:', error.name);
      console.error('Error message:', error.message);
      
      let errorMessage = "There was an issue subscribing you to our newsletter. Please try again.";
      
      if (error.name === 'AbortError') {
        errorMessage = "Request timed out. Please check your connection and try again.";
        console.error('Newsletter request timed out after 30 seconds');
      } else if (error.message.includes('Failed to fetch')) {
        errorMessage = "Network error. Please check your connection and try again.";
        console.error('Newsletter network/CORS error detected');
      }
      
      toast({
        title: "Subscription Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      console.log('=== NEWSLETTER WEBHOOK REQUEST END ===');
      setIsSubmitting(false);
    }
  };

  return (
    <section id="newsletter" className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-cosmic-gold/10 rounded-full blur-3xl animate-pulse-subtle opacity-30"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-cosmic-white/5 rounded-full blur-3xl animate-gentle-float opacity-40"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="section-divider mb-16"></div>
          
          <div className="inline-flex items-center justify-center w-20 h-20 bg-cosmic-gold/20 border border-cosmic-gold/40 rounded-full mb-8 scroll-fade-in">
            <Mail className="w-10 h-10 text-cosmic-gold" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-heading font-light mb-8 text-cosmic-gold text-glow-premium scroll-fade-in typing-animation-enhanced">
            Join Our AI Newsletter
          </h2>
          
          <div className="mb-12 scroll-fade-in stagger-1">
            <p className="text-xl md:text-2xl text-cosmic-white leading-relaxed font-light tracking-wide max-w-3xl mx-auto">
              Discover useful AI updates, breakthrough tools to try, practical use cases, and strategies that actually work.
            </p>
          </div>
        </div>

        <div className="elite-glass-card-3d p-8 md:p-12 scroll-fade-in stagger-2">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-cosmic-white/90 text-base">
                  First Name
                </Label>
                <Input
                  id="firstName"
                  {...register('firstName')}
                  className="bg-cosmic-black/40 border-cosmic-gold/40 text-cosmic-gold placeholder:text-cosmic-gold/50 focus:border-cosmic-gold focus:text-cosmic-gold transition-all duration-300 h-12 text-base"
                  placeholder="John"
                />
                {errors.firstName && (
                  <p className="text-red-400 text-sm">{errors.firstName.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-cosmic-white/90 text-base">
                  Last Name
                </Label>
                <Input
                  id="lastName"
                  {...register('lastName')}
                  className="bg-cosmic-black/40 border-cosmic-gold/40 text-cosmic-gold placeholder:text-cosmic-gold/50 focus:border-cosmic-gold focus:text-cosmic-gold transition-all duration-300 h-12 text-base"
                  placeholder="Doe"
                />
                {errors.lastName && (
                  <p className="text-red-400 text-sm">{errors.lastName.message}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-cosmic-white/90 text-base">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                {...register('email')}
                className="bg-cosmic-black/40 border-cosmic-gold/40 text-cosmic-gold placeholder:text-cosmic-gold/50 focus:border-cosmic-gold focus:text-cosmic-gold transition-all duration-300 h-12 text-base"
                placeholder="john@yourcompany.com"
              />
              {errors.email && (
                <p className="text-red-400 text-sm">{errors.email.message}</p>
              )}
            </div>

            <div className="text-center pt-4">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="elite-cta-button-hero-mobile text-lg font-medium group relative min-w-[220px] h-16 px-12 md:px-16"
              >
                <span className="relative z-10 inline-flex items-center font-medium tracking-wide">
                  {isSubmitting ? (
                    <>
                      <Sparkles className="mr-3 w-5 h-5 animate-spin" />
                      Subscribing...
                    </>
                  ) : (
                    <>
                      Subscribe Now
                      <Send className="ml-3 w-5 h-5 transition-transform duration-500 group-hover:translate-x-1 group-hover:scale-110" />
                    </>
                  )}
                </span>
                <div className="cta-sonar-rings"></div>
              </Button>
            </div>
          </form>

          <div className="mt-8 text-center">
            <p className="text-cosmic-white/60 text-sm tracking-wider">
              No spam. Unsubscribe anytime. We respect your inbox.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center scroll-fade-in stagger-3">
          <div className="flex flex-wrap justify-center gap-8 text-cosmic-white/70 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-cosmic-gold/60 rounded-full"></div>
              <span>Twice weekly updates</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-cosmic-gold/60 rounded-full"></div>
              <span>Practical AI tools</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-cosmic-gold/60 rounded-full"></div>
              <span>Real business cases</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
