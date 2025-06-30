import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useNavigate } from 'react-router-dom';
import { X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import OptimizedBackground from '../components/OptimizedBackground';
import AnimatedBackground from '../components/AnimatedBackground';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().min(2, 'Company name must be at least 2 characters'),
  industry: z.string().min(1, 'Please select an industry'),
  notes: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

const industries = [
  'Technology',
  'Healthcare',
  'Finance',
  'Manufacturing',
  'Retail',
  'Education',
  'Real Estate',
  'Legal',
  'Consulting',
  'Marketing',
  'Other'
];

const WEBHOOK_URL = 'https://automation.syneticai.com/webhook/lovable_values';

const ContactForm = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    const webhookPayload = {
      ...data,
      timestamp: new Date().toISOString(),
      source: 'lovable_contact_form',
      url: window.location.href,
      user_agent: navigator.userAgent,
    };

    console.log('Sending webhook payload:', webhookPayload);
    
    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(webhookPayload),
      });

      if (response.ok) {
        console.log('Webhook sent successfully');
        toast({
          title: "Success!",
          description: "We've received your information and will be in touch within 24 hours.",
        });
        
        reset();
        
        // Navigate back to home after a short delay
        setTimeout(() => {
          navigate('/');
        }, 2000);
      } else {
        throw new Error(`Webhook failed with status: ${response.status}`);
      }
    } catch (error) {
      console.error('Webhook error:', error);
      toast({
        title: "Submission Error",
        description: "There was an issue submitting your form. Please try again or contact us directly at team@syneticai.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      navigate('/');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Blurred Background */}
      <div className="absolute inset-0">
        <OptimizedBackground />
        <AnimatedBackground />
        <div className="absolute inset-0 backdrop-blur-lg bg-cosmic-black/60"></div>
      </div>
      
      {/* Overlay backdrop that can be clicked to close */}
      <div 
        className="absolute inset-0 cursor-pointer"
        onClick={handleBackdropClick}
      />

      {/* Modal Content */}
      <div className="relative z-10 w-full max-w-2xl mx-4 animate-scale-in">
        <Card className="glass-nav border-cosmic-gold/30 shadow-2xl backdrop-blur-xl bg-cosmic-black/90">
          <CardHeader className="text-center relative">
            {/* Close button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate('/')}
              className="absolute top-4 right-4 text-cosmic-white/70 hover:text-cosmic-gold transition-colors"
            >
              <X className="w-5 h-5" />
            </Button>

            <CardTitle className="text-3xl font-heading font-light text-cosmic-gold text-glow-premium">
              Get Started
            </CardTitle>
            <p className="text-cosmic-white/80 mt-4">
              Tell us about your business and we'll show you how automation can transform your operations.
            </p>
          </CardHeader>
          
          <CardContent className="space-y-6 max-h-[70vh] overflow-y-auto">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-cosmic-white/90">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    {...register('name')}
                    className="bg-cosmic-black/40 border-cosmic-gold/40 text-cosmic-gold placeholder:text-cosmic-gold/50 focus:border-cosmic-gold focus:text-cosmic-gold transition-all duration-300"
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm">{errors.name.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-cosmic-white/90">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    {...register('email')}
                    className="bg-cosmic-black/40 border-cosmic-gold/40 text-cosmic-gold placeholder:text-cosmic-gold/50 focus:border-cosmic-gold focus:text-cosmic-gold transition-all duration-300"
                    placeholder="john@company.com"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-cosmic-white/90">
                    Company Name *
                  </Label>
                  <Input
                    id="company"
                    {...register('company')}
                    className="bg-cosmic-black/40 border-cosmic-gold/40 text-cosmic-gold placeholder:text-cosmic-gold/50 focus:border-cosmic-gold focus:text-cosmic-gold transition-all duration-300"
                    placeholder="Your Company"
                  />
                  {errors.company && (
                    <p className="text-red-400 text-sm">{errors.company.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="industry" className="text-cosmic-white/90">
                    Industry *
                  </Label>
                  <select
                    id="industry"
                    {...register('industry')}
                    className="flex h-10 w-full rounded-md border border-cosmic-gold/40 bg-cosmic-black/40 px-3 py-2 text-cosmic-gold focus:border-cosmic-gold focus:outline-none transition-all duration-300"
                  >
                    <option value="" className="bg-cosmic-black text-cosmic-gold">Select Industry</option>
                    {industries.map((industry) => (
                      <option key={industry} value={industry} className="bg-cosmic-black text-cosmic-gold">
                        {industry}
                      </option>
                    ))}
                  </select>
                  {errors.industry && (
                    <p className="text-red-400 text-sm">{errors.industry.message}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes" className="text-cosmic-white/90">
                  Additional Notes
                </Label>
                <Textarea
                  id="notes"
                  {...register('notes')}
                  rows={4}
                  className="bg-cosmic-black/40 border-cosmic-gold/40 text-cosmic-gold placeholder:text-cosmic-gold/50 focus:border-cosmic-gold focus:text-cosmic-gold resize-none transition-all duration-300"
                  placeholder="Tell us about your current challenges, goals, or any specific automation needs..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-cosmic-gold/20 border border-cosmic-gold/50 text-cosmic-gold hover:bg-cosmic-gold hover:text-cosmic-black transition-all duration-300 text-lg font-medium py-3 backdrop-blur-sm"
              >
                <span className="relative z-10 inline-flex items-center">
                  {isSubmitting ? 'Submitting...' : 'Submit Request'}
                  {!isSubmitting && <Send className="ml-2 w-5 h-5" />}
                </span>
              </Button>
            </form>

            <div className="text-center text-cosmic-white/60 text-sm">
              We'll respond within 24 hours with a personalized consultation
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContactForm;
